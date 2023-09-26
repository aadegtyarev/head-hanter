const db = require("../db");

class ResponseStatusController {
    async getResponseStatuses(req, res) {
        res.header("Access-Control-Allow-Origin", "*");
        try {
            const response_statuses = await db.query(
                `SELECT id, name FROM response_statuses ORDER BY id ASC `
            );
            res.json(response_statuses.rows);
        } catch (error) {
            res.json(error + db.query.text);
        }
    }
}

module.exports = new ResponseStatusController();
