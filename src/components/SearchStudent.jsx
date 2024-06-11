import React, { useState } from 'react'
import Navbar from './Navbar'

const SearchStudent = () => {

  const [data,changeData]=useState(
    {
      "name":""
      

    
    } 
  
  )
  
  const inputhandler=(event)=>{
    changeData({...data, [event.target.name]: event.target.value })
  }
  const readValue=()=>{
    console.log(data)
  }

  return (
    <div>
        <Navbar/>
       <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<label htmlFor="" className="form-label">Student Name</label>
<input type="text" className="form-control"  name='name' value={data.name} onChange={inputhandler}/>

            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


<button className="btn btn-primary" onClick={readValue}>Search</button>

            </div>
        </div>
       </div>
        
        
        </div>
  )
}

export default SearchStudent