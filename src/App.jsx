
import './App.css'
import Blogs from './components/Blogs'
import Book_marks from './components/Book_marks'
import Header from './components/Header'

function App() {
 

  return (
    <>
      <Header></Header>
     <div className='md:flex max-w-6xl mx-auto'>
     <Blogs></Blogs>
     <Book_marks></Book_marks>
     </div>
     
     
    </>
  )
}

export default App
