const bcrypt = require('bcryptjs')

module.exports = {
    register: async (req,res) => {
    const {username, password, isAdmin} = req.body
    const db = req.app.get('db')
    const result = await db.get_user(username) 
    const existingUser = result[0]
    if (existingUser) {
        res.status(409).send('username taken')
    } else {
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
        registeredUser = await db.register_user(isAdmin, username, hash)
        console.log(registeredUser)
        const user = registeredUser[0]
        console.log(user)
        req.session.user = {
            isAdmin: user.is_admin, 
            username: user.username,
            id: user.id 
        }
        console.log(req.session.user)
        res.status(201).send(req.session.user)
    }
}
}