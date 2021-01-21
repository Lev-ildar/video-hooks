import axios from "axios";

const KEY = "AIzaSyBb5cBQ---2SzsfQsZFd0_k9nNJagUzMMM";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
