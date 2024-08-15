import React from 'react'

const Validation = (props) => {
  return (
    <div>
        {(props.count > 5) ? <h3>TEXT LONG ENOUGH</h3> : <h3>TEXT TOO SHORT</h3>}
    </div>
  )
}

export default Validation