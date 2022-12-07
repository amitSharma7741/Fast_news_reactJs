import React from 'react'
import { ExternalLink } from 'react-external-link'

const OverlayDiv = (props) => {
    return (
        <>

            <div className="fixed-bottom mb-4" >
                <div className="container" style={{
                    backgroundColor: "#FC5B14",
                    color: "white",
                    height: "50px",
                    maxWidth: "800px",
                    borderRadius: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                    <div className="text-center" style={{
                        // paddingTop: "10px",
                        fontSize: "20px",
                        fontWeight: "bold",
                        color: "white",
                    }}>
                        Data Extracted from : <ExternalLink href={props.url} style={{
                            color: "white",
                            // place a line under the link
                            textDecoration: "underline",
                        }}>
                            {props.name}
                        </ExternalLink>

                    </div> 
                </div>
            </div>
        </>
    )
}

export default OverlayDiv