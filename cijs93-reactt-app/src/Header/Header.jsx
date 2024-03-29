import './Header.css';

import {NavLink} from 'react-router-dom'

const activeClass = (params) => {
	return params.isActive ? "item active-item" : "item"
}

function Header(){
	return (
		<div className='item-container'>
			<div>
				<NavLink to="/" className={activeClass}>Home</NavLink>
			</div>
			<div>
				<NavLink to="/todo" className={activeClass}>Todo App</NavLink>
			</div>
			<div>
				<NavLink to="/traffic-light" className={activeClass}>Traffic Light</NavLink>
			</div>
			<div>
				<NavLink to="/lesson-4" className={activeClass}>Lesson 04</NavLink>
			</div>
			<div>
				<NavLink to="/lesson-5" className={activeClass}>Lesson 05</NavLink>
			</div>
			<div>
				<NavLink to="/lesson-6" className={activeClass}>Lesson 06</NavLink>
			</div>
			<div>
				<NavLink to="/lesson-7" className={activeClass}>Lesson 07</NavLink>
			</div>
		</div>
	)
}

export default Header;