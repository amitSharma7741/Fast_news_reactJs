import React  from 'react' 
 
 const LeftSideBar = () => {
 
  

   return (
    <>

    
    {/* <div>{title}</div> */}
    {/* <div className="card" style={{ width: "18rem" }}>
  <img src=" https://wallpaperaccess.com/full/520148.jpg" className="card-img-top" alt={image} />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </p>
    <a href="/" className="btn btn-primary">
      Go somewhere
    </a>
  </div>
</div> */}








<div className="card bg-dark text-white">
  <img src= "https://wallpaperaccess.com/full/520148.jpg" className="card-img" alt= "https://wallpaperaccess.com/full/520148.jpg" />
  <div className="card-img-overlay">
    <h5 className="card-title">Good things</h5>
    <p className="card-text" style={{
      fontSize:"12px"
    }}>
      Updating....
    </p>
    <p className="card-text">Last updated 3 mins ago</p>
  </div>
</div>

 

    </>
   )
 }
 
 export default LeftSideBar