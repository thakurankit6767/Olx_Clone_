import { SearchOutlined, DownOutlined, UpOutlined } from "@ant-design/icons";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getAtypeproduct } from "../../Redux/AppReducer/action";

function FiltCar() {
  const [kilometer, setKilometer] = useState(false);
  const [fuel, setFuel] = useState(false);
  const [transmission, setTransmission] = useState(false);
  const [budget, setBudget] = useState(false);
  const [year, setYear] = useState(false);
  const [owner, setOwner] = useState(false);
  const [inspection, setInspection] = useState(false);

  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const urlSort = searchParams.get("sortBy");
  const urlCategory = searchParams.getAll("brand");

  const [sortBy, setSortBy] = useState(urlSort || "");
  const [brand, setBrand] = useState(urlCategory || []);
  //filtering
  const handleChange = (e) => {
    let newCategory = [...brand];
    const option = e.target.value;

    //if option is already present then remove it else ppush it.
    if (brand.includes(option)) {
      newCategory.splice(newCategory.indexOf(option), 1);
    } else {
      newCategory.push(option);
    }
    setBrand(newCategory);
  };

  useEffect(() => {
    if (brand || sortBy) {
      let params = {};
      brand && (params.brand = brand);
      sortBy && (params.sortBy = sortBy);
      setSearchParams(params);
      // dispatch(getBooks({ params: { brand } }));
    }
  }, [brand, searchParams, sortBy]);

  //sorting
  const handleSort = (e) => {
    let radioValue = e.target.value;
    setSortBy(radioValue);
  };

  //reseting
  const handleReset = () => {
    if (brand || sortBy) {
      setSortBy("");
      setBrand([]);
      dispatch(getAtypeproduct());
    }
  };
  return (
    <div
      style={{
        textAlign: "left",
        width: "300px",
        padding: "2% 2%",
        boxSizing: "border-box",
        border: "none",
      }}
    >
      <div style={{ fontSize: "23px", fontWeight: "bold" }}>
        Used Cars in India
      </div>
      <br />
      <div>
        <select style={{ border: "none" }}>
          <option value="0" style={{ fontSize: "14px", fontWeight: "600" }}>
            CATEGORIES
          </option>
          <option value="1">Cars</option>
          <option value="2">Motor Cycles</option>
          <option value="3">For Sale: Houses & Apartments</option>
          <option value="4">Scooters</option>
          <option value="5">Commercial and Other Vehicles</option>
          <option value="6">For Rent: Houses & Apartments</option>
        </select>
      </div>
      <br />
      <hr />
      <div>
        <select style={{ border: "none" }}>
          <option value="0" style={{ fontSize: "16px", fontWeight: "700" }}>
            LOCATIONS
          </option>
          <option value="1">India</option>
          <option value="2">Maharashtra</option>
          <option value="3">Tamil Nadu</option>
          <option value="4">Uttar Pradesh</option>
          <option value="5">Kerala</option>
          <option value="6">Delhi</option>
          <option value="4">Punjab</option>
        </select>
      </div>
      <br />
      <hr />

      <div style={{ color: "rgba(0,47,52,.64)", marginBottom: "3%" }}>
        Filters
      </div>

      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            border: "1px solid black",
            width: "90%",
            padding: "5%",
          }}
        >
          <input
            style={{ border: "none" }}
            type="text"
            placeholder="Search brand or model"
          />
          <div style={{ flexGrow: "1" }}></div>
          <SearchOutlined />
        </div>
      </div>
      <br />

      <div>ALL BRANDS</div>
      <div>
        <div style={{ padding: "2% 5%" }}>
          <input
            style={{ marginRight: "5px", color: "black" }}
            type="checkbox"
            value="Maruti Suzuki"
            checked={brand.includes("Maruti Suzuki")}
            onChange={handleChange}
          />
          Maruti Suzuki
        </div>
        <div style={{ padding: "2% 5%" }}>
          <input
            style={{ marginRight: "5px", color: "black" }}
            type="checkbox"
            value="Toyota"
            checked={brand.includes("Toyota")}
            onChange={handleChange}
          />
          Toyota
        </div>
        <div style={{ padding: "2% 5%" }}>
          <input
            style={{ marginRight: "5px", color: "black" }}
            type="checkbox"
            value="Mercedes-Benz"
            checked={brand.includes("Mercedes-Benz")}
            onChange={handleChange}
          />
          Mercedes-Benz
        </div>
        <div style={{ padding: "2% 5%" }}>
          <input
            style={{ marginRight: "5px", color: "black" }}
            type="checkbox"
            value="Jaguar"
            checked={brand.includes("Jaguar")}
            onChange={handleChange}
          />
          Jaguar
        </div>
        <div style={{ padding: "2% 5%" }}>
          <input
            style={{ marginRight: "5px", color: "black" }}
            type="checkbox"
            value="Land Rover"
            checked={brand.includes("Land Rover")}
            onChange={handleChange}
          />
          Land Rover
        </div>
      </div>
      <br />
      <hr />

      <div>ALL Models</div>
      <div>
        <div style={{ padding: "2% 5%" }}>
          <input
            style={{ marginRight: "5px", color: "black" }}
            type="checkbox"
          />
          Swift
        </div>
        <div style={{ padding: "2% 5%" }}>
          <input
            style={{ marginRight: "5px", color: "black" }}
            type="checkbox"
          />
          Fortuner
        </div>
        <div style={{ padding: "2% 5%" }}>
          <input
            style={{ marginRight: "5px", color: "black" }}
            type="checkbox"
          />
          GLA
        </div>
        <div style={{ padding: "2% 5%" }}>
          <input
            style={{ marginRight: "5px", color: "black" }}
            type="checkbox"
          />
          XL5
        </div>
        <div style={{ padding: "2% 5%" }}>
          <input
            style={{ marginRight: "5px", color: "black" }}
            type="checkbox"
          />
          Defender
        </div>
      </div>
      <br />

      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ marginRight: "10px" }}>BUDGET</div>
        <div style={{ flexGrow: "1" }}></div>
        {!budget ? (
          <DownOutlined onClick={() => setBudget(!budget)} />
        ) : (
          <UpOutlined onClick={() => setBudget(!budget)} />
        )}
      </div>

      {budget && (
        <div>
          <div style={{ marginTop: "5px", marginBottom: "5px" }}>
            Choose from options below
          </div>
          <div
            style={{
              border: "1px solid black",
              width: "90%",
              marginTop: "5px",
              paddingLeft: "2px",
              color: "black",
              padding: "2% 5%",
            }}
          >
            Below 1 Lac
          </div>
          <div
            style={{
              border: "1px solid black",
              width: "90%",
              marginTop: "5px",
              paddingLeft: "2px",
              color: "black",
              padding: "2% 5%",
            }}
          >
            1 Lac - 2 Lac
          </div>
          <div
            style={{
              border: "1px solid black",
              width: "90%",
              marginTop: "5px",
              paddingLeft: "2px",
              color: "black",
              padding: "2% 5%",
            }}
          >
            2 Lac - 3 Lac
          </div>
          <div
            style={{
              border: "1px solid black",
              width: "90%",
              marginTop: "5px",
              paddingLeft: "2px",
              color: "black",
              padding: "2% 5%",
            }}
          >
            3 Lac - 5 Lac
          </div>
          <div
            style={{
              border: "1px solid black",
              width: "90%",
              marginTop: "5px",
              paddingLeft: "2px",
              color: "black",
              padding: "2% 5%",
            }}
          >
            5 Lac and Above
          </div>
        </div>
      )}
      <br />
      <hr />

      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ marginRight: "10px" }}>YEAR</div>
        <div style={{ flexGrow: "1" }}></div>
        {!year ? (
          <DownOutlined onClick={() => setYear(!year)} />
        ) : (
          <UpOutlined onClick={() => setYear(!year)} />
        )}
      </div>

      {year && (
        <div>
          <div style={{ marginTop: "5px", marginBottom: "5px" }}>
            Choose from options below
          </div>
          <div
            style={{
              border: "1px solid black",
              width: "90%",
              marginTop: "5px",
              padding: "2% 5%",
              color: "black",
            }}
          >
            Under 3 Years
          </div>
          <div
            style={{
              border: "1px solid black",
              width: "90%",
              marginTop: "5px",
              padding: "2% 5%",
              color: "black",
            }}
          >
            Under 5 Years
          </div>
          <div
            style={{
              border: "1px solid black",
              width: "90%",
              marginTop: "5px",
              padding: "2% 5%",
              color: "black",
            }}
          >
            Under 7 Years
          </div>
          <div
            style={{
              border: "1px solid black",
              width: "90%",
              marginTop: "5px",
              padding: "2% 5%",
              color: "black",
            }}
          >
            7 Years and Above
          </div>
        </div>
      )}
      <br />
      <hr />

      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ marginRight: "10px" }}>NO. OF OWNERS</div>
        <div style={{ flexGrow: "1" }}></div>
        {!owner ? (
          <DownOutlined onClick={() => setOwner(!owner)} />
        ) : (
          <UpOutlined onClick={() => setOwner(!owner)} />
        )}
      </div>

      {owner && (
        <div>
          <div style={{ marginTop: "5px", marginBottom: "5px" }}>
            Choose from options below
          </div>
          <div style={{ padding: "2% 5%" }}>
            <input
              style={{ marginRight: "5px", color: "black" }}
              type="checkbox"
            />
            First
          </div>
          <div style={{ padding: "2% 5%" }}>
            <input
              style={{ marginRight: "5px", color: "black" }}
              type="checkbox"
            />
            Second
          </div>
          <div style={{ padding: "2% 5%" }}>
            <input
              style={{ marginRight: "5px", color: "black" }}
              type="checkbox"
            />
            Third
          </div>
          <div style={{ padding: "2% 5%" }}>
            <input
              style={{ marginRight: "5px", color: "black" }}
              type="checkbox"
            />
            Fourth
          </div>
          <div style={{ padding: "2% 5%" }}>
            <input
              style={{ marginRight: "5px", color: "black" }}
              type="checkbox"
            />
            More than Four
          </div>
        </div>
      )}
      <br />
      <hr />

      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ marginRight: "10px" }}>INSPECTION STATUS</div>
        <div style={{ flexGrow: "1" }}></div>
        {!inspection ? (
          <DownOutlined onClick={() => setInspection(!inspection)} />
        ) : (
          <UpOutlined onClick={() => setInspection(!inspection)} />
        )}
      </div>

      {inspection && (
        <div>
          <div style={{ marginTop: "5px", marginBottom: "5px" }}>
            Choose from below options
          </div>
          <div style={{ padding: "2% 5%" }}>
            <input
              style={{ marginRight: "5px", color: "black" }}
              type="checkbox"
            />
            Inspected Cars Only
          </div>
        </div>
      )}
      <br />
      <hr />

      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ marginRight: "10px" }}>KM DRIVEN</div>
        <div style={{ flexGrow: "1" }}></div>
        {!kilometer ? (
          <DownOutlined onClick={() => setKilometer(!kilometer)} />
        ) : (
          <UpOutlined onClick={() => setKilometer(!kilometer)} />
        )}
      </div>

      {kilometer && (
        <div>
          <div
            style={{
              border: "1px solid black",
              width: "90%",
              marginTop: "5px",
              padding: "2% 5%",
              color: "black",
            }}
          >
            Below 25000 KM
          </div>
          <div
            style={{
              border: "1px solid black",
              width: "90%",
              marginTop: "5px",
              padding: "2% 5%",
              color: "black",
            }}
          >
            25000 KM - 50000 KM
          </div>
          <div
            style={{
              border: "1px solid black",
              width: "90%",
              marginTop: "5px",
              padding: "2% 5%",
              color: "black",
            }}
          >
            50000 KM - 75000 KM
          </div>
          <div
            style={{
              border: "1px solid black",
              width: "90%",
              marginTop: "5px",
              padding: "2% 5%",
              color: "black",
            }}
          >
            75000 KM - 100000 KM
          </div>
          <div
            style={{
              border: "1px solid black",
              width: "90%",
              marginTop: "5px",
              padding: "2% 5%",
              color: "black",
            }}
          >
            100000 KM and Above
          </div>
        </div>
      )}
      <br />
      <hr />

      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ marginRight: "10px" }}>FUEL</div>
        <div style={{ flexGrow: "1" }}></div>
        {!fuel ? (
          <DownOutlined onClick={() => setFuel(!fuel)} />
        ) : (
          <UpOutlined onClick={() => setFuel(!fuel)} />
        )}
      </div>

      {fuel && (
        <div>
          <div style={{ marginTop: "5px", marginBottom: "5px" }}>
            Choose from below options
          </div>
          <div style={{ padding: "2% 5%" }}>
            <input
              style={{ marginRight: "5px", color: "black" }}
              type="checkbox"
            />
            Petrol
          </div>
          <div style={{ padding: "2% 5%" }}>
            <input
              style={{ marginRight: "5px", color: "black" }}
              type="checkbox"
            />
            Diesel
          </div>
          <div style={{ padding: "2% 5%" }}>
            <input
              style={{ marginRight: "5px", color: "black" }}
              type="checkbox"
            />
            LPG
          </div>
          <div style={{ padding: "2% 5%" }}>
            <input
              style={{ marginRight: "5px", color: "black" }}
              type="checkbox"
            />
            CNG & Hybrids
          </div>
          <div style={{ padding: "2% 5%" }}>
            <input
              style={{ marginRight: "5px", color: "black" }}
              type="checkbox"
            />
            Electric
          </div>
        </div>
      )}
      <br />
      <hr />

      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ marginRight: "10px" }}>TRANSMISSION</div>
        <div style={{ flexGrow: "1" }}></div>
        {!transmission ? (
          <DownOutlined onClick={() => setTransmission(!transmission)} />
        ) : (
          <UpOutlined onClick={() => setTransmission(!transmission)} />
        )}
      </div>

      {transmission && (
        <div>
          <div style={{ marginTop: "5px", marginBottom: "5px" }}>
            Choose from options below
          </div>
          <div
            style={{
              border: "1px solid black",
              width: "90%",
              marginTop: "5px",
              padding: "2% 5%",
              color: "black",
            }}
          >
            Automatic
          </div>
          <div
            style={{
              border: "1px solid black",
              width: "90%",
              marginTop: "5px",
              padding: "2% 5%",
              color: "black",
            }}
          >
            Manual
          </div>
        </div>
      )}
      <br />
      <hr />
      <div>
        <input
          type="radio"
          value="asc"
          name="soryBy"
          checked={sortBy === "asc"}
          onChange={handleSort}
        />
        <label>By Inc Year</label> <br />
        <input
          type="radio"
          value="desc"
          name="soryBy"
          checked={sortBy === "desc"}
          onChange={handleSort}
        />
        <label>By Dec Year</label>
      </div>
      <br />
      <div>
        <button onClick={handleReset}>Reset Filter</button>
      </div>
    </div>
  );
}

export default FiltCar;
