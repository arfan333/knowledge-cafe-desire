
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs'
import Book_marks from './components/Book_marks'
import Header from './components/Header'

function App() {
 const [bookmarks, setBookmarks] = useState([])

 const [readingtime, setReadingTime] = useState(0)

  const handleAdd = blog =>{
    const addBookmarks = [...bookmarks,blog]
    setBookmarks(addBookmarks)
  }

  const readHandle = time =>{
   setReadingTime(readingtime + time)
  }

  return (
    <>
      <Header></Header>
     <div className='md:flex max-w-6xl mx-auto'>
     <Blogs handleAdd={handleAdd} readHandle={readHandle}></Blogs>
     <Book_marks bookmarks={bookmarks} readHandle={readHandle} readingtime={readingtime}></Book_marks>
     </div>
     
     
    </>
  )
}

export default App
