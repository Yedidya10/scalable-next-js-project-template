import mongoose from 'mongoose'
import { User } from './UserModel'

mongoose.Promise = global.Promise

// Get the MongoDB URI from the environment variables
const mongoUri =
  process.env.NODE_ENV === 'production'
    ? process.env.MONGODB_URI
    : process.env.MONGODB_URI_LOCAL || ''

// Create a function to establish the connection to the database
const connectToDatabase = async () => {
  try {
    await mongoose.connect(mongoUri as string)
    console.log('Database connected')
  } catch (err: any) {
    console.error(`MongoDB connection error: ${err.message}`)
    throw new Error(err)
  }
}

// Call the connectToDatabase function to establish the connection
connectToDatabase()

export { User }
