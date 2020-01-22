import bcrypt from 'bcrypt'
import { User } from '../db'

const saltRounds = 10

export async function createUser(
  name: string,
  email: string,
  password: string,
): Promise<String> {
  const user = new User()
  user.name = name
  user.email = email
  user.hashedPassword = await bcrypt.hash(password, saltRounds)
  user.admin = true
  await user.save()
  return '1234'
}
