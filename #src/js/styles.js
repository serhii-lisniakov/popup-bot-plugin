import { options } from './options';
import { startBtnStyles } from "./button";

export const mainStyles = `
    .wrapper {
        padding: 2px 10px 10px;
        border-radius: ${options.borderRadius || '12px'};
        width: ${options.width || '220px'};
        height: ${options.height || '75%'};
        text-align: center;
        position: fixed;
        top: ${options.top || '50%'};
        right: ${options.right || '30px'};
        transform: translateY(-50%);
        font-size: 13px;
        z-index: 100000;
        animation: show .3s linear forwards;
        display: none;
        font-family: 'Arial', sans-serif;
    }
    @keyframes show {
        0% {
            visibility: hidden;
            opacity: 0;
        }
        100% {
            visibility: visible;
            opacity: 1;
        }
    }
    .visible {
        display: block;
    }
    .wrapper * {
        transition: .3s;
    }
    .defaultTheme {
        color: black;
        background-color: ${options.backColor || '#fff'};
        border: 3px solid ${options.borderColor || '#000'};
    }
    .secondTheme {
        color: white;
        background-color: #264200;
        border: 3px solid #fff;
    }
    .body {
        display: flex;
        flex-direction: column;
        height: 100%;
    }
    .header {
        padding: 10px 0;
        letter-spacing: 1px;
    }
    .top-panel {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }
    .top-panel span {
        cursor: pointer;
        font-size: 20px;
        position: relative;
    }
    .top-panel span:last-child {
        transform: rotate(45deg);
    }
    .top-panel span:first-child {
        top: -3px;
    }
    .top-panel span:first-child:after {
        content: '...';
        position: absolute;
        top: -6px;
        left: 0;
        font-size: inherit;
    }
    .footer {
        margin-top: auto;
        text-align: right;
        padding-top: 10px;
        border-top: 1px solid rgba(0, 0, 0, 0.1);
    }
    #theme-change {
        border: none;
        border-radius: 4px;
        padding: 3px;
        cursor: pointer;
    }
    #theme-change:active {
        background: #46760a;
    }
    .main {
        height: 100%;
        overflow-y: scroll;
        
    }
    .main::-webkit-scrollbar {
        width: 4px;
    }
    .main::-webkit-scrollbar-thumb {
        background: rgba(210, 210, 210, 0.5);
        border-radius: 3px;
    }
    ${startBtnStyles}
`;
