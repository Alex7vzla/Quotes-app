import { useState } from 'react'
import './App.css'
import quotes from './json/quotes.json'
import colors from './utils/colors';
import Card from './components/Card';
import 'boxicons'

function App() {

//Get a random number from length array 
  const getRandomElement = (arr) => {
    const indexRandom = Math.floor(Math.random() * arr.length)
    return arr[indexRandom];
  };

// Get a random quote and color. Then storing it
  let quoteRandom = getRandomElement(quotes);
  let colorRandom = getRandomElement(colors);

//Declare states
  const [randomQuotes, setRandomQuotes] = useState(quoteRandom); 
  const [randomColor, setRandomColor] = useState(colorRandom);

//Assign a random num to a quotes and color
  const getRandomAll = () => {
    quoteRandom = getRandomElement(quotes);
    colorRandom = getRandomElement(colors);
    //Change of state
    setRandomColor(colorRandom);
    setRandomQuotes(quoteRandom);
  }

  return (
    <div className="App">
      <Card
          randomQuotes={randomQuotes}
          randomColor={randomColor}
          getRandomAll={getRandomAll}  
      />
    </div>
  )
}

export default App
