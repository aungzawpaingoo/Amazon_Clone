import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import NavigationBar from './components/NavigationBar';
import CategoriesTab from './components/CategoriesTab';
import HomePage from './pages/HomePage';



const App = () => {
  return (

    <Router>
    <NavigationBar/>
    <CategoriesTab/>

      <main>
      <Switch>

        <Route path="/" exact>
        <HomePage/>
        </Route>

      </Switch>
      </main>

    </Router>

  )
}

export default App