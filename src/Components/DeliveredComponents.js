import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import LeftSideBar from './LeftSideBar'
import Puzzle from './Little/Puzzle'
import About from './Pages/About'
import Category from './Pages/Category'
import Home from './Pages/Home'
import NoPage from './Pages/NoPage'
import RightSideBar from './RightSideBar'

const DeliveredComponents = () => {
    const isM_Or_L = useMediaQuery({
        query: '(min-width: 700px)'
      })
    return (
        <>
        <div className=  "container mt-3 text-center" >
                <div className="row">
                    {/* border border-primary */}
                    <div className="  col-sm-3     ">
                        {<LeftSideBar />}
                    </div>
                    <div className=" col-sm-6   ">

                     <div className= {isM_Or_L ?  "container row" :"row"}>  
                        <div > 
                        {<Puzzle/>}
                        </div>
                    
                       <div  >  

                        <Routes> 
                                <Route index element={<Home />} />
                                <Route path="about" element={<About />} />
                                <Route path="category" element={<Category />} />
                                <Route path="*" element={<NoPage />} />
                            
                        </Routes>
                       </div>
                       </div>
                    </div>
                    <div className="col-sm-3  ">
                        {<RightSideBar/>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default DeliveredComponents