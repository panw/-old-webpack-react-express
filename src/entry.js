// Require any dependency here for Webpack to bundle
import React from 'react'
import {render} from 'react-dom'
import {createHistory} from 'history'
import {Router, Route, Link} from 'react-router'
import Home from './components/home'

class App extends React.Component{
	render() {
		return (
			<div>
				<Link to="/home">Home</Link>
				I am the App
				{this.props.children}
			</div>
		)
	}
}

render((
	<Router history={createHistory()}>
		<Route path="/" component={App}>
			<Route path="home" component={Home}/>
		</Route>
	</Router>
), document.getElementById('app-container'))