const express = require("express");
const serverless = require("serverless-http");
const dotenv = require("dotenv");
const cors = require("cors");
const axios = require("axios");
const fs = require("fs");
const path = require("path");

dotenv.config();

const app = express();
const router = express.Router();

app.use(cors());
app.use(express.json());

router.get("/projects", (req, res) => {
  const filePath = path.join(__dirname, "projects.json");


  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading project data:", err);
      return res.status(500).json({ error: "Failed to load project data." });
    }

    try {
      const projects = JSON.parse(data);
      res.json(projects);
    } catch (parseErr) {
      console.error("Error parsing project data:", parseErr);
      res.status(500).json({ error: "Invalid project data format." });
    }
  });
});

router.get("/weather", async (req, res) => {
  const city = "Halifax";
  const apiKey = process.env.WEATHER_API_KEY;

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    );

    const { name, main } = response.data;
    res.json({
      city: name,
      temperature: main.temp,
      humidity: main.humidity,
    });
  } catch (err) {
    console.error("Error fetching weather data:", err);
    res.status(500).json({ error: "Failed to fetch weather data." });
  }
});


router.post("/contact", (req, res) => {
  const { name, email, subject, message, consent } = req.body;

  if (!name || !email || !subject || !message || !consent) {
    return res.status(400).json({ error: "All fields are required." });
  }

  const cleanName = name.replace(/[^a-zA-Z\s'-À-ž]/g, "");
  const cleanEmail = email.replace(/[^\w@.-]/g, "");
  const cleanSubject = subject.replace(/[^a-zA-Z\s]/g, "");
  const cleanMessage = message.replace(/[<>{}]/g, "");

  const newMessage = {
    name: cleanName,
    email: cleanEmail,
    subject: cleanSubject,
    message: cleanMessage,
    timestamp: new Date().toISOString()
  };

  const filePath = path.join(__dirname, "messages.json");

  fs.readFile(filePath, "utf8", (err, data) => {
    let messages = [];
    if (!err && data) {
      try {
        messages = JSON.parse(data);
      } catch (e) {
        console.error("Error parsing existing messages:", e);
      }
    }

    messages.push(newMessage);

    fs.writeFile(filePath, JSON.stringify(messages, null, 2), (err) => {
      if (err) {
        console.error("Error writing message data:", err);
        return res.status(500).json({ error: "Failed to save message." });
      }

      res.status(201).json({ success: true, message: "Message received." });
    });
  });
});

router.get("/messages", (req, res) => {
  const filePath = path.join(__dirname, "messages.json");

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading messages file:", err);
      return res.status(500).json({ error: "Failed to load messages." });
    }

    try {
      const messages = JSON.parse(data);
      res.json(messages);
    } catch (parseErr) {
      console.error("Error parsing messages JSON:", parseErr);
      res.status(500).json({ error: "Invalid message data format." });
    }
  });
});


app.use("/.netlify/functions/api", router);

module.exports = app;
module.exports.handler = serverless(app);