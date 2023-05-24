import { useState, useEffect } from "react";
import { Box, Image } from "theme-ui";
import axios from "axios";

export default function Ecommerce() {
  const [cats, setCats] = useState(null);

  const api =
    "https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng";
  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get(api, {
        "x-api-key": process.env.REACT_APP_CAT_API,
      });
      console.log(res.data);
      setCats(res.data);
    };

    getCats();
    return getCats;
  }, []);
  
  const handleImageClick = (image) => {
    // Handle image click and get more details
    console.log("Clicked image:", image);
  };

  return (
    <div>
   
      {
      cats && cats.map((item, index) => 

      <Box 
      key={index}
      sx={{
        display: "inline-block",
        cursor: "pointer",
        m: 2,
        padding: "2%",
        border: "1px solid gray",
        width: ["100%", "25%"], // Adjust the width based on screen size
        "&:hover": {
          transform: "scale(1.1)",
        },
      }}
     
      onClick={() => handleImageClick(item)}
      
      >
        {item.id}
        <Image src={item.url} />
      </Box>
      
      )}
   
    </div>
  );
}


