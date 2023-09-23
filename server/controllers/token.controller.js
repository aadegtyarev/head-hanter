const db = require("../db");

class TokenController {

    async createToken(req, res) {
        res.header("Access-Control-Allow-Origin", "*");
        const { user_id } = req.body;

        try {

            const newUser = await db.query(
                `INSERT INTO tokens (
            user_id
                    ) 
                values(
                    $1, 
                    ) RETURNING *`,
                [user_id]
            );

            res.json(newUser.rows[0]);
        } catch (error) {
            res.json(error + db.query.text);
        }
    }

    async getTokenByUser(req, res) {
        res.header("Access-Control-Allow-Origin", "*");
        const user_id = req.query.user_id;

        try {
            const token = await db.query(
                `SELECT id, value, (expiration_date>now()) as token_valid 
                FROM tokens WHERE user_id=$1`,
                [user_id]
            );
            res.json(token.rows);
        } catch (error) {
            res.json(error + db.query.text);
        }
    }

    async updateToken(req, res) {
        res.header("Access-Control-Allow-Origin", "*");
        const { id, value, expiration_date } = req.body;

        try {
            const user = await db.query(
                `UPDATE tokens set
        value = $1, expiration_date = $2
                WHERE id = $3 RETURNING *`,
                [value, expiration_date, id]
            );
            res.json(user.rows[0]);
        } catch (error) {
            res.json(error + db.query.text);
        }
    }

    async deleteToken(req, res) {
        res.header("Access-Control-Allow-Origin", "*");
        const id = req.query.id;

        try {
            const user = await db.query(`DELETE FROM tokens WHERE id = $1`, [id]);
            res.json(user.rows[0]);
        } catch (error) {
            res.json(error + db.query.text);
        }
    }
}

module.exports = new TokenController();
