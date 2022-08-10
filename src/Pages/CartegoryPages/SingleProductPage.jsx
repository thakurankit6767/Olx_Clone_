// import React from "react";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
// import { getSingleProduct } from "../Redux/AppReducer/action";
// import SinglePageInfo from "../Components/SinglePage/SinglePageInfo";

// export const SingleProductPage = () => {
//   const { category, id } = useParams();
//   const dispatch = useDispatch();
//   const content = useSelector((state) => state.AppReducer.Products.SingleProduct);

//   useEffect(() => {
//     dispatch(getSingleProduct({ category, id }));
//   }, [dispatch, category, id]);
//   console.log(content.length === 0 ? " " : content[0]);
//   return (
//     <>
//       <SinglePageInfo {...content[0]} />
//     </>
//   );
// };
