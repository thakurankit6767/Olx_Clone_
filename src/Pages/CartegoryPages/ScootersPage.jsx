import React from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { getAtypeproduct } from "../../Redux/AppReducer/action";
import { VehicleInformation } from "../../Components/Cards/VehicleInformation";
import { LoadingIndicator } from "../../Components/LoadingIndicator";
import { LoadMoreButton } from "../../Components/LoadMoreButton";
import FiltScooter from "../../Components/FilterComponents/FiltScooter";

export const ScootersPage = () => {
  const [data, setData] = React.useState(10);
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.AppReducer.isLoading);
  const Products = useSelector((state) => state.AppReducer.Atype);
  console.log("Products", Products);

  React.useEffect(() => {
    dispatch(getAtypeproduct({ type: "scooter" }));
  }, [dispatch]);

  const loadMoreItems = () => {
    setData((previous) => previous + 10);
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
          <FiltScooter />
        </div>
        <div
          style={{
            border: "2px solid white",
            display: "flex",
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
