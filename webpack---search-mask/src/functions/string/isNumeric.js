const isNumeric = (n) => String(n).length > 0 && !Number.isNaN(+n);

export {
    isNumeric
};