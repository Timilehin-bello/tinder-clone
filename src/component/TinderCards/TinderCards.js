import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "Steve Jobs",
      url:
        "https://www.biography.com/.image/t_share/MTY2MzU3OTcxMTUwODQxNTM1/steve-jobs--david-paul-morrisbloomberg-via-getty-images.jpg",
    },
    {
      name: "Mak Zuckerberg",
      url:
        "https://www.californiamuseum.org/sites/main/files/imagecache/medium/main-images/screen_shot_2012-07-27_at_6.32.28_pm.png?1578063880",
    },
  ]);
  return (
    <div>
      <h1>TinderCards</h1>
      <div className="tinderCards__cardContainer">
        {people.map(({ name, url }) => (
          <TinderCard
            className="swipe"
            key={name}
            preventSwipe={["up", "down"]}
          >
            <div style={{ backgroundImage: `url(${url})` }} className="card">
              <h3>{name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
