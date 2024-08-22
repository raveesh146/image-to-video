import axios from 'axios';

// Your Bing Search API key (replace with your actual key)
const apiKey = '4e8b254f01ed46eea7ce369ee393012d';
const searchUrl = "https://api.bing.microsoft.com/v7.0/images/search";

// Function to fetch an image URL
export async function fetchImage(name) {
  const params = {
    q: name,
    count: 1,
    imageType: "photo",
    size: "medium"
  };

  const headers = { "Ocp-Apim-Subscription-Key": apiKey };

  try {
    const response = await axios.get(searchUrl, { headers, params });
    const searchResults = response.data;

    if (searchResults.value && searchResults.value.length > 0) {
      return searchResults.value[0].contentUrl; // Return the image URL
    } else {
      throw new Error(`No images found for ${name}`);
    }
  } catch (error) {
    console.error(`Error fetching image for ${name}: ${error.message}`);
    throw error;
  }
}
