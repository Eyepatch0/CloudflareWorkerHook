import formatText from "../utils/formatText.js";
import threadEnabled from "../utils/threadEnabled.js";

async function sendUpdate(message, env) {
  try {
    const data = {
      content: formatText(message),
    };
    const headers = {
      "Content-Type": "application/json",
    };
    const url = threadEnabled(env);

    const response = await fetch(url, {
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
