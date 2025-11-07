import { useState } from "react";

// hook 函数
function useToggle() {
  let [show, setshow] = useState(true);
  let tog = () => {
    setshow(!show);
  }
  return {
    show,
    tog
  }
}

function App() {
  let {show, tog} = useToggle();
  return (
    <div className="App">
      {show && (<div>this is app</div>)}
      <button onClick={tog}>Toggle</button>
    </div>
  );
}

export default App;