import { useState, useMemo, useRef } from 'react';
import Content from './content';

function App() {
    const [name, setName] = useState('')
    const [products, setProducts] = useState([])
    const [price, setPrice] = useState('')
    const nameRef = useRef()

    const handleSubmit = () => {
        setProducts([...products, {
            name,
            price: parseInt(price)
        }])
      setName('')
        setPrice('')

        nameRef.current.focus()

    }
    const total = useMemo(() => {
        const result = products.reduce((result, pord) => {
            console.log('Tính toán lại...')
            return result + pord.price
        }, 0)
        return result
       
    },[products])
    return (
        <div style={{ textAlign: "center" }}>
            <input
            ref={nameRef}
                value={name}
                placeholder='name'
                onChange={e => setName(e.target.value)} />
            <br />
            <input
                value={price}
                placeholder='price'
                onChange={e => setPrice(e.target.value)}
            />
            <br />
            <button onClick={handleSubmit}>Add</button>
            <br />
            Tolla:{total}
            <ul>
                {products.map((product, index) => (
                    <li key={index}>
                        {product.name} - {product.price}
                    </li>
                ))}
            </ul>
        </div>

    )
}
export default App
