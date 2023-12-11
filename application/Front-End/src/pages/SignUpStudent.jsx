import React, { Fragment } from "react";
import NavMenu from "./NavMenu";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import FileDropZone from "./FileDropZone";

function SignUpStudent() {
	return (
		<Fragment>
			<NavMenu />
			<div className="auth">
				<div className="form-child form-background">
					<div className="form-left text-center"></div>

					<div className="form-overlay"></div>
				</div>
				<div className="form-child signin-form">
					<form id="form-signup-1">
						<h1 className="form-title">
							<b>Sign Up Application</b>
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
							<div className="lastName sign-group-element">
								<label className="signup-label" htmlFor="LastName">
									<p className="required-field-star">Last Name</p>
								</label>
								<input
									id="sign-up-ln-1"
									className="form-control"
									type="text"
									placeholder="LastName"
									name="lastname"
								/>
							</div>
						</div>
						<div className="form-group sign-group-style sign-group-element">
							<label className="signup-label" htmlFor="email">
								<p className="required-field-star">Email Address (SFSU)</p>
							</label>
							<input
								className="form-control"
								type="email"
								id="sign-up-em-1"
								placeholder="Email Address"
								name="email"
							/>
						</div>
						<div className="student-id sign-group-style sign-group-element">
							<label className="signup-label" htmlFor="LastName">
								<p className="required-field-star">Student ID #</p>
							</label>
							<input
								className="form-control"
								type="text"
								placeholder="Student ID"
								name="StudentID"
							/>
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
							<div className="confirm-pass sign-group-element">
								<label className="signup-label" htmlFor="confirmPassword">
									<p className="required-field-star">Confirm Password</p>
								</label>
								<input
									id="signup-password-2"
									className="form-control"
									type="password"
									placeholder="Confirm Password"
									name="password2"
								/>
							</div>
							<div className="policy sign-group-element">
								<input
									className="form-check-input mt-1"
									type="checkbox"
									name="agreement"
								/>
								<a className="policy-link" href="/rules">
									<p className="required-field-star">
										Accept Terms and Conditions
									</p>
								</a>
							</div>
							<div className="submit-form-botton sign-group-element">
								<Link to="/signin"><button
									className="signup-btn"
									type="submit"
									value="Sign Up"
									id="signup-btn-1"
								>
									Sign Up
								</button></Link>
							</div>
							<Link to="/Signin" className="signIn">Have an account? Sign In</Link>
						</div>
					</form>
				</div>
			</div>
			<Footer />
		</Fragment>
	);
}

export default SignUpStudent;
