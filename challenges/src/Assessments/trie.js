import React, { useState } from 'react';
const root = {
  "a": {
    "p": {
      "p": {
        "l": {
          "e": {
            "isEndOfWord": true
          }
        }
      }
    },
    "r": {
      "p": {
        "l": {
          "e": {
            "isEndOfWord": true
          }
        }
      }
    }
  },
  "b": {
    "a": {
      "n": {
        "a": {
          "n": {
            "a": {
              "isEndOfWord": true
            }
          }
        }
      }
    }
  },
  "c": {
    "a": {
      "r": {
        "isEndOfWord": true,
        "t": {
          "i": {
            "s": {
              "a": {
                "n": {
                  "isEndOfWord": true
                }
              }
            }
          }
        }
      }
    }
  }
};

export default function Trie() {
  const [suggestions, setSuggestions] = useState([]);
  //const [root, setRoot] = useState({});
  
  const insert = (word) => {
    let node = root;
    console.log("node 1", node)
    for (let char of word) {
      if (!node[char]) {
        node[char] = {};
      }
      node = node[char];
    }
    console.log("node 2", node)
    node.isEndOfWord = true;
  };

  const search = (prefix) => {
    let node = root;
    console.log("node A ", node)
    for (let char of prefix) {
      if (!node[char]) {
        return [];
      }
      console.log("node B ", node)
      node = node[char];
    }
    return getSuggestions(node, prefix);
  };

  const getSuggestions = (node, prefix) => {
    let suggestions = [];
    if (node.isEndOfWord) {
      suggestions.push(prefix);
    }
    for (let char in node) {
      console.log('char-- ',suggestions, char)
      if (char !== 'isEndOfWord') {
        suggestions = suggestions.concat(
          getSuggestions(node[char], prefix + char)
        );
      }
    }
    return suggestions;
  };

  const handleInputChange = (event) => {
    const prefix = event.target.value;
    console.log("prefix", prefix)
    const suggestions = search(prefix);

    setSuggestions(suggestions);
  };

  return (
    <div>
      <input
        type="text"
        onChange={handleInputChange}
        placeholder="Type a word..."
      />
      <ul>
        {suggestions.map((word, index) => (
          <li key={index}>{word}</li>
        ))}
      </ul>
    </div>
  );
};


