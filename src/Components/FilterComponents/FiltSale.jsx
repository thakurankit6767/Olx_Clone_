import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { useState } from "react";

function FiltSale() {
  const [budget, setBudget] = useState(false);
  const [type, setType] = useState(false);
  const [bedrooms, setBedrooms] = useState(false);
  const [bathrooms, setBathrooms] = useState(false);
  const [furnishing, setFurnishing] = useState(false);
  const [construction, setConstruction] = useState(false);
  const [listed, setListed] = useState(false);

  return (
    <div
      style={{ textAlign: "left",
      width: "300px",
      padding: "2% 2%",
      boxSizing: "border-box",
      border: "none"  }}
    >
      <div style={{ fontSize: "23px", fontWeight: "bold"  }}>
        Houses & Apartments For Sale
      </div>
      <br />
      <div>
        <select style={{ border: "none" }}>
          <option value="0" style={{ fontSize: "16px", fontWeight: "700" }}>
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
              color: "#002f34",
              padding: "2% 5%",
            }}
          >
            Below 1000000
          </div>
          <div
            style={{
              border: "1px solid black",
              width: "90%",
              marginTop: "5px",
              paddingLeft: "2px",
              color: "#002f34",
              padding: "2% 5%",
            }}
          >
            100000 - 200000
          </div>
          <div
            style={{
              border: "1px solid black",
              width: "90%",
              marginTop: "5px",
              paddingLeft: "2px",
              color: "#002f34",
              padding: "2% 5%",
            }}
          >
            200000 - 500000
          </div>
          <div
            style={{
              border: "1px solid black",
              width: "90%",
              marginTop: "5px",
              paddingLeft: "2px",
              color: "#002f34",
              padding: "2% 5%",
            }}
          >
            500000 - 1000000
          </div>
          <div
            style={{
              border: "1px solid black",
              width: "90%",
              marginTop: "5px",
              paddingLeft: "2px",
              color: "#002f34",
              padding: "2% 5%",
            }}
          >
            1000000 - 3000000
          </div>
          <div
            style={{
              border: "1px solid black",
              width: "90%",
              marginTop: "5px",
              paddingLeft: "2px",
              color: "#002f34",
              padding: "2% 5%",
            }}
          >
            3000000 - 5000000
          </div>
          <div
            style={{
              border: "1px solid black",
              width: "90%",
              marginTop: "5px",
              paddingLeft: "2px",
              color: "#002f34",
              padding: "2% 5%",
            }}
          >
            5000000 and Above
          </div>
        </div>
      )}
      <br />
      <hr />

      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ marginRight: "10px" }}>TYPE</div>
        <div style={{ flexGrow: "1" }}></div>
        {!type ? (
          <DownOutlined onClick={() => setType(!type)} />
        ) : (
          <UpOutlined onClick={() => setType(!type)} />
        )}
      </div>

      {type && (
        <div>
          <div
            style={{
              border: "1px solid black",
              width: "90%",
              marginTop: "5px",
              padding: "2% 5%",
              color: "#002f34",
            }}
          >
            Houses & Villas
          </div>
          <div
            style={{
              border: "1px solid black",
              width: "90%",
              marginTop: "5px",
              padding: "2% 5%",
              color: "#002f34",
            }}
          >
            Apartments
          </div>
          <div
            style={{
              border: "1px solid black",
              width: "90%",
              marginTop: "5px",
              padding: "2% 5%",
              color: "#002f34",
            }}
          >
            Builder Floors
          </div>
          <div
            style={{
              border: "1px solid black",
              width: "90%",
              marginTop: "5px",
              padding: "2% 5%",
              color: "#002f34",
            }}
          >
            Farm Houses
          </div>
        </div>
      )}
      <br />
      <hr />

      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ marginRight: "10px" }}>BEDROOMS</div>
        <div style={{ flexGrow: "1" }}></div>
        {!bedrooms ? (
          <DownOutlined onClick={() => setBedrooms(!bedrooms)} />
        ) : (
          <UpOutlined onClick={() => setBedrooms(!bedrooms)} />
        )}
      </div>

      {bedrooms && (
        <div>
          <div
            style={{
              border: "1px solid black",
              width: "90%",
              marginTop: "5px",
              padding: "2% 5%",
              color: "#002f34",
            }}
          >
            1+ bedroom
          </div>
          <div
            style={{
              border: "1px solid black",
              width: "90%",
              marginTop: "5px",
              padding: "2% 5%",
              color: "#002f34",
            }}
          >
            2+ bedroom
          </div>
          <div
            style={{
              border: "1px solid black",
              width: "90%",
              marginTop: "5px",
              padding: "2% 5%",
              color: "#002f34",
            }}
          >
            3+ bedroom
          </div>
          <div
            style={{
              border: "1px solid black",
              width: "90%",
              marginTop: "5px",
              padding: "2% 5%",
              color: "#002f34",
            }}
          >
            4+ bedroom
          </div>
        </div>
      )}
      <br />
      <hr />

      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ marginRight: "10px" }}>BATHROOMS</div>
        <div style={{ flexGrow: "1" }}></div>
        {!bathrooms ? (
          <DownOutlined onClick={() => setBathrooms(!bathrooms)} />
        ) : (
          <UpOutlined onClick={() => setBathrooms(!bathrooms)} />
        )}
      </div>

      {bathrooms && (
        <div>
          <div
            style={{
              border: "1px solid black",
              width: "90%",
              marginTop: "5px",
              padding: "2% 5%",
              color: "#002f34",
            }}
          >
            1+ bathroom
          </div>
          <div
            style={{
              border: "1px solid black",
              width: "90%",
              marginTop: "5px",
              padding: "2% 5%",
              color: "#002f34",
            }}
          >
            2+ bathroom
          </div>
          <div
            style={{
              border: "1px solid black",
              width: "90%",
              marginTop: "5px",
              padding: "2% 5%",
              color: "#002f34",
            }}
          >
            3+ bathroom
          </div>
          <div
            style={{
              border: "1px solid black",
              width: "90%",
              marginTop: "5px",
              padding: "2% 5%",
              color: "#002f34",
            }}
          >
            4+ bathroom
          </div>
        </div>
      )}
      <br />
      <hr />

      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ marginRight: "10px" }}>FURNISHING</div>
        <div style={{ flexGrow: "1" }}></div>
        {!furnishing ? (
          <DownOutlined onClick={() => setFurnishing(!furnishing)} />
        ) : (
          <UpOutlined onClick={() => setFurnishing(!furnishing)} />
        )}
      </div>

      {furnishing && (
        <div>
          <div
            style={{
              border: "1px solid black",
              width: "90%",
              marginTop: "5px",
              padding: "2% 5%",
              color: "#002f34",
            }}
          >
            Furnished
          </div>
          <div
            style={{
              border: "1px solid black",
              width: "90%",
              marginTop: "5px",
              padding: "2% 5%",
              color: "#002f34",
            }}
          >
            Unfurnished
          </div>
          <div
            style={{
              border: "1px solid black",
              width: "90%",
              marginTop: "5px",
              padding: "2% 5%",
              color: "#002f34",
            }}
          >
            Semi-Furnished
          </div>
        </div>
      )}
      <br />
      <hr />

      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ marginRight: "10px" }}>CONSTRUCTION STATUS</div>
        <div style={{ flexGrow: "1" }}></div>
        {!construction ? (
          <DownOutlined
            onClick={() => setConstruction(!construction)}
          />
        ) : (
          <UpOutlined onClick={() => setConstruction(!construction)} />
        )}
      </div>

      {construction && (
        <div>
          <div
            style={{
              border: "1px solid black",
              width: "90%",
              marginTop: "5px",
              padding: "2% 5%",
              color: "#002f34",
            }}
          >
            Under Construction
          </div>
          <div
            style={{
              border: "1px solid black",
              width: "90%",
              marginTop: "5px",
              padding: "2% 5%",
              color: "#002f34",
            }}
          >
            Ready to Move
          </div>
          <div
            style={{
              border: "1px solid black",
              width: "90%",
              marginTop: "5px",
              padding: "2% 5%",
              color: "#002f34",
            }}
          >
            New Launch
          </div>
        </div>
      )}
      <br />
      <hr />

      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ marginRight: "10px" }}>LISTED BY</div>
        <div style={{ flexGrow: "1" }}></div>
        {!listed ? (
          <DownOutlined onClick={() => setListed(!listed)} />
        ) : (
          <UpOutlined onClick={() => setListed(!listed)} />
        )}
      </div>

      {listed && (
        <div>
          <div
            style={{
              border: "1px solid black",
              width: "90%",
              marginTop: "5px",
              padding: "2% 5%",
              color: "#002f34",
            }}
          >
            Owner
          </div>
          <div
            style={{
              border: "1px solid black",
              width: "90%",
              marginTop: "5px",
              padding: "2% 5%",
              color: "#002f34",
            }}
          >
            Dealer
          </div>
          <div
            style={{
              border: "1px solid black",
              width: "90%",
              marginTop: "5px",
              padding: "2% 5%",
              color: "#002f34",
            }}
          >
            Builder
          </div>
        </div>
      )}
      <br />
      <hr />
    </div>
  );
}

export default FiltSale;
