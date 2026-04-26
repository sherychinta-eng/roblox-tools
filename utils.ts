function debounce(func: Function, delay: number) {
    let timeoutId: NodeJS.Timeout | null;

    return function (...args: any[]) {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

function throttle(func: Function, limit: number) {
    let lastFunc: NodeJS.Timeout | null;
    let lastRan: number;

    return function (...args: any[]) {
        const context = this;
        if (!lastRan) {
            func.apply(context, args);
            lastRan = Date.now();
        } else {
            if (Date.now() - lastRan >= limit) {
                func.apply(context, args);
                lastRan = Date.now();
            }
        }
    };
}

export { debounce, throttle };