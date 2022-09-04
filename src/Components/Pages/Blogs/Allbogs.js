import React from "react";
import { BlogsData } from "./BlogsData";
import { useNavigate, Link } from "react-router-dom";
function Allblogs() {
  const navigate = useNavigate();
  return (
    <div className="container row row-cols-1 row-cols-md-3 g-4 ">

      {BlogsData.map((product) => {
        return (
          <>
            <div className="col" key={product.id}>
              <div className="card h-100" onClick={() => {
                navigate(`/blog/${product.name}`);
              }} > 
                  <img src={product.image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title text-uppercase text-decoration-none ">{product.title}</h5>
                <Link to={`/blog/${product.name}`}>
                    <p className="card-text">
                      {product.description.substring(0, 100)}
                    </p>

                </Link>
                  </div>
                  <div className="card-footer align-item-center justify-content-center">
                    <small className="text-muted">Last updated 3 mins ago</small>
                  </div> 


              </div>
            </div>
          </>
        );
      })}

    </div>
  );
}

/* 
<div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
</div>

<div className="card" style={{ width: "18rem" }}>
  <img src{product.image} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{product.title}</h5>
    <p className="card-text">
    {product.description.substring(0, 100)}
    </p>
    
  </div>
</div>


*/
export default Allblogs;
