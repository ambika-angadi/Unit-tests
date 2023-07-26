function toCelcius(f) {
    return (f-32)/1.8;
}

function toFahrenheit(c) {
    return (c*1.8)+32;
}

module.exports = {
    toCelcius,
    toFahrenheit
};