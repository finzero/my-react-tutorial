import React, { useState } from 'react';

const Debounce = () => {
  const [data, setData] = useState({});
  const searchAgify = (term) => {
    fetch(`https://api.agify.io/?name=${term}`)
      .then((res) => res.json())
      .then((response) => {
        setData(response);
      });
  };

  return (
    <div>
      <input
        type="text"
        name="search"
        id="search"
        className="form-control mb-1"
        placeholder="search agify"
        onChange={(e) => searchAgify(e.target.value)}
      />
      <div className="card card-body">{JSON.stringify(data)}</div>
    </div>
  );
};

export default Debounce;
