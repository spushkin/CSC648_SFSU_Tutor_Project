import React, { useState, Fragment } from 'react';
import NavMenu from './NavMenu';
import Footer from './Footer';

// email: "akshargothi5678@gmail.com", // Test email
// password: "Askhssk"    // Test password

function SignIn() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const handleLogin = () => {
		console.log("Attempting to log in with:", { email: username, password: password });

		fetch("http://localhost:8003/getUser", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				email: username,
				password: password
			})
		})
			.then(response => {
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
				return response.json();
			})
			.then(data => {
				console.log('Response data:', data);

				// Check if the password from the response matches the entered password
				if (data[0] && data[0].Password === password) {
					console.log('Login successful');
					// Handle successful login
					// Save user data to localStorage
					sessionStorage.setItem('user', JSON.stringify(data[0]));
					window.location.href = '/dashboard';


				} else {
					console.log('Login failed: Incorrect password');
					// Handle login failure
				}
			})
			.catch(error => {
				console.error('Error during fetch operation:', error.message);
				// Handle fetch errors
			});
	};


	return (
		<Fragment>
			<NavMenu />
			<div className="auth">
				<div className="form-child form-background">
					<div className="form-left text-center"></div>
					<div className="form-overlay"></div>
				</div>
				<div className="form-child signin-form login-form">
					<form id="form-signup-1" onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
						<h1 className="form-title">
							<b>Sign In to your Account</b>
							<hr />
						</h1>
						<div className="name-group sign-group-style ">
							<div className="firstName sign-group-element">
								<label className="signup-label" htmlFor="userName">
									<p className="required-field-star">Username</p>
								</label>
								<input
									id="sign-up-fn-1"
									className="form-control"
									type="text"
									placeholder="UserName"
									name="name"
									value={username}
									onChange={(e) => setUsername(e.target.value)}
								/>
							</div>
						</div>
						<div className="pass-group sign-group-style">
							<div className="password sign-group-element">
								<label className="signup-label" htmlFor="password">
									<p className="required-field-star">Password</p>
								</label>
								<input
									id="signup-password"
									className="form-control"
									type="password"
									placeholder="Password"
									name="password"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
								/>
							</div>
							<div className="submit-form-botton sign-group-element login-button">
								<button
									className="signup-btn"
									type="submit"
									value="Sign Up"
									id="signup-btn-1"
								>
									Login
								</button>
								<span className="login-bottom-text">
									Don't have an Account?{" "}
									<a className="links-login" href="/studentsignup">
										Sign-up
									</a>
								</span>
								<a className="links-login login-bottom-text" href="">
									<span>Forgot Password</span>
								</a>
							</div>
						</div>
					</form>
				</div>
			</div>
			<Footer />
		</Fragment>
	);
}

export default SignIn;
