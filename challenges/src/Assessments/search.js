import { useState, useEffect } from "react";
import axios from "axios";

export default function Search() {


  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");
  const [lastReq, setLastReq] = useState(0);

  const handlesearch = async () => {
    const now = Date.now();
    if (now - lastReq < 2000) {
      console.log("too many request");
      return;
    }
    try {
      console.log("query=", query);
      const response = await axios.get(
        `https://api.github.com/search/users?q=${query}`
      );
      response.status === 200 ? 
      setUsers(response.data.items) : 
      console.log("ss");
      setLastReq(now);
    } catch (error) {
      console.log(error);
    }
  };

  const sortData = (data, type) => {
    let sortedData = [...data]; // Create a new array by spreading the original data
  
    switch (type) {
      case "url":
        sortedData.sort((a, b) => (a.html_url > b.html_url ? 1 : -1));
        break;
      case "login":
        sortedData.sort((a, b) => (a.login > b.login ? 1 : -1));
        break;
      case "id":
        sortedData.sort((a, b) => (a.id > b.id ? 1 : -1));
        break;
      default:
        break;
    }
  
    setUsers(sortedData);
  };
  
  // const sortData = (data, type) => {
  //   switch (type) {
  //     case "url":
  //       data.sort((a,b)=> (a.html_url>b.html_url)? 1: -1)
  //       setUsers(data) 
  //       console.log(data)
  //       break;
  //     case "login":
  //       data.sort((a,b)=> (a.login>b.login)? 1: -1)
  //       setUsers(data) 
  //       console.log(data)
  //       break;
  //     case "id":
  //       data.sort((a,b)=> (a.id>b.id)? 1: -1)
  //       setUsers(data) 
  //       console.log(data)
  //       break;
  //     default:
  //       break;
  //   }
    
  // }
  const handleInput = (e) => {
    setQuery(e.target.value);
    //  handlesearch()
  };

  const handleSorting = (e) =>{

    sortData(users, e.target.value)
  }

  useEffect(() => {
    handlesearch();
   
    // sort data
  }, [query]);

  return (
    <>
      <button value="url" onClick={handleSorting}> url order</button>
      <button value="login" onClick={handleSorting}> login order</button>
      <button value="id" onClick={handleSorting}> id </button>
      <input value={query} onChange={handleInput} />
      {/* {users} */}
      {users.length ? (
        users.map((user, index) => {
          return (
            <div key={index}>
             {user.id} : {user.login}: {user.html_url}
            </div>
          );
        })
      ) : (
        <div>No Result</div>
      )}
    </>
  );
}
