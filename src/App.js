import logo from './logo.svg';
import './App.css';


const person = { name: 'Shakil', age: 29, location: 'Dhonbaria' };


function App() {
const departments =['cse','eee','law','mechanical','cicil','textile'];

  return (
    <div className="App">

{
  departments.map(dept=><li><b>Department Name:</b> {dept}</li>)
}

      <header className="App-header">
        

        <div className="container">
         <Name name="Shakil" inendity="Student" className='name'></Name>
         <Name name={departments[1]} inendity="Student" class='name'></Name>
        </div>
        <p>
          My Name Is Shakil
        </p>
      
      </header>
    </div>
  );
}

function Name(props){
  console.log(props);
  return(
    <div>
      <h1>{props.name} {props.inendity}</h1>
    </div>
  )
}

export default App;
