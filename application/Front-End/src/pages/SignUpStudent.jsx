import React, { Fragment, useState } from "react";
import NavMenu from "./NavMenu";
import { Link } from "react-router-dom";
import Footer from "./Footer";

function SignUpStudent() {
	const apiEndpoint = "http://localhost:8003/CreateUser";
	const [formInput, setFormInput] = useState({
		firstname: "",
		lastName: "",
		email: "",
		studentID: "",
		password: "",
		confirmPass: "",
	});

	const [formError, setFormError] = useState({
		firstName: "",
		lastName: "",
		email: "",
		studentID: "",
		password: "",
		confirmPass: "",
	});

	async function validateFormInput(event) {
		event.preventDefault();

		// Initializing an object to track errors
		let formError = {
			firstName: "",
			lastName: "",
			email: "",
			studentID: "",
			password: "",
			confirmPass: "",
		};

		// Checking if values are empty
		if (
			!formInput.firstName &&
			!formInput.lastName &&
			!formInput.email &&
			!formInput.studentID &&
			!formInput.password &&
			!formInput.confirmPass
		) {
			setFormError({
				...formError,
				firstName: "Enter a first name",
				lastName: "Enter a last name",
				email: "Enter a valid email address",
				studentID: "Enter a student ID",
				password: "You must enter in a password",
			});
			return;
		}

		// Checking if Full name is empty
		if (!formInput.firstName && !formInput.lastName) {
			setFormError({
				...formError,
				firstName: "Must enter a first name",
				lastName: "Must enter a last name",
			});
			return;
		}

		if (!formInput.firstName) {
			setFormError({
				...formError,
				firstName: "Must enter a first name",
			});
			return;
		}

		if (!formInput.lastName) {
			setFormError({
				...formError,
				lastName: "Must enter a last name",
			});
			return;
		}

		// Checking if email is empty
		if (!formInput.email) {
			setFormError({
				...formError,
				email: "Enter a valid email address",
			});
			return;
		}

		// Checking if student id is empty
		if (!formInput.studentID) {
			setFormError({
				...formError,
				studentID: "Student ID should not be empty",
			});
			return;
		}

		// Check if password is empty
		if (!formInput.password) {
			setFormError({
				...formError,
				password: "Password should not be empty",
			});
			return;
		}

		// Checking if both passwords match
		if (formInput.confirmPass !== formInput.password) {
			setFormError({
				...formError,
				confirmPass: "Password and confirm password should be matching!",
			});
			return;
		}

		// Clear any previous errors
		setFormError(formError);
		const newdata = { ...formInput };
		newdata[event.target.id] = event.target.value;
		setFormInput(newdata);

		setFormInput((prevState) => ({
			...prevState,
			successMsg: "Account Successfully Made!",
		}));

		console.log(formInput);

		try {
			testApi();
		} catch (e) {
			console.log(e);
		}
	}

	const handleUserInput = (name, value) => {
		setFormInput({
			...formInput,
			[name]: value,
		});
	};

	const testApi = () => {
		fetch(apiEndpoint, {
			method: "POST",
			body: JSON.stringify({
				firstName: formInput.firstName,
				lastName: formInput.lastName,
				email: formInput.email,
				studentID: formInput.studentID,
				password: formInput.password,
			}),
			headers: {
				"Content-type": "application/json; charset=UTF-8",
			},
		}).then((response) => {
			console.log(response.status);
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
				<div className="form-child signin-form">
					<form id="form-signup-1" onSubmit={validateFormInput}>
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
									onChange={({ target }) => {
										handleUserInput(target.name, target.value);
									}}
									id="firstName"
									value={formInput.firstName}
									className="form-control"
									type="text"
									placeholder="First Name"
									name="firstName"
								/>

								<p className="error-message">{formError.firstName}</p>
							</div>
							<div className="lastName sign-group-element">
								<label className="signup-label" htmlFor="lastName">
									<p className="required-field-star">Last Name</p>
								</label>
								<input
									onChange={({ target }) => {
										handleUserInput(target.name, target.value);
									}}
									id="lastName"
									value={formInput.lastName}
									className="form-control"
									type="text"
									placeholder="Last Name"
									name="lastName"
								/>
								<p className="error-message">{formError.lastName}</p>
							</div>
						</div>
						<div className="form-group sign-group-style sign-group-element">
							<label className="signup-label" htmlFor="email">
								<p className="required-field-star">Email Address (SFSU)</p>
							</label>
							<input
								onChange={({ target }) => {
									handleUserInput(target.name, target.value);
								}}
								id="email"
								value={formInput.email}
								className="form-control"
								type="email"
								placeholder="Email Address @sfsu"
								name="email"
							/>
							<p className="error-message">{formError.email}</p>
						</div>
						<div className="student-id sign-group-style sign-group-element">
							<label className="signup-label" htmlFor="studentID">
								<p className="required-field-star">Student ID #</p>
							</label>
							<input
								onChange={({ target }) => {
									handleUserInput(target.name, target.value);
								}}
								id="studentID"
								value={formInput.studentID}
								className="form-control"
								type="text"
								placeholder="Student ID"
								name="studentID"
							/>
							<p className="error-message">{formError.studentID}</p>
						</div>
						<div className="pass-group sign-group-style">
							<div className="password  sign-group-element">
								<label className="signup-label" htmlFor="password">
									<p className="required-field-star">Password</p>
								</label>
								<input
									onChange={({ target }) => {
										handleUserInput(target.name, target.value);
									}}
									id="password"
									value={formInput.password}
									className="form-control"
									type="password"
									placeholder="Password"
									name="password"
								/>
								<p className="error-message">{formError.password}</p>
							</div>
							<div className="confirm-pass sign-group-element">
								<label className="signup-label" htmlFor="confirmPass">
									<p className="required-field-star">Confirm Password</p>
								</label>
								<input
									onChange={({ target }) => {
										handleUserInput(target.name, target.value);
									}}
									id="confirmPass"
									value={formInput.confirmPass}
									className="form-control"
									type="password"
									placeholder="Confirm Password"
									name="confirmPass"
								/>
								<p className="error-message">{formError.confirmPass}</p>
								<p className="success-message">{formInput.successMsg}</p>
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
								<button
									className="signup-btn"
									type="submit"
									value="Submit"
									id="signup-btn-1"
									onClick={testApi}
								>
									Sign Up
								</button>
							</div>
							<Link to="/Signin" className="signIn">
								Have an account? Sign In
							</Link>
						</div>
					</form>
				</div>
			</div>
			<Footer />
		</Fragment>
	);
}

export default SignUpStudent;
