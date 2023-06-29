import "../styles/App.css";
import like from "../like.svg";
import React, { useState } from "react";

const App = () => {
  const [count, setCount] = React.useState(0);
  // const [backgroundColor, setBackgroundColor] = useState("rgba(255,0,0,0)");

  const handleLike = () => {
    setCount(count + 1);

    // const alpha = (count + 1) * 0.1;
    // const newBackgroundColor = `rgba(255, 0,0, ${alpha})`;
    // setBackgroundColor(newBackgroundColor);
  };
  return (
    <div id="main">
      <img
        id="like-btn-img"
        src={like}
        style={{fill:"white",width: "100px",backgroundColor:`rgba(255,0,0,${0.1*count})`}}
        onClick={handleLike}
      />
      <h3>
        Likes: <span id="like-counter">{count}</span>
      </h3>
    </div>
  );
};

export default App;
