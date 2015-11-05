import {createHistory} from 'history'
import {Router, Route, Link} from 'react-router'

const history = createHistory()

render((
	<Router history={history}>
		<Route path='/' component={App}>
		</Route>
	</Router>
), document.getElementById('app-container'))