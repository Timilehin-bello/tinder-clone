import React from "react";
import Chat from "../Chat/Chat";

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Ashley Graham"
        message="Yo babe"
        timestamp="40 second ago"
        profilePic="https://media.wnyc.org/i/800/0/l/85/1/rsz_photo_credit_cass_bird.jpg"
      />

      <Chat
        name="Anita Wilson"
        message="I miss you. Can't wait to see you"
        timestamp="50 minute ago"
        profilePic="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
      />

      <Chat
        name="Maia Kiwi"
        message="Baby, I'm moving to Canada"
        timestamp="40 second ago"
        profilePic="https://tul.imgix.net/content/article/Maia-Cotton.jpg?auto=format,compress&w=1200&h=630&fit=crop"
      />

      <Chat
        name="Hannah Ann"
        message="Hello dear, I;m coming over tonight"
        timestamp="2 weeks ago"
        profilePic="https://inega.in/v2/models/female/eugenia/188.jpg"
      />
    </div>
  );
}

export default Chats;
