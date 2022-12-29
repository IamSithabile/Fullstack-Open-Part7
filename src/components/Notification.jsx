import React from 'react'

const Notification = ({ notification }) => {
  const style = {
    border: '1px red solid',
    padding: '.5rem',
  }

  return <div {...{ style }}>{notification}</div>
}

export default Notification
