require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "H GAWO DATA Backend yana aiki!",
    service: "H GAWO DATA",
    status: "online"
  });
});

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    status: "ok",
    time: new Date().toISOString()
  });
});

app.post("/api/data", async (req, res) => {
  const { network, phone, plan } = req.body || {};

  if (!network || !phone || !plan) {
    return res.status(400).json({
      success: false,
      message: "network, phone da plan ana bukata."
    });
  }

  if (!process.env.VTU_API_URL || !process.env.VTU_API_KEY) {
    return res.status(503).json({
      success: false,
      message: "VTU API bai saita ba tukuna."
    });
  }

  return res.status(501).json({
    success: false,
    message: "VTU.ng integration za mu haɗa daga baya."
  });
});

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route ba ta wanzu."
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`H GAWO DATA backend yana aiki a port ${PORT}`);
});
