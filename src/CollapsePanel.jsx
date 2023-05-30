import React, { useEffect, useRef, useState } from 'react'
import './CollapsePanel.css'

const CollapsePanel = ({ active, header, children, onCollapse }) => {
  const contentRef = useRef(null)
  const [contentHeight, setContentHeight] = useState(0)

  useEffect(() => {
    setContentHeight(contentRef.current?.offsetHeight || 0)
    console.log(1111, contentHeight)
  }, [active])

  return (
    <div className="collapse_panel">
      <div className="collapse_header" onClick={onCollapse}>
        {header}
      </div>

      <div
        className={`collapse_content`}
        style={{ height: active ? `${contentHeight}px` : 0 }}
      >
        <div ref={contentRef}>{children}</div>
      </div>
    </div>
  )
}

export default CollapsePanel
