import React, { useState } from "react";
import SearchField from "../../../../../searchField/SearchField";

const Overview = () => {
  const [loading, setLoading] = useState(false);
  return (
    <div>
      <SearchField loading={loading} />
      Overview tub
    </div>
  );
};

export default Overview;
