import React from 'react'
import { useParams} from 'react-router-dom'


const Word = (props) => {

    const params = useParams();
    console.log(params)

    const styledH1 ={ 
        backgroundColor: params.backgroundColor,
        color: params.textColor
    }
    


  return (
    <div>
        <h1 style={styledH1}>Color The word is: {params.word}</h1>
    </div>
  )
}

export default Word