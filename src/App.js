import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {action} from "./redux/list/listAction"

function App() {
  const [name, setName] = useState('');
  const dispatch = useDispatch();
const lists = useSelector(state=>state); 
  
  const ajouter = (event) => {
    event.preventDefault();
      dispatch(action(name));
      setName(''); 
   
  };

  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>Application Using Redux With Reactjs</h1>
      <div style={{ textAlign: 'Center' }}>
        <form onSubmit={ajouter}>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ padding: '5px 5px', marginRight: "25px" }}
          />
          <button type="submit" style={{ padding: '5px 20px' }}>Add</button>
        </form>
        <div style={{ width: "fit-content", margin: "0 auto" }}>
          <ul>
            {
				lists.map((name, i) => (
                <li key={i}>{name}</li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
