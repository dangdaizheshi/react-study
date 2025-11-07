function Son(props) {
  const sonmsg = 'this is sonmsg'
  return (
    <div>
      this is son
      <br />
      <p>{props.name}</p>
      <button onClick={() => props.onGetSonMsg(sonmsg)}>按钮</button>
    </div>
  )
}

function App() {
  const name = 'catr';
  const getSon = (msg) => {
    console.log(msg);
  }
  return (
    <div className="App">
      this is app
      <br />
      <Son name = {name} onGetSonMsg = {getSon}></Son>
    </div>
  );
}

export default App;