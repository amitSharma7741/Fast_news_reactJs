import React, { useRef } from 'react'
// import { BlogsData } from '../Blogs/BlogsData'

const AppendPost = () => {
  const Idno = useRef(null)
  const descData = useRef(null)
  const tileData = useRef(null)
  const ImageUrl = useRef(null)
  const postData = (e) => {
    e.preventDefault();
    const id = Idno.current.value;
    const title = tileData.current.value;
    const description = descData.current.value;
    const image = ImageUrl.current.value;

    
    const data = {
      id: `${id}`,
      // name:`"${name}"`,
      title: `${title}`,
      description: `${description}`,
      image: `${image}`

    }
    // BlogsData.pop(data)
    // console.log(BlogsData)
    console.log(data);
    e.target.reset();
  }
  return (
    <>
      <div className="container mt-5">
        <h1 style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "red",
          fontSize: "50px"
        }}>

        Write now this page is under construction 
        </h1>
         

      <form onSubmit={postData} >
        <input type="text" placeholder='write title' ref={tileData} required />
        <input type="number" placeholder='give a id' name="number" ref={Idno} id="number" required />
        <input type="text" placeholder='description' ref={descData} required />
        <input type="text" placeholder='image url' ref={ImageUrl} required />
        <button type='submit'>post</button>
      </form>
      </div>
    </>
  )
}

export default AppendPost