import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DeliveredComponents from './DeliveredComponents'

import Navbar from './Navbar'
// import About from './Pages/About'
// import Category from './Pages/Category'
import Allbogs from './Pages/Blogs/Allbogs';

import Blog from './Pages/Blogs/Blog';
import Post from './Pages/Blogs/Post';
import NoPage from './Pages/NoPage';
import AppendPost from './Pages/AppendPost/AppendPost'
import Entertainement from './Pages/Entertainement/Entertainement';
import EntertainePost from './Pages/Entertainement/EntertainePost';
import EntertainementNavbar from './Pages/Entertainement/EntertainementNavbar';
import NewsNavbar from './Pages/News/NewsNavbar';
import News from './Pages/News/News';
import NewsPost from './Pages/News/NewsPost';
import Testing from './StartingPage/Testing';
// import StartingPage from './StartingPage/StartingPage'; 
const MainComponets = () => {
  return (
    <>


      <Routes>
        <Route path="/" element={<Navbar />}> 
          <Route index element={<DeliveredComponents />} />
          <Route path="/about" element={<Testing />} />
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
            <Route path="" element={<Allbogs />} />
            <Route path=":id" element={<Post />} />
          </Route>
          {/* <Route path="/start" element={<StartingPage/> } /> */}
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>

     
    </>
  )
}
 
export default MainComponets