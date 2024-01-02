import { useState } from "react"


function App() {
    const [counter, setCounter] = useState(1)

    const increment = () => {
      setCounter(curValue => curValue +1)
    }

    const decrement = () => {
      if (counter === 0) return 
        setCounter(curValue => curValue - 1)
      }

    return(
        <div>
            <h1>Count : {counter}</h1>
            <button onClick={decrement}>Decrement</button>
            <button onClick={increment}>Increment</button>
        </div>
    );
}

export default App;