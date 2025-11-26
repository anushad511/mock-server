const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

app.post("/trigger-otp", (req, res) => {
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

app.get("/", (req, res) => {
  res.send("Mock API running 👌");
});

app.listen(3000, () => console.log("Mock server running on port 3000"));
