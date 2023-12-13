import React, { Fragment, useState } from "react";
import NavMenu from "./NavMenu";
import Footer from "./Footer";
import Dropdown from "./Dropdown";

function SignUp() {
	const localApi = "http://localhost:8003/createUser"; //temp
	const api = "http://3.101.225.46:3000/createUser";

	const [formInput, setFormInput] = useState({
		firstname: "",
		lastname: "",
		email: "",
		username: "",
		password: "",
		confirmPass: "",
	});

	const [formError, setFormError] = useState({
		firstname: "",
		lastname: "",
		email: "",
		username: "",
		password: "",
		confirmPass: "",
	});

	const validateFormInput = async (event) => {
		event.preventDefault();

		let formError = {
			firstname: "",
			lastname: "",
			email: "",
			username: "",
			password: "",
			confirmPass: "",
		};

		// Checking if values are empty
		if (
			!formInput.firstname &&
			!formInput.lastname &&
			!formInput.email &&
			!formInput.username &&
			!formInput.password &&
			!formInput.confirmPass
		) {
			setFormError({
				...formError,
				firstname: "Enter a first name",
				lastname: "Enter a last name",
				email: "Enter a valid email address",
				username: "Enter a student ID",
				password: "You must enter in a password",
			});
			return;
		}

		// Checking if Full name is empty
		if (!formInput.firstname && !formInput.lastname) {
			setFormError({
				...formError,
				firstname: "Must enter a first name",
				lastname: "Must enter a last name",
			});
			return;
		}

		if (!formInput.firstname) {
			setFormError({
				...formError,
				firstname: "Must enter a first name",
			});
			return;
		}

		if (!formInput.lastname) {
			setFormError({
				...formError,
				lastname: "Must enter a last name",
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
		if (!formInput.username) {
			setFormError({
				...formError,
				username: "Student ID should not be empty",
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
		setFormError({});
		const newdata = { ...formInput };
		newdata[event.target.id] = event.target.value;
		setFormInput(newdata);
		console.log('newdata',newdata)

		setFormInput((prevState) => ({
			...prevState,
			successMsg: "Account Successfully Made!",
		}));

		// await createTutor();
	};

	const handleUserInput = (name, value) => {
		setFormInput({
			...formInput,
			[name]: value,
		});
	};

	async function createTutor() {
		const res = await fetch(api, {
			method: "POST",
			body: JSON.stringify({
				firstname: formInput.firstname,
				lastname: formInput.lastname,
				email: formInput.email,
				username: formInput.username,
				password: formInput.password,
			}),
			headers: {
				"Content-type": "application/json; charset=UTF-8",
			},
		}).then((response) => console.log(response.status));
	}

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
							<b>Tutor Application</b>
							<hr />
						</h1>
						<div className="name-group sign-group-style ">
							<div className="firstname sign-group-element">
								<label className="signup-label" htmlFor="firstname">
									<p className="required-field-star">First Name</p>
								</label>

								<input
									onChange={({ target }) => {
										handleUserInput(target.name, target.value);
									}}
									id="sign-up-fn-1"
									value={formInput.firstname}
									className="form-control"
									type="text"
									placeholder="firstname"
									name="firstname"
								/>
								<p className="error-message">{formError.firstname}</p>
							</div>
							<div className="lastname sign-group-element">
								<label className="signup-label" htmlFor="lastname">
									<p className="required-field-star">Last Name</p>
								</label>
								<input
									onChange={({ target }) => {
										handleUserInput(target.name, target.value);
									}}
									id="sign-up-ln-1"
									value={formInput.lastname}
									className="form-control"
									type="text"
									placeholder="lastname"
									name="lastname"
								/>
								<p className="error-message">{formError.lastname}</p>
							</div>
							<div className="topics sign-group-element">
								<label className="topics-label" htmlFor="topicsLabel">
									Topics
								</label>
								<Dropdown />
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
								className="form-control"
								type="email"
								id="sign-up-em-1"
								value={formInput.email}
								placeholder="Email Address"
								name="email"
							/>
							<p className="error-message">{formError.email}</p>
						</div>
						<div className="student-id sign-group-style sign-group-element">
							<label className="signup-label" htmlFor="lastname">
								<p className="required-field-star">Student ID #</p>
							</label>
							<input
								onChange={({ target }) => {
									handleUserInput(target.name, target.value);
								}}
								className="form-control"
								type="text"
								placeholder="Student ID"
								value={formInput.username}
								name="username"
							/>
							<p className="error-message">{formError.username}</p>
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
									id="signup-password"
									className="form-control"
									value={formInput.password}
									type="password"
									placeholder="Password"
									name="password"
								/>
								<p className="error-message">{formError.password}</p>
							</div>
							<div className="confirm-pass sign-group-element">
								<label className="signup-label" htmlFor="confirmPassword">
									<p className="required-field-star">Confirm Password</p>
								</label>
								<input
									onChange={({ target }) => {
										handleUserInput(target.name, target.value);
									}}
									id="signup-password-2"
									value={formInput.confirmPass}
									className="form-control"
									type="password"
									placeholder="Confirm Password"
									name="confirmPass"
								/>
								
							</div>
							<div className="text-area sign-group-element">
								<label className="description" htmlFor="descriptionText">
									Description (500 characters maximum)
								</label>
								<textarea></textarea>
							</div>

							<div className="text-area sign-group-element">
								<label for="myfile">Upload CV</label>
								<input type="file" id="file-upload" name="file"></input>
							</div>
							<div className="text-area sign-group-element">
								<label for="myfile">Upload Media</label>
								<input type="file" id="file-upload2" name="file"></input>
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
									value="Sign Up"
									id="signup-btn-1"
								>
									Sign Up
								</button>
							</div>
							<p className="error-message">{formError.confirmPass}</p>
								<p className="success-message">{formInput.successMsg}</p>
						</div>
					</form>
				</div>
			</div>
			<Footer />
		</Fragment>
	);
}

export default SignUp;
