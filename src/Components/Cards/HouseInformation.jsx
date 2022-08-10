import React from "react";

import { CardLinkWrap, CardWrapper } from "../Cssstyles";

export const HouseInformation = ({
  img,
  price,
  address,
  postDate,
  bedrooms,
  bathrooms,
  carParking,
  category,
  id,
}) => {
  return (
    // <Wrapper>
    <CardWrapper>
      <CardLinkWrap to={`/item/${category}/${id}`}>
        <div>
          <div></div>
          <img src={img} alt={img} />
          <div></div>
        </div>
        <div>
          <p> ₹ {price}</p>
          <p>
            {" "}
            {bedrooms} Bds - {bathrooms} Ba{" "}
          </p>
          <p>
            {" "}
            {bedrooms}BHK {carParking} Car Parking{" "}
          </p>
        </div>
        <div>
          <p>{address}</p>
          <p> {postDate}</p>
        </div>
      </CardLinkWrap>
    </CardWrapper>
  );
};
