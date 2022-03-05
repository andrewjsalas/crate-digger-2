import './App.css';
import mockData from './mockData';
import { useState } from 'react';
import { nanoid } from 'nanoid'

function App() {
  const [albumInfo, setAlbumInfo] = useState(mockData)
  const [addAlbumData, setAddAlbumData] = useState({
    album: '',
    artist: '',
    released: '',
    genre: ''
  })

  // Assigns user form input to the corresponding name attributes 
  // that is set in addAlbumData 
  const handleAddFormChange = (e) => {
    e.preventDefault()

    const fieldName = e.target.getAttribute('name')
    const fieldValue = e.target.value

    const newFormData = { ...addAlbumData}
    newFormData[fieldName] = fieldValue

    setAddAlbumData(newFormData)
  }

  // Handles the submit logic of the form
  const handleAddFormSubmit = (e) => {
    e.preventDefault()

    const newAlbumInfo = {
      id: nanoid(), // Generates id to identify which albumData 
      // is being edited or deleted
      album: addAlbumData.album,
      artist: addAlbumData.artist,
      released: addAlbumData.released,
      genre: addAlbumData.genre
    }

    // Create new album array to avoid mutating the state
    const newAlbumInfoArray = [...albumInfo, newAlbumInfo]
    setAlbumInfo(newAlbumInfoArray)
  }



  return (
    <div className="app-container">
      <table>
        <thead>
          <tr>
            <th>Album</th>
            <th>Artist</th>
            <th>Released</th>
            <th>Genre</th>
          </tr>
        </thead>
        <tbody>
          {albumInfo.map((albumInfo) => (
            <tr>
              <td>{albumInfo.album}</td>
              <td>{albumInfo.artist}</td>
              <td>{albumInfo.released}</td>
              <td>{albumInfo.genre}</td>
            </tr>
          ))}        
        </tbody>
      </table>

      <h2>Add an album</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input 
          type='text' 
          name='album' 
          required='required' 
          placeholder='Enter An Album' 
          onChange={handleAddFormChange}
        />
        <input 
          type='text' 
          name='artist' 
          required='required' 
          placeholder='Enter An Artist' 
          onChange={handleAddFormChange}
        />
        <input 
          type='text' 
          name='released' 
          required='required' 
          placeholder='Enter The Release' 
          onChange={handleAddFormChange}
        />
        <input 
          type='text' 
          name='genre' 
          required='required' 
          placeholder='Enter The Genre' 
          onChange={handleAddFormChange}
        />
        <button type='submit'>Add</button>
      </form>
    </div>
  );
}

export default App;
