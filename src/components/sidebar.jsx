import React from 'react';
import Tile from './Tile';

function sidebar() {
    let sidebar =[{
        navitem : 'Lab Test',
        Icon:'fa-calendar-check'
    },
    {
        navitem: 'Appointment',
        Icon:'fa-folder-closed',
    },
    {
        navitem:'Medicine Order',
        Icon:'fa-bag-shopping'
    },
    {
        navitem:'Message',
        Icon:'fa-envelope'
    },
    {
        navitem:'Payment',
        Icon:'fa-credit-card'
    },
    {
        navitem:'Settings',
        Icon:'fa-light fa-gear fa-rotate-90'
    }
]
  return (
    <div className='navbar'>
      <ul
        className="navbar-nav"
        id="accordionSidebar"
      >
        {/* <!-- Sidebar - Brand --> */}
        <h3
          className="sidebar-brand"
        >
          <div className="sidebar-brand-text" style={{color:"#0b63f8"}}>
            Medico Sales
          </div>
        </h3>

        {/* <!-- Nav Item - Dashboard --> */}
        <li className="nav-item active mx-3 "id='dash' style={{color:"#0b63f8"}}>
          <div className="nav-Link d-flex gap-3">
          <i class="fa-brands fa-microsoft " ></i>
              <span className='nav-it'>Dashboard</span>
          </div>
        </li>
        {
            sidebar.map((e,i)=>{
                return <Tile navitem={e.navitem}
                             Icon={e.Icon}

                             key={i} />
            })
        }
        <li className="nav-item active mx-3" id='help'>
          <div className='nav-Link d-flex gap-3'>
           <i class="fa-regular fa-circle-question "></i>
           <span className='nav-it'>Help</span>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default sidebar
