import React from 'react'

const ReadOnlyRow = ({ albumInfo, handleEditClick, handleDeleteClick }) => {
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
          <button 
            type='button'
            onClick={()=> handleDeleteClick(albumInfo.id)}
          >Delete</button>
        </td>
      </tr>
  )
}

// *note* calling functions such as handleEditClick and handleDeleteClick
// must be passed through an arrow function to prevent each function
// from being invoked right away rather than onClick. 

export default ReadOnlyRow