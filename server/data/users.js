const bcrypt = require('bcryptjs');

const users = [
  {
    name: 'Admin',
    email: 'admin@example.com',
    password: bcrypt.hashSync('12345678', 10),
    userRole: 0,
  },
  {
    name: 'John Doe',
    email: 'john@example.com',
    password: bcrypt.hashSync('12345678', 10),
    userRole: 1,
  },
  {
    name: 'Jane Doe',
    email: 'jane@example.com',
    password: bcrypt.hashSync('12345678', 10),
    userRole: 1,
  },
]

module.exports = users;
