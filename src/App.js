import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, addToNum } from "./store/modules/counterStore";

function App() {
  const {count} = useSelector(state => state.counter)
  const dispatch = useDispatch() //只能用 dispatch 方法修改 redux 中的数据
  const a = 10;
  return (
    <div className="App">
      {count}
      <button onClick={() => dispatch(addToNum(a))}>+{a}</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

export default App;