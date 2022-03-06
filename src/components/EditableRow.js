import React from 'react'

const EditableRow = ({editAlbumData, handleEditFormChange, handleCancelClick }) => {
  return (
    <tr>
      <td>
        <input 
          type='text' 
          required='required' 
          placeholder='Enter an album' 
          name='album' 
          value={editAlbumData.album}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
      <input 
          type='text' 
          required='required' 
          placeholder='Enter an artist' 
          name='artist' 
          value={editAlbumData.artist}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
      <input 
          type='text' 
          required='required' 
          placeholder='Enter a release year' 
          name='released' 
          value={editAlbumData.released}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
      <input 
          type='text' 
          required='required' 
          placeholder='Enter a genre' 
          name='genre' 
          value={editAlbumData.genre}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <button type='submit'>Save</button>
        <button type='button' onClick={handleCancelClick}>Cancel</button>
      </td>
    </tr>
  )
}

export default EditableRow