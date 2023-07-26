const { expect } = require('chai'); 
const { toCelcius, toFahrenheit } = require('../app.js'); 

describe("Temperature conversion Function", () => { 
    it("toCelcius Function should convert Fahrenheit to degree celcius", () => { 
    expect(toCelcius(41)).to.equal(5); 
    expect(toCelcius(14)).to.equal(-10);
    expect(toCelcius(32)).to.equal(0);
    }); 

    it("toFahrenheit Function should convert degree celcius to degree Fahrenheit", () => { 
        expect(toFahrenheit(25)).to.equal(77); 
        expect(toFahrenheit(-10)).to.equal(14);
        expect(toFahrenheit(0)).to.equal(32);
        }); 
});