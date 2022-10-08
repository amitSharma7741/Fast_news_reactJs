import React from 'react'
import { LeapFrog } from '@uiball/loaders'


const Loader = () => {
    return (
        <>
            <div className='container' style={{

                marginTop: "15px",
                display: "inline-grid",
                justifyContent: "center" 
            }}>

                <LeapFrog
                    size={60}
                    speed={2.5}
                    color="black"
                />
                <p style={{
                    fontSize: "20px",
                    color: "black" 
                }}>Loading...</p>

            </div>
        </>
    )
}

export default Loader