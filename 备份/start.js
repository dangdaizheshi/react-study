import { useState } from "react";

function Son(props) {
  return (
    <div>
      <p>this is son</p>
      <p>{props.name}</p>
    </div>
  );
}

function App() {
  const name = '张三';
  let [isShow, setisShow] = useState(true);
  let [count, setcount] = useState(0);
  const list = [
    {
      id:'001',
      info:'Jack'
    },
    {
      id:'002',
      info:'Tom'
    },
    {
      id:'003',
      info:'Jerry'
    },
  ]

  function getName() {
    return '小明'
  }

  function change() {
    setisShow(!isShow);
  }
  
  function addCount() {
    setcount(count + 1);
  }

  return (
    <div className="App">
      this is app
      <br/>
      {"this is root"}
      <br/>
      {name}
      <br/>
      {getName()}
      <br/>
      <ul>
        {list.map(item => <li key = {item.id}>{item.info}</li>)}
      </ul>
      {isShow && <div>展示区</div>}
      <button onClick={change}>点我展示</button>
      <br/>
      <div>{count}</div>
      <div onClick={addCount}>点我加一</div>
      <Son name = {name}/>
    </div>
  );
}

export default App;