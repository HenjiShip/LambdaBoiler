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
    res.status(500).json({ error: "Error" });
  }
};

module.exports = { helloWorld, goodBye };
