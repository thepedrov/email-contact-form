import { validateName, validateEmail, validateSubject, validateMessage } from './validations.js';

document.addEventListener('DOMContentLoaded', function () {
    var parent = document.getElementById('frmContact');

    parent.addEventListener('submit', function (event) {
        formDisableEnable();

        const data = {
            name: parent.querySelector('#txtName').value.trim(),
            email: parent.querySelector('#txtEmail').value.trim(),
            subject: parent.querySelector('#txtSubject').value.trim(),
            message: parent.querySelector('#txtMessage').value.trim()
        }

        if (formValidations(data)) {
            fetch('../send_mail.php', {
                method: 'POST',
                body: JSON.stringify(data)
            })
                .then(function (response) {
                    response.ok ? showSuccess() : showMessage();
                })
                .catch(function (error) {
                    showMessage();
                })
                .finally(function () {
                    formDisableEnable();
                });
        } else {
            formDisableEnable();
        }

        event.preventDefault();
    });

    function formDisableEnable() {
        Array.from(parent.elements).forEach(formElement => formElement.disabled = !formElement.disabled);
    }

    function formValidations(data) {
        cleanMessages();

        let canSend = true;

        if (!validateName(data.name)) {
            showMessage('errorName', 'Enter a valid name');
            canSend = false;
        }

        if (!validateEmail(data.email)) {
            showMessage('errorEmail', 'Enter a valid email address');
            canSend = false;
        }

        if (!validateSubject(data.subject)) {
            showMessage('errorSubject', 'Enter a valid subject');
            canSend = false;
        }

        if (!validateMessage(data.message)) {
            showMessage('errorMessage', 'Enter a valid message');
            canSend = false;
        }

        return canSend;
    }

    function cleanMessages() {
        showMessage(undefined, '');

        showMessage('errorName', '');
        showMessage('errorEmail', '');
        showMessage('errorSubject', '');
        showMessage('errorMessage', '');
    }

    function showSuccess() {
        showMessage(undefined, 'Email sent successfully!');
        parent.reset();
    }

    function showMessage(elementHTML = 'statusMessage', message = 'An unexpected error occurred.') {
        parent.querySelector('#' + elementHTML).innerHTML = message;
    }
});