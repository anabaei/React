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

  const handleInput = (e) => {
    setQuery(e.target.value);
    //  handlesearch()
  };

  useEffect(() => {
    handlesearch();
  }, [query]);

  return (
    <>
      <input value={query} onChange={handleInput} />
      {/* {users} */}
      {users.length ? (
        users.map((user, index) => {
          return (
            <div key={index}>
              {user.login}: {user.html_url}
            </div>
          );
        })
      ) : (
        <div>No Result</div>
      )}
    </>
  );
}
