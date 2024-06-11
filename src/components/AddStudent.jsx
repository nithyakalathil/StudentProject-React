import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const AddStudent = () => {

    const [data,changeData]=useState(
        {
          "name":"",
          "admno":"",
          "rollno":"",
          "parent":"",
          "college":"",
          "date":"",
          
          "email":"",
          "pass":"",
          "conf":"",
          

        
        } 
      
      )

      const inputhandler=(event)=>{
        changeData({...data, [event.target.name]: event.target.value })
      }
      const readValue=()=>{
        console.log(data)
        axios.post("http://localhost:8080/add",data).then(
          (response)=>{
              console.log(response.data)
              if (response.data.status=="Success") 
                  {
                      alert("successfully added")
                  
              } else {
                  alert("error")
                  
              }
          }
      ).catch(
          (error)=>(alert(error.message))
      )
      }


  return (
    <div>
<Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<div className="row g-3">
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

<label htmlFor="" className="form-label"> Name</label>
<input type="text" className="form-control" name='name' value={data.name} onChange={inputhandler}/>

    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

    <label htmlFor="" className="form-label">Addmissio no</label>
    <input type="text" className="form-control" name='admno' value={data.admno} onChange={inputhandler}/>

    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

    <label htmlFor="" className="form-label">Roll no</label>
    <input type="text" className="form-control" name='rollno' value={data.rollno} onChange={inputhandler} />

    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

    <label htmlFor="" className="form-label">Parent Name</label>
    <input type="text" className="form-control" name='parent' value={data.parent} onChange={inputhandler}/>

    </div>
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

    <label htmlFor="" className="form-label">College</label>
    <input type="text" className="form-control" name='college' value={data.college} onChange={inputhandler} />

    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

    <label htmlFor="" className="form-label">Date of Birth</label>
    <input type="date" name="date" id="" className="form-control" value={data.date} onChange={inputhandler} />

    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

    <label htmlFor="" className="form-label">Email Id</label>
    <input type="text" className="form-control"name='email' value={data.email} onChange={inputhandler}/>
    

    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

    <label htmlFor="" className="form-label">Password</label>
    <input type="password" name="pass" id="" className="form-control" value={data.pass} onChange={inputhandler}/>

    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

    <label htmlFor="" className="form-label">Conformation Password</label>
    <input type="password" name="conf" id="" className="form-control" value={data.conf} onChange={inputhandler}/>

    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

<button className="btn btn-success" onClick={readValue}>Register</button>

    </div>
</div>

                </div>
            </div>
        </div>
        
        </div>
  )
}

export default AddStudent