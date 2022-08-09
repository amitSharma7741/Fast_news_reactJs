import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LeftSideBar from './LeftSideBar'
import About from './Pages/About'
import Category from './Pages/Category'
import Home from './Pages/Home'
import NoPage from './Pages/NoPage'
import RightSideBar from './RightSideBar'

const DeliveredComponents = () => {
    return (
        <>
            <div className="container  mt-3 text-center"  >
                <div className="row">
                    <div className="col-sm-3  border border-primary  ">
                        {<LeftSideBar />}
                    </div>
                    <div className=" col-sm-6  border border-primary">

                   

                        <Routes> 
                                <Route index element={<Home />} />
                                <Route path="about" element={<About />} />
                                <Route path="category" element={<Category />} />
                                <Route path="*" element={<NoPage />} />
                            
                        </Routes>
                  
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