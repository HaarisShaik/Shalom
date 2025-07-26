import React, { useState } from 'react';

function ProfilePage({ user }) {
  const [role, setRole] = useState(user.role);

  const toggleRole = () => {
    setRole(prev => (prev === 'Giver' ? 'Taker' : 'Giver'));
  };

  return (
    <div className="max-w-xl mx-auto bg-white shadow-md rounded-lg p-6 mt-8 space-y-6">
      <div className="flex flex-col items-center text-center">
         <img
        src={user.avatarUrl}
        alt="Avatar"
        className="w-32 h-32 rounded-full object-cover border"
      />
        <h2 className="text-2xl font-bold">{user.name}</h2>
        <div>
        {user.verified ? (
        <p className="text-green-600 font-medium">✅ Verified User</p>
        ) : (
        <p className="text-red-500 font-medium">Not Verified</p>
        )}
        </div>
        <p className="text-gray-600">{user.bio}</p>
      </div>



      <div className="text-center">
        <p className="font-semibold">Current Role: <span className="text-indigo-600">{role}</span></p>
        <button
          onClick={toggleRole}
          className="mt-2 px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded transition"
        >
          Switch Role
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4 text-center">
        <div>
          <p className="text-gray-500">Requests Posted</p>
          <p className="text-lg font-semibold">{user.requestsPosted}</p>
        </div>
        <div>
          <p className="text-gray-500">Help Given</p>
          <p className="text-lg font-semibold">{user.helpGiven}</p>
        </div>
      </div>

      <div>
        <p className="font-semibold">Rank: <span className="text-yellow-600">{user.rank}</span></p>
        <div className="w-full bg-gray-200 h-3 rounded overflow-hidden mt-1">
          <div
            className="bg-yellow-500 h-full"
            style={{ width: `${user.points}%` }}
          />
        </div>
        <p className="text-sm text-gray-600 mt-1">{user.points}/100 points</p>
      </div>
      <div>
  <h3 className="text-lg font-semibold mb-2">Uploaded Videos</h3>
  {user.videos.length > 0 ? (
    <div className="space-y-3">
      {user.videos.map((video, index) => {
        // Check if video is a YouTube URL or ID (simplified)
        const isYouTube = video.includes("youtube.com") || video.includes("youtu.be");

        if (isYouTube) {
          // Extract video ID from YouTube URL (basic approach)
          const videoIdMatch = video.match(
            /(?:youtube\.com\/.*v=|youtu\.be\/)([^&?/]+)/
          );
          const videoId = videoIdMatch ? videoIdMatch[1] : null;

          return videoId ? (
            <div
              key={index}
              className="video-responsive rounded overflow-hidden"
              style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}
            >
              <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                title={`YouTube video ${index}`}
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : (
            <p key={index} className="text-red-500">Invalid YouTube link</p>
          );
        } else {
          // Assume direct video file URL
          return (
            <video key={index} src={video} controls className="w-full rounded" />
          );
        }
      })}
    </div>
  ) : (
    <p className="text-gray-500">No videos uploaded</p>
  )}
</div>

    </div>
  );
}

export default ProfilePage;
