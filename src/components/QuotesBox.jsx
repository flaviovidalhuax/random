import React from 'react'


const QuotesBox = ({randomQuote, randomColor, getrandomAll }) => {
   
    const colorObj ={ color: randomColor}
    const backgroundobj ={ backgroundColor: randomColor    }

  return (
    <article style={colorObj}  className='card'>
        
        <p className='card_quote'> <li className='Quotes'>&#x2033;</li> {randomQuote.quote}</p>
        <h1 className='card_author'> {randomQuote.author} </h1>
        <button className='card_btn' style={ backgroundobj} onClick= {getrandomAll} > &#62; </button>
    </article>
  )
}

export default QuotesBox