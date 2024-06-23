import formatText from "../utils/formatText.js";

async function sendUpdate(message, env) {
  try {
    const data = {
      content: formatText(message),
    };
    const headers = {
      "Content-Type": "application/json",
    };
    const response = await fetch(env.DISCORD_WEBHOOK_URL, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    console.log("Message Sent!");
    return;
  } catch (error) {
    console.error(`Failed to send message: ${error}`);
  }
}

export default sendUpdate;
