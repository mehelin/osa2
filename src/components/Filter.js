import React from 'react'

// suodatetaan filtterillä 
const Filter = ({newFilter, handleFilterChange}) => {
    return (
    <div>
        suodata: <input
            value={newFilter}
            onChange={handleFilterChange}
        />
    </div>
    )
}

export default Filter