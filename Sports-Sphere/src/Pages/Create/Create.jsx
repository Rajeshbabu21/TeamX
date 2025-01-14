import React from 'react'
import './create.css'
import { useState } from 'react'
import { v4 as uuid } from 'uuid'

const Create = () => {
  const [Users, setUsers] = useState([])
  const [Usersinfo, setUsersinfo] = useState({
    id: uuid(),
    name: '',
    sport: '',
  })

  const [isEditing, setIsEditing] = useState(false)
  const [editId, setEditId] = useState(null)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setUsersinfo((currentInfo) => ({
      ...currentInfo,
      [name]: value,
    }))
  }

  const addData = (e) => {
    e.preventDefault()
    if (!Usersinfo.name || !Usersinfo.sport) {
      setError('Both fields are required.')
      return
    }

    if (isEditing) {
      setUsers((currentUsers) =>
        currentUsers.map((user) =>
          user.id === editId ? { ...user, ...Usersinfo } : user
        )
      )
      setIsEditing(false)
      setEditId(null)
    } else {
      setUsers((currentUsers) => [...currentUsers, Usersinfo])
    }

    setUsersinfo({
      id: uuid(),
      name: '',
      sport: '',
    })
    setError('')
  }

  const deletedata = (id) => {
    setUsers((currentUsers) => currentUsers.filter((user) => user.id !== id))
  }

  const editData = (id) => {
    const userToEdit = Users.find((user) => user.id === id)
    setUsersinfo(userToEdit)
    setIsEditing(true)
    setEditId(id)
  }

  return (
    <div className='main-content'>
      <div className='maindiv'>
        <div className='form-container'>
          <h2 className='createteam'>
            {isEditing ? 'Edit Team' : 'Create a New Team'}
          </h2>
          {error && <p className='error-message'>{error}</p>}
          <form onSubmit={addData}>
            <div className='input-group'>
              <label htmlFor='teamName'>Team Name:</label>
              <input
                type='text'
                id='teamName'
                value={Usersinfo.name}
                name='name'
                placeholder='Enter Team Name'
                onChange={handleChange}
              />
            </div>

            <div className='input-group'>
              <label htmlFor='teamSport'>Sport:</label>
              <select
                id='teamSport'
                name='sport'
                value={Usersinfo.sport}
                onChange={handleChange}
              >
                <option value=''>Select Sport</option>
                <option value='Football'>Football</option>
                <option value='Handball'>Handball</option>
                <option value='Chess'>Chess</option>
                <option value='Carrom'>Carrom</option>
                <option value='Basketball'>Basketball</option>
              </select>
            </div>

            <button type='submit'>
              {isEditing ? 'Update Team' : 'Create Team'}
            </button>
          </form>
        </div>
      </div>

      <div className='datatable'>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Sport</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Users.map((items) => (
              <tr key={items.id}>
                <td>{items.name}</td>
                <td>{items.sport}</td>
                <td>
                  <button onClick={() => editData(items.id)}>Edit</button>
                </td>
                <td>
                  <button onClick={() => deletedata(items.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Create
