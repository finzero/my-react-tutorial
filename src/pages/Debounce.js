import React, { useState } from 'react';
import { useEffect } from 'react';

const Debounce = () => {
  const [data, setData] = useState({});
  const [term, setTerm] = useState('');

  let debounce;

  // useEffect(() => {
  //   debounce = setTimeout(() => {
  //     fetch(`https://api.agify.io/?name=${term}`)
  //       .then((res) => res.json())
  //       .then((response) => {
  //         setData(response);
  //       });
  //   }, 500);

  //   return () => {
  //     clearTimeout(debounce);
  //   };
  // }, [term]);

  // const searchAgify = (term) => {
  //   clearTimeout(debounce);
  //   debounce = setTimeout(() => {
  //     fetch(`https://api.agify.io/?name=${term}`)
  //       .then((res) => res.json())
  //       .then((response) => {
  //         setData(response);
  //       });
  //   }, 3000);
  // };

  const searchAgify = (term) => {
    typing(term).then((searchTerm) => {
      fetch(`https://api.agify.io/?name=${searchTerm}`)
        .then((res) => res.json())
        .then((response) => {
          setData(response);
        });
    });
  };

  const typing = (searchTerm) => {
    clearTimeout(debounce);
    return new Promise((resolve) => {
      debounce = setTimeout(() => resolve(searchTerm), 2000);
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
