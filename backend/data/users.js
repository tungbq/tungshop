import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Tuyen',
        email: 'tuyen@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Thach',
        email: 'thach@example.com',
        password: bcrypt.hashSync('123456', 10),
    }
]

export default users