const databaseSQL = require("../databaseSQL");

const helloWorld = async (req, res) => {
  try {
    res.send("Hello, World!");
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
};

const goodBye = async (req, res) => {
  try {
    res.send("Goodbye, World!");
  } catch (error) {
    res.status(500).json(error);
  }
};

const getNotes = async (req, res) => {
  try {
    const [rows] = await databaseSQL.query(`SELECT * FROM notes`);
    res.send(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred in getNotes" });
  }
};

module.exports = { helloWorld, goodBye, getNotes };
