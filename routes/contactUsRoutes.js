const express = require("express");
const ContactUsModel = require("./../models/contactUs");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, mobile, email, subject, message } = req.body;

    const newContact = new ContactUsModel({
      name,
      mobile,
      email,
      subject,
      message,
    });

    await newContact.save();

    res.status(201).json({ message: "Contact details saved successfully" });
  } catch (error) {
    console.error("Error saving contact details:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
