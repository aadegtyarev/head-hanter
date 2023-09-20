const db = require("../db");

class TestTemplatesController {
  async createTestTemplate(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    const { id, name, remark, text, user_id } = req.body;

    try {
      const newUser = await db.query(
        `INSERT INTO test_templates (
                    name, remark, text,  user_id, closed, created_timestamp
                    ) 
                values(
                    $1, $2, $3, $4, false, now()
                    ) RETURNING *`,
        [name, remark, text, user_id]
      );

      res.json(newUser.rows[0]);
    } catch (error) {
      res.json(error + db.query.text);
    }
  }

  async getTestTemplates(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    try {
      const { search } = req.query;
      const searchText = "%" + search + "%";

      const test_templates = await db.query(
        `SELECT * FROM test_templates WHERE LOWER(name) LIKE LOWER($1) ORDER BY name ASC `,
        [searchText]
      );
      res.json(test_templates.rows);
    } catch (error) {
      res.json(error + db.query.text);
    }
  }

  async getOneTestTemplate(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    const id = req.query.id;

    try {
      const test_template = await db.query(
        `SELECT * FROM test_templates WHERE id=$1`,
        [id]
      );
      res.json(test_template.rows[0]);
    } catch (error) {
      res.json(error + db.query.text);
    }
  }

  async updateTestTemplate(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    const { id, name, remark, text, user_id, closed } = req.body;

    try {
      const test_template = await db.query(
        `UPDATE test_templates set
                name = $1, remark = $2, text = $3, user_id= $4, closed= $5
                WHERE id = $6 RETURNING *`,
        [name, remark, text, user_id, closed, id]
      );
      res.json(test_template.rows[0]);
    } catch (error) {
      res.json(error + db.query.text);
    }
  }

  async deleteTestTemplate(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    const id = req.query.id;

    try {
      const test_template = await db.query(
        `DELETE FROM test_templates WHERE id = $1`,
        [id]
      );
      res.json(test_template.rows[0]);
    } catch (error) {
      res.json(error + db.query.text);
    }
  }
}

module.exports = new TestTemplatesController();
