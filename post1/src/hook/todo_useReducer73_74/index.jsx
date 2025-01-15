import { useReducer, useRef } from "react";
import reducer,{initState} from "./reducer";
import { addJob, setJob, deleteJob } from "./actions";
import Logger from "./logger"
{
//1 init state
// const initState = {
//     job: '',
//     jobs: []

// }
// //2 action
// const SET_JOB = 'SET_JOB'
// const ADD_JOB = 'ADD_JOB'
// const DELETE_JOB = 'DELETE_JOB'

// const addJob = payload => {
//     return {
//         type: ADD_JOB,
//         payload,
//     }
// }
// const setJob = payload => {
//     return {
//         type: SET_JOB,
//         payload,
//     }
// }
// const deleteJob = payload => {
//     return {
//         type: DELETE_JOB,
//         payload,
//     }
// }
// //3 reducer
// const reducer = (state, action) => {


//     let newState

//     switch (action.type) {
//         case SET_JOB:
//             newState = { ...state, job: action.payload }

//             break
//         case ADD_JOB:
//             newState = { ...state, jobs: [...state.jobs, action.payload] }
//             break
//             case DELETE_JOB:
//                 const newJobs = [...state.jobs];  // Tạo bản sao của mảng jobs
//                 newJobs.splice(action.payload, 1);  // Xóa công việc tại chỉ mục
//                 newState = { ...state, jobs: newJobs };  // Cập nhật state
//                 break;
            


//         default:
//             throw new Error('error')
//     }
//     return newState

// }
}// xóa dấu này k bị lỗi bài  bài 
function App() {
    const [state, dispatch] = useReducer(Logger(reducer), initState)
    const { job, jobs } = state

    const inputRef = useRef()

    const handleSubmit = () => {
        dispatch(addJob(job))
        dispatch(setJob(''))

        inputRef.current.focus()
    }
    const handleDelete = (index) => {
        dispatch(deleteJob(index))
    }
    return (
        <div style={{ padding: '20px' }}>
            <h3>todo</h3>

            <input
                ref={inputRef}
                value={job}
                placeholder="enter"
                onChange={(e) => dispatch(setJob(e.target.value))}
            />
            <button onClick={handleSubmit}>Add</button>
            <ul>
                {jobs.map((job, index) => (
                    <li key={index}>{job}{""}
                        <span style={{ cursor: "pointer" }}
                            onClick={() => handleDelete(index)}>
                            &times;
                        </span>

                    </li>
                ))}


            </ul>
        </div>
    )

}
export default App
