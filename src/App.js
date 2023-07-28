import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      <nav>
        <h1>HELLO DIANA</h1>
        <div class="navBar-left">
          <img src={"/facebookLogo.png"} alt="" class="logo" />
          <ul>
            <li>
              <img src="" alt="" />{" "}
            </li>
            <li>
              <img src="" alt="" />{" "}
            </li>
            <li>
              <img src="" alt="" />{" "}
            </li>
            <li>
              <img src="" alt="" />{" "}
            </li>
          </ul>
        </div>
        <div class="navBar-right">
          <div class="searchBox"></div>
        </div>
      </nav>

      <div class="container">
        <div class="leftcontainer"></div>
        <div class="rightcontainer"></div>
      </div>
    </div>
  );
}

export default App;
