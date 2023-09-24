const db = require("../db");

class TestDocsController {
  async createTestDoc(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    const { id, name, remark, text, user_id } = req.body;

    try {
      const newUser = await db.query(
        `INSERT INTO test_docs (
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

  async getTestDocs(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    try {
      const { search } = req.query;
      const searchText = "%" + search + "%";

      const test_docs = await db.query(
        `SELECT * FROM test_docs WHERE LOWER(name) LIKE LOWER($1) ORDER BY name ASC `,
        [searchText]
      );
      res.json(test_docs.rows);
    } catch (error) {
      res.json(error + db.query.text);
    }
  }

  async getOneTestDoc(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    const id = req.query.id;

    try {
      const test_doc = await db.query(`SELECT * FROM test_docs WHERE id=$1`, [
        id,
      ]);
      res.json(test_doc.rows[0]);
    } catch (error) {
      res.json(error + db.query.text);
    }
  }

  async updateTestDoc(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    const { id, name, remark, text, user_id, closed } = req.body;

    try {
      const test_doc = await db.query(
        `UPDATE test_docs set
                name = $1, remark = $2, text = $3, user_id= $4, closed= $5
                WHERE id = $6 RETURNING *`,
        [name, remark, text, user_id, closed, id]
      );
      res.json(test_doc.rows[0]);
    } catch (error) {
      res.json(error + db.query.text);
    }
  }

  async deleteTestDoc(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    const id = req.query.id;

    try {
      const test_doc = await db.query(`DELETE FROM test_docs WHERE id = $1`, [
        id,
      ]);
      res.json(test_doc.rows[0]);
    } catch (error) {
      res.json(error + db.query.text);
    }
  }
}

module.exports = new TestDocsController();
