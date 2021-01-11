import { options } from './options';

export function initStartBtn() {
    const btn = document.createElement('div');
    btn.classList.add('startBtnStyles');
    btn.innerHTML = `open`
    document.body.appendChild(btn);
    return btn;
}

export const startBtnStyles = `
    .startBtnStyles {
        position: fixed;
        bottom: 5px;
        right: 5px;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        background: ${options.btnBackColor || '#fff'};
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        cursor: pointer;
        font-size: 10px;
        box-shadow: 0 0 20px -2px rgba(0, 0, 0, 0.5);
    }
`
