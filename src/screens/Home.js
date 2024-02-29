import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { Cards } from "../components/Cards";
import Carousal from "../components/Carousal";

const base_URL = require("../services/helper.js");
export const Home = () => {
  const [fooditem, setfooditem] = useState([]);
  const [foodCategory, setfoodCategory] = useState([]);

  const loadData = async (req, res) => {
    let response = await fetch(`${base_URL}/api/foodData`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
    });

    let datax = await response.json();
    setfoodCategory(datax[1]);
    setfooditem(datax[0]);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Carousal />
      </div>
      <div>
        {foodCategory != []
          ? foodCategory.map((items) => {
              return (
                <div className=" row mb-3">
                  <div key={items._id} className="container fs-3 m-3 ">
                    {items.CategoryName}
                  </div>
                  <hr />
                  {fooditem != []
                    ? fooditem
                        .filter(
                          (data) => data.CategoryName === items.CategoryName
                        )
                        .map((filteritems) => {
                          return (
                            <div
                              key={filteritems._id}
                              className="col-12 col-md-6 col-lg-3"
                            >
                              <Cards
                                fooditem={filteritems}
                                options={filteritems.options[0]}
                              ></Cards>
                            </div>
                          );
                        })
                    : "no such thing available"}
                </div>
              );
            })
          : ""}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
