// Import the mongoose library to interact with MongoDB
import mongoose from 'mongoose'
import { AdapterUser } from 'next-auth/adapters'

// Define the structure of a User document using TypeScript interfaces
interface User extends AdapterUser {
  email: string
  firstName: string
  lastName: string
  role: string
  phone: string
}

// Define the UserSchema
const UserSchema = new mongoose.Schema<User>({
  email: { type: String, unique: true },
  firstName: { type: String },
  lastName: { type: String },
  role: { type: String, required: true },
  phone: { type: String },
})

// Export the UserSchema as a model
export const User = mongoose.models.User || mongoose.model('User', UserSchema)
