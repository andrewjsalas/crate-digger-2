import React from 'react'

const ReadOnlyRow = ({ albumInfo }) => {
  return (
      <tr>
        <td>{albumInfo.album}</td>
        <td>{albumInfo.artist}</td>
        <td>{albumInfo.released}</td>
        <td>{albumInfo.genre}</td>
      </tr>
  )
}

export default ReadOnlyRow