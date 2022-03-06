import './App.css';
import mockData from './mockData';
import { Fragment } from 'react';
import { useState } from 'react';
import { nanoid } from 'nanoid'
import Header from './components/Header';
import ReadOnlyRow from './components/ReadOnlyRow';
import EditableRow from './components/EditableRow';

function App() {
  const [albumInfo, setAlbumInfo] = useState(mockData)
  const [addAlbumData, setAddAlbumData] = useState({
    album: '',
    artist: '',
    released: '',
    genre: ''
  })

  // Set state to hold data when editing a row
  const [editAlbumData, setEditAlbumData] = useState ({
    album: '',
    artist: '',
    released: '',
    genre: ''
  })

  // Set state for editing rows
  const [editAlbumId, setEditAlbumId] = useState(null)

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

  // 
  const handleEditFormChange = (e) => {
    e.preventDefault()

    const fieldName = e.target.getAttribute('name')
    const fieldValue = e.target.value

    const newFormData = { ...editAlbumData }
    newFormData[fieldName] = fieldValue

    setEditAlbumData(newFormData)
  }

  // Submits data to the state and sets it
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

    // Creates a new album array to avoid mutating the state
    const newAlbumInfoArray = [...albumInfo, newAlbumInfo]
    setAlbumInfo(newAlbumInfoArray)
  }

  // Saves edited data to the current state to display on the table
  const handleEditFormSubmit = (e) => {
    e.preventDefault()

    const editedAlbum = {
      id: editAlbumId,
      album: editAlbumData.album,
      artist: editAlbumData.artist,
      released: editAlbumData.released,
      genre: editAlbumData.genre
    }

    // Replaces the original displayed album data with the newest 
    // edited album data
    const newEditedAlbumData = [ ...albumInfo]

    // Will return an index based on a condition that's passed in.
    // 'editAlbumId' is the row that is being edited. 
    // findIndex() will get the index of said row in the albumInfo array.
    const index = albumInfo.findIndex(
      (albumInfo) => albumInfo.id === editAlbumId
    )

    // Update array at the given position
    newEditedAlbumData[index] = editedAlbum

    setAlbumInfo(newEditedAlbumData)
    setEditAlbumId(null)
  }

  // Handles Edit button
  const handleEditClick = (e, albumInfo) => {
    e.preventDefault()
    setEditAlbumId(albumInfo.id)

    const formValues = {
      album: albumInfo.album,
      artist: albumInfo.artist, 
      released: albumInfo.released,
      genre: albumInfo.genre
    }
    // Save new edited values into the current state
    setEditAlbumData(formValues)
  }

  // Will cancel the currently edited row input before saving
  const handleCancelClick = (e) => {
    setEditAlbumId(null)
  }

  return (
    <div className="app-container">
      <Header />
      <form onSubmit={handleEditFormSubmit}>
      <table>
        {/* TABLE */}
        <thead>
          <tr>
            <th>Album</th>
            <th>Artist</th>
            <th>Released</th>
            <th>Genre</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {albumInfo.map((albumInfo) => (
            <Fragment>
              {editAlbumId === albumInfo.id ? (
                  <EditableRow 
                    editAlbumData={editAlbumData} 
                    handleEditFormChange={handleEditFormChange} 
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow 
                    albumInfo={albumInfo} 
                    handleEditClick={handleEditClick}
                  />
              )}           
            </Fragment>
          ))}        
        </tbody>
      </table>
      </form>

      {/* SUMBIT ALBUM FORM */}
      <h2 className='form-header'>Add an album</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input 
          type='text' 
          name='album' 
          required='required' 
          placeholder='Enter an album' 
          onChange={handleAddFormChange}
        />
        <input 
          type='text' 
          name='artist' 
          required='required' 
          placeholder='Enter an artist' 
          onChange={handleAddFormChange}
        />
        <input 
          type='text' 
          name='released' 
          required='required' 
          placeholder='Enter a release year' 
          onChange={handleAddFormChange}
        />
        <input 
          type='text' 
          name='genre' 
          required='required' 
          placeholder='Enter a genre' 
          onChange={handleAddFormChange}
        />
        <button type='submit'>Add</button>
      </form>

    </div>
  );
}

export default App;
