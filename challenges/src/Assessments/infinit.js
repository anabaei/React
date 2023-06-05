import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import { Box, Grid, Image } from "theme-ui";

export default function InfiniteScrollComponent() {
  const [data, setData] = useState([]); // Array to store the fetched data
  const [page, setPage] = useState(1); // Current page number
  const [hasMore, setHasMore] = useState(true); // Flag to indicate if there is more data to load
  let prevId=0
  // Function to fetch more data
  const fetchMoreData = async () => {
    // Simulate API call or fetch data from an external source
    // In this example, we  use a setTimeout to simulate an async operation
    let prevPage = page;
    console.log("page=== ", prevPage, data.length);
    const response = await axios.get(
      `https://api.github.com/search/commits?q=a&page=${prevPage}&per_page=10`
    );

    setData((prevData) => [...prevData, ...response.data.items]);
    const maxPages = response.data.total_count;
    setPage((prevPage += 1));
    if (prevPage === maxPages) {
      setHasMore(false);
    }
  };

  // Fetch initial data when the component mounts
  useEffect(() => {
    fetchMoreData();
  }, []);

  const displayList = () =>{
   return(
       data.map((item, index) => {
           if(item.author && prevId !==item.author.id){
            prevId = item.author.id
             return (
                <Box>

                 <Image src={item.author.avatar_url} alt={item.author.id} />
                 <div>{item.author.login}</div>
                 
               </Box>
             )
           }
       })
   )
}


  return (
    <InfiniteScroll
      dataLength={data.length} // Length of the data array
      next={fetchMoreData} // Function to load more data
      hasMore={hasMore} // Flag to indicate if there is more data to load
      loader={<h4>Loading...</h4>} // Optional loader component to display while loading
      endMessage={<p>No more data to load</p>} // Message to display when all data has been loaded
    >
      {/* Render your data */}
      <Grid
        gap={5}
        columns={[1, 2, 3]}
        sx={{
          //   alignContent: "center",
          textAlign: "center",
        }}
      >

     {displayList()}
        </Grid>
    </InfiniteScroll>
  );
}
