import React from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { getAtypeproduct } from "../../Redux/AppReducer/action";
import { LoadingIndicator } from "../../Components/LoadingIndicator";
import { HouseInformation } from "../../Components/Cards/HouseInformation";
import { LoadMoreButton } from "../../Components/LoadMoreButton";
import FiltRent from "../../Components/FilterComponents/FiltRent";

export const HouseRentPage = () => {
  const [data, setData] = React.useState(10);
  const isLoading = useSelector((state) => state.AppReducer.isLoading);
  const Products = useSelector((state) => state.AppReducer.Atype);
  console.log("Products", Products);

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getAtypeproduct({ type: "rentHouse" }));
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
          <FiltRent />
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
            return <HouseInformation key={item.id} {...item} />;
          })}
        </div>
      </div>
      <LoadMoreButton loadMoreItems={loadMoreItems} />
    </>
  );
};
