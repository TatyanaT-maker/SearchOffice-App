import './App.css';
import JSONDATA from './MOCK_DATA.js'
// import boulder from './images/boulder.jpg'
// import sanfran from './images/sanfran.jpg'
import {useState} from 'react'


const App = () => {
  const[searchTerm, setSearchTerm] = useState('')
  return (
    <div className="App"> 
    <h1 align="left">Offices</h1>
    <input type="text" placeholder="Search" onChange={event =>{setSearchTerm(event.target.value);}}/>
    <button type="submit" className="button">
    <img className="search"></img></button>

    {JSONDATA.filter((val)=> {
      if(searchTerm === "") {
        return val
      } else if(val.Places.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())) {
          return val
      }

    }).map((val,key)=> {
      return (
      <div className="user" key={key}>
        <img src={val.img} alt="" width="100" height="100"/>
        <p>{val.Places}</p>
        </div>
      )
    })}


    </div>
  );
}

export default App;