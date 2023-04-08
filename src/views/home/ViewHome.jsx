// import Flipbook from "@/components/common/loading-spinner/flip-book/Flipbook";
import React, { useState } from "react";
import Flipbook from "@/components/common/loading-spinner/flip-book/Flipbook";

const ViewHome = () => {
  const [loading, setLoading] = useState(false);
  const [quote, setQuote] = useState({});

  const getRandomQuote = () => {
    setLoading(true);
    setTimeout(() => {
      console.log("1st Call");
      fetch("https://api.quotable.io/random")
        .then((res) => res.json())
        .then((data) => {
          setLoading(false);
          setQuote(data);
        });
    }, 2500);
  };

  return (
    <div className="main-content">
      <Flipbook />
      <h1>Hello World!</h1>
      <p>
        This is a demo Project to show how to add animated loading with React.
      </p>
      <div className="buttons">
        <button className="btn">
          <a href="#">Read Article</a>
        </button>
        <button className="btn get-quote" onClick={getRandomQuote}>
          Generate Quote
        </button>
      </div>
      <div className="quote-section">
        <blockquote className="quote">{quote.content}</blockquote>-{" "}
        <span className="author">{quote.author}</span>
      </div>
    </div>
  );
};

export default ViewHome;
