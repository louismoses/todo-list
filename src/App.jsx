import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://dummyjson.com/todos")
      .then((res) => res.json())
      .then((json) => setData(json))
      .then(() => setLoading(false));
  }, []);

  if (loading) return <h5>Loading...</h5>;
  console.log(data.todo);
  return (
    <>
      <h1>TO DO LIST</h1>
      <p>hi {data.todo}</p>
    </>
  );
}

export default App;
