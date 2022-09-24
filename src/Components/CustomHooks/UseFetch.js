import React , {useState, useEffect} from 'react'

const UseFetch  = (url) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch( url )
        .then(res => {
            if(!res.ok){
                throw Error('could not fetch the data for that resource')
            }
            return res.json()
        })
        .then(data => {
            setData(data)
        })
        .catch(err => {
            console.log(err.message)
        })
    }, [url])

  return  [data]
}

export default UseFetch ;