import React, { Fragment } from "react";
import NavMenu from "./NavMenu";
import { Link } from "react-router-dom";
import Footer from "./Footer";

function SignIn() {
	return (
		<Fragment>
			<NavMenu />
			<div className="auth">
				<div className="form-child form-background">
					<div className="form-left text-center"></div>

					<div className="form-overlay"></div>
				</div>
				<div className="form-child signin-form login-form">
					<form id="form-signup-1">
						<h1 className="form-title">
							<b>Sign In to your Account</b>
							<hr />
						</h1>
						<div className="name-group sign-group-style ">
							<div className="firstName sign-group-element">
								<label className="signup-label" htmlFor="firstName">
									<p className="required-field-star">First Name</p>
								</label>

								<input
									id="sign-up-fn-1"
									className="form-control"
									type="text"
									placeholder="FirstName"
									name="name"
								/>
							</div>
						</div>
						<div className="pass-group sign-group-style">
							<div className="password  sign-group-element">
								<label className="signup-label" htmlFor="password">
									<p className="required-field-star">Password</p>
								</label>
								<input
									id="signup-password"
									className="form-control"
									type="password"
									placeholder="Password"
									name="password"
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
									Don't have a Account?{" "}
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
