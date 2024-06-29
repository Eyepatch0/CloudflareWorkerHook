const threadEnabled = (env) => {
  if (env.THREAD_ID) {
    return `${env.DISCORD_WEBHOOK_URL}?thread_id=${env.THREAD_ID}`;
  } else {
    return `${env.DISCORD_WEBHOOK_URL}`;
  }
};

export default threadEnabled;
