import React from 'react'

export default function TabButtons({ dummyData, activeTab, setActiveTab }) {
  return (
    <div className='tab__header'>
      {dummyData.map((item, index) => (
        <button
          key={item.name}
          className={`tab__button ${activeTab === index ? 'active' : ''}`}
          onClick={() => setActiveTab(index)}
        >
          {item.name}
        </button>
      ))}
    </div>
  )
}
