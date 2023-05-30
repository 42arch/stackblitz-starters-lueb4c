import React from 'react'
import Collapse from './Collapse.jsx'
import CollapsePanel from './CollapsePanel.jsx'
import './style.css'

export default function App() {
  const data = [
    {
      key: 1,
      title: 'Title 1',
      content: <div style={{ height: '50px' }}>This is item 1</div>,
    },
    {
      key: 2,
      title: 'Title 2',
      content: <div style={{ height: '120px' }}>This is item 2</div>,
    },
    {
      key: 3,
      title: 'Title 3',
      content: <div style={{ height: '30px' }}>This is item 3</div>,
    },
  ]

  return (
    <Collapse active={2}>
      {data.map((item) => (
        <CollapsePanel header={item.title} key={item.key}>
          {item.content}
        </CollapsePanel>
      ))}
    </Collapse>
  )
}
