import { useEffect, useState } from "react";

function Son() {
  useEffect(() => {
    const timmer = setInterval(() => {
      console.log("time++");
    }, 2000)

    return () => {
      clearInterval(timmer);
    }
  }, [])
  return (
    <div>this is son</div>
  )
}

function App() {
  const [show, setshow] = useState(true);
  return (
    <div className="App">
      {show && <Son></Son>}
      <br/>
      <button onClick={() => setshow(false)}>按钮</button>
    </div>
  );
}

export default App;