const mongoose = require("mongoose")

const connectMongoDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO)

  console.log(`Mongodb connected: ${conn.connection.host}`.cyan.underline.bold)
}

module.exports = connectMongoDB