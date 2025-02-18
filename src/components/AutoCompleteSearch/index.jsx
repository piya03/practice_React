import { useEffect, useState } from "react";
import "./styles.css";

export default function AutoCompleteSearch() {
  const [value, setValue] = useState("");
  const [productData, setProductData] = useState([]);
  const [cacheData, setCacheData] = useState({});

  async function apiCall() {
    const res = await fetch(`https://dummyjson.com/products/search?q=${value}`);
    const data = await res.json();
    setProductData(data);
    setCacheData((prev) => ({
      ...prev,
      [value]: data,
    }));
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      if (value) {
        if (cacheData[value]) {
          console.log(cacheData[value], "cacheData[value]");
          return setProductData(cacheData[value]);
        } else {
          apiCall();
        }
      }
    }, 300);
    return () => clearTimeout(timer);
  }, [value]);

  return (
    <div className="App">
      <label htmlFor="search">
        {" "}
        Search{" "}
        <input
          placeholder="Enter Text"
          id="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        {value && <span onClick={() => setValue("")}>✖️</span>}
      </label>

      <div className="results">
        {productData?.products?.map((each, i) => {
          return (
            <p key={i} onClick={() => setValue(each?.title)}>
              {each?.title}
            </p>
          );
        })}
      </div>
    </div>
  );
}
