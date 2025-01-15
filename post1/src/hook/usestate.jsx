// THAY ĐỔI STATE VỚI HOOK USESTATE


// import React, { useState } from "react";
// const odres = [1, 2, 3, 4, 5];
// function UseState() {

//   const total = odres.reduce((total, cur) => total + cur);
  
//   const [count, setCount] = useState(total);

//   const hand = () => { 
//     setCount(prevState => prevState + 1);
    
//   };

//   console.log('render');

//   return (
//     <div className="App" style={{ textAlign: "center" }}>
//       <h1>{count}</h1>
//       <button onClick={hand}>Increment</button>
//     </div>
//   );
// }

// export default UseState;




//THAY ĐỔI CHỮ
import React, { useState } from "react";
const odres = [1, 2, 3, 4, 5];

function UseState() {
const [info, setInfo] = useState({
  name: 'Nguyen Van A',
  age: 20,
  address: 'Ha Noi, viet Nam'
})
  

  const hand = () => { 
    setInfo({
      ...info,
      bio: 'hello everyone'
    })
   
    
  };

  console.log('render');

  return (
    <div className="App" style={{ textAlign: "center" }}>
      <h1>{JSON.stringify(info)}</h1>
      <button onClick={hand}>update</button>
    </div>
  );
}

export default UseState;