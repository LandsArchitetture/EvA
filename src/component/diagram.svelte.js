import EvA from './EvA.svelte.js';

export const OFFSET = {
    inner: [],
    middle: [],
    outer: []
};


export const RADIUS = {
    inner: 26,
    middle: 37,
    outer: 46
};

export const STROKEWIDTH = {
    inner: 14,
    middle: 10,
    outer: 8
};

export const CIRCUMFERENCES = {
    inner: 2 * Math.PI * RADIUS.inner,
    middle: 2 * Math.PI * RADIUS.middle,
    outer: 2 * Math.PI * RADIUS.outer
};


export function calculateOffsets() {
    OFFSET.inner = [0];
    OFFSET.middle = [0];
    OFFSET.outer = [0];

    EvA.bases.forEach((base, i) => {
        if (i < EvA.bases.length) {
            OFFSET.inner.push(OFFSET.inner[i] + base.percent * CIRCUMFERENCES.inner);
        }
        base.categories.forEach((category, j) => {
            if (j < base.categories.length) {
                OFFSET.middle.push(
                    OFFSET.middle[i * 4 + j] + base.percent * category.percent * CIRCUMFERENCES.middle
                );
            }
            category.indicators.forEach((indicator, k) => {
                if (k < category.indicators.length) {
                    OFFSET.outer.push(
                        OFFSET.outer[i * 16 + j * 4 + k] +
                        base.percent * category.percent * indicator.percent * CIRCUMFERENCES.outer
                    );
                }
            });
        });
    });
}