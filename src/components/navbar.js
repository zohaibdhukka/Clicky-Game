import React from 'react';

const NavBar = ({ score, topScore, message }) => {
	return (
		<div className='navbar-fixed'>
			<nav>
				<div className='nav-wrapper row blue center-align flow-text'>
					<div className='col s4'>
						<a href='/'><b>Clicky Game</b></a>
					</div>
					<div className='col s4'>
						<span>{message}</span>
					</div>
					<div className='col s4'>
						<span>Score: {score} | Top Score: {topScore}</span>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default NavBar;