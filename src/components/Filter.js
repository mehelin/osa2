import React from 'react'

// suodatetaan filtterillĂ¤ 
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