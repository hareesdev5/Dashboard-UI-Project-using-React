import React from "react";

function form() {
  return (
    <>
      <form>
        <div className="d-flex justify-content-between gap-5 ">
         <div className=" input-icons">
            <div className="input-group">
            <i class="fa-solid fa-magnifying-glass icon"></i>
              <input class="input-field form-control"
                   type="text" placeholder="Search"/>
            </div>
           </div>
           <div id="bell">
             <i class="fa-regular fa-bell d-flex" style={{color:"#ada7a7"}}></i>
           </div>
        </div>
        <h3 className="h3 mx-4">Sales Information</h3>
        <div className="form d-flex gap-3 mx-4 m-3">
          <div class="col-md">
            <label for="inputCity" class="form-label">
              Customer
            </label>
            <input type="text" class="form-control" id="inputCity" placeholder="Enter Customer Name"/>
          </div>
          <div class="col-md">
            <label for="inputCity" class="form-label">
              Invoice ID
            </label>
            <input type="text" class="form-control" id="inputCity" placeholder="Enter Invoice ID" />
          </div>
          <div class="col-md">
            <label for="inputCity" class="form-label">
              Start Date
            </label>
            <input type="text" class="form-control" id="inputCity" placeholder="Start Date" />
          </div>
          <div class="col-md">
            <label for="inputCity" class="form-label">
              End Date
            </label>
            <input type="text" class="form-control" id="inputCity" placeholder="End Date" />
          </div>
        </div>
      </form>
    </>
  );
}

export default form;
