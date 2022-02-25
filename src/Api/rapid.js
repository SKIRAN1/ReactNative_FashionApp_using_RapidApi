import axios from "axios";

export default axios.create({
  url: "https://ali-express1.p.rapidapi.com/categories",
  headers: {
    "x-rapidapi-host": "ali-express1.p.rapidapi.com",
    "x-rapidapi-key":
      "Bearer fae725ec3emshc0ae0e9f9798e67p1a8040jsnae5fa760ad59",
  },
});
