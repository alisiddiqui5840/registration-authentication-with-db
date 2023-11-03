
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function Checkout()
{
  const totalAmount = localStorage.getItem('totalAmount');
  const userId = localStorage.getItem('userId');
  const username = localStorage.getItem('username');
//new code

  //

    
  return(
        
        
        <div class="row">
        <div class="col-md-8 mb-4">
          <div class="card mb-4">
            <div class="card-header py-3">
              <h5 class="mb-0">Biling details</h5>
            </div>
            <div class="card-body">
              <form>
               
                <div class="row mb-4">
                  <div class="col">
                    <div class="form-outline">
                      <input type="text" id="form7Example1" class="form-control" />
                      <label class="form-label" for="form7Example1">First name</label>
                    </div>
                  </div>

                  <div class="col">
                    <div class="form-outline">
                      <input type="text" id="form7Example2" class="form-control" />
                      <label class="form-label" for="form7Example2">Last name</label>
                    </div>
                  </div>
                </div>
      
                
                <div class="form-outline mb-4">
                  <input type="text" id="form7Example3" class="form-control" />
                  <label class="form-label" for="form7Example3">Company name</label>
                </div>
      
              
                <div class="form-outline mb-4">
                  <input type="text" id="form7Example4" class="form-control" />
                  <label class="form-label" for="form7Example4">Address</label>
                </div>
      
                
                <div class="form-outline mb-4">
                  <input type="email" id="form7Example5" class="form-control" />
                  <label class="form-label" for="form7Example5">Email</label>
                </div>
      
               
                <div class="form-outline mb-4">
                  <input type="number" id="form7Example6" class="form-control" />
                  <label class="form-label" for="form7Example6">Phone</label>
                </div>
      
                
                <div class="form-outline mb-4">
                  <textarea class="form-control" id="form7Example7" rows="4"></textarea>
                  <label class="form-label" for="form7Example7">Additional information</label>
                </div>
          
              
                <div class="form-check d-flex justify-content-center mb-2">
                  <input class="form-check-input me-2" type="checkbox" value="" id="form7Example8" checked />
                  <label class="form-check-label" for="form7Example8">
                    Create an account?
                  </label>
                </div>
              </form>
            </div>
          </div>
        </div>
      
        <div class="col-md-4 mb-4">
          <div class="card mb-4">
            <div class="card-header py-3">
              <h5 class="mb-0">Summary of {username} order</h5>
            </div>
            <div class="card-body">
              <ul class="list-group list-group-flush">
                <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                  Order Id
                  <span>Aez@{userId}E</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                  Shipping Charges
                  <span>0$</span>
                 
    

                </li>
               
    <div>

</div>






 
              
              
                <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                  <div>
                    <strong>Total amount</strong>
                    <strong>
                      <p class="mb-0">(including VAT)</p>
                    </strong>
                  </div>
                  <span><strong>${totalAmount}</strong></span>
                </li>
         
              </ul>
      
              <Link to="/thankyou"> {/* Specify the path to the "Thank You" page */}
      <button type="button" className="btn btn-primary btn-lg btn-block">
        Make purchase
      </button>
    </Link>
            </div>
          </div>
        </div>
      </div>
    )
}
export default Checkout;