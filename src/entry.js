// Require any dependency here for Webpack to bundle
import React from 'react'
import {render} from 'react-dom'
import {createHistory} from 'history'
import {Router, Route, Link} from 'react-router'

const history = createHistory();
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

class Home extends React.Component {
	render() {
		return (
			<div>I am the Home</div>
		)
	}
}

render((
	<Router history={history}>
		<Route path="/" component={App}>
			<Route path="home" component={Home}/>
		</Route>
	</Router>
), document.getElementById('app-container'))