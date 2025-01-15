import React from 'react';
import ReactDOM from 'react-dom/client';
// import UseState from './useContext75/on12.jsx';
// import {StoreProvider} from './Store'; 
// import App from './Context_useReducer77/App.jsx';

// {//xóa dấu này k bị lỗi bài  bài on8.jsx
// //fake comments
// function emitComment(id) {
//   setInterval(() => {
//     window.dispatchEvent(
//       new CustomEvent(`lesson-${id}`, {
//         detail: `nội dung comment của lesson ${id}`
//       })
//     )

//   }, 2000)
// }

// emitComment(1)
// emitComment(2)
// emitComment(3)
// }
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
 // <UseState />// chạy 1 lần 

 // chạy 2 lần kiểm tra lỗi
  <React.StrictMode>
    <StoreProvider>
        <App/> 
    </StoreProvider>
     
  </React.StrictMode>
);
