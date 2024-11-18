import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterReducer";
export default function CounterRedux() {
  const { count } = useSelector((state: any) => state.counterReducer);
  const dispatch = useDispatch();
  return (
    <div id="wd-counter-redux">
      <h2>Counter Redux</h2>
      <h3>{count}</h3>
      <button className="btn btn-primary m-2" onClick={() => dispatch(increment())}
              id="wd-counter-redux-increment-click"> Increment </button>
      <button className="btn btn-primary m-2" onClick={() => dispatch(decrement())}
              id="wd-counter-redux-decrement-click"> Decrement </button>
      <hr/>
    </div>
  );
}
