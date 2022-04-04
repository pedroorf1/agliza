const mongoose = require('../../database/conn')

const PlanModel = new mongoose.Schema(
    {
            name: {
            type: String,
            required: true,
            unique: true
        },

        appointmenter: {
            type: String,
            required: true
        },

        appointmenterValue: {
            type: Number,
            required: true
        },

        appointmentmedical: {
            type: String,
            required: true
        },

        appointmentmedicalValue: {
            type: Number,
            required: true
        },

        therapy: {
            type: String,
            required: true
        },

        therapyValue: {
            type: Number,
            required: true
        },

        monthlypayment: {
            type: String,
            required: true
        },
        //Familiar ou individual
        category: {
            type: Number,
            required: true
        },

        description: {
            type: Text,
            required:false
        },

        //complemento do plano plus (plus + procedimentos)
        pprocedure: {
            type: Boolean,
            required: false
        },

        
        pprocedurevalue: {
            type: Number,
            required: true
        },

        accesslevel: {
            type: Number,
            required: true
        },
        
    },

    {
        timestamps: true
    }

)

module.exports = mongoose.model("plans", PlanModel)