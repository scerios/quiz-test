function getCategoryAvailabilities(categories, limit) {
    for (let i = 0; i < categories.length; i++) {
        categories[i].isAvailable = categories[i].question_index < limit;
    }
    return categories;
}

function tryGetInputErrors(inputs, errorMessages) {
    let { name, password, confirmPassword} = inputs;
    let errors = [];

    if (!name || !password || !confirmPassword) {
        errors.push(errorMessages.required);
    }

    if (name.length < 3) {
        errors.push(errorMessages.tooShortName);
    }

    if (password.length < 6) {
        errors.push(errorMessages.tooShortPassword);
    }

    if (password !== confirmPassword) {
        errors.push(errorMessages.different);
    }

    return errors;
}

exports.getCategoryAvailabilities = getCategoryAvailabilities;
exports.tryGetInputErrors = tryGetInputErrors;