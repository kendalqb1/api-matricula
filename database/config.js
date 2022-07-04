const moongose = require("mongoose");

const dbConnection = async () => {
  try {
    await moongose.connect(process.env.MONGODB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database is connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  dbConnection,
};
