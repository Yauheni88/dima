const token = "5643959578:AAGZeWzsVuASnROQ7ZAzpHwW_6kyDRss8NY";
const chat_id = "-1001863537046";
const URI_API = `https://api.telegram.org/bot${ token }/sendMessage`;
const success = document.getElementById('form__message1');
const success2 = document.getElementById('form__message2');

document.getElementById('tg1').addEventListener('submit', function(e) {
    e.preventDefault();

    let message = `<b>Заявка с сайта!</b>\n`;
    message += `<b>Отправитель:</b> ${ this.name.value}\n`;
    message += `<b>Телефон: </b> ${ this.phone.value}\n`;
    message += `<b>Сообщение: </b> ${ this.textarea.value}`;

    axios.post(URI_API, {
        chat_id: chat_id,
        parse_mode: 'html',
        text: message
    })
    .then((res) => {
        this.name.value = "";
        this.phone.value = "";
        this.textarea.value = "";
        success.style.display = "block";
    })
    .catch((err) => {
        console.warn(err);
    })
    .finally(() => {
        console.log('the end');
    })
})


// Вторая форма///

document.getElementById('tg2').addEventListener('submit', function(e) {
    e.preventDefault();

    let message = `<b>Заявка с сайта!</b>\n`;
    message += `<b>Отправитель:</b> ${ this.name.value}\n`;
    message += `<b>Телефон: </b> ${ this.phone.value}\n`;
    message += `<b>Сообщение: </b> ${ this.textarea.value}`;

    axios.post(URI_API, {
        chat_id: chat_id,
        parse_mode: 'html',
        text: message
    })
    .then((res) => {
        this.name.value = "";
        this.phone.value = "";
        this.textarea.value = "";
        success2.style.display = "block";
    })
    .catch((err) => {
        console.warn(err);
    })
    .finally(() => {
        console.log('the end');
    })
})
