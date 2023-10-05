import React, { useState } from 'react';
import Cars from './CarApi';
import {TiHeartFullOutline } from "react-icons/ti";

const Car = () => {

  const[filterResult,setFilterResult] = useState([])
  const[searchInput,setSearchInput] = useState("");
  // console.log(searchInput);
  const searchItems = (searchValue) => {
    // console.log(searchValue);
    setSearchInput(searchValue)
    if(searchInput !== ""){
      const filterData = Cars.filter((curElem) => {
        return curElem.car.toLowerCase().includes(searchInput.toLowerCase())
      })
      setFilterResult(filterData);
    }else{
      setFilterResult(Cars)
    }
  }
      
  return (
    <>
      <div className="nav_bar">
        <input type="text" placeholder='search...' onChange={(e) => searchItems(e.target.value)}/>
        <h6 className='relevance'>Relevance</h6>
        <h6>All brands</h6>
      </div>
      
      <div className="container">
        {searchInput.length > 1 ? (
          filterResult.map((curElem) => {
            return (
                <div className="card" style={{width: "18rem"}}>
                  <img className="card-img-top" src={curElem.image} alt="Card image cap"/>
                  <div className="card-body">
                    <div className="card-title card-head d-flex">
                      <h3 className="card-title">{curElem.car}</h3>
                      <h5 className='year'>{curElem.car_model_year}</h5>
                    </div>
                    <div className="card-cntr">
                        <div className="card-left">
                          <div className="color"><span>Color :</span> {curElem.car_color}</div>
                          <div className="model"><span>Model :</span> {curElem.car_model}</div>
                        </div>
                        <div className="card-right">
                          <div className="vin"><span>Vin no. :</span> {curElem.car_vin}</div>
                        </div>
                    </div>
                    <hr className='line' />
                    <div className="card-btm">
                      <div className="price">{curElem.price}</div>
                      <div className="right">
                        <div className="icon"><TiHeartFullOutline/></div>
                        <div className="btn btn-primary">Sell Now</div>
                      </div>
                    </div>
                  </div>
              </div>
            )
          })
        ) : (
          Cars.map((curElem) => {
            return (
                <div className="card" style={{width: "18rem"}}>
                  <img className="card-img-top" src={curElem.image} alt="Card image cap"/>
                  <div className="card-body">
                    <div className="card-title card-head d-flex">
                      <h3 className="card-title">{curElem.car}</h3>
                      <h5 className='year'>{curElem.car_model_year}</h5>
                    </div>
                    <div className="card-cntr">
                        <div className="card-left">
                          <div className="color"><span>Color :</span> {curElem.car_color}</div>
                          <div className="model"><span>Model :</span> {curElem.car_model}</div>
                        </div>
                        <div className="card-right">
                          <div className="vin"><span>Vin no. :</span> {curElem.car_vin}</div>
                        </div>
                    </div>
                    <hr className='line' />
                    <div className="card-btm">
                      <div className="price">{curElem.price}</div>
                      <div className="right">
                        <div className="icon"><TiHeartFullOutline/></div>
                        <div className="btn btn-primary">Sell Now</div>
                      </div>
                    </div>
                  </div>
              </div>
            )
          })
        )
        }
      </div>
    </>
  )
}

export default Car
