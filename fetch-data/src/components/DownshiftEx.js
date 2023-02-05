import { AutoComplete } from 'antd';
import { useState, useEffect } from 'react';

const DropdownCombobox = () => {


  //////// set fetch //////////////
  const [smallData, setSmallData] = useState();
  function getAPI(){
    return fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false
    `)
      .then(response => response.json())
      .then(data => setSmallData(data)); 
  }

  useEffect(() => {
    async function fetchData() {
        await getAPI();
       
    }

    fetchData();
    console.log(smallData)
  }, []); 

  ////////////////////////////////
  const [options, setOptions] = useState([]);
  const handleSearch = (value) => {
    let res = [];
    if (!value || value.indexOf('@') >= 0) {
      res = [];
    } else {
      res = ['gmail.com', '163.com', 'qq.com'].map((domain) => ({
        value: domain,
        label: (
            <div>
               {`${value}@${domain}`} 
               <a
                href={`https://s.taobao.com/search`}
                target="_blank"
                rel="noopener noreferrer"
              >A </a>
            </div>
        )
        
      }));
    }
    setOptions(res);
  };
  return (
    <div>
      
        <AutoComplete
          style={{
            width: 200,
          }}
          onSearch={handleSearch}
          placeholder="input here"
          options={options}
        />
    </div>
  );
};
export default DropdownCombobox