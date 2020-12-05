import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Avatar Aang',
    email: 'admin@sample.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'John Doe',
    email: 'john@sample.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Jane doe',
    email: 'jane@sample.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
