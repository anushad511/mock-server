const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

app.post("/login", (req, res) => {
  const { mobile } = req.body;

  if (!mobile) return res.status(400).json({ success: false, error: "Mobile required" });

  res.json({
    success: true,
    userId: "12345",
    otp: "111111"
  });
});

app.post("/verify-otp", (req, res) => {
  const { otp } = req.body;

  if (otp !== "111111")
    return res.json({ success: false, error: "Invalid OTP" });

  res.json({
    success: true,
    token: "MOCK-TOKEN-XYZ",
    name: "Test User",
    balance: 5000
  });
});

app.post("/user-profile", (req, res) => {
  const {
    firstName = "",
    lastName = "",
    gender = "",
    income = "",
    occupation = "",
    aadharNumber = "",
    panNumber = "",
    email = ""
  } = req.body || {};

  res.json({
    success: true,
    data: {
      firstName,
      lastName,
      gender,
      income,
      occupation,
      aadharNumber,
      panNumber,
      email
    }
  });
});

app.post("/lead-creation", (req, res) => {
  const {
    leadId = "",
    leadSource = "",
  } = req.body || {};

  res.json({
    success: true,
    data: {
      leadId,
      leadSource
    }
  });
});

app.post("/lead-status", (req, res) => {
  const {
    leadId = "",
  } = req.body || {};

  res.json({
    success: true,
    data: {
      status: "SUCCESS"
    }
  });
});


app.get("/", (req, res) => {
  res.send("Mock API running 👌");
});

app.listen(3000, () => console.log("Mock server running on port 3000"));
