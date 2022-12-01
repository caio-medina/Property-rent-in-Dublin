import './App.css';
import Axios from "axios";
//import Formulario from ".";



function App() {
  
  const handleClickButton = () =>{
    
    Axios.post("http://localhost:3000/register", {

      //formulario: Formulario.document.getElementById.value,
      name: document.getElementById("name").value,
      surname: document.getElementById("surname").value,
      email: document.getElementById("email").value,
      sex: document.getElementById("sex").value,
      location: document.getElementById("location").value,
      price: document.getElementById("price").value,
      radius: document.getElementById("radius").value,
      sharedrooms: document.getElementById("sharedrooms").value,
      beds: document.getElementById("beds").value,
      beths: document.getElementById("beths").value,
      
      //form: Formulario
 
    }).then((response)=>{
        console.log(response);
    });
  };

 
  return (
    <div className="app--container">
    <header className="app--header">
      <label>Rent Property Dubin</label>
    </header>

    <body className="app--body">

    <div className="personal-information--container">
      <div className="name--container">
      <label>Name: </label>
        <input 
        type = "text"
        name = "name"
        placeholder= "Name"
        id = "name"
        />
      </div>

      <div className="surname--container">
        <label>Surname: </label>
        <input 
        type = "text"
        name = "surname"
        placeholder= "Surname"
        id = "surname"
        />
      </div>

      <div className="email--container">
      <label>E-mail: </label>
        <input 
        type = "text"
        name = "email"
        placeholder= "E-mail"
        id = "email"
        />
      </div>
     

      <div className="sex--container">
       
          <label>Sex: </label>
          <select id="sex" name= "sex">
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
          
          </select>
        </div>
      </div>
      

    <div className="requirements-property--container">
      <div className="location--container">
        <label>Location: </label>
        <select id="location" name="location">
        <option value="d1">D1</option>
        <option value="d2">D2</option>
        <option value="d3">D3</option>
        <option value="d4">D4</option>
        <option value="d5">D5</option>
        <option value="d6">D6</option>
        <option value="d6W">D6w</option>
        <option value="d7">D7</option>
        <option value="d8">D8</option>
        <option value="d9">D9</option>
        <option value="d10">D10</option>
        <option value="d11">D11</option>
        <option value="d12">D12</option>
        <option value="d13">D13</option>
        <option value="d14">D14</option>
        <option value="d15">D15</option>
        <option value="d16">D16</option>
        <option value="d17">D17</option>
        <option value="d18">D18</option>
        <option value="d19">D19</option>
        <option value="d20">D20</option>
        <option value="d22">D22</option>
        <option value="d24">D24</option>
      </select>
      </div>

      <div className="price--container">
          <label>Price: </label>
          <select id="price" name="price">
          <option value="400">&lt;400&euro;</option>
          <option value="500">&lt;400&euro;  &lt;500&euro;</option>
          <option value="600">&lt;500&euro;  &lt;600&euro;</option>
          <option value="700">&lt;600&euro;  &lt;700&euro;</option>
          <option value="800">&lt;700&euro;  &lt;800&euro;</option>
          <option value="801">&lt;800&euro;</option>
          </select>
      </div>    
        
    
      <div className="radius--container"> 
          <label>Radius: </label>
          <select id="radius" name="radius">
          <option value="1">&lt;1km</option>
          <option value="3">&lt;1km  &lt;3km</option>
          <option value="5">&lt;3km  &lt;5km</option>
          <option value="6">&lt;5km</option>
          </select>
      </div>

      <div className="sharedrooms--container"> 
          <label>Shared rooms: </label>
          <select id="sharedrooms" name="sharedrooms">
          <option value="1">Single room</option>
          <option value="2">Double room</option>
          <option value="3">Triple room</option>
          </select>
      </div>
        
      <div className="beds--container">
       
          <label>Rooms: </label>
          <select id="beds" name="beds">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          </select>
      </div>
         
        <div className="beths--container">
        <label>Beths: </label>
          <select id="beths" name="beths">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          </select>
        </div>
        </div>
        <div className="button--container">
          <button type="button" onClick={()=> handleClickButton()} >Send</button> 
          <button type="button" >Reset</button>
        </div>
      
  </body>
  <footer className="footer--container">
    <label>Caio Medina</label>
  </footer>

      
    </div>
    
  );
}


export default App;
