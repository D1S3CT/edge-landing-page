import React from 'react'

const HeaderComponent: React.FC = () => {
  return (
    <div className="flex justify-between">
      <div>
        <h2 className="text-4xl">EDGE</h2>
      </div>
      <div>
        <ul className="flex gap-[29px] text-base italic">
          <li>HOME</li>
          <li>SERVICES</li>
          <li>CONTACTS</li>
        </ul>
      </div>
    </div>
  )
}

export default HeaderComponent
