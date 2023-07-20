import React from 'react'

const HighlightedText = (props) => {
  return (
    <span className=' font-bold text-richblue-200' >
      {" "}
      {props.text}
    </span>
  )
}

export default HighlightedText
