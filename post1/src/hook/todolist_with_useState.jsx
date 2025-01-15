// // import React,{useState} from "react";

// // function App() {
// //     const [job, setJobs] = useState('')
// //     const [jobs, setjobs] = useState([])

// //     console.log(job);
// //   return (
// //     <div style={{ textAlign: "center" }}>
// //       <input
// //       onChange={setJobs(e.target.value)}


// //        />
// //       <button>add</button>

// //       <ul>
// //        {jobs.map((job, index) => (
// //         <li key={index}>{job}</li>
// //        ))} 
// //       </ul>
// //     </div>
// //   );
// // }
// import React, { useState } from "react";

// function App() {
//     const [job, setJob] = useState('');
//     const [jobs, setJobs] = useState([]);

//     const handleAddJob = () => {
//         setJob(prev => {
//             setJobs(prev => [...prev, job]);

//             const jsonjobs = JSON.stringify(jobs);


//             console.log(jsonjobs);

//             return newJobs;
//         })
//         setJob(''); // Clear input after adding job

//     };

//     return (
//         <div style={{ textAlign: "center" }}>
//             <input
//                 value={job}
//                 onChange={e => setJob(e.target.value)}
//                 placeholder="Enter job"
//             />
//             <button onClick={handleAddJob}>Add</button>

//             <ul>
//                 {jobs.map((job, index) => (
//                     <li key={index}>{job}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default App;

import React, { useState } from "react"

function App() {
    

    const [job, setJob] = useState('')
    const [jobs, setJobs] = useState(() => {
        const StorageJobs =JSON.parse (localStorage.getItem('jobs'))
        return StorageJobs || []
    })

    const handleAddJob = () => {
        setJobs(prev => {
            const newJobs = [...prev, job]
            const jsonJobs = JSON.stringify(newJobs)
            localStorage.setItem('jobs', jsonJobs)
            return newJobs
        })
        setJob(''); // Clear input after adding job
    }

    React.useEffect(() => {
        const jsonJobs = JSON.stringify(jobs)
        console.log(jsonJobs)
    }, [jobs])

    return (
        <div style={{ textAlign: "center" }}>
            <input
                value={job}
                onChange={e => setJob(e.target.value)}
                placeholder="Enter job"
            />
            <button onClick={handleAddJob}>Add</button>

            <ul>
                {jobs.map((job, index) => (
                    <li key={index}>{job}</li>
                ))}
            </ul>
        </div>
    )
}

export default App;