import express from "express";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Binarbitrage Backend Running Successfully!");
});

// Example P2P trade placeholder API
app.get("/rates", (req, res) => {
  res.json({
    BTC: "67300",
    ETH: "3500",
    USDT: "1.00",
    GOLDC: "58.20"
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
