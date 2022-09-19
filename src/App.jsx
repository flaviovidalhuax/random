import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import quotes from './json/quotes.json'
import QuotesBox from './components/QuotesBox'
import color from './utils/colors'


function App() {
  const getIndexRandom = arr => { return Math.floor(Math.random() * arr.length) }
  const firstColor = color[getIndexRandom(color)]
  const firstQuote = quotes[ getIndexRandom(quotes) ]

  const [randomColor, setRandomColor] = useState(firstColor)
  const [ randomQuote, setRandomQuote ]=useState(firstQuote)

  const backgroundColorObject = {backgroundColor: randomColor}

   const getrandomAll = () => {
    setRandomColor(color[getIndexRandom(color)])
    setRandomQuote(quotes[ getIndexRandom(quotes) ])
   }

  return (
    <div  style={ backgroundColorObject } className="App">
       {/* <div class="quoteandquotations"><i class="fa-solid fa-quote-left" style="color: rgb(20, 51, 214);"></i><p class="card_quote" style="color: rgb(20, 51, 214);">"When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one that has been opened for us."</p></div>
      */}
      < QuotesBox 
         randomQuote ={randomQuote}
         randomColor ={randomColor}
         getrandomAll={getrandomAll}
      />
    </div>
  )
}

export default App
