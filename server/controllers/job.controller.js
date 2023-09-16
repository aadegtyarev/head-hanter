const db = require('../db')
const bcrypt = require("bcrypt")

class JobController {
    async createJob(req, res) {
        const { job_title, salary_from, salary_to, skills, 
            education, experience, test_doc, detail, user_id } = req.body

        try {
            const newJob = await db.query(`INSERT INTO jobs (
                job_title, salary_from, salary_to, skills, education, 
                experience, test_doc, detail, user_id, closed, created_timestamp
                    ) 
                values(
                    $1, $2, $3, $4, $5, $6, $7, $8, $9, false, now()
                    ) RETURNING *`,
                [
                    job_title, salary_from, salary_to, skills, education, 
                    experience, test_doc, detail, user_id
                ])
            res.header("Access-Control-Allow-Origin", "*");
            res.json(newJob.rows[0])
        } catch (error) {
            res.json(error+db.query.text)
        }
    }

    async getJobs(req, res) {
        try {
            const { limit, offset, search } = req.query

            const searchText = "%"+search+"%"
            const jobs = await db.query(
                `SELECT * FROM jobs WHERE LOWER(job_title) LIKE LOWER($1) ORDER BY id DESC LIMIT $2 OFFSET $3`,
                [searchText, limit, offset]
                )
            res.header("Access-Control-Allow-Origin", "*");
            res.json(jobs.rows)
        } catch (error) {
            res.json(error+db.query.text)
        }
    }

    async getOneJob(req, res) {
        const id = req.query.id

        try {
            const job = await db.query(`SELECT * FROM jobs WHERE id = $1`, [id])
            res.header("Access-Control-Allow-Origin", "*");
            res.json(job.rows[0])
        } catch (error) {
            res.json(error)
        }
    }

    async updateJob(req, res) {
        const { job_title, salary_from, salary_to, skills, 
            education, experience, test_doc, detail, id } = req.body

        try {
            const job = await db.query(`UPDATE jobs set
                job_title= $1,
                salary_from= $2,
                salary_to= $3,
                skills= $4,
                education= $5,
                experience= $6,
                test_doc= $7,
                detail= $8
                WHERE id = $9 RETURNING *`, [
                job_title, salary_from, salary_to, skills, 
            education, experience, test_doc, detail, id
            ])
            res.header("Access-Control-Allow-Origin", "*");
            res.json(job.rows[0])
        } catch (error) {
            res.json(error)
        }
    }

    async deleteJob(req, res) {
        const id = req.query.id

        try {
            const job = await db.query(`DELETE FROM jobs WHERE id = $1`, [id])
            res.header("Access-Control-Allow-Origin", "*");
            res.json(job.rows[0])
        } catch (error) {
            res.json(error)
        }
    }
}

module.exports = new JobController()