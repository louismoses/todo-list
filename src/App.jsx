import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/todos")
      .then((res) => res.json())
      .then((data) => {
        setData(data.todos);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <h1>TO DO LIST</h1>
      <ul>
        {data.map((data) => {
          return <li key={uuidv4()}>{data.todo}</li>;
        })}
      </ul>
    </>
  );
}

export default App;
