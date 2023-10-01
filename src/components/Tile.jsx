import React from 'react'

function Tile({navitem,Icon}) {
  return (
    <>
     {/* <!-- Nav Item - Pages Collapse Menu --> */}
     <li className="nav-item mx-3" style={{color: "#565c67"}}>
          <div className="nav-Link d-flex gap-3">
          <i class={`fa-solid ${Icon} `}></i>
              <span className='nav-it'>{navitem}</span>
          </div>
        </li> 
    </>
  )
}

export default Tile