//bài 1 ranodm gift là chon1 phần thưởng ngẫu nhiên từ mảng gifts   

// import React, { useState } from 'react';
// const gifts = [
//     'CPU i9',
//     'RAM 32GB',
//     'SSD 1TB',
// ]

// function App(){
//     const [gift, setGift] = useState();

//     const randomGift = () => {
//      const random = Math.floor(Math.random() * gifts.length);
//      setGift(gifts[random]);
//     }
//     return(
//         <div style={{ padding: '20px' }}>
//             <h1>{gift || 'Chưa có phần thưởng'}</h1>
//          <button onClick = {randomGift}>lấy thưởng</button>
//         </div>
//     )
// }
// export default App;


//bài 2
// import React, { useState } from 'react';

// function App() {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');

//     // Hàm xử lý submit
//     const handleSubmit = (e) => {
//         e.preventDefault();  // Ngăn chặn reload trang khi submit
//         console.log(name, email);  // Log giá trị của name và email
//     }

//     return (
//         <div style={{ padding: '20px' }}>
//             <form onSubmit={handleSubmit}>  {/* Sử dụng form và onSubmit để xử lý submit */}
//                 <input
//                     value={name}
//                     onChange={e => setName(e.target.value)}  // Cập nhật name khi nhập vào ô input
//                     placeholder="Nhập tên"
//                 />
//                 <input
//                     value={email}
//                     onChange={e => setEmail(e.target.value)}  // Cập nhật email khi nhập vào ô input
//                     placeholder="Nhập email"
//                 />
//                 <button type="submit">Submit</button>  {/* Nút submit */}
//             </form>
//         </div>
//     );
// }

// export default App;



//bài 3 check radio
// import React, { useState } from 'react';
// const courses = [
//     {
//         id: 1,
//         name: 'ReactJS'
//     },
//     {
//         id: 2,
//         name: 'NodeJS'
//     },
//     {
//         id: 3,
//         name: 'VueJS'
//     }
// ]




// function App() {
//     const mandleClick = () => {

//     }
//     const [checked, setChecked] = useState()

//     console.log(checked);




//     return (
//         <div style={{ padding: '20px' }} >
//             {courses.map(course => (
//                 <div key={course.id}>
//                     <input type='radio' checked = {checked === (course.id)}
//                      onChange={() => setChecked(course.id)} />
//                     {course.name}
//                 </div>
//             ))}
//             <button onClick={mandleClick}>chấm</button>

//         </div>
//     )

// }
// export default App;

//bài 4 check box

import React, { useState } from 'react';
const courses = [
    {
        id: 1,
        name: 'ReactJS'
    },
    {
        id: 2,
        name: 'NodeJS'
    },
    {
        id: 3,
        name: 'VueJS'
    }
]




function App() {
    const mandleClick = () => {

    }
    const [checked, setChecked] = useState([])
    const handlecheck = (id) => {
        // setChecked([id]);    // THÊM 1 DỮ LIỆU MỚI XÓA DỮ LIỆU CŨ
        setChecked(prev => {
            const isChecked = checked.includes(id);
            if (isChecked) {
                return prev.filter(item => item !== id);

            } else {
                return [...prev, id];
            }
    });
    }

    console.log(checked);




    return (
        <div style={{ padding: '20px' }} >
            {courses.map(course => (
                <div key={course.id}>
                    <input type='checkbox' checked={checked.includes(course.id)}
                        onChange={() => handlecheck(course.id)} />
                    {course.name}
                </div>
            ))}
            <button onClick={mandleClick}>chấm</button>

        </div>
    )

}
export default App;
