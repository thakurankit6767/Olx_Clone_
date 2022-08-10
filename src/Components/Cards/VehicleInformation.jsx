import React from "react";
import { useDispatch } from "react-redux";
import { CardLinkWrap, CardWrapper } from "../Cssstyles";

export const VehicleInformation = ({
  img,
  price,
  year,
  distance,
  address,
  postDate,
  brand,
  model,
  category,
  id,
  type,
}) => {
  const dispatch = useDispatch();

  return (
    <CardWrapper>
      <CardLinkWrap to={`/${type}/${id}`}>
        <div>
          <div></div>
          <img src={img} alt={img} />
          <div></div>
        </div>
        <div>
          <p> ₹ {price}</p>
          <p>
            {year} - {distance} km
          </p>
          <p>
            {brand} {model} {year}
          </p>
        </div>
        <div>
          <p>{address}</p>
          <p>{postDate}</p>
        </div>
      </CardLinkWrap>
    </CardWrapper>
  );
};
