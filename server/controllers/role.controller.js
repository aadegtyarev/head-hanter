const db = require("../db");
const bcrypt = require("bcrypt");

class RoleController {
  async createRole(req, res) {
    const { name, short_name } = req.body;

    try {
      const newRole = await db.query(
        `INSERT INTO roles (
                    name, short_name, created_timestamp
                    ) 
                values(
                    $1, $2, now()
                    ) RETURNING *`,
        [name, short_name]
      );

      res.json(newRole.rows[0]);
    } catch (error) {
      res.json(error);
    }
  }

  async getRoles(req, res) {
    try {
      const roles = await db.query(`SELECT * FROM roles`);
      res.json(roles.rows);
    } catch (error) {
      res.json(error);
    }
  }

  async getOneRole(req, res) {
    const id = req.params.id;

    try {
      const role = await db.query(`SELECT * FROM roles WHERE id=$1`, [id]);
      res.json(role.rows[0]);
    } catch (error) {
      res.json(error);
    }
  }

  async updateRole(req, res) {
    const { id, name, short_name } = req.body;

    try {
      const role = await db.query(
        `UPDATE roles set
                name = $1, $2
                WHERE id = $3 RETURNING *`,
        [name, short_name, id]
      );
      res.json(role.rows[0]);
    } catch (error) {
      res.json(error);
    }
  }

  async deleteRole(req, res) {
    const id = req.params.id;

    try {
      const role = await db.query(`DELETE FROM roles WHERE id = $1`, [id]);
      res.json(role.rows[0]);
    } catch (error) {
      res.json(error);
    }
  }
}

module.exports = new RoleController();
