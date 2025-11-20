import { writable } from 'svelte/store';

// Export a writable store that holds a Date instance. The start/stop
// callbacks ensure the interval only runs while there are subscribers.
function createTimeStore() {
    const { subscribe, set } = writable(new Date());
    let interval;

    return {
        subscribe,
        // expose a method to synchronously get the current Date
        get: () => {
            let value;
            const unsub = subscribe(v => value = v);
            unsub();
            return value;
        },
        // start the interval when the first subscriber appears
        _start: () => {
            if (!interval) {
                interval = setInterval(() => set(new Date()), 1000);
            }
        },
        // stop the interval when no subscribers remain
        _stop: () => {
            if (interval) {
                clearInterval(interval);
                interval = null;
            }
        }
    };
}

const time = createTimeStore();

// Hook into Svelte store contract: start/stop when subscribers change.
// We create a temporary subscribe to observe subscriber count changes.
// The simplest approach is to use a derived-like subscribe wrapper.
let activeCount = 0;
const originalSubscribe = time.subscribe;
time.subscribe = (run, invalidate) => {
    activeCount += 1;
    if (activeCount === 1) time._start();
    const unsub = originalSubscribe.call(time, run, invalidate);
    return () => {
        unsub();
        activeCount -= 1;
        if (activeCount === 0) time._stop();
    };
};

export default time;