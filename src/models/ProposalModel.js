const mongoose = require("../../database/conn");

const ProposalModel = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: false,
    },
    planId: {
      type: String,
      required: true,
    },
    clientId: {
      type: String,
      required: false,
    },
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
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("proposals", ProposalModel);
