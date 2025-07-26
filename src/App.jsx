import * as React from 'react';
import { useState } from "react";
import ProfilePage from './profilePage/ProfilePage.jsx';
import profilePicture from './assets/profilePicture.jpeg'; // adjust path as needed


function App() {
  const [color, setColor] = useState("white");
  const [showProfile, setShowProfile] = useState(false);

  const user = {
    name: "Haaris Shaik",
    bio: "Trying to help where I can :)",
    avatarUrl: "https://avatars.githubusercontent.com/u/64676631?v=4",
    role: "Taker",
    requestsPosted: 5,
    helpGiven: 3,
    rank: "Jesus",
    points: 85,
    verified: true,
    videos: ["https://youtu.be/Fv3ozNn-lEQ?si=KX5SJKrjSLNt-kM9"]
  };

  return (
    <div
      className="w-full h-screen duration-200 overflow-auto"
      style={{ backgroundColor: color }}
    >
      {/* Profile view shown if toggled */}
      {showProfile && (
        <div className="p-4">
          <ProfilePage user={user} />
        </div>
      )}

      {/* Buttons at the bottom */}
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => {
              setColor("green");
              setShowProfile(false);
            }}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green" }}
          >
            Giver
          </button>

          <button
            onClick={() => {
              setColor("red");
              setShowProfile(false);
            }}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            Reciver
          </button>

          <button
            onClick={() => {
              setColor("#e0f2fe"); // light blue background
              setShowProfile(true);
            }}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#3b82f6" }} // Tailwind blue-500
          >
            Profile
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
