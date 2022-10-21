import React from 'react'
import { useState } from 'react'

export default function List({ list = [], page }) {

  const [items, setItems] = useState([])

const vari = () => {
  if (page === 'All') {
    return list
  }
  if (page === 'Completed') {
    return list.filter(item => item.completed === true)
  }
  if (page === 'Incomplete') {
    return list.filter(item => item.completed === false)
  }
}



// function handleValue() {
//   return (
//     <>
//     {list.value}
//     </>
//   )
// }

  return (
    <ul>
        {vari()?.map(todo => (
          <div className='row justify-content-center'>
            <div className='col-3'>
              <li key={todo.id}>{todo.value}</li>
              <button>completed</button>
            </div>
          </div>
        ))}
    </ul>
  )
}

