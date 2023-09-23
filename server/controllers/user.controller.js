const db = require("../db");
const bcrypt = require("bcrypt");

class UserController {
  async createUser(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    const { name, login, tg_login, email, password, position, role_id } =
      req.body;

    try {
      const salt = await bcrypt.genSalt(10);
      const password_hash = await bcrypt.hash(password, salt);

      const newUser = await db.query(
        `INSERT INTO users (
                    name, login, tg_login, email, password, position, role_id, closed, created_timestamp
                    ) 
                values(
                    $1, $2, $3, $4, $5, $6, $7, false, now()
                    ) RETURNING *`,
        [name, login, tg_login, email, password_hash, position, role_id]
      );

      res.json(newUser.rows[0]);
    } catch (error) {
      res.json(error + db.query.text);
    }
  }

  async getUsers(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    try {
      const { search } = req.query;
      const searchText = "%" + search + "%";

      const users = await db.query(
        `SELECT 
        users.id,
        users.name, 
        users.login, 
        users.tg_login, 
        users.email, 
        users.position, 
        CAST(users.role_id AS VARCHAR), 
        users.closed, 
        users.created_timestamp,
        roles.name as role_name

        FROM users 
        LEFT OUTER JOIN roles ON users.role_id=roles.id

        WHERE LOWER(users.name) LIKE LOWER($1) ORDER BY users.name ASC `,
        [searchText]
      );
      res.json(users.rows);
    } catch (error) {
      res.json(error + db.query.text);
    }
  }

  async getOneUser(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    const id = req.query.id;

    try {
      const user = await db.query(
        `SELECT 
        users.id,
      users.name, 
      users.login, 
      users.tg_login, 
      users.email, 
       users.position, 
      users.role_id, 
      users.closed, 
      users.created_timestamp,
      roles.name as role_name

      FROM users 
      LEFT OUTER JOIN roles ON users.role_id=roles.id
      
      WHERE users.id=$1`,
        [id]
      );
      res.json(user.rows[0]);
    } catch (error) {
      res.json(error + db.query.text);
    }
  }

  async updateUser(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    const { id, name, login, tg_login, email, position, role_id } = req.body;

    try {
      const user = await db.query(
        `UPDATE users set
                name = $1, login = $2, tg_login = $3, email = $4, position= $5, role_id=$6
                WHERE id = $7 RETURNING *`,
        [name, login, tg_login, email, position, role_id, id]
      );
      res.json(user.rows[0]);
    } catch (error) {
      res.json(error + db.query.text);
    }
  }

  async updateUserPassword(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    const { id, password } = req.body;

    const salt = await bcrypt.genSalt(10);
    const password_hash = await bcrypt.hash(password, salt);

    try {
      const user = await db.query(
        `UPDATE users set
                password = $1
                WHERE id = $2 RETURNING *`,
        [password_hash, id]
      );
      res.json(user.rows[0]);
    } catch (error) {
      res.json(error + db.query.text);
    }
  }

  async deleteUser(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    const id = req.query.id;

    try {
      const user = await db.query(`DELETE FROM users WHERE id = $1`, [id]);
      res.json(user.rows[0]);
    } catch (error) {
      res.json(error + db.query.text);
    }
  }
}

module.exports = new UserController();
