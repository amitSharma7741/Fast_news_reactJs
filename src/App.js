import React from 'react' 
import { Route, Routes } from 'react-router-dom'   
import Navbar from './Components/Navbar'
import About from './Components/Pages/About/About'
import AppendPost from './Components/Pages/AppendPost/AppendPost'
import Allblogs from './Components/Pages/Blogs/Allbogs'
import Blog from './Components/Pages/Blogs/Blog'
import Post from './Components/Pages/Blogs/Post'
import TagPost from './Components/Pages/Blogs/TagPost'
import Entertainement from './Components/Pages/Entertainement/Entertainement'
import EntertainementNavbar from './Components/Pages/Entertainement/EntertainementNavbar'
import EntertainePost from './Components/Pages/Entertainement/EntertainePost'
import Home from './Components/Pages/Home/Home'
import News from './Components/Pages/News/News'
import NewsNavbar from './Components/Pages/News/NewsNavbar'
import NewsPost from './Components/Pages/News/NewsPost'
import NoPage from './Components/Pages/NoPage' 
const App = () => {
  return (
    <>


      <Routes>
        <Route path="/" element={<Navbar />}> 
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/entertainment" element={<EntertainementNavbar />} >
            <Route index element={<Entertainement />} />
            <Route path=":bolly" element={<EntertainePost />} />
          </Route>
          <Route path='/news' element = {<NewsNavbar/>} >
            <Route index element = {<News/>}/>
            <Route path=':newsId' element ={<NewsPost/>}/>
          </Route>
          <Route path="/write" element={<AppendPost />} />
          <Route path="/blog" element={<Blog />} >
            <Route path="" element={<Allblogs />} />
            <Route path=":id" element={<Post />} />
            <Route path='tag/:tagVal' element = {<TagPost /> } />
          </Route> 
          {/* <Route path="/start" element={<StartingPage/> } /> */}
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>

     
    </>
  )
}
 
export default App