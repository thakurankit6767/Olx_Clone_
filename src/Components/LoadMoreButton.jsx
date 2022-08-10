import React from "react";

import { LoadMoreData } from "./Cssstyles";

export const LoadMoreButton = ({ loadMoreItems }) => {
  return (
    <LoadMoreData>
      <button onClick={loadMoreItems}>Load more</button>
    </LoadMoreData>
  );
};
