import React from 'react'
import { useParams} from 'react-router-dom'

import Number from './Number';
import Word from './Word';


const IsWord = () => {
    const params = useParams();
    const {wordo} = params

  return (
    <div>
        {
            isNaN(wordo) ? <Word /> : <Number />   
        }
    </div>
  )
}

export default IsWord