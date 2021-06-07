import React, {useState} from 'react'

const Todos = () => {
    const [store, setStore] = useState(null)
    const [loading, setLoading] = useState(false)

    const fetchStore = () => {
        setLoading(true)
        fetch("http://localhost:3000/store")
        .then(res => res.json())
        .then(result =>{
            setLoading(false)
            setStore(result)
        }
        )
        .catch(console.log);
    }

    return (
        <div className='container bg-light'>
            {
                loading && (<h5> Loading ... </h5>)
            }
             {store !== null && store.map(item=>(
                <h1 key={store.id}> {item.item} </h1>
            ))}
            {
                !store && <button onClick={fetchStore}> Fetch All Todos </button>
            }
            
        </div>
    )
}

export default Todos
