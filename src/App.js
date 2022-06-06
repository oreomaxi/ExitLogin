import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import background from "./matrixBG.jpg";

function App() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");

  if (input1 === "Karina" && input2 === "06062000") {
    return (
      <div
        style={{
          backgroundImage: `url(${background})`,
          width: "100%",
          height: "100vh",
          backgroundSize: "1920px",
        }}
      >
        <div className="content" style={{ width: "65%", textAlign: "center" }}>
          <h1 style={{ display: "inline" }}>Congratulations Back</h1>{" "}
          <h1 style={{ color: "black", display: "inline", fontSize: "8pt" }}>
            {" "}
            of
          </h1>
          <h1 style={{ display: "inline" }}>door used succesfully!</h1>
        </div>
      </div>
    );
  } else {
    return (
      <div
        style={{
          backgroundImage: `url(${background})`,
          width: "100%",
          height: "100vh",
          backgroundSize: "1920px",
        }}
      >
        <div className="content">
          <label>
            Username:
            <input
              type="text"
              style={{
                marginLeft: "10px",
                borderRadius: "8px",
                backgroundColor: "rgba(255, 255, 255, 0.15)",
                fontSize: "20pt",
              }}
              value={input1}
              onInput={(e) => setInput1(e.target.value)}
            ></input>
          </label>
          <br></br>
          <label>
            Password:
            <input
              type="text"
              style={{
                marginLeft: "18px",
                borderRadius: "8px",
                marginTop: "15px",
                backgroundColor: "rgba(255, 255, 255, 0.15)",
                fontSize: "20pt",
              }}
              value={input2}
              onInput={(e) => setInput2(e.target.value)}
            ></input>
          </label>
        </div>
      </div>
    );
  }
}

export default App;
