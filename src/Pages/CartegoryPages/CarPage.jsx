import React from "react";
import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getAtypeproduct } from "../../Redux/AppReducer/action";
import { VehicleInformation } from "../../Components/Cards/VehicleInformation";
import { LoadingIndicator } from "../../Components/LoadingIndicator";
import { LoadMoreButton } from "../../Components/LoadMoreButton";
import FiltCar from "../../Components/FilterComponents/FiltCar";
import { useSearchParams, useLocation, Link } from "react-router-dom";
export const CarPage = () => {
  const [data, setData] = React.useState(10);
  // const { Products, isLoading } = useSelector(
  //   (state) => state.AppReducer.Atype,
  //   shallowEqual
  // );
  const isLoading = useSelector((state) => state.AppReducer.isLoading);
  const Products = useSelector((state) => state.AppReducer.Atype);
  console.log("Products", Products);
  const dispatch = useDispatch();
  // const [searchParams] = useSearchParams();
  // const location = useLocation();

  // useEffect(() => {
  //   if (!Products.length || location.search) {
  //     const sortBy = searchParams.get("sortBy");

  //     const getBooksParams = {
  //       params: {
  //         brand: searchParams.getAll("brand"),
  //         _sort: sortBy && "release_year",
  //         _order: sortBy,
  //       },
  //     };
  //     dispatch(getAtypeproduct(getBooksParams));

  //     //if deselect all filter
  //   } else if (location.search === "") {
  //     dispatch(getAtypeproduct());
  //   }
  // }, [location.search]);

  React.useEffect(() => {
    dispatch(getAtypeproduct({ type: "cars" }));
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
          <FiltCar />
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
            return <VehicleInformation key={item.id} {...item} item={item} />;
          })}
        </div>
      </div>
      <LoadMoreButton loadMoreItems={loadMoreItems} />
    </>
  );
};
