import { useState } from "react";

function Counter() {
     const [count, setCount] = useState(0);

     return (
       <div>
         <p style={{background:"white",color: "blue"}}>Current Count: {count}</p>
         <button onClick={() => setCount(count + 1)}>Increment</button>
         <button onClick={() => setCount(count - 1)}>Decrement</button>
         <br /><br/>
         <button onClick={() => setCount(0)}>Reset</button>
       </div>
     );
   }

export default Counter;