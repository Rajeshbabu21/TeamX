import React, { useState } from 'react'
import './schedule.css'
import { v4 as uuid } from 'uuid'

const Schedule = () => {
  const [Users, setUsers] = useState([])
  const [Usersinfo, setUsersinfo] = useState({
    id: uuid(),
    name: '',
    date: '',
    time: '',
    location: '',
    sport: '', // This is used for Event Type
  })

  const [isEditing, setIsEditing] = useState(false)
  const [editId, setEditId] = useState(null)
  const [error, setError] = useState('')
  const [filter, setFilter] = useState('') // State for the selected filter

  const handleChange = (e) => {
    const { name, value } = e.target
    setUsersinfo((currentInfo) => ({
      ...currentInfo,
      [name]: value,
    }))
  }

  const addData = (e) => {
    e.preventDefault()
    if (
      !Usersinfo.name ||
      !Usersinfo.date ||
      !Usersinfo.time ||
      !Usersinfo.location ||
      !Usersinfo.sport
    ) {
      setError('All fields are required.')
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
      date: '',
      time: '',
      location: '',
      sport: '', // Reset the sport field after submission
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

  const handleFilterChange = (eventType) => {
    setFilter(eventType)
  }

  // Filtered users based on the selected filter
  const filteredUsers = filter
    ? Users.filter((user) => user.sport === filter)
    : Users

  return (
    <div className='main-contents'>
      <h1 className='sh'>Teamx Schedule</h1>
      <div className='divflexs'>
        <div className='lefts'>
          <div className='maindivs'>
            <div className='form-containers'>
              <h2 className='createteam'>
                {isEditing ? 'Edit Schedule' : 'Create Schedule'}
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
                  <label htmlFor='sport'>Event Type:</label>
                  <select
                    id='sport'
                    name='sport'
                    value={Usersinfo.sport}
                    onChange={handleChange}
                  >
                    <option value=''>Select Event Type</option>
                    <option value='Meeting'>Meeting</option>
                    <option value='Match'>Match</option>
                    <option value='Practice'>Practice</option>
                  </select>
                </div>

                <div className='input-group'>
                  <label htmlFor='time'>Time:</label>
                  <input
                    type='time'
                    id='time'
                    value={Usersinfo.time}
                    name='time'
                    placeholder='Enter Time'
                    onChange={handleChange}
                  />
                </div>

                <div className='input-group'>
                  <label htmlFor='date'>Date:</label>
                  <input
                    type='date'
                    id='date'
                    value={Usersinfo.date}
                    name='date'
                    onChange={handleChange}
                  />
                </div>

                <div className='input-group'>
                  <label htmlFor='location'>Location (e.g., ground):</label>
                  <input
                    type='text'
                    id='location'
                    value={Usersinfo.location}
                    name='location'
                    placeholder='Enter Location'
                    onChange={handleChange}
                  />
                </div>

                <button type='submit'>
                  {isEditing ? 'Update Schedule' : 'Create Schedule'}
                </button>
              </form>
            </div>

            <div className='filter'>
              <h1 className='filterh'>Filter Events</h1>
              <p className='here'>Filter by event type:</p>
              <div className='sbuts'>
                <button onClick={() => handleFilterChange('')}>
                  All Events
                </button>
                <button onClick={() => handleFilterChange('Meeting')}>
                  Scheduled Meetings
                </button>
                <button onClick={() => handleFilterChange('Match')}>
                  Scheduled Matches
                </button>
                <button onClick={() => handleFilterChange('Practice')}>
                  Scheduled Practices
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className='rights'>
          <div className='datatables'>
            <table>
              <thead>
                <tr>
                  <th>Team Name</th>
                  <th>Event Type</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Location</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((item) => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.sport}</td>
                    <td>{item.date}</td>
                    <td>{item.time}</td>
                    <td>{item.location}</td>
                    <div className='saction'>
                      <td>
                        <button onClick={() => editData(item.id)}>Edit</button>
                        <button onClick={() => deletedata(item.id)}>
                          Delete
                        </button>
                      </td>
                    </div>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Schedule
