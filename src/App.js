


//RUTAS
import {
  BrowserRouter as Router,
  Switch,
  Route

} from "react-router-dom";

//COMPONENTES IMPORTADOS

import Componente from './components/Componente';
import Inicio from './components/Inicio';
import Datos from './components/Datos';
import Navbar from "./components/Navbar";






function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        
        <Switch>
          <Route path="/persona/:id">
                <Datos/>
            </Route>
          
          <Route path="/componente">
              <Componente/>
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
