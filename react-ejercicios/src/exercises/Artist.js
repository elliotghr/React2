import React, { useState } from "react";
const Artist = ({ artistData }) => {
  return (
    <div>
      <h2>Artist</h2>
      <blockquote>{artistData.strBiographyES}</blockquote>
    </div>
  );
};

export default Artist;
