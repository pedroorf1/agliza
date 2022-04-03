const mongoose = require('../../database/conn')

const UserModel = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true
        },

        name: {
            type: String,
            required: true
        },

        password: {
            type: String,
            required: true
        },

        access: {
            type: Number,
            required: true
        }
    },

    {
        timestamps: true
    }

)

module.exports = mongoose.model("users", UserModel)