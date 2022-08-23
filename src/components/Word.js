import React from 'react'
import { useParams} from 'react-router-dom'


const Word = (props) => {

    const params = useParams();
    const {wordo} = params
    // console.log(wordo)

  return (
    <div>
        <h1>The word is: {wordo}</h1>
    </div>
  )
}

export default Word