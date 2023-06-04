import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import { Box, Grid, Image } from "theme-ui";

export default function InfiniteScrollComponent() {
  const [data, setData] = useState([]); // Array to store the fetched data
  const [page, setPage] = useState(1); // Current page number
  const [hasMore, setHasMore] = useState(true); // Flag to indicate if there is more data to load
  // Function to fetch more data
  const fetchMoreData = async () => {
    // Simulate API call or fetch data from an external source
    // In this example, we  use a setTimeout to simulate an async operation
    let prevPage = page;
    console.log("page=== ", prevPage);
    const response = await axios.get(
      `https://reqres.in/api/users?page=${prevPage}`
    );
    console.log(response.data);
    setData(response.data.data);
    const maxPages = response.data.total;
    setPage((prevPage += 1));
    console.log("maxPages", maxPages, hasMore);
    if (page === maxPages) {
      setHasMore(false);
    }
    try {
      setData((prevData) => [...prevData, ...response.data.data]);
    } catch (error) {
      console.log(error);
    }
  };

  // Fetch initial data when the component mounts
  useEffect(() => {
    fetchMoreData();
  }, []);

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
        gap={3}
        columns={[1, 2, 3]}
        sx={{
          //   alignContent: "center",
          textAlign: "center",
        }}
      >
        {data.map((item, index) => (
          <Box columns={[1]} key={index} sx={{ border: "1px solid grey" }}>
            <Box>
              <Image src={item.avatar} alt={item.id} />
            </Box>
            <div>{item.first_name}</div>
            <div>{item.email}</div>
          </Box>
        ))}
      </Grid>
    </InfiniteScroll>
  );
}
