<p align="center">
  <img src="https://user-images.githubusercontent.com/107879472/210183769-5717ad8b-220d-40c8-9926-3315f4772bb3.gif">
</p>

# Email Contact Form
A form ready to be integrated into any web page, with validations.

All you have to do is define which email will receive the form data.

## Built With
- HTML
- JS
- PHP

## How To Use
On line 8 of the send_mail.php file enter your email.
```php
if (mail("YOUR EMAIL HERE", $data->subject, $data->message, $headers)) {
```
