import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Box, Image } from "theme-ui";
import axios from "axios";


export default function Ecommerce() {
  const [cats, setCats] = useState(null);
  const navigate = useNavigate();

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
    navigate(`/details?id=${image.id}`, { state: { name:'Xyz' }});
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
        margin: '2em',  //em is responsive % based on the parent font size, rem is same but depend on root font size 
        padding: "2em",
        border: "1px solid gray",
        width: ["100%", "25%"], // Adjust the width based on screen size
        "&:hover": {
          transform: "scale(1.1)",
        },
      }}
     
      onClick={() => handleImageClick(item)}
      
      >
        {item.id}
        <Image  src={item.url} style={{ width: "30rem", height: "15em", maxWidth: "100%" }} />
      </Box>
      
      )}
   
    </div>
  );
}


