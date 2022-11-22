
import './App.css';

import './functions.js';


function App() {
  return (
    <div className="app--container">
      <header className="app--header">
      <label>Rent Property Dubin</label>
      </header>

      <body className="app--body">
      <div className="name--container">
      <label>Name: </label>
        <input 
        type = "text"
        name = "name"
        placeholder= "Name"/>
      </div>

      <div className="surname--container">
        <label>Surname: </label>
        <input 
        type = "text"
        surname = "surname"
        placeholder= "Surname"/>
      </div>

      <div className="sex--container">  
        <label>Sex: </label>
        <input id="male"
        name='sex'
        sex="male"
        type="radio"/>
        <label>Male</label>
        
        <input id="female"
        name='sex'
        sex="female"
        type="radio"/>
        <label>Female</label>
        
        <input id="other"
        name='sex'
        sex="other"
        type="radio"/>
        <label>Other</label>
      </div>

      <div className="search--container">
        <label>Search: </label>
        <select id="search">
        <option value="D1">D1</option>
        <option value="D2">D2</option>
        <option value="D3">D3</option>
        <option value="D4">D4</option>
        <option value="D5">D5</option>
        <option value="D6">D6</option>
        <option value="D6W">D6w</option>
        <option value="D7">D7</option>
        <option value="D8">D8</option>
        <option value="D9">D9</option>
        <option value="D10">D10</option>
        <option value="D11">D11</option>
        <option value="D12">D12</option>
        <option value="D13">D13</option>
        <option value="D14">D14</option>
        <option value="D15">D15</option>
        <option value="D16">D16</option>
        <option value="D17">D17</option>
        <option value="D18">D18</option>
        <option value="D19">D19</option>
        <option value="D20">D20</option>
        <option value="D22">D22</option>
        <option value="D24">D24</option>
      </select>
      </div>

      <div className="price--container">
          <label>Price: </label>
          <select id="price">
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
          <select id="radius">
          <option value="1">&lt;1km</option>
          <option value="3">&lt;1km  &lt;3km</option>
          <option value="5">&lt;3km  &lt;5km</option>
          <option value="6">&lt;5km</option>
          </select>
      </div>
        
      <div className="beds--container">
          <label>Beads: </label>

          <input id="oneBead"
          name='beads'
          type="radio"
          /><label>1</label>
        
          <input id="twoBeads"
          name='beads'
          type="radio"
          /><label>2</label>
        
          <input id="threeBeads"
          name='beads'
          type="radio"
          /><label>3</label>

          <input id="fourBeads"
          name='beads'
          type="radio"/>
          <label>4</label>
        
          <input id="plusFourBeads"
          name='beads'
          type="radio"/>
          <label>Max</label>
        </div>

        <div className="beths--container">
          <label>Beths: </label>

          <input id="oneBath"
          name='baths'
          type="radio"/>
          <label>1</label>
        
          <input id="twoBaths"
          name='baths'
          type="radio"
          /><label>2</label>
        
          <input id="threeBaths"
          name='baths'
          type="radio"
          /><label>3</label>

          <input id="fourBaths"
          name='baths'
          type="radio"
          /><label>4</label>
        
          <input id="plusFourBaths"
          name='baths'
          type="radio"
          /><label>Max</label>
        </div>

      <div className="type--container">
        <label>Type</label>
        
        <button type="button" className="button--container" onClick="myFunction()">Any Property</button>

        <button type="button" className="button--container" onClick="myFunction()">House</button>

        <button type="button" className="button--container" onClick="myFunction()">Apartment</button>

        <button type="button" className="button--container" onClick="myFunction()">Studio Apartment</button>
        
        </div>
      
      
      <div className="facilities--container">
        <label>Facilities</label>
        
          <button type="button" className="button--container" onClick="myFunction()">Any Property</button>

          <button type="button" className="button--container" onClick="myFunction()">Alarm</button>

          <button type="button" className="button--container" onClick="myFunction()">Cacle</button>

          <button type="button" className="button--container" onClick="myFunction()">Dishwasher</button>

          <button type="button" className="button--container" onClick="myFunction()">Garden/ Pation/ Balcony</button>

          <button type="button" className="button--container" onClick="myFunction()">Heating</button>

          <button type="button" className="button--container" onClick="myFunction()">Internet</button>

          <button type="button" className="button--container" onClick="myFunction()">Microwave</button>

          <button type="button" className="button--container" onClick="myFunction()">Parking</button>

          <button type="button" className="button--container" onClick="myFunction()">Pets Allowed</button>

          <button type="button" className="button--container" onClick="myFunction()">Smoking</button>

          <button type="button" className="button--container" onClick="myFunction()">Serviced Property</button>

          <button type="button" className="button--container" onClick="myFunction()">Tumble Dryer</button>

          <button type="button" className="button--container" onClick="myFunction()">Washing Machine</button>

          <button type="button" className="button--container" onClick="myFunction()">Wheelchair</button>

        </div>
        <button type="button" className="button--container">Send</button> 
        <button type="button" className="button--container">Reset</button>
  </body>
  <footer className="footer--container">
    <label>Caio Medina</label>
  </footer>

      
    </div>
  );
}

export default App;
