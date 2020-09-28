import React, { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import { db } from "../../firebase/firebase";
import "./TinderCards.css";

function TinderCards() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    db.collection("people").onSnapshot((snapshot) =>
      setPeople(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    <div>
      <div className="tinderCards__cardContainer">
        {people.map(({ name, url }) => (
          <TinderCard
            className="swipe"
            key={name}
            preventSwipe={["up", "down"]}
          >
            <div
              style={{
                backgroundImage: `url(${url})`,
              }}
              className="card"
            >
              <h3>{name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
