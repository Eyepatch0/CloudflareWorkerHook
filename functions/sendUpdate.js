import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

async function sendUpdate(message) {
  try {
    const data = {
      content: message,
    };
    const headers = {
      "Content-Type": "application/json",
    };

    const response = await axios.post(process.env.DISCORD_WEBHOOK_URL, data, {
      headers,
    });
    if (response.status === 204) {
      console.log("Message sent successfully");
    } else {
      console.error(`Failed to send message. Status code: ${response.status}`);
    }
  } catch (error) {
    console.error(`Failed to send message: ${error.message}`);
  }
}

export default sendUpdate;
