import React from 'react'

const BackendData = () => {

    async function getBlogs() {
        const response = await fetch('https://blogs-data.onrender.com/blog'); 
        const data = await response.json();
        console.log(data);
        return data;
    }

  return (
    <> 
         {getBlogs} 

    </>
  )
}

export default BackendData