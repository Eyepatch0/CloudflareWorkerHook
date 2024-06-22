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

    await axios.post(process.env.DISCORD_WEBHOOK_URL, data, {
      headers,
    });

    return;
  } catch (error) {
    console.error(`Failed to send message: ${error.message}`);
  }
}

export default sendUpdate;
