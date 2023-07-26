import React from 'react'

function Search({ onSearch }) {
  const handleInputChange = (event) => {
    const searchTerm = event.target.value
    onSearch(searchTerm)
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search food..."
        onChange={handleInputChange}
      />
    </div>
  )
}

export default Search
