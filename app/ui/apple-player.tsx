import React from "react";

export default function AppleMusicEmbed() {

  // Direct rendering of the iframe in JSX is often preferred in React
  return (
    <iframe
      allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
      height="450"
      className="w-full overflow-hidden p-4 pt-0 h-[475px] mx-auto justify-center w-full sm:flex-row sm:max-w-4xl"
      sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
      src="https://embed.music.apple.com/us/playlist/a-slice/pl.u-4JommGltXBkxa7"
    ></iframe>
  );
}
