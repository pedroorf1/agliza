const mongoose = require("../../database/conn");

const ClientModel = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
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
      required: true,
    },

    zip_code: {
      type: Number,
      required: true,
    },

    number: {
      type: Number,
      required: true,
    },

    street: {
      type: String,
      required: true,
    },

    city: {
      type: String,
      required: true,
    },

    state: {
      type: String,
      required: true,
    },

    district: {
      type: String,
      required: true,
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
