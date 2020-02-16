import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import {HashRouter, Route , Link, Switch} from 'react-router-dom'
import {createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux'

import Main from './components/main.js'
import PhotoGrid from './components/photoGrid.js'
import Single from './components/single.js'
import reducer from './reducers/reducer.js'
import {initializeAction} from './actions/action.js'

const store = createStore(reducer,{},window.devToolsExtension && window.devToolsExtension());
store.dispatch(initializeAction);

ReactDOM.render(
	<React.Fragment>
		<Provider store ={store}>
			<HashRouter>
			<Link to='/' style={{textDecoration:'none'}}> <Main /> </Link>
				<Switch>
					<Route exact path='/' component={PhotoGrid}/>
					<Route exact path='/photo/:id' component={Single}/>
				</Switch>
			</HashRouter>
		</Provider>
	</React.Fragment>
	,
	document.getElementById('root')
)