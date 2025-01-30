import React from 'react'
import './dashboard.css';
const dashboard = () => {
  return (
    <div>
        <h1 className='admin-name'>Hello, Sonjoy Dey</h1>
        <div className="section1">
           <div className="content">
              <h1>pickup request</h1>
              <p>Total: 200</p>
              <p>Completed: 100</p> 
           </div>
           <div className="content">
              <h1>Blogs posted</h1>
              <p>Total: 200</p>
           </div>
           <div className="content">
              <h1>Selles request</h1>
              <p>Total: 200</p>
           </div>
           <div className="content">
              <h1>Query Recived</h1>
              <p>Total: 200</p>
           </div>
        </div> 
         
    </div>
  )
}

export default dashboard
