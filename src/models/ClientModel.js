const mongoose = require("../../database/conn");

const ClientModel = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    birthday: {
      type: Date,
      required: false,
    },

    email: {
      type: String,
      required: true,
    },

    phone: {
      type: Number,
      required: true,
    },

    phone_prefix: {
      type: Number,
      required: true,
    },

    cpf_cnpj: {
      type: String,
      required: false,
    },

    zip_code: {
      type: Number,
      required: false,
    },

    number: {
      type: Number,
      required: false,
    },

    street: {
      type: String,
      required: false,
    },

    city: {
      type: String,
      required: false,
    },

    state: {
      type: String,
      required: false,
    },

    district: {
      type: String,
      required: false,
    },

    complement: {
      type: String,
      required: false,
    },
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model("clients", ClientModel);
