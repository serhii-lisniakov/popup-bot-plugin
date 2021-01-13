import { assets } from "./assets";

export function initStartBtn(options) {
    const btn = document.createElement('div');
    btn.classList.add(`${options.cssPrefix}-startBtnStyles`);
    btn.innerHTML = assets(options).dialogIcon;
    document.body.appendChild(btn);
    return btn;
}

export const startBtnStyles = (options) => `
    .${options.cssPrefix}-startBtnStyles {
        position: fixed;
        bottom: 17px;
        right: 17px;
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
        z-index: 100001;
    }
`
