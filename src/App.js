import React, {useState, useEffect} from "react";
import axios from 'axios'
import Right from "./components/Right"
import Left from "./components/Left"
import "./App.css";

function App() {
  const [ data, setData ] = useState([])

  useEffect(()=> {
    const fetchData = () => {

    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then((res) => {
        setData(res.data)
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
    } 
    fetchData()
  },[])
    

  return (
    <div className="App">
        <Right data={data}/>
        <Left data={data}/>
    </div>
  );
}

export default App;
