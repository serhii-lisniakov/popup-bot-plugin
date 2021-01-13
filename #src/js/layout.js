import { assets } from "./assets";
import { renderMessages } from "./messages";

export const getLayout = (options) => {
    const selector = options.cssPrefix;
    return `
    <div class="${selector}-body">
        <div class="${selector}-top-panel">
            <span id="${selector}-drag">...</span>
            <span id="${selector}-hide">+</span>
        </div>
        <header class="${selector}-header">
            Hello ${options.userName ? ', ' + options.userName : 'There'}!
        </header>
        <section class="${selector}-main">
            <ul id="${selector}-ul">${renderMessages(selector)}</ul>
        </section>
        <section>
            <form class="${selector}-input-block" id="${selector}-form">
                <input id="${selector}-message" value="" type="text" class="${selector}-input"/>
                ${assets(options).sendIcon}
            </form>
        </section>
        <footer class="${selector}-footer">
            <button id="${selector}-theme-change">color</button>
        </footer>
    </div>
`};
