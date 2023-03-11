import React from 'react';
import logo from '../images/logo.svg';
import "./Navbar.css";


const Navbar = () => {
  return (
    <div>
      <img src={logo} />
  
    
	<header>
		<h1>My Website</h1>
		<nav>
			<ul>
				<li><a href="index.html">Home</a></li>
				<li><a href="about.html">About Us</a></li>
				<li><a href="contact.html">Contact Us</a></li>
			</ul>
		</nav>
	</header>
	<main>
		<h2>Welcome to My Website</h2>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo quam quis justo maximus, ut consectetur lacus tincidunt. Morbi ultricies auctor quam, ut tincidunt velit semper id. Donec congue purus mauris, vel malesuada enim mollis nec. Sed a vestibulum mi. Sed tincidunt sit amet magna et blandit. Duis quis interdum arcu. Aliquam quis velit vel elit ullamcorper consectetur.</p>
		<p>Nunc in libero nibh. Proin elementum congue erat ut maximus. Fusce bibendum metus sit amet erat dictum eleifend. Etiam sed tempor dolor. Integer non massa sed nisi dictum tempor at id velit. Donec eget tellus eu dolor vestibulum viverra in eget lorem. Pellentesque a felis ac nulla iaculis convallis. Donec fermentum blandit diam, eget gravida est fermentum quis.</p>
	</main>
	<footer>
		<p>Copyright © My Website 2022</p>
	</footer>



  </div>

    
  )
}

export default Navbar;
