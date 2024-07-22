import React, { useState, useEffect, useRef, memo } from "react";

const Quote = () => {
  const [quote, setQuote] = useState(null);
  const [category, setCategory] = useState("food");

  const fetchQuote = async () => {
    console.log("Fetching quote");
    try {
      const response = await fetch(
        `https://api.api-ninjas.com/v1/quotes?category=${category}`,
        {
          headers: {
            "X-Api-Key": "NEv844FFjeGw3eMJlXxoSg==freytZWdZ9yir0TW",
          },
        }
      );
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      setQuote(data[0] || { quote: "No quote found", author: "Unknown" });
    } catch (error) {
      console.error("Request failed:", error);
    }
  };

  useEffect(() => {
    fetchQuote();
    const interval = setInterval(() => {
      fetchQuote();
    }, 5000);

    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures useEffect only runs once on mount

  console.log("Component rendered");

  return (
    <div className="quote-container px-4 bg-primary rounded-t-3xl py-2 ">
      <h1 className="font-bold text-white text-center text-xl">Food Quote</h1>
      {quote ? (
        <>
          <p className="quote-text text-sm text-white">{quote.quote}</p>
          <p className="quote-text text-sm text-white font-bold text-center bg-white/25 rounded-full px-4 py-2 my-4 ">
            Author: {quote.author}
          </p>
        </>
      ) : (
        <p className="quote-text text-sm text-white">Loading...</p>
      )}
    </div>
  );
};

export default memo(Quote);
