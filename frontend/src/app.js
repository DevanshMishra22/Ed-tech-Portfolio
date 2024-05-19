// server.js
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

// Connect to MongoDB
mongoose.connect("mongodb://0.0.0.0:27017/newsletterDB", {});

// Define Mongoose Schema
const subscriberSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, required: true, unique: true },
});

const Subscriber = mongoose.model("Subscriber", subscriberSchema);

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.post("/subscribe", async (req, res) => {
  try {
    const { firstName, lastName, email } = req.body;

    const newSubscriber = new Subscriber({
      firstName,
      lastName,
      email,
    });

    await newSubscriber.save();
    console.log("Subscriber saved successfully:", newSubscriber);
    res.status(200).send("Subscriber saved successfully");
  } catch (err) {
    console.error("Error saving subscriber:", err);
    res.status(500).send("Error saving subscriber");
  }
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
