import React, { useState } from 'react'
import TabButtons from '../../Components/TabButtons'
import TabContent from '../../Components/TabContent'
import dummyData from '../../assets/data'
import "./findteam.css"

const Findteam = () => {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div>
      <div className='main-content'>
        <div className='main-container'>
          <h1>Choose your team to search</h1>

          <TabButtons
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            dummyData={dummyData}
          />

          <TabContent activeTab={activeTab} dummyData={dummyData} />
        </div>
      </div>
    </div>
  )
}

export default Findteam
