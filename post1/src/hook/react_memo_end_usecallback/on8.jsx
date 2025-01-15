
// import { useState } from 'react';
// import Content from './content';

// function App() {
//     const [count, setConut] = useState(0)
//     const [count2, setConut2] = useState(0)
//     const increase = () => {
//         setConut(count + 1)
//     }

//     const increase2 = () => {
//         setConut2(count2 + 1)
//     }

//     return (
//         <div style={{ textAlign: "center" }}>
//             <Content count={count} />
//             <h1>{count}</h1>
//             <h1>{count2}</h1>
//             <button onClick={increase}>Click me!</button>
//             <button onClick={increase2}>Click me2!</button>
//         </div>
//     );
// }
// export default App

// import { useState,  } from 'react';
// import Content from './content';

// function App() {
//     const [count, setConut] = useState(0)

//     const hendleIncrease = () => {
//         setConut(count + 1)
//     }

 
//     return (
//         <div style={{ textAlign: "center" }}>
//             <Content  onIncrease = {hendleIncrease}/>
//             <h1>{count}</h1>
          
        
         
//         </div>
//     );
// }
// export default App





import { useState, usecallback  } from 'react';
import Content from './content';

function App() {
    const [count, setConut] = useState(0)

    const hendleIncrease = usecallback(() => {
        setConut(prevCount => count + 1)
    }, [])

 
    return (
        <div style={{ textAlign: "center" }}>
            <Content  onIncrease = {hendleIncrease}/>
            <h1>{count}</h1>
          
        
         
        </div>
    );
}
export default App




