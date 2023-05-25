import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

export default function ImageDetails() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");
  console.log("id=", id); // Access the id parameter from the route path
  const [images, setImageDetails] = useState(null);

  useEffect(() => {
    const fetchImageDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.thecatapi.com/v1/images/search?id=${id}`,
          {
            headers: { "x-api-key": process.env.REACT_APP_CAT_API },
          }
        );
        console.log("response.data=", response.data);
        setImageDetails(response.data);
      } catch (error) {
        console.error("Error fetching image details:", error);
      }
    };

    fetchImageDetails();
  }, [id]);

  if (!images) {
    return <div>Loading image details...</div>;
  }

  return (
    <div style={{ 
      display: 'flex', // to have a box
     justifyContent: "center", // to show vertically center
     alignItems: "center", // to align vertically
      border: '3px solid black'
      }}>
      <h2>Image Details</h2>
      {images.map((imageDetails) => (
        <div >
          <img
            src={imageDetails.url}
            alt={imageDetails.id}
            style={{ width: "15rem", height: "15em", maxWidth: "100%" }}
          />
          <p>Breed: {imageDetails.width}</p>
          <p>Origin: {imageDetails.height}</p>
        </div>
      ))}
      {/* Display other relevant image details */}
    </div>
  );
}
