import React from 'react'
import 'boxicons'

const Card = ({randomQuotes, randomColor, getRandomAll}) => {

  const objectStyle = {
    color: randomColor
  }

  const objectBgStyle = {
    backgroundColor: randomColor
  }

  return (
    <div className='bg' style={objectBgStyle} >
      <div className='container'>
        <div className='card'>
            <div className='QuoteBox' style={objectStyle}>

              <p className='quote'>{`${randomQuotes.quote}`}</p>   
              <p className='author'>{`${randomQuotes.author}`}</p>
              
              <div>
                <button className='btn'
                onClick={getRandomAll}
                style={objectBgStyle}>
                <box-icon name='right-arrow-alt' color='white' animation='flashing'></box-icon>
                </button>
              </div>

          </div>   
        </div>
      </div>
    </div>
  )
}

export default Card


