import { startBtnStyles } from "./button";
import { messagesStyles } from "./messages";

export const getMainStyles = (options) => `
    .${options.cssPrefix}-wrapper {
        padding: 2px 10px 10px;
        border-radius: ${options.borderRadius || '19px'};
        width: ${options.width || '300px'};
        height: ${options.height || '50%'};
        text-align: center;
        position: fixed;
        bottom: ${options.bottom || '15px'};
        right: ${options.right || '15px'};
        left: ${options.left || 'auto'};
        top: ${options.top || 'auto'};
        font-size: 13px;
        z-index: 100000;
        animation: show .3s ease-out forwards;
        display: none;
        font-family: 'Arial', sans-serif;
        color: ${options.textColor || '#000'};
        box-shadow: 0 0 20px -5px rgba(0,0,0,.5);
    }
    @keyframes show {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }
    .${options.cssPrefix}-visible {
        display: block;
    }
    .${options.cssPrefix}-wrapper * {
        transition: .3s;
    }
    .${options.cssPrefix}-defaultTheme {
        background-color: ${options.backColor || '#fff'};
        border: 3px solid ${options.borderColor || '#000'};
    }
    .${options.cssPrefix}-secondTheme {
        background-color: #264200;
        border: 3px solid #264200;
    }
    .${options.cssPrefix}-body {
        display: flex;
        flex-direction: column;
        height: 100%;
    }
    .${options.cssPrefix}-header {
        padding: 10px 0;
        letter-spacing: 1px;
    }
    .${options.cssPrefix}-top-panel {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }
    .${options.cssPrefix}-top-panel span {
        cursor: pointer;
        font-size: 20px;
        position: relative;
    }
    .${options.cssPrefix}-top-panel span:last-child {
        transform: rotate(45deg);
    }
    .${options.cssPrefix}-top-panel span:first-child {
        top: -3px;
    }
    .${options.cssPrefix}-top-panel span:first-child:after {
        content: '...';
        position: absolute;
        top: -6px;
        left: 0;
        font-size: inherit;
    }
    .${options.cssPrefix}-footer {
        margin-top: auto;
        text-align: left;
        padding-top: 10px;
        border-top: 1px solid rgba(0, 0, 0, 0.1);
    }
    #${options.cssPrefix}-theme-change {
        border: none;
        border-radius: 4px;
        padding: 3px;
        cursor: pointer;
        outline: none;
    }
    #${options.cssPrefix}-theme-change:active {
        background: #46760a;
    }
    .${options.cssPrefix}-main {
        flex-grow: 1;
        overflow-y: scroll;
        display: flex;
        flex-direction: column;
    }
    .${options.cssPrefix}-main::-webkit-scrollbar {
        width: 4px;
    }
    .${options.cssPrefix}-main::-webkit-scrollbar-thumb {
        background: rgba(210, 210, 210, 0.5);
        border-radius: 3px;
    }
    ${startBtnStyles(options)}
    ${messagesStyles(options)}
    .${options.cssPrefix}-input-block {
        display: flex;
        margin-top: 10px;
    }
    .${options.cssPrefix}-input-block svg {
        cursor: pointer;
    }
    .${options.cssPrefix}-input {
        width: 100%;
        outline: none;
        border: 1px solid ${options.textColor || '#000'};;
        background: none;
        border-radius: 5px;
        margin-right: 10px;
        color: ${options.textColor || '#000'};
        padding: 0 10px;
    }
`
