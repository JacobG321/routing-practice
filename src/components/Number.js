import React from 'react'
import { useParams } from 'react-router-dom'

const Number = (props) => {
    const params = useParams();
    const {wordo} = params;
    console.log({wordo})
  return (
    <div>
        <h1>The number is {wordo}</h1>
    </div>
  )
}

export default Number