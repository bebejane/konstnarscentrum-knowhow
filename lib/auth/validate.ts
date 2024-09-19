import PasswordValidator from 'password-validator';

const passwordValidator = new PasswordValidator();
passwordValidator.is().min(8).is().max(100).has().uppercase().has().lowercase().has().digits(1).has().not().spaces()


const validateSignUp = (params) => {
	const { email, password, password2, firstName, lastName } = params
	const errors = [];

	const emailError = validateEmail(email);
	const passwordError = validatePassword(password, password2);

	if (emailError)
		errors.push(emailError);
	if (passwordError)
		errors.push(passwordError);
	if (!firstName)
		errors.push('Ogiltigt förnamn');
	if (!lastName)
		errors.push('Ogiltigt andranamn');

	if (errors.length)
		throw new Error(errors.join(', '));

	return params;
};

const validatePassword = (password: string, password2?: string) => {
	if (!password)
		return 'Lösenordet är tomt'
	else if (password2 !== undefined && password !== password2)
		return 'Lösenordet matchar ej';
	else if (!passwordValidator.validate(password))
		return 'Lösenordet måste minst innehålla 8 tecken, en versal, en gemen och en siffra'
	else return null;
};

const validateEmail = (email) => {
	if (!email)
		return 'E-post adress är tom'
	else if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email))
		return 'E-post adress är ogiltig'
	else return null;
};
export {
	validateSignUp,
	validateEmail,
	validatePassword
}
