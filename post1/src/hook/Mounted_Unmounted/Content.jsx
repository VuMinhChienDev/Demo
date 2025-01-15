// // update dom

// import { use } from 'react'
// import { useEffect, useState } from 'react'
// //callback luôn được gọi sau khi component mount
// const tabs = ['posts', 'comments', 'albums',]


// function Content() {
//     const [title, setTitle] = useState('')
//     const [posts, setPosts] = useState([])
//     const [type, setType] = useState('posts')

//     useEffect(() => {
//         fetch('https://jsonplaceholder.typicode.com/posts')
//             .then(res => res.json())
//             .then(posts => {
//                 console.log(posts);
//                 setPosts(posts);



//             })

//     }, [type])
//     useEffect(() => {
//         const hendleScroll = () => {
//             if (window.scrolly >= 200) {
//                 setShowGoToTop(true)

//             } else {
//                 setShowGoToTop(false)
//             }
//             //setShowGoToTop(window.scrollY >= 200)
//         }
//         window.addEventListener('scroll',hendleScroll)
//     }, [])


//     return (
//         <div>
//             {tabs.map(tab => (
//                 <button key={tab} style={type === tab ? {
//                     color: 'red',backgroundColor:'yellow'
//                 } : {
//                 }} onClick={() => setType(tab)}>{tab}</button>
//             ))}
            
//             <input
//                 value={title}
//                 onChange={e => setTitle(e.target.value)}
//             />
//             <ul>
//                 {posts.map(posts => (
//                     <li key={posts.id}>{posts.title}</li>
//                 ))}

//             </ul>
//             {setShowGoToTop && (
//                 <button 
//                 style={{
//                     position:'fixed',
//                     bottom:20,
//                     right:20,
//                     padding:10,
//                     borderRadius:5,
//                     backgroundColor:'green',
//                     color:'white',
//                 }}
//                 >Go to top</button>
//             )}
           
//         </div>

//     )
// }
// export default Content

import { useEffect, useState } from 'react';

// callback luôn được gọi sau khi component mount
const tabs = ['posts', 'comments', 'albums'];

function Content() {
    const [title, setTitle] = useState('');
    const [posts, setPosts] = useState([]);
    const [type, setType] = useState('posts');
    const [showGoToTop, setShowGoToTop] = useState(false); // Khai báo state cho nút Go to top

    // Lấy dữ liệu từ API khi type thay đổi
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setPosts(data);
            });
    }, [type]);

    // Lắng nghe sự kiện scroll
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 200) {
                setShowGoToTop(true);
            } else {
                setShowGoToTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Dọn dẹp sự kiện khi component unmount
        return () => { console.log('unmount...')}
    }, [])

    return (
        <div>
            {tabs.map((tab) => (
                <button
                    key={tab}
                    style={type === tab ? { color: 'red', backgroundColor: 'yellow' } : {}}
                    onClick={() => setType(tab)}
                >
                    {tab}
                </button>
            ))}

            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>

            {/* Hiển thị nút "Go to top" nếu showGoToTop là true */}
            {showGoToTop && (
                <button 
                    style={{
                        position: 'fixed',
                        bottom: 20,
                        right: 20,
                        padding: 10,
                        borderRadius: 5,
                        backgroundColor: 'green',
                        color: 'white',
                    }}
                    onClick={() => window.scrollTo(0, 0)} // Cuộn trang về đầu
                >
                    Go to top
                </button>
            )}
        </div>
    );
}

export default Content;
