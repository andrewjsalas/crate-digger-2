import React from 'react'

const EditableRow = () => {
  return (
    <tr>
      <td>
        <input 
          type='text' 
          required='required' 
          placeholder='Enter an album' 
          name='album' 
        />
      </td>
      <td>
      <input 
          type='text' 
          required='required' 
          placeholder='Enter an artist' 
          name='artist' 
        />
      </td>
      <td>
      <input 
          type='text' 
          required='required' 
          placeholder='Enter a release year' 
          name='released' 
        />
      </td>
      <td>
      <input 
          type='text' 
          required='required' 
          placeholder='Enter a genre' 
          name='genre' 
        />
      </td>
    </tr>
  )
}

export default EditableRow