import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const ViewAll = () => {

const [data,changeData]=useState(
  [
   
  ]

)

const fetchData=()=>{
  axios.get("http://localhost:8080/view").then(
      (response)=>{
          changeData(response.data)
          
      }
  )
}

useEffect(()=>{fetchData()},[])

  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<div className="row g-3">

<table class="table">
  <thead>
    <tr>
      <th scope="col">name</th>
      <th scope="col">admno</th>
      <th scope="col">rollno</th>
      <th scope="col">college</th>
    </tr>
  </thead>
  <tbody class="table-group-divider">


    {data.map((value, index)=>{return  <tr>
      <th scope="row">{value.name}</th>
      <td>{value.admno}</td>
      <td>{value.rollno}</td>
      <td>{value.college}</td>
    </tr>})}
    
    
    
    
    
    </tbody>
    </table>
    
   
    
</div>

                </div>
            </div>
        </div>
        
        </div>
  )
}

export default ViewAll