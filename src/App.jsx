import Hello from "./components/Hello";
import HelloWorld from "./components/HelloWorld";
import "./app.css";

function App() {
  let saludo = 'My Friend'
  return (
    <>
 <HelloWorld></HelloWorld>
    <Hello saludo = {saludo}></Hello>
    </>
  );
}

export default App;
