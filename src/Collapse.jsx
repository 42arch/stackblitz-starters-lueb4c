import React, { Children, cloneElement, useState } from 'react'
import './Collapse.css'

const Collapse = ({ children, active }) => {
  const [activeKey, setActiveKey] = useState(active)

  const CollapsePanelList = Children.map(children, (child, index) =>
    cloneElement(child, {
      active: activeKey === index,
      onCollapse: () => {
        console.log(33333)
        if (activeKey === index) {
          setActiveKey(null)
          return
        }
        setActiveKey(index)
      },
    })
  )

  return (
    <div style={{ width: '100%', height: '100%' }}>{CollapsePanelList}</div>
  )
}
export default Collapse
