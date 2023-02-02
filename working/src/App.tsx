import React, { useEffect, useState } from "react";
import "./App.css";

const files = {
  children: [
    {
      name: "node133",
    },
    {
      name: "node1",
      children: [
        {
          name: "node2-sub",
        },
      ],
    },
    {
      name: "node.module",
      children: [
        {
          name: "app.js-sub",
        },
      ],
    },
    {
      name: "node.module",
      children: [
        {
          name: "app.jsp-sub",
        },
      ],
    },
  ],
};

type TEntry = {
  name: string;
  children?: TEntry[];
};

function Entry({ name, children }: TEntry) {
  const [isExanpded, setExpand] = useState(false);
  return (
    <div>
      <button className="entry" onClick={() => setExpand(!isExanpded)}>
        {children?.length && isExanpded ? "-" : "+"}
        {name}
      </button>
      {isExanpded && (
        <div>
          {children?.map((entry) => (
            <Entry {...entry} />
          ))}
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {files.children.map((entry) => (
          <Entry {...entry} />
        ))}
      </header>
    </div>
  );
}

export default App;
