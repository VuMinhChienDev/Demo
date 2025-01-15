

// import { useRef, useState, useEffect } from 'react';


// function Content() {
//     const [count, setCount] = useState(60);

//     const ref = useRef(99)
//     console.log(ref.current)



//     let timeId = useRef()

//     const handleStart = () => {

//         timeId.current = setInterval(() => {

//             ref.current = Math.random()
//             setCount((prevCount) => prevCount - 1);
//         }, 1000);

//         console.log('start ->', timeId.current);
//     };

//     const handleStop = () => {
//         clearInterval(timeId.current); // Xóa interval
//         console.log('stop ->', timeId.current);
//     };

//     return (
//         <div style={{ padding: 20 }}>
//             <h1>{count}</h1>
//             <button onClick={handleStart}>Start</button>
//             <button onClick={handleStop}>Stop</button>
//         </div>
//     );
// }

// export default Content;




// bài 2

import { useRef, useState, useEffect } from 'react';


function Content() {
    const [count, setCount] = useState(60);

    const ref = useRef()
    console.log(ref.current)



    const timeId = useRef()
    const prevCount = useRef()
    const h1Ref = useRef()

    useEffect(() => {
        prevCount.current = count
    }, [count])
    useEffect (() =>{
        // console.log(h1Ref.current)
        const rect = h1Ref.current.getBoundingClientRect()

    console.log(rect);
    })
    
    // start
    const handleStart = () => {

        timeId.current = setInterval(() => {

            // ref.current = Math.random()
            setCount((prevCount) => prevCount - 1);
        }, 1000);

        console.log('start ->', timeId.current);
    };
     // stop
    const handleStop = () => {
        clearInterval(timeId.current); 
        console.log('stop ->', timeId.current);
    };

    console.log(count, prevCount.current);

    return (
        <div style={{ padding: 20 }}>
            {/* <h1>{count}</h1> */}
            <h1 ref={h1Ref}>{count}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    );
}

export default Content;
