import filterData from "../utils/filterData.js";

async function getCommits(url, headers) {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: headers,
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    console.log("Fetched data successfully!");
    return filterData(data);
  } catch (error) {
    console.error(`Failed to fetch commits: ${error}`);
    return false;
  }
}

export default getCommits;
