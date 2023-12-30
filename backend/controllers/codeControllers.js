const dotenv = require("dotenv");
dotenv.config();

const db = require("better-sqlite3")(process.env.dbLocation);

module.exports = {
  helo: (req, res) => {
    console.log("hai");
  },

  getMenu: (req, res) => {
    try {
      let { category } = req.query;
      let result;
      if (category === "all") {
        let query = db.prepare(`select * from produk`);
        result = query.all();
      } else {
        let query = db.prepare(`select * from produk where category_id = ?`);
        result = query.all(category);
      }
      console.log(result);
      return res.status(200).send({
        result,
      });
    } catch (error) {
      return res.status(404).send("Not found");
    }
  },
};
