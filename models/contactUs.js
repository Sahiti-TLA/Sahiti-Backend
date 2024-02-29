const mongoose = require("mongoose");

const contactUsSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    mobile: {
      type: String,
    },
    email: {
      type: String,
    },
    subject: {
      type: String,
    },
    message: {
      type: String,
    },
  },
  { collection: "contactUsSchema" }
);

module.exports = mongoose.model("contactUs", contactUsSchema);
