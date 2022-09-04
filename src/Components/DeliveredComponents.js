import React from 'react' 
import Puzzle from './Little/Puzzle' 
import Home from './Pages/Home' 
import RightSideBar from './RightSideBar'

const DeliveredComponents = () => {
     
    return (
        <>
            <div className="container mt-3 text-center" >
                <div className="row">
                    {/* border border-primary */}
                    <div className="col-sm-3 ">
                        {<Puzzle />}
                    </div>
                    <div className=" col-sm-6 "> 
                        <div className="container justify-content-center">
                            {<Home />}   
                        </div>
                    </div>
                    <div className="col-sm-3  ">
                        {<RightSideBar />}
                    </div>
                </div>
            </div>

        </>
    )
}

export default DeliveredComponents