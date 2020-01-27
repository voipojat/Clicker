import React, { useState, useEffect } from 'react';
import firebase from './firebase.js'
import prize from './Prize'

function App() {
  const [userPoints, updatePoints] = useState();
  const [gamePoints, changePoints] = useState();
  const [show, changeStatus] = useState(false);
  const [win, handlePoints] = useState();
  const [clicked, changeClick] = useState(false);
  const [reward, changeReward] = useState();
  const [lostMessage, showMessage] = useState(false);
  const db = firebase.firestore();
  let doc = db.collection('counter').doc("EsCnxYuC7BiXTg6EuvOU");
  const counter = db.collection('counter').doc("EsCnxYuC7BiXTg6EuvOU");
  const next = (gamePoints + 10) - (gamePoints % 10);

  useEffect(() => {
    !localStorage.getItem("userPoints") && localStorage.setItem("userPoints", 20);
    updatePoints(parseInt(localStorage.getItem("userPoints"), 10))
    doc.onSnapshot(snapshot => {
      changePoints(parseInt(snapshot.data().count), 10);
    })
    if (userPoints === 0) {
      showMessage(true);
    } else {
      showMessage(false);
    }
  })

  function handleClick() {
    changeClick(true);
    counter.update({ count: gamePoints + 1 });
    updatePoints(userPoints - 1);
    localStorage.setItem("userPoints", userPoints - 1)
    handlePoints(next);
    prize(gamePoints, userPoints, changeReward, changeStatus);
    setTimeout(() => {
      changeClick(false);
    }, 1000);
  }

  function startOver() {
    localStorage.setItem("userPoints", 20)
    showMessage(false)
  }

  return (
    <div>
      {lostMessage === false ? <div style={{ textAlign: "center" }}>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleClick}
          style={{ fontSize: "4rem", marginBottom: "3rem", marginTop: "3rem" }} >Press this!</button>
        <div style={{ fontSize: "4rem" }}>Your points: {userPoints}</div>
        {show === true ? <div style={{ fontSize: "3rem", fontWeight: "bold" }}>You just won {reward} points!!</div> : null}
        {clicked === true && show === false ? <div style={{ fontSize: "2rem" }}>Clicks needed for next prize: <p style={{ fontWeight: "bold" }}>{win - gamePoints} </p></div> : null}
      </div> : null}
      {lostMessage === true ? <div style={{ textAlign: "center", marginTop: "200px", fontSize: "3rem" }}>
        <div >You ran out of points! :(</div>
        <div>Wanna try again? :)</div>
        <button onClick={startOver} className="btn btn-primary">Yes!</button>
      </div> : null}
    </div>
  );
}

export default App;
