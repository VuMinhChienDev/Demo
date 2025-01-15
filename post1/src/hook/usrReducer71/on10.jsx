import {  useReducer } from "react";

// các bước thực hiện useReducer
//1. tạo ra 1 cái state
//2. tạo ra 1 cái action
//3. tạo ra 1 cái reducer
//4. truyền state và dispatch xuống component

//Intit state
const initState = 0

//action
const UP_ACTION = 'UP'
const DOWN_ACTION = 'DOWN'

//reducer
const reducer = (state, action) => {
    console.log('now')
    switch (action.type) {
        case DOWN_ACTION:
            return state + 1
        case UP_ACTION:
            return state - 1
        default:
           throw new Error('error')
    }
}
function App() {
    const [count, dispatch] = useReducer(reducer, initState)



    return (
        <div style={{ textAlign: "center" }}>
            <h1>{count}</h1>
            <button onClick={() => dispatch({ type: DOWN_ACTION })}>
                down
            </button>
            <button onClick={() => dispatch({ type: UP_ACTION })}>
                up
            </button>
        </div>
    )
}
export default App