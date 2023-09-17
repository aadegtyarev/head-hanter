const db = require("../db");

class ResponseController {
  async createResponse(req, res) {
    const { name } = req.body;

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
            result, 
            closed, 
            job_id, 
            user_id, 
            created_timestamp
                    ) 
                values(
                    $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, now()
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
          result,
          closed,
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
    try {
      const { limit, offset, search } = req.query;
      const searchText = "%" + search + "%";

      const responses = await db.query(
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
        jobs.job_title
        FROM responses

        LEFT OUTER JOIN jobs ON responses.job_id=jobs.id

      WHERE LOWER(applicant_name) LIKE LOWER($1) ORDER BY id DESC LIMIT $2 OFFSET $3`,
        [searchText, limit, offset]
      );
      res.json(responses.rows);
    } catch (error) {
      res.json(error + db.query.text);
    }
  }

  async getOneResponse(req, res) {
    const id = req.query.id;

    try {
      const response = await db.query(`SELECT * FROM responses WHERE id=$1`, [
        id,
      ]);
      res.json(response.rows[0]);
    } catch (error) {
      res.json(error + db.query.text);
    }
  }

  async updateResponse(req, res) {
    const { id, name } = req.body;

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
            closed = $10,
            job_id = $11,
            user_id = $12,
                WHERE id = $13 RETURNING *`,
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
          closed,
          job_id,
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
