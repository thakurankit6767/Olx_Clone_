import React from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { getAtypeproduct } from "../../Redux/AppReducer/action";
import { VehicleInformation } from "../../Components/Cards/VehicleInformation";
import { LoadingIndicator } from "../../Components/LoadingIndicator";
import { LoadMoreButton } from "../../Components/LoadMoreButton";
import FiltMotorcycle from "../../Components/FilterComponents/FiltMotorcycle";

export const MotorcyclePage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.AppReducer.isLoading);
  const Products = useSelector((state) => state.AppReducer.Atype);
  console.log("Products", Products);
  const [data, setData] = React.useState(10);

  React.useEffect(() => {
    dispatch(getAtypeproduct({ type: "motorcyles" }));
  }, [dispatch]);

  const loadMoreItems = () => {
    setData((prev) => prev + 10);
  };

  return isLoading ? (
    <LoadingIndicator />
  ) : (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "90%",
          margin: "auto",
          marginTop: "3%",
        }}
      >
        <div style={{ flexBasis: "35%" }}>
          <FiltMotorcycle />
        </div>
        <div
          style={{
            border: "3px solid white",
            display: "flex",
            flexBasis: "63",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          {Products.slice(0, data).map((item) => {
            return <VehicleInformation key={item.id} {...item} />;
          })}
        </div>
      </div>
      <LoadMoreButton loadMoreItems={loadMoreItems} />
    </>
  );
};
