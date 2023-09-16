const db = require('../db')
const bcrypt = require("bcrypt")

class UserController {
    async createUser(req, res) {
        const { name, login, tg_login, email, password } = req.body

        try {
            const salt = await bcrypt.genSalt(10);
            const password_hash = await bcrypt.hash(password, salt);

            const newUser = await db.query(`INSERT INTO users (
                    name, login, tg_login, email, password, created_timestamp
                    ) 
                values(
                    $1, $2, $3, $4, $5, now()
                    ) RETURNING *`,
                [
                    name, login, tg_login, email, password_hash
                ])

            res.json(newUser.rows[0])
        } catch (error) {
            res.json(error)
        }
    }

    async getUsers(req, res) {
        try {
            const users = await db.query(`SELECT * FROM users`)
            res.json(users.rows)
        } catch (error) {
            res.json(error)
        }
    }

    async getOneUser(req, res) {
        const id = req.params.id

        try {
            const user = await db.query(`SELECT * FROM users WHERE id=$1`, [id])
            res.json(user.rows[0])
        } catch (error) {
            res.json(error)
        }
    }

    async updateUser(req, res) {
        const { id, name, login, tg_login, email, password } = req.body

        const salt = await bcrypt.genSalt(10);
        const password_hash = await bcrypt.hash(password, salt);

        try {
                const user = await db.query(`UPDATE users set
                name = $1, login = $2, tg_login = $3, email = $4, password = $5
                WHERE id = $6 RETURNING *`, [
                name, login, tg_login, email, password_hash, id
            ]) 
            res.json(user.rows[0])           
        } catch (error) {
            res.json(error)
        }
    }

    async deleteUser(req, res) {
        const id = req.params.id

        try {
            const user = await db.query(`DELETE FROM users WHERE id = $1`, [id])
            res.json(user.rows[0])
        } catch (error) {
            res.json(error)
        }
    }
}

module.exports = new UserController()