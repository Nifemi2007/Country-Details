import { useEffect, useState } from "react";
import Card from "./components/Card";
import { FaSearch } from "react-icons/fa";

// https://countries.dev/alpha/US
function App() {
  const [data, setData] = useState([]);
  // const [singleData, setSingleData] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    if (searchValue == "") {
      fetch("https://countries.dev/countries")
        .then((res) => res.json())
        .then((data) => {
          const new_data = data.filter((item) => item.capital != "Kabul");
          setData(new_data);
        });
    } else {
      fetch(`https://countries.dev/name/${searchValue}`)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        });
    }
  }, [searchValue]);

  console.log(data);

  return (
    <div className="App">
      <div className="input">
        <input
          type="search"
          name="search"
          placeholder="Enter country"
          onChange={(e) => setUserInput(e.target.value)}
        />
        <FaSearch
          className="btn"
          onClick={() => setSearchValue(userInput.trim())}
        ></FaSearch>
      </div>

      <div className="cards">
        {data.map((item) => {
          const currency = item.currencies?.[0];
          // console.log(item.name);

          return (
            <Card
              key={item.alpha2Code}
              country={item.name || "N/A"}
              capital={item.capital || "N/A"}
              currency={currency?.name || "N/A"}
              symbol={currency?.symbol || "N?A"}
              image={item.flags?.png}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
