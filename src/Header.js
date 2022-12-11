import { Link, NavLink } from 'react-router-dom';

const active = {
	fontWeight: 'bold',
	color: 'aqua',
};

function Header() {
	return (
		<header>
			<h1>
				<Link to='/'>Logo</Link>
			</h1>

			<ul id='gnb'>
				<li>
					<NavLink to='/company' activeStyle={active}>
						Company
					</NavLink>
				</li>

				<li>
					<NavLink to='/join' activeStyle={active}>
						Join
					</NavLink>
				</li>
			</ul>
		</header>
	);
}

export default Header;
