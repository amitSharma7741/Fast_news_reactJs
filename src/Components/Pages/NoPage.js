import React from 'react'
const NoPage = () => {
  return (
    <>
      {/* make  responsive no page */}
      <div style={{
        height: "100vh",
        width: "100%",
        backgroundColor: "black",
        color: "white",
        textAlign: "center",
        paddingTop: "10px",
        fontSize: "20px",
        fontWeight: "bold"
      }}>
        <h1 style={{
          fontSize: "100px",
          fontWeight: "bold",
          color: "white"
        }}
        >404</h1>
        <h1 style={{
          fontSize: "50px",
          fontWeight: "bold",
          color: "white"
        }}
        >Page Not Found</h1>
      </div>
    </>
  )
}
export default NoPage