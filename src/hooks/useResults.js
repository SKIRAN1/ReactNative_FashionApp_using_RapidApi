import { useEffect, useState } from "react";
import rapid from "../Api/rapid";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async () => {
    console.log("Hi there!");
    try {
      const response = await rapid.get("/search", {
        params: {
          sort_type: "default",
          page: "1",
          page_size: "20",
          sort_order: "default",
        },
      });
      setResults(response.data);
    } catch (err) {
      setErrorMessage("Something went wrong");
    }
  };

  useEffect(() => {
    searchApi("");
  }, []);

  return [searchApi, results, errorMessage];
};
