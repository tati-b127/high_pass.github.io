// VALIDATE
// import JustValidate from "just-validate";

const validate = new JustValidate('#form');
const valid = new JustValidate('#form-email');

const validation = new JustValidate('#form', {
    errorFieldCssClass: 'is-invalid',
});
const validat = new JustValidate('#form-email', {
    errorFieldCssClass: 'is-invalid'})

validation
    .addField('#input-name', [
        {
            rule: 'minLength',
            value: 2,
            errorMessage: 'Недопустимый формат',
        },
        {
            rule: 'maxLength',
            value: 30,
            errorMessage: 'Недопустимый формат',
        },
        {
            rule: 'required',
            errorMessage: 'Вы не ввели имя',
        }
    ])
    .addField('input[type=email]', [
        {
            rule: 'required',
            errorMessage: 'Вы не ввели e-mail',
        },
        {
            rule: 'email',
            errorMessage: 'E-mail не корректный',
        },
    ])
validat
    .addField('input[type=email]', [
        {
            rule: 'required',
            errorMessage: 'Вы не ввели e-mail',
        },
        {
            rule: 'email',
            errorMessage: 'E-mail не корректный',
        },
    ])

