import React from 'react'
import Tdata from './tdata'

function table({data,setData}) {
    let tableData =[{
                checkbox:"checkbox",
                ID:"#AHGA68",
                Date:"23/09/2022",
                Customer:"Jacob Marcus",
                PayableAmount:"$100",
                PaidAmount:"$000",
                due:"$000"
              }
            ]
  return (
    <>
     <table class="table ">
       <thead>
       <tr>
        <th scope="col"><input type="checkbox" /></th>
        <th scope="col">Invoice ID</th>
        <th scope="col">Date</th>
        <th scope="col">Customer</th>
        <th scope="col">Payable Amount</th>
        <th scope="col">Paid Amount</th>
        <th scope="col">Due</th>
       </tr>
       </thead>
       <tbody >
        {
            tableData.map((e)=>{
                return <Tdata checkbox={e.checkbox}
                ID={e.ID}
                Date={e.Date}
                Customer={e.Customer}
                PayableAmount={e.PayableAmount}
                PaidAmount={e.PaidAmount}
                due={e.due} /> 
            })
        }
       </tbody>
     </table>
    </>
  )
}

export default table
