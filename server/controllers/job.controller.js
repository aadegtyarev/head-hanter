const db = require("../db");
const bcrypt = require("bcrypt");

class JobController {
  async createJob(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    const {
      job_title,
      salary_from,
      salary_to,
      skills,
      education,
      experience,
      test_doc,
      detail,
      user_id,
    } = req.body;

    try {
      const newJob = await db.query(
        `INSERT INTO jobs (
                job_title, salary_from, salary_to, skills, education, 
                experience, test_doc, detail, user_id, closed, created_timestamp
                    ) 
                values(
                    $1, $2, $3, $4, $5, $6, $7, $8, $9, false, now()
                    ) RETURNING *`,
        [
          job_title,
          salary_from,
          salary_to,
          skills,
          education,
          experience,
          test_doc,
          detail,
          user_id,
        ]
      );
      res.json(newJob.rows[0]);
    } catch (error) {
      res.json(error + db.query.text);
    }
  }

  async getJobs(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    try {
      const { limit, offset, search } = req.query;
      const searchText = "%" + search + "%";

      const jobs = await db.query(
        `SELECT * FROM jobs WHERE LOWER(job_title) LIKE LOWER($1) ORDER BY closed ASC, id DESC LIMIT $2 OFFSET $3`,
        [searchText, limit, offset]
      );
      res.json(jobs.rows);
    } catch (error) {
      res.json(error + db.query.text);
    }
  }

  async getOneJob(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    const id = req.query.id;

    try {
      const job = await db.query(`SELECT * FROM jobs WHERE id = $1`, [id]);
      res.json(job.rows[0]);
    } catch (error) {
      res.json(error);
    }
  }

  async updateJob(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    const {
      job_title,
      salary_from,
      salary_to,
      skills,
      education,
      experience,
      test_doc,
      detail,
      closed,
      id,
    } = req.body;

    try {
      const job = await db.query(
        `UPDATE jobs set
                job_title= $1,
                salary_from= $2,
                salary_to= $3,
                skills= $4,
                education= $5,
                experience= $6,
                test_doc= $7,
                detail= $8,
                closed=$9
                WHERE id = $10 RETURNING *`,
        [
          job_title,
          salary_from,
          salary_to,
          skills,
          education,
          experience,
          test_doc,
          detail,
          closed,
          id,
        ]
      );
      res.json(job.rows[0]);
    } catch (error) {
      res.json(error);
    }
  }

  async deleteJob(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    const id = req.query.id;

    try {
      const job = await db.query(`DELETE FROM jobs WHERE id = $1`, [id]);
      res.json(job.rows[0]);
    } catch (error) {
      res.json(error);
    }
  }
}

module.exports = new JobController();
