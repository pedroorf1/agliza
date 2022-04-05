const bcrypt = require('bcrypt')

module.exports = class tools{
    static async createPassword(password) {
        const step = 10
        const salt = await bcrypt.genSalt(step)
        const newPassword = await bcrypt.hash(password, salt)
        return newPassword
    }

    static async validatePassword(password, hash){
        const validate = await bcrypt.compare(password, hash)
        return validate
    }
}

