import React from 'react';
import PokeList from '../Home/List/PokeList';
import Filter from '../Home/Filter/Filter';

function Home ({filterPok, filterValue}) {
  return (
    <React.Fragment>
      <Filter filterPok={filterPok}/>
      <PokeList filterValue={filterValue}/>
    </React.Fragment>
  );
}

export default Home;