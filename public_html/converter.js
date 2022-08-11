function MtoK (miles) {
    var K = miles * 1.6;
    return K;
}
function OtoG (og) {
    var g = og * 28.35;
    return g.toFixed(3);
}
function FtoC (fc) {
    var c = (fc - 32) * (5/9);
    return c.toFixed(3);
}

function CtoF (cf) {
    var f = (9/5 * cf) + 32;
    return f.toFixed(3);
    
}
function isValid(val,floor) {
    if (val < floor) {
        return false;
    }
    return true;
}


