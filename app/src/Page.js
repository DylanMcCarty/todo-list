import React from 'react'
import List from './List'
import { useState } from 'react'

export default function Page({ list }) {

    const [page, setPage] = useState('All')
    console.log(page)
  return (
    <>
    {list.length === 0 ? null : <List list={list} page={page}/>}
    <div style={{marginTop: 800}}>
        <button onClick={() => {setPage('All')}}>All Todo's</button>

        <button onClick={() => {setPage('Incomplete')}}>Incomplete</button>

        <button onClick={() => {setPage('Completed')}}>Completed</button>
    </div>
    </>
  )
}
