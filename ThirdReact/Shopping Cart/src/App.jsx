import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import RouterSwitch from './RouterSwitch'
import Home from './components/Home'
function App() {
  const [selected,setSelected] = useState([])
  
function addtoCart(item) {
  setSelected((prevSelected) => [...prevSelected, item]);
}

function removeFromCart(id){
  setSelected((prevArray) =>
  prevArray.filter((item)=> item.id !==id)

  );
}

//for testing
useEffect(() => {
  console.log("Selected items:", selected);
}, [selected]);

  return (
    <>
  
    <RouterSwitch
      selected = {selected}
      addtoCart = {addtoCart}
      removeFromCart = {removeFromCart}
    />
    </>
  )
}

export default App
