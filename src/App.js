


//RUTAS
import {
  BrowserRouter as Router,
  Switch,
  Route

} from "react-router-dom";

//COMPONENTES IMPORTADOS

import Inicio from './components/Inicio';
import Navbar from "./components/Navbar";
import Products from './components/products/FormListProducts'
import Firmwares from './components/firmwares/FormFirmwares'
import Devices from './components/devices/addDevice'




function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        
        <Switch>


          <Route path="/devices">

            <Devices/>

          </Route>   

          <Route path="/firmwares">

            <Firmwares/>

          </Route>


          <Route path="/products">

            <Products/>

          </Route>


          <Route path="/" exact>
              <Inicio/>
          </Route>
        </Switch>
      

      </div>

    </Router>
   
  );
}

export default App;
