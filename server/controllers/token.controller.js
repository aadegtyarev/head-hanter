const db = require("../db");

class TokenController {

    async createToken(req, res) {
        res.header("Access-Control-Allow-Origin", "*");
        const { user_id } = req.body;

        try {

            const token = await db.query(
                `INSERT INTO tokens (user_id) 
                values (${user_id}) 
                ON CONFLICT (user_id)
                DO UPDATE set
                value = uuid_generate_v4(), expiration_date = (now() + interval '7 day')                                
                RETURNING *`
            );

            res.json(token.rows[0]);
        } catch (error) {
            res.json(error + db.query.text);
        }
    }

    async checkToken(req, res) {
        res.header("Access-Control-Allow-Origin", "*");
        const { token } = req.query;

        try {

            const response = await db.query(
                `SELECT (tokens.expiration_date>now()) as token_valid, user_id FROM tokens WHERE value='${token}'`
            );

            res.json(response.rows[0]);
        } catch (error) {
            res.json(error + db.query.text);
        }
    }

    async deleteToken(req, res) {
        res.header("Access-Control-Allow-Origin", "*");
        const { user_id } = req.query;

        try {
            const user = await db.query(`DELETE FROM tokens WHERE user_id = ${user_id}`);
            res.json(user.rows[0]);
        } catch (error) {
            res.json(error + db.query.text);
        }
    }
}

module.exports = new TokenController();
