import React from 'react';
import { render } from 'react-dom'; 

//Import css
import css from './styles/style.styl';


import Main from './components/Main'; 
import Single from './components/Single'; 
import PhotoGrid from './components/PhotoGrid'; 

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const router = (
    <Router history={browserHistory}>
       <Route path="/" component={Main}>    {/* If it match the "/", grab the Main component */}
            <IndexRoute component={PhotoGrid}></IndexRoute>  {/* Depending on the url structure, either pass Main and Photogrid, or Main with Single.
                                                            Photogrid and Single are children of the Main component */}
            <Route path="/view/:postId" component={Single}></Route>
        </Route>
    </Router>
);

render(router, document.getElementById('root'));