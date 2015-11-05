import React from 'react'
import {render} from 'react-dom'
import {createHistory} from 'history'
import {Router, Route, Link} from 'react-router'

const history = createHistory()

// const App = React.createClass {
// 	render() {
// 		return (
// 			<div>
// 				<ul>
// 					<li><Link to='/home'>Home</Link></li>
// 				</ul>
// 				{this.props.children}
// 			</div>
// 		)
// 	}
// }

// render((
// 	<Router history={history}>
// 		<Route path='/' component={App}>
// 			<Route path='home' component={Home}/>
// 		</Route>
// 	</Router>
// ), document.body)