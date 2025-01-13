import React from 'react'

export default function TabContent({ dummyData, activeTab }) {
  return (
    <div className='tab__container'>
      <div className='tab__content'>
        <div key={dummyData[activeTab].name}>
          <p>{dummyData[activeTab].sport}</p>
          <p>{dummyData[activeTab].age}</p>
        </div>
      </div>
    </div>
  )
}
