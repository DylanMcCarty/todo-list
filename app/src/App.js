
import List from './List'
import Page from './Page'
import { useState } from 'react'

export default function App() {
    
const [input, setInput] = useState('')
const [list, setList] = useState([])

  return (
    <div className='container align-content-center' style={{marginTop: 50}}>
        <div className='row justify-content-center align-content-center' >
          <div className='col'>          
            <input
            onChange={e => setInput(e.target.value)}
            value={input}
            >
            </input>
          </div>

          <div className='col'>
            <button onClick={() => {
            setInput('')    
            setList([...list, { id : Date.now(), value : input, completed : false }])      
            }      
            }>Click Me</button>
            <Page  list={list}/>      
          </div>
        </div>
    </div>
    
  )
}
// {list.length === 0 ? null : <List list={list}/>}