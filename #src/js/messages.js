export const messages = [];

export const initFrom = (cssPrefix) => {
    const list = document.getElementById(`${cssPrefix}-ul`)
    const form = document.getElementById(`${cssPrefix}-form`);
    const input = document.getElementById(`${cssPrefix}-message`);
    const sendBtn = document.getElementById(`${cssPrefix}-sendBtn`);

    const newMessage = (answer) => {
        const message = document.createElement('li');
        message.className = cssPrefix + `-message ${answer ? 'bot' : 'user'}-message`;
        message.innerHTML = answer ? answer : input.value;
        if (messages.length) list.insertAdjacentElement('afterbegin', message)
        else {
            list.innerHTML = '';
            list.insertAdjacentElement('afterbegin', message)
        }
        list.scroll({top: 100})
        messages.push({ message: answer ? answer : input.value, own: true })
        if (!answer) input.value = '';
        if (!answer) setTimeout(() => getAnswer(),1000)
    }

    form.onsubmit = (e) => {
        e.preventDefault();
        newMessage();
    }
    sendBtn.onclick = (e) => newMessage();

    const getAnswer = async () => {
        const answer = await fetch('https://api.chucknorris.io/jokes/random')
            .then(res => res.json())
            .catch(err => alert(err))
        newMessage(answer.value)
    }
}

export const renderMessages = (selector) => {
    if (!messages.length) return `<p>Ask the question</p>`
    return messages.map(m => `<li class="${selector}-message ${m.own ? 'user' : 'bot'}-message">${m.message}</li>`).join('');
}

export const messagesStyles = (options) => `
    #${options.cssPrefix}-ul {
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column-reverse;
        justify-content: flex-start;
        flex-grow: 1;
    }
    .${options.cssPrefix}-message {
        list-style: none;
        padding: 4px 10px;
        border-radius: 5px;
        width: fit-content;
        max-width: 60%;
        background: #fff;
        color: #000;
        font-size: 10px;
        box-shadow: 0 0 10px -2px rgba(0, 0, 0, 0.2);
        text-align: left;
        margin-right: auto;
        margin-bottom: 10px;
    }
    .${options.cssPrefix}-message.user-message {
        margin-right: 0;
        margin-left: auto;
    }
`
