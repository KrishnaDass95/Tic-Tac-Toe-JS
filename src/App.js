import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Icon from './Components/Icon';
import "./App.css"

const App = () => {

  let tikArray = new Array(9).fill("");
  const [isCross, setIsCross] = useState(true);
  let [winMessage, setWinMessage] = useState("");


  function playAgain(){
    tikArray.fill("");
    setIsCross(true);
    setWinMessage("");
  }

  function findWinner(arr){
    const winningConditions = [
      // Rows
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      // Columns
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      // Diagonal 
      [0, 4, 8],
      [2, 4, 6]
    ];

    for(let condition of winningConditions){
      const [a, b, c] = condition;
      if(arr[a] == arr[b] && arr[a] == arr[c] && arr[a] != ""){
        setWinMessage(arr[a] + " is the winner");
      }
    }
  }

  function changeItem(index){
    if(winMessage){
      return toast("Game over!")
    }
    else if(tikArray[index] != ""){
      return toast("This position is already filled, select the edit button to input next chance")
    }
    else if(tikArray[index] == "") {
      tikArray[index] = isCross ? "cross" : "circle";
      setIsCross(!isCross);
      findWinner(tikArray);
    }
  }
  return (
    <div>
      <ToastContainer position='bottom-center' />
      {
        winMessage ? (
          <div>
          <h1>{winMessage.toUpperCase()}</h1>
          <button onClick={playAgain}>Play Again</button>
          </div>
        )
        :
        (
          <h1>Current chance of {isCross ? "Cross" : "Circle"}</h1>
        )
      }

      <div className='grid'>
        {
          tikArray.map((value, index) => (
            <div key={index} className='box' onClick={() => changeItem(index)}>
              <Icon ic={value} />
            </div>
          ))
        }
      </div>
    </div>
  )
}


export default App;
