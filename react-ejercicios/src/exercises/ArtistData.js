import React, { useState, useEffect } from "react";
import Artist from "./Artist";

const ArtistData = ({ artist2, artist1 }) => {
  if (!artist2 || !artist1) return null;

  return (
    <div>
      <Artist artistData={artist1.artists[0]}></Artist>
      <Artist artistData={artist2.artists[0]}></Artist>
    </div>
  );
};

export default ArtistData;
