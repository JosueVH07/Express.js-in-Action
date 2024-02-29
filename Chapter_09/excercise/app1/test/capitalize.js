import capitalize from '../capitalize.js';
import { expect } from 'chai';

// var expect = chai.expect;

describe('capitalize', () => {
    it("capitalize", () => {
        expect(capitalize('hello World')).to.equal('Hello world');
        expect(capitalize('HELLO')).to.equal('Hello');
        expect(capitalize('cATS house')).to.equal('Cats house');
    })
})

describe('capitalize', () => {
    it("Capitalize single Words", () => {/** ... */})
    it('Makes the rest of the string lowercase', () => {
        expect(capitalize('javascript')).to.equal('Javascript');
    })
})

describe('capitalize', () => {
    it('Leaes empty strings alone', () => {
        expect(capitalize('')).to.equal('');
    })
})

describe('capitalize', () => {
    it('Leaves Strings with no words alone', () => {
        expect(capitalize('123')).to.equal('123');
        expect(capitalize('!@#')).to.equal('!@#');
        expect(capitalize(' ')).to.equal(' ');
    })
})