import React from 'react';
import logo from '../images/logo.svg';
import "./Navbar.css";


const Navbar = () => {
  return (
    
<div>

	<header>
		<div className='logo'>
    <img src={logo} />
		</div>
		<nav>
			<ul>
				<li><a href="#">Home</a></li>
				<li><a href="#">About Us</a></li>
				<li><a href="#">Services</a></li>
				<li><a href="#">Contact Us</a></li>
			</ul>
		</nav>
	</header>
	<section class="banner">
		<div class="banner-text">
			<h1>Welcome to Our Website</h1>
			<p>Discover our products and services that can help you achieve your goals.</p>
			<a href="#" class="button">Learn More</a>
		</div>
	</section>
	<section className='features'>
		<div className='feature-item'>
    <img src={logo} />
			<h2>Feature 1</h2>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam varius scelerisque ipsum, sit amet scelerisque lectus egestas et. </p>
		</div>
		<div className='feature-item'>
    <img src={logo} />
			<h2>Feature 2</h2>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam varius scelerisque ipsum, sit amet scelerisque lectus egestas et. </p>
		</div>
		<div className='feature-item'>
    <img src={logo} />
			<h2>Feature 3</h2>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam varius scelerisque ipsum, sit amet scelerisque lectus egestas et. </p>
		</div>
	</section>
	<section className='cta'>
		<h2>Ready to Get Started?</h2>
		<a href="#" className='button'>Sign Up Now</a>
	</section>
	<footer>
		<p>&copy; 2023 My Company. All rights reserved.</p>
	</footer>

  </div>

    
  )
}

export default Navbar;
