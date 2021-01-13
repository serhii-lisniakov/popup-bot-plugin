import { getMainStyles } from "./styles";
import { getLayout } from "./layout";
import { dragElement } from "./drag";
import { initStartBtn } from "./button";
import { options } from "./options";
import { initFrom } from "./messages";

window.initBotPlugin = function(config) {
    if (!config) config = options;
    let cssPrefix = config.cssPrefix || 'botplugin';

    createStyles(config);
    const showBtn = initStartBtn(config);
    const wrapper = createBotElement(config);

    document.getElementById(`${cssPrefix}-theme-change`).onclick = () => wrapper.classList.toggle(`${cssPrefix}-secondTheme`);
    document.getElementById(`${cssPrefix}-hide`).onclick = () => wrapper.classList.remove(`${cssPrefix}-visible`);
    showBtn.onclick = () => wrapper.classList.toggle(`${cssPrefix}-visible`);

    dragElement(wrapper, `${cssPrefix}-drag`);
    initFrom(cssPrefix);
}

const createStyles = (config) => {
    const styles = document.createElement('style');
    styles.innerHTML = getMainStyles(config);
    document.head.appendChild(styles);
}

const createBotElement = (config) => {
    const wrapper = document.createElement('div');
    wrapper.classList.add(`${config.cssPrefix}-wrapper`, `${config.cssPrefix}-defaultTheme`, `${config.cssPrefix}-visible`);
    wrapper.innerHTML = getLayout(config);
    document.body.appendChild(wrapper);
    return wrapper;
}

initBotPlugin({cssPrefix: 'bot'})
