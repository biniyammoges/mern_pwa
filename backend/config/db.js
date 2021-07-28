import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const con = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: true,
    });
    console.log(`Db connected : ${con.connection.host}`.blue.underline.bold);
  } catch (err) {
    console.log(`Error : ${err.message}`.red.underline.bold);
  }
};

export default connectDb;
