import {useStore, actions} from './Store'
function App() {

    const [state, dispatch] = useStore()
    const {todos, todoInput} = state
  
    return (
        <div>
            <input
            value={todoInput}
            placeholder="enter"
            onChange={e => {dispatch(actions.setTodoInput (e.target.value))}}
            />
        </div>
    )

}
export default App