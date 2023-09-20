const db = require("../db");

class InterviewController {
  async createInterview(req, res) {
    res.header("Access-Control-Allow-Origin", "*");

    const { date_and_time, job_id, response_id, detail, user_id } = req.body;

    try {
      const newInterview = await db.query(
        `INSERT INTO interviews (
            date_and_time, 
            job_id, 
            response_id, 
            detail,
            user_id,
            closed,  
            created_timestamp
                    ) 
                values(
                    $1, $2, $3, $4, $5, false, now()
                    ) RETURNING *`,
        [date_and_time, job_id, response_id, detail, user_id]
      );

      res.json(newInterview.rows[0]);
    } catch (error) {
      res.json(error + db.query.text);
    }
  }

  async getInterviews(req, res) {
    res.header("Access-Control-Allow-Origin", "*");

    try {
      const { limit, offset, search } = req.query;
      const searchText = "%" + search + "%";
      var queryText = "";

      queryText = `SELECT
        interviews.id,
        interviews.date_and_time,
        to_char(date_and_time, 'DD.MM.YYYY HH24:MI') as date_human,
        interviews.response_id,
        interviews.detail,
        interviews.job_id,
        interviews.user_id,
        interviews.interviewer_id,
        interviews.result,
        interviews.closed,
        interviews.created_timestamp,
        jobs.job_title as job_title,
        responses.applicant_name as applicant_name,
        users.name as user_name,
        interviewers.name as interviewer_name

        FROM interviews

        LEFT OUTER JOIN jobs ON interviews.job_id=jobs.id
        LEFT OUTER JOIN responses ON interviews.response_id=responses.id
        LEFT OUTER JOIN users as interviewers ON interviews.interviewer_id=interviewers.id
        LEFT OUTER JOIN users ON interviews.user_id=users.id

        WHERE
        LOWER(applicant_name) LIKE LOWER('${searchText}')
        OR LOWER(job_title) LIKE LOWER('${searchText}')
        OR LOWER(interviewers.name) LIKE LOWER('${searchText}')

        ORDER BY date_and_time ASC LIMIT ${limit} OFFSET ${offset}`;

      const interviews = await db.query(queryText);
      res.json(interviews.rows);
    } catch (error) {
      res.json(error + db.query.text);
    }
  }

  async getOneInterview(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    const id = req.query.id;

    try {
      const interview = await db.query(
        `SELECT 
            interviews.id,
            interviews.date_and_time,
            to_char(interviews.date_and_time, 'DD.MM.YYYY HH24:MI') as date_human,
            interviews.response_id,
            interviews.detail,
            interviews.job_id,
            interviews.user_id,
            CAST (interviews.interviewer_id as VARCHAR),
            interviews.result,
            interviews.closed,
            interviews.created_timestamp,
            jobs.job_title as job_title,
            jobs.test_doc_id as test_doc_id,
            responses.applicant_name as applicant_name,
            users.name as user_name,
            interviewers.name as interviewer_name
            
            FROM interviews

            LEFT OUTER JOIN jobs ON interviews.job_id=jobs.id
            LEFT OUTER JOIN responses ON interviews.response_id=responses.id
            LEFT OUTER JOIN users as interviewers ON interviews.interviewer_id=interviewers.id
            LEFT OUTER JOIN users ON interviews.user_id=users.id
      
      WHERE interviews.id=$1`,
        [id]
      );
      res.json(interview.rows[0]);
    } catch (error) {
      res.json(error + db.query.text);
    }
  }

  async updateInterview(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    const {
      date_and_time,
      job_id,
      response_id,
      detail,
      result,
      user_id,
      interviewer_id,
      id,
    } = req.body;

    try {
      const interview = await db.query(
        `UPDATE interviews set
        date_and_time = $1,
        job_id = $2,
        response_id = $3,
        detail = $4,
        user_id = $5,
        interviewer_id = $6,
        result =$7
        WHERE id = $8 RETURNING *`,
        [
          date_and_time,
          job_id,
          response_id,
          detail,
          user_id,
          interviewer_id,
          result,
          id,
        ]
      );
      res.json(interview.rows[0]);
    } catch (error) {
      res.json(error + db.query.text);
    }
  }

  async deleteInterview(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    const id = req.query.id;

    try {
      const interview = await db.query(`DELETE FROM interviews WHERE id = $1`, [
        id,
      ]);
      res.json(interview.rows[0]);
    } catch (error) {
      res.json(error + db.query.text);
    }
  }
}

module.exports = new InterviewController();
