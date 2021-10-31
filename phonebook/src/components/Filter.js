import React from 'react'

// suodatetaan filtterillä 
const Filter = ({filterName, handleFilterChange}) => {
   return (
      <div>
        suodata <input value={filterName}
        onChange={handleFilterChange} />
      </div>
   )  
}

export default Filter