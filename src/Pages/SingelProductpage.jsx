 import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import CardDetails from "../Components/CardDetails";
import { getSingelProduct } from "../Redux/AppReducer/action";

export const SingleProductPage = () => {
  const { type, id } = useParams();
  const dispatch = useDispatch();
  const content = useSelector((state)=>state.AppReducer.SingelPoduct);
  
  useEffect(() => {
    dispatch(getSingelProduct({ category:type, id }));
  }, [dispatch, type, id]);



  return (
    <div>
      <CardDetails content={content} />
    </div>
  );
};
