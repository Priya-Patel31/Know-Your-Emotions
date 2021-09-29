import React, { useImperativeHandle, useState } from "react";
import "./styles.css";
// import images  from './emoji.png'

export default function App() {
  const emoji = {
    "😀": "grinning face",
    "😊": "smiling face",
    "😴": "sleeping face",
    "🥰": "face with hearts",
    "😍": "face with heart eyes",
    "😉": "winking face",
    "🤣": "rolling on floor laughing",
    "🤩": "star-stuck",
    "😂": "face with tears of joy",
    "😘": " face blowing kisses",
    "😔": "sad",
    "🥡": "takeout box",
    "❤️": "love",
    "😑": "annoyance",
    "😋": "face savoring food",
    "🎉": "party popper",
    "🍟": "french fries"
  };
  var [meaning, setOnChange] = useState("");
  function onChangeHandler(event) {
    meaning = emoji[event.target.value];

    if (meaning === undefined) {
      meaning = "Sorry😔 don't have meaning in our database";
    }
    setOnChange(meaning);
  }

  return (
    <div className="App">
      <img className="image" src={require("/static/images/emoji.png")} alt="" />
      <div>
        <h2>
          <span className="title">
            Emoji Search
            <img
              id="glass"
              src={require("/static/images/magnifying.png")}
              alt=""
            />
          </span>
        </h2>
      </div>
      <p>
        Recognising all the different emoji's becomes a difficult task.
        EmojiSearch provides an easy interface to find the find the meaning of
        emoji's instantly.
      </p>
      <input
        onChange={onChangeHandler}
        placeholder="Please enter any object emoji"
      ></input>
      <div className="meanings">"{meaning}"</div>
      <div className="description">
        Search for emoji below or enter one above
      </div>
      <div className="text">
        Here are the most used object emoji's used by users around the world
      </div>
      <ul className="list-unordered">
        <li className="list-items">😀</li>
        <li className="list-items">😊</li>
        <li className="list-items">😘</li>
        <li className="list-items">😉</li>
        <li className="list-items">🤩</li>
        <li className="list-items">😂</li>
        <li className="list-items">😍</li>
        <li className="list-items">🥰</li>
        <li className="list-items">❤️</li>
        <li className="list-items">🤣</li>
        <li className="list-items">😴</li>
        <li className="list-items">😋</li>
        <li className="list-items">😔</li>
        <li className="list-items">😑</li>
        <li className="list-items">🍟</li>
        <li className="list-items">🎉</li>
        <li className="list-items">🥡</li>
      </ul>
    </div>
  );
}
