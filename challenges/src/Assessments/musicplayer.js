import React, {useState, useEffect} from 'react';
import { Image, Box, Button, Flex, Heading, ThemeProvider } from 'theme-ui';

const theme = {
  colors: {
    primary: '#007bff',
  },
};

const images = [
  'https://www.gardenia.net/storage/app/public/guides/detail//rwSSKHMYNadHEJ305uito07eYcgvLnGC1XdveGla.webp',
  'https://media.istockphoto.com/id/187849934/photo/blue-flower-of-cornflower.jpg?s=612x612&w=is&k=20&c=HAjxYPfEEtBP0wZ67olPpT1vFSw6VPajZdMblpSedpA=',
  'https://hips.hearstapps.com/hmg-prod/images/birth-flowers-meaning-august-1672772473.jpg?crop=1xw:0.84375xh;center,top',
  'https://cdn.britannica.com/35/215335-050-61580CCB/close-up-blue-passionflower-Passiflora-caerulea.jpg'
]
export default function MusicPlayer() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const handleLeftButtonClick = () => {
    const index = (currentIndex-1 + images.length)%images.length
    setCurrentIndex(index)
    console.log('Left button clicked');
  };
  

  const handleRightButtonClick = () => {
    const index = (currentIndex+1)%images.length
    setCurrentIndex(index)
    console.log('Right button clicked');
  };
 const testStyle = 'yes'
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ maxWidth: '600px', mx: 'auto', px: '20px', border: '1px solid black' }}>
        <Heading as="h2" sx={{ textAlign: 'center', mb: '20px' }}>
          Music Player
        </Heading>
        <div style={{color: "blue" , textDecoration: testStyle ? "line-through" : "underline",}}>an Image</div>
        <Flex sx={{ justifyContent: 'center' }}>
         <Image 
         src={images[currentIndex]} 
         sx={{ 
          width: 'auto',
          height: '300px',
          // objectFit: 'cover',
        }}
         />
        </Flex>
        <Flex sx={{ justifyContent: 'center' }}>
          <Button
            sx={{ variant: 'primary', mr: '10px' }}
            onClick={handleLeftButtonClick}
          >
            Left
          </Button>
          <Button
            sx={{ variant: 'primary', ml: '10px' }}
            onClick={handleRightButtonClick}
          >
            Right
          </Button>
        </Flex>
      </Box>
    </ThemeProvider>
  );
};

// export default MusicPlayer;
