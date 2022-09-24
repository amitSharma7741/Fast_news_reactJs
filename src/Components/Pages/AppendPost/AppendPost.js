import React, { useRef, useState } from 'react'
// import { BlogsData } from '../Blogs/BlogsData'
import ReactMarkdown from 'react-markdown'
import "./AppendPost.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
const AppendPost = () => {
  const [markDown, setMarkDown] = useState('## hello markdown')

  const inputRef = useRef(null)


  //  get today's date
  const today = new Date()
  const year = today.getFullYear()
  const month = today.getMonth() + 1
  const day = today.getDate()
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  const date = `${monthNames[month - 1]} ${day}, ${year}`


  //  get random image


  const getImage = async () => {
    try {

      const unsplashUrl = "https://api.unsplash.com/search/photos?page=1&per_page=10&query=beach&orientation=landscape&client_id=lf3w9nDBoCWWgpF-X77oV6Vq6BiGlU2UoVvaK8n4ekk"
      const response = await fetch(unsplashUrl)
      const data = await response.json()
      // catch error
      if (!response.ok) {
        throw new Error(data.message || 'Could not fetch image')

      }
      const image = data.results[Math.floor(Math.random() * data.results.length)].urls.regular

      return image
    } catch (error) {
      console.log(error)
    }

  }




  const appendData = async () => {

    const description = markDown;
    const title = inputRef.current.value;
    const titleUrl = title.replace(/\s+/g, '-').toLowerCase();
    const published = date;
    const imageUrl = await getImage();
    const sendData = {
      title: `${title}`,
      titleUrl: `${titleUrl}`,
      description: `${description}`,
      published: `${published}`,
      imageUrl: `${imageUrl}`
    }

     console.log(sendData)
    //  render url
    // https://blogs-data.onrender.com/blog
     
    axios.post('https://blogs-data.onrender.com/blog', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json'

      },
      body: JSON.stringify(sendData)
    })
      .then(res => {
        console.log(res)
        toast.success("Post added successfully")
      })
      .catch(err => {
         if(err.response.status === 400){
            toast.error("Post already exist")
          }
        console.log(err)
      })



  

    //  event reset
    inputRef.current.value = '';


    setMarkDown("")


  }


  return (
    <>


      <div className="container mt-5 " method="post"   >
        {/*  add options and select */}



        <div className="d-flex mt-3 justify-content-center mb-4 ">

          <input type="text"
            className=" w-75"

            ref={inputRef}

            placeholder="New Blog title here"

            style={{
              borderRadius: "10px",

              alignItems: "center",
              border: "1px solid #ccc",
              padding: "10px"


            }}
          />


        </div>


        <div className="row">
          <div className="col-md-6">
            <textarea style={{
              height: "400px",
              backgroundColor: "black",
              color: "white",
              padding: "10px",
              width: "100%"


            }}

              autoComplete="off"
              value={markDown}
              onChange={(e) => setMarkDown(e.target.value)}
              placeholder="write your markdown here"
            >

            </textarea>


          </div>
          <div className="col-md-6">
            <div
              style={{
                height: "400px",
                backgroundColor: "white",
                color: "black",
                padding: "10px 20px",
                border: "1px  solid black",
                width: "100%",
                overflow: "scroll"
              }}>
              <ReactMarkdown className='text-start'>
                {markDown}
              </ReactMarkdown>
            </div>


          </div>

        </div>

        <div classname="justify-content-center" style={{
          border: "1px solid black",
          padding: "10px",
          width: "20%",
          margin: "auto",
          marginTop: "20px",
          cursor: "pointer",
          backgroundColor: "black",
          color: "white",
          borderRadius: "10px",
          fontWeight: "bold",
          textDecoration: "uppercase"



        }}
          onClick={appendData}
        >
          Submit
        </div>
        <ToastContainer />
      </div>



    </>
  )
}

export default AppendPost