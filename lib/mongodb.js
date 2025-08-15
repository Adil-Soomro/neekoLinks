import mongoose from 'mongoose';

export default async function connectdb(){
  if (mongoose.connection.readyState >1) {
    return mongoose.connection
  }
  await mongoose.connect(process.env.MONGODB_URI)
    console.log("Connected to MongoDB successfully");
    return mongoose.connection;
}