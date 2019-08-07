import React from "react";
import "./Main.css";
import like from "../assets/like.svg";
import dislike from "../assets/dislike.svg";
import logo from "../assets/logo.svg";

export default function Main({ match }) {
  return (
    <div className="main-container">
      <img src={logo} alt="Tindev" />
      <ul>
        <li>
          <img
            src="https://avatars2.githubusercontent.com/u/2254731?v=4"
            alt="Diego Fernandes"
          />
          <footer>
            <strong>Diego Fernandes</strong>
            <p>CTO na Rocketseat</p>
          </footer>

          <div className="buttons">
            <button type="button">
              <img src={dislike} alt="Dislike" />
            </button>
            <button type="button">
              <img src={like} alt="Like" />
            </button>
          </div>
        </li>
        <li>
          <img
            src="https://avatars2.githubusercontent.com/u/2254731?v=4"
            alt="Diego Fernandes"
          />
          <footer>
            <strong>Diego Fernandes</strong>
            <p>CTO na Rocketseat</p>
          </footer>

          <div className="buttons">
            <button type="button">
              <img src={dislike} alt="Dislike" />
            </button>
            <button type="button">
              <img src={like} alt="Like" />
            </button>
          </div>
        </li>
        <li>
          <img
            src="https://avatars2.githubusercontent.com/u/2254731?v=4"
            alt="Diego Fernandes"
          />
          <footer>
            <strong>Diego Fernandes</strong>
            <p>CTO na Rocketseat</p>
          </footer>

          <div className="buttons">
            <button type="button">
              <img src={dislike} alt="Dislike" />
            </button>
            <button type="button">
              <img src={like} alt="Like" />
            </button>
          </div>
        </li>
        <li>
          <img
            src="https://avatars2.githubusercontent.com/u/2254731?v=4"
            alt="Diego Fernandes"
          />
          <footer>
            <strong>Diego Fernandes</strong>
            <p>CTO na Rocketseat</p>
          </footer>

          <div className="buttons">
            <button type="button">
              <img src={dislike} alt="Dislike" />
            </button>
            <button type="button">
              <img src={like} alt="Like" />
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}
