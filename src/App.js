import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

//UseEffect- Handles side effects in functional components
//Side Effects- all operations that affect your component and cant be done during rendering. Ex: fetching data, subscriptions, manullay changing the DOM

function App() {
  const [data, setData] = useState({ hits: [] }) //wrap into objects use { },using on line 28 

 async function fetchData() {
   //must import axios from terminal like this: npm i axios
   const response = await axios(
      'https://hn.algolia.com/api/v1/search?query=redux',
   );
   setData(response.data);
}
//用效果
  useEffect(() => {
    fetchData()
    console.log('running...')// if we leave it like this
    //it will run constantly
    // when we add an [], it only renders on the first
}, [])
  return (
    <ul>
      {data.hits.map((item) => {
    return <li key={item.objectID} >
          <a href={item.url}>{item.title}</a>
        </li>
      })}
    </ul>
  );
}

export default App;

export default App;
