import mongoose from 'mongoose';
import colors from 'colors';

const connectDB = async () => {
  try {
    const con = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });

    console.log(
      `MongoDB connected: ${con.connection.host}`.green.underline.bold
    );
  } catch (err) {
    console.error(err.message.red.underline.bold);
    process.exit(1);
  }
};

export default connectDB;
