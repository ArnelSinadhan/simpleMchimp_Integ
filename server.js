import express from "express";
import fetch from "node-fetch";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors"; // Import CORS

// Configure dotenv
dotenv.config();

const app = express();

// Enable CORS for your frontend domain
app.use(
  cors({
    origin: "http://127.0.0.1:5500", // Allow requests from this origin (adjust based on where your frontend is running)
  })
);

app.use(bodyParser.json());
app.use(express.static("public")); // Serve static HTML file

// Mailchimp API configurations
const mailchimpApiKey = process.env.MAILCHIMP_API_KEY;
const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;
const mailchimpServerPrefix = process.env.MAILCHIMP_SERVER_PREFIX; // Example: 'us5'

// Subscribe endpoint
app.post("/subscribe", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  const url = `https://${mailchimpServerPrefix}.api.mailchimp.com/3.0/lists/${audienceId}/members`;

  const data = {
    email_address: email,
    status: "subscribed",
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `apikey ${mailchimpApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.status === 200 || response.status === 201) {
      res.status(200).json({ message: "Successfully subscribed" });
    } else {
      const errorData = await response.json();
      res
        .status(400)
        .json({ error: errorData.detail || "Failed to subscribe" });
    }
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
