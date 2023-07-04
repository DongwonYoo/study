import React from "react";

const Call = ({ top100Films }) => {
  return (
    <div>
      {top100Films.map((film, index) => (
        <p key={index}>{film.label}</p>
      ))}
    </div>
  );
};
export default Call;
