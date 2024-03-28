import './App.css';
import React, {useEffect,useState} from 'react';

import Value from './Components/Value';

function App() {
  let input = document.getElementById("input")
  const addtask = async()=>{
    const info={
      title:input.value,
    }
    const savedUserResponse = await fetch(
      `http://localhost:4000/v1/addpost`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body:JSON.stringify({ ...info }),
        
      }
    );
    getAllData();
  }

  const [datatodo,setData]= useState([]);
  const getAllData = async () => {
    try {
      const getPeople = await fetch(
        `http://localhost:4000/v1/getpost`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const res = await getPeople.json();
      
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllData();
  },[]);
  return (
    <div className="App">
      <div className='inputdiv'>
        <input id="input" type="text" placeholder="Title"></input>
        <button id='addtask' onClick={addtask}>Add Task</button>
      </div>
      <div className='outputdiv'>
        {
          datatodo.map((element)=>{
            return(<Value {...element} getfunction={getAllData}></Value>);
          }
          )
        }
      </div>
    </div>
  );
}

export default App;
