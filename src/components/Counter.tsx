import { useSelector } from "react-redux";
import { RootState } from "@reduxjs/toolkit/query";
import { increment } from "../app/features/counter/counterSlice";
import { useAppDispatch } from "../app/store";

const Counter = () => {
  const {value} =useSelector(({counter}: RootState)=> counter);
   const dispatch = useAppDispatch()
  return (
    <div>
      <p>Counter: {value}</p>
      <button onClick={()=> dispatch(increment(2))}>increase</button>
    </div>
  );
};

export default Counter;
