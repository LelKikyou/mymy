export const sharpMatcherRegx = /#([^#]+)$/;

export function findComponentsDownward(context, componentName) {
    return context.$children.reduce((components, child) => {
        if (child.$options.name === componentName) components.push(child);
        const foundChilds = findComponentsDownward(child, componentName);
        return components.concat(foundChilds);
    }, []);
}

export function scrollTop(el, from = 0, to, duration = 500, endCallback) {
    // rAF 目前还存在兼容性问题，而且不同的浏览器还需要带不同的前缀。因此需要通过优雅降级的方式对 rAF 进行封装，优先使用高级特性，然后再根据不同浏览器的情况进行回退，直止只能使用 setTimeout 的情况
    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = (
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (callback) {  //
                return window.setTimeout(callback, 1000 / 60);
            }
        );
    }
    const difference = Math.abs(from - to);
    const step = Math.ceil(difference / duration * 50);

    function scroll(start, end, step) {
        if (start === end) {
            endCallback && endCallback();
            return;
        }

        let d = (start + step > end) ? end : start + step;
        if (start > end) {
            d = (start - step < end) ? end : start - step;
        }

        if (el === window) {
            window.scrollTo(d, d);
        } else {
            el.scrollTop = d;
        }
        window.requestAnimationFrame(() => scroll(d, end, step));
    }

    scroll(from, to, step);
}
