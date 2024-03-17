import './Header.css'

import {NavLink} from 'react-router-dom'

const activeClass = (params) => {
	return params.isActive ? "active-item" : ""
}

function Header(){
	return (
		<ul>
			<li>
				<NavLink to="/" className={activeClass}>Home</NavLink>
			</li>
			<li>
				<NavLink to="/todo" className={activeClass}>Todo App</NavLink>
			</li>
			<li>
				<NavLink to="/traffic-light" className={activeClass}>Traffic Light</NavLink>
			</li>
			<li>
				<NavLink to="/lesson-4" className={activeClass}>Lesson 04</NavLink>
			</li>
			<li>
				<NavLink to="/lesson-5" className={activeClass}>Lesson 05</NavLink>
			</li>
			<li>
				<NavLink to="/lesson-6" className={activeClass}>Lesson 06</NavLink>
			</li>
		</ul>
	)
}

export default Header;