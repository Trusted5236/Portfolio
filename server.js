import "dotenv/config";
import express from "express";
import nodeMailer from "nodemailer";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Global middleware to set CORS headers and handle OPTIONS requests
app.use((req, res, next) => {
  // Set the headers for the incoming request
  res.setHeader("Access-Control-Allow-Origin", "https://portfolio-tau-nine-20.vercel.app/");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // If this is a preflight request, respond immediately with a 204 No Content status
  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }
  
  next();
});

app.post("/send", async (req, res) => {
  console.log("Received request:", req.body);
  const { name, email, subject, message } = req.body;
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const transporter = nodeMailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL,
    subject: subject,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to send email" });
  }
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
