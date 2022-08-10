import React from "react";

import { CardLinkWrap, CardWrapper } from "./Cssstyles";

export const Card = ({
  image,
  price,
  address,
  postDate,
  type,
  id,
}) => {
  return (
    <CardWrapper>
      <CardLinkWrap to={`/${type}/${id}`}>
        <div>
          <div></div>
          <img src={image} alt={image} />
          <div></div>
        </div>
        <div>
          <p> ₹ {price}</p>
        </div>
        <div>
          <p>{address}</p>
          <p> {postDate}</p>
        </div>
      </CardLinkWrap>
    </CardWrapper>
  );
};
