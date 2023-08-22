import './assets/css/base/base.css';
import './assets/css/componentes/card.css'
//vamos a importar la pagina home
import Home from "./pages/Home"
import Sobre from "./pages/Sobre"
import Page404 from './pages/Page404';
import Header from './componets/Header';
//uso de params
import Post from './pages/Posts';
import Categoria from './pages/Categoria';
//vamos a importar el browser router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  // react router, con route podemos definir las rutas de una manera mas sencilla
  //lo que este fuera de routes se puede compartir en todas las paginas y ahi es donde pondremos el menu 
  return (
      <Router>  
        <Header/>
    <Routes>
        <Route path='/' element= {<Home/>} />
        <Route path='/sobre' element= {<Sobre/>} />
        <Route path='/posts/:id' element={<Post/>} />
        <Route path='/categoria/:id/*' element={<Categoria/>} />
        <Route path='*' element= {<Page404/>} />
    </Routes>
    </Router>
  );
}

export default App;
