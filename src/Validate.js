export const validateInputs = (name, address, phone, setNameError, setAddressError, setPhoneError) => {
    let valid = true;

    if (name.trim() === '') {
        setNameError('Name is required');
        valid = false;
    } else {
        setNameError('');
    }

    // Address pattern to allow more flexible formatting: "City, State, Zip"
    const addressPattern = /^[A-Za-z\s]+,\s?[A-Za-z\s]+,\s?\d{5}$/;
    if (address.trim() === '' || !addressPattern.test(address)) {
        setAddressError('Address should be in the format "City, State, Zip"');
        valid = false;
    } else {
        setAddressError('');
    }

    // Phone pattern to allow more flexible formatting
    const phonePattern = /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;
    if (phone.trim() === '' || !phonePattern.test(phone)) {
        setPhoneError('Phone number should be in the format "(123) 123-1234", "(123)-123-1234", "(123)123-1234", or "123-123-1234"');
        valid = false;
    } else {
        setPhoneError('');
    }

    return valid;
};
