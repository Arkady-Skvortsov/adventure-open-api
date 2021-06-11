const Getter = require("../model/model");
const db = require("../db/db.js");

class Characters extends Getter {
  constructor() {
    super();
  }

  async get_all(req, res) {
    try {
      const cl = await db.query("SELECT * FROM characters");

      res.json(cl.rows);
    } catch (e) {
      console.log(e);
    }
  }

  async get_random(req, res) {
    try {
      const cl = await db.query(
        "SELECT * FROM characters ORDER BY random() limit 1"
      );

      res.json(cl);
    } catch (e) {
      console.log(e);
    }
  }

  async get_by_id(req, res) {
    try {
      const cl = await db.query("SELECT * FROM characters WHERE id = $1", [
        req.params.id,
      ]);

      res.json(cl);
    } catch (e) {
      console.log(e);
    }
  }
}

class Weapons extends Getter {
  constructor() {
    super();
  }

  async get_all(req, res) {
    try {
      const cl = await db.query("SELECT * FROM weapons");

      res.json(cl.rows);
    } catch (e) {
      console.log(e);
    }
  }

  async get_random(req, res) {
    try {
      const cl = await db.query(
        "SELECT * FROM weapons ORDER BY random() limit 1"
      );

      res.json(cl);
    } catch (e) {
      console.log(e);
    }
  }

  async get_by_id(req, res) {
    try {
      const cl = await db.query("SELECT * FROM weapons WHERE id = $1", [
        req.params.id,
      ]);

      res.json(cl);
    } catch (e) {
      console.log(e);
    }
  }
}

class Lands extends Getter {
  constructor() {
    super();
  }

  async get_all(req, res) {
    try {
      const cl = await db.query("SELECT * FROM lands");

      res.json(cl.rows);
    } catch (e) {
      console.log(e);
    }
  }

  async get_random(req, res) {
    try {
      const cl = await db.query(
        "SELECT * FROM lands ORDER BY random() limit 1"
      );

      res.json(cl);
    } catch (e) {
      console.log(e);
    }
  }

  async get_by_id(req, res) {
    try {
      const cl = await db.query("SELECT * FROM lands WHERE id = $1", [
        req.params.id,
      ]);

      res.json(cl);
    } catch (e) {
      console.log(e);
    }
  }
}

class MagicItems extends Getter {
  constructor() {
    super();
  }

  async get_all(req, res) {
    try {
      const cl = await db.query("SELECT * FROM magic_items");

      res.json(cl.rows);
    } catch (e) {
      console.log(e);
    }
  }

  async get_random(req, res) {
    try {
      const cl = await db.query(
        "SELECT * FROM magic_items ORDER BY random() limit 1"
      );

      res.json(cl);
    } catch (e) {
      console.log(e);
    }
  }

  async get_by_id(req, res) {
    try {
      const cl = await db.query("SELECT * FROM magic_items WHERE id = $1", [
        req.params.id,
      ]);

      res.json(cl);
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = {
  characters: new Characters(),
  weapons: new Weapons(),
  lands: new Lands(),
  magic_items: new MagicItems(),
};
