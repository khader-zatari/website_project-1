import './App.css';
import Fotter from './components/Fotter';
import HomePage from './components/HomePage';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/About';
import AdminLogin from './components/AdminLogin';
import ProtectedRoute from './components/ProtectedRoute';
import AdminEditGallery from './components/AdminEditGallery';
import AdminEditSlideShow from './components/AdminEditSlideShow';
import AdminEditNews from './components/AdminEditNews';
import AdminEditEvents from './components/AdminEditEvents';
import EditorPageImlimentation from './components/Editor/EditorPageImlimentation';
import ListOfDep from './components/ListOfDep';
import InsidePage3 from './components/InsidePage';
import Photos from './components/Photos';
import Videos from './components/Videos';
function App() {
  
  return ( 
    
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Header />
            <HomePage />
            <Fotter />
          </Route>
          <Route exact path='/about'>
            <Header />
            <About />
            <Fotter />
          </Route>
          <Route exact path='/Admin'>
            <AdminLogin />
          </Route>
          <Route exact path="/ביה''ח כפר שאול">
            <Header />
            <ListOfDep />
            <Fotter />
          </Route>
          <Route exact path="/ביה''ח כפר שאול/a">
            <Header />
            <InsidePage3 />
            <Fotter />
          </Route>
          <Route exact path="/gallery">
            <Header />
            <Photos/>
            <Fotter />
          </Route>
          <Route exact path="/Videos">
            <Header />
            <Videos/>
            <Fotter />
          </Route>
          <ProtectedRoute
            exact
            path='/Admin/EditGallery'
            component={AdminEditGallery}
          />
          <ProtectedRoute
            exact
            path='/Admin/EditNews'
            component={AdminEditNews}
          />
          <ProtectedRoute
            exact
            path='/Admin/EditEvents'
            component={AdminEditEvents}
          />
          <ProtectedRoute
            exact
            path='/Admin/EditSlideShow'
            component={AdminEditSlideShow}
          />
          <ProtectedRoute
            exact
            path='/Admin/EditPages'
            component={EditorPageImlimentation}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
