import React from 'react'

// suodatetaan filtterillĂ¤ 
const Filter = ({filterName, handleFilterChange}) => {
   return (
      <div>
        suodata <input value={filterName}
        onChange={handleFilterChange} />
      </div>
   )  
}

export default Filter