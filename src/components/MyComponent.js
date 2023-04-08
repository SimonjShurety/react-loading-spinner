import React, { useState } from "react";
import BookLoading from "./common/loading-spinner/bookloading/BookLoading";

const MyComponent = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate a loading delay(useEffect)
  setTimeout(() => {
    setIsLoading(false);
  }, 2000);

  return (
    <div>
      {isLoading ? <BookLoading /> : <div>Loaded content goes here</div>}
    </div>
  );
};

export default MyComponent;
