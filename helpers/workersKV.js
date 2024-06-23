import { KV_COMMITS_KEY } from "../utils/constants.js";

const createKey = async (env) => {
  try {
    console.log("Creating Key...");
    await env.PERSIST.put(KV_COMMITS_KEY, []);
    console.log("Key created successfully");
  } catch (error) {
    console.error(`Error creating key with cloudflare KV: ${error}`);
  }
};

const getValue = async (env) => {
  try {
    const value = await env.PERSIST.get(KV_COMMITS_KEY, { type: "json" });
    return value;
  } catch (error) {
    console.error(`Error getting key value: ${error}`);
  }
};

const updateValue = async (env, data) => {
  try {
    await env.PERSIST.put(KV_COMMITS_KEY, JSON.stringify(data));
    console.log("Updated key value");
  } catch (error) {
    console.error(`Error updating key value: ${error}`);
  }
};

const keyExists = async (env) => {
  try {
    const data = await env.PERSIST.list();
    return data.keys.find((e) => e.name === KV_COMMITS_KEY)?.name;
  } catch (error) {
    console.log(`Error retrieving keys: ${error}`);
  }
};

export { createKey, getValue, keyExists, updateValue };
