const db = require("../db");

class ResponseController {
  async createResponse(req, res) {
    res.header("Access-Control-Allow-Origin", "*");

    const {
      applicant_name,
      email,
      resume_url,
      education,
      experience,
      salary_desired,
      questionnaire_result,
      description,
      result,
      job_id,
      user_id,
    } = req.body;

    try {
      const newResponse = await db.query(
        `INSERT INTO responses (
            applicant_name, 
            email, 
            resume_url, 
            education, 
            experience, 
            salary_desired, 
            questionnaire_result, 
            description,          
            job_id, 
            user_id,
            closed,  
            created_timestamp
                    ) 
                values(
                    $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, false, now()
                    ) RETURNING *`,
        [
          applicant_name,
          email,
          resume_url,
          education,
          experience,
          salary_desired,
          questionnaire_result,
          description,
          job_id,
          user_id,
        ]
      );

      res.json(newResponse.rows[0]);
    } catch (error) {
      res.json(error + db.query.text);
    }
  }

  async getResponses(req, res) {
    res.header("Access-Control-Allow-Origin", "*");

    try {
      const { limit, offset, search, job_id } = req.query;
      const searchText = "%" + search + "%";
      var queryText = "";

      if (job_id > 0) {
        queryText = `SELECT
        responses.id,
        responses.applicant_name,
        responses.email,
        responses.resume_url,
        responses.education,
        responses.experience,
        responses.salary_desired,
        responses.questionnaire_result,
        responses.description,
        responses.result,
        responses.closed,
        responses.job_id,
        responses.user_id,
        responses.created_timestamp,
        jobs.job_title as job_title,
        interviews.id as interview_id
        FROM responses

        LEFT OUTER JOIN jobs ON responses.job_id=jobs.id
        LEFT OUTER JOIN interviews ON responses.job_id=interviews.id

        WHERE
        (LOWER(applicant_name) LIKE LOWER('${searchText}')
        OR LOWER(job_title) LIKE LOWER('${searchText}'))
        AND jobs.id = ${job_id}

        ORDER BY id DESC LIMIT ${limit} OFFSET ${offset}`;
      } else {
        queryText = `SELECT
        responses.id,
        responses.applicant_name,
        responses.email,
        responses.resume_url,
        responses.education,
        responses.experience,
        responses.salary_desired,
        responses.questionnaire_result,
        responses.description,
        responses.result,
        responses.closed,
        responses.job_id,
        responses.user_id,
        responses.created_timestamp,
        jobs.job_title as job_title,
        interviews.id as interview_id
        FROM responses

        LEFT OUTER JOIN jobs ON responses.job_id=jobs.id
        LEFT OUTER JOIN interviews ON responses.id=interviews.response_id

        WHERE
        LOWER(applicant_name) LIKE LOWER('${searchText}')
        OR LOWER(job_title) LIKE LOWER('${searchText}')

        ORDER BY id DESC LIMIT ${limit} OFFSET ${offset}`;
      }

      const responses = await db.query(queryText);
      res.json(responses.rows);
    } catch (error) {
      res.json(error + db.query.text);
    }
  }

  async getOneResponse(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    const id = req.query.id;

    try {
      const response = await db.query(
        `SELECT 
      responses.id,
      responses.applicant_name,
      responses.email,
      responses.resume_url,
      responses.education,
      responses.experience,
      responses.salary_desired,
      responses.questionnaire_result,
      responses.description,
      responses.result,
      responses.closed,
      responses.job_id,
      responses.user_id,
      responses.created_timestamp,
      jobs.job_title as job_title,
      interviews.id as interview_id,
      to_char(interviews.date_and_time, 'dd Mon YYYY,HH24:mi:ss') as interview_date_and_time,
      interviews.detail as interview_detail
      
      FROM responses

      LEFT OUTER JOIN jobs ON responses.job_id=jobs.id
      LEFT OUTER JOIN interviews ON responses.id=interviews.response_id
      
      WHERE responses.id=$1`,
        [id]
      );
      res.json(response.rows[0]);
    } catch (error) {
      res.json(error + db.query.text);
    }
  }

  async updateResponse(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    const {
      id,
      applicant_name,
      email,
      resume_url,
      education,
      experience,
      salary_desired,
      questionnaire_result,
      description,
      result,
      user_id,
    } = req.body;

    try {
      const response = await db.query(
        `UPDATE responses set
            applicant_name = $1,
            email = $2,
            resume_url = $3,
            education = $4,
            experience =$5,
            salary_desired = $6,
            questionnaire_result = $7,
            description = $8,
            result = $9,
            user_id = $10
        WHERE id = $11 RETURNING *`,
        [
          applicant_name,
          email,
          resume_url,
          education,
          experience,
          salary_desired,
          questionnaire_result,
          description,
          result,
          user_id,
          id,
        ]
      );
      res.json(response.rows[0]);
    } catch (error) {
      res.json(error + db.query.text);
    }
  }

  async deleteResponse(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    const id = req.query.id;

    try {
      const response = await db.query(`DELETE FROM responses WHERE id = $1`, [
        id,
      ]);
      res.json(response.rows[0]);
    } catch (error) {
      res.json(error + db.query.text);
    }
  }
}

module.exports = new ResponseController();
