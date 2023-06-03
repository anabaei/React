// render a div including a function to handle rating
// define a function to average rating
// define a loop to 5, change select class based on average compare
import React, { useState } from "react";
import { Input, Box, Grid, Button, ThemeProvider } from "theme-ui";

export default function Starrating() {
  const [rating, setRating] = useState(0);
  const [totalRatings, setTotalRatings] = useState(0);
  const [averageRating, setAverageRating] = useState(0);
  const [historyRating, setHistoryRating] = useState([]);

  const handleRating = (value) => {
    setRating(value);
    setTotalRatings(totalRatings + 1);
    const newAverageRating =
      (averageRating * totalRatings + value) / (totalRatings + 1);
    setAverageRating(newAverageRating.toFixed(1));
    setHistoryRating([...historyRating, value]);
  };

  const renderStar = (rate) => {
    const rates = rate !== null ? rate : rating;
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span
          key={i}
          onClick={() => handleRating(i)}
          style={{
            cursor: "pointer",
            color: i < rates ? "orange" : "gray",
          }}
        >
          &#9733;
        </span>
      );
    }
    return stars;
  };

  return (
    <div>
      <h2>Star Rating</h2>
      <div>{renderStar()}</div>
      <div>
        Average Rating: {averageRating} ({totalRatings} ratings)
      </div>
      <Grid gap={4} columns={[1, 2, 3]}>
        {historyRating &&
          historyRating.map((value) => (
            <div>
              {renderStar(value)}
            </div>
          ))}
      </Grid>
    </div>
  );
}
