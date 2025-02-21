import {SET_JOB, ADD_JOB, DELETE_JOB} from './const';

export const initState = {
    job: '',
    jobs: []

}


const reducer = (state, action) => {




    switch (action.type) {
        case SET_JOB:
            return  { ...state, job: action.payload }

            
        case ADD_JOB:
            return  { ...state, jobs: [...state.jobs, action.payload] }
            
            
            case DELETE_JOB:
                const newJobs = [...state.jobs];  // Tạo bản sao của mảng jobs
                newJobs.splice(action.payload, 1);  // Xóa công việc tại chỉ mục
                return  { ...state, jobs: newJobs };  // Cập nhật state
            


        default:
            throw new Error('error')
    }

}

export default reducer