import bcrypt from 'bcryptjs'
const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Angela',
    email: 'angela@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Grace',
    email: 'grace@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]
export default users
