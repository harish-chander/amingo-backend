const mongoos = require("mongoose");

const db =
  process.env.MONGO_URL ||
  "mongodb+srv://apiAccess:U2czP2qZPgtqWei@amingo-backend-1nf1r.mongodb.net/test?retryWrites=true&w=majority";
mongoos
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("DB Connected");
  })
  .catch(e => {
    console.log("Errors: ", e);
  });
