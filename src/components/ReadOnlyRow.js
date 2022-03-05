import React from 'react'

const ReadOnlyRow = ({ albumInfo, handleEditClick }) => {
  return (
      <tr>
        <td>{albumInfo.album}</td>
        <td>{albumInfo.artist}</td>
        <td>{albumInfo.released}</td>
        <td>{albumInfo.genre}</td>
        <td>
          <button 
            type='button' 
            onClick={(e) => handleEditClick(e, albumInfo)}
          >Edit</button>
        </td>
      </tr>
  )
}

export default ReadOnlyRow