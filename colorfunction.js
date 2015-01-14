function composeColor(r, g, b) {
    function ensureValid(x) {
        if (x<0 || x>255) {
            console.log("intensity must be between 0 and 255");
        }
    }
    ensureValid(r);
    ensureValid(g);
    ensureValid(b);
    var result = (r<<16) + (g<<8) + b;
    return result;
}
console.log(composeColor(43,2300,54));

