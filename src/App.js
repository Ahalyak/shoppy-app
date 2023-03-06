import {BrowserRouter,Switch,Route} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Products from './components/Products'

import AllProducts from './components/AllProducts'
import ProtectedRoute from './components/ProtectedRoute'

import './App.css'

const App = () => (
  <BrowserRouter>
  < Switch>
    <Route exact path="/login" component={LoginForm} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/products" component={AllProducts} />
      <ProtectedRoute exact path="/products/:id" component={Products} />

    
  </Switch>
  </BrowserRouter>
)

export default App
