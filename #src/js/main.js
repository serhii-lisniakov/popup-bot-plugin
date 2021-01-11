import { mainStyles } from "./styles";
import { layout } from "./layout";
import { dragElement } from "./drag";
import { initStartBtn } from "./button";

(function() {
    const styles = document.createElement('style');
    styles.innerHTML = mainStyles;
    document.head.appendChild(styles);

    const showBtn = initStartBtn();

    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper', 'defaultTheme', 'visible');
    wrapper.innerHTML = layout;
    document.body.appendChild(wrapper);

    document.getElementById('theme-change').onclick = () => wrapper.classList.toggle('secondTheme');

    showBtn.onclick = () => wrapper.classList.toggle('visible');

    dragElement(wrapper, 'drag');
}())
