import React, { useState, useContext } from 'react';
import { ThemeContext } from './App';

//because we have simple props, it is easier to read if we skip 'props' and use object deconstruction, by calling {initialCount}
export default function CounterHooks({ initialCount }) {
  const [count, setCount] = useState(initialCount);
  const style = useContext(ThemeContext);
  return (
    <div>
      <button style={style} onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
      <span>{count}</span>
      <button style={style} onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
    </div>
  );
}
// export default function CounterHooks({ initialCount }) {
//   const [state, setState] = useState({ count: initialCount });
//   return (
//     <div>
//       <button onClick={() => setState(prevState => { return { count: prevState.count - 1}})}>-</button>
//       <span>{state.count}</span>
//       <button onClick={() => setState(prevState => { return { count: prevState.count + 1}})}>+</button>
//     </div>
//   );
// }