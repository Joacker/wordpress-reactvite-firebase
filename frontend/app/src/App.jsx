import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  /* useEffect nos permite ejecutar una función cada vez que alguna de 
     sus dependencias cambie. Las dependencias, se especifican en el array
     que recibe como segundo parámetro. 
     En este caso, solo queremos que se ejecute una vez. Por eso dejamos el
     array vacío.
  */
  useEffect(() => {
    setIsLoading(true);
    fetch('http://localhost:8080/wp-json/')
      .then((response) => response.json())
      .then((posts) => {
        setPosts(posts);
        console.log(posts)
        setIsLoading(false);
      });
  }, []);
  return (
        <div className="App">
            <h1>Hola</h1>

        </div>
        
    )
}

export default App
