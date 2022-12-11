import Company from './Company';
import Header from './Header';
import Join from './Join';
import Main from './Main';
import { Route } from 'react-router-dom';

function App() {
	return (
		<main>
			<Header />
			<Route exact path='/' component={Main} />
			<Route path='/company' component={Company} />
			<Route path='/join' component={Join} />
		</main>
	);
}

export default App;
