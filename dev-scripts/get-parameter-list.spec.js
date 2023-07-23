import { getParameterList } from './get-parameter-list.js';

describe('returns an array of strings with the parameter names for a function', () => {
  describe('no parameters', () => {
    it('arrow', () => {
      // the AST representation for an implicit arrow's params is the same
      //  no need to test them as well
      const funky = () => {};
      expect(getParameterList(funky)).toEqual([]);
    });
    it('function declaration', () => {
      function funky() {}
      expect(getParameterList(funky)).toEqual([]);
    });
    it('anonymous function expression', () => {
      const funky = function () {};
      expect(getParameterList(funky)).toEqual([]);
    });
    it('named function expression', () => {
      const funky = function funk() {};
      expect(getParameterList(funky)).toEqual([]);
    });
  });
  describe('one parameter', () => {
    it('arrow (with parens)', () => {
      // prettier-ignore
      const funky = (hi) => {};
      expect(getParameterList(funky)).toEqual(['hi']);
    });
    it('arrow (without parens)', () => {
      // prettier-ignore
      const funky = hi => {};
      expect(getParameterList(funky)).toEqual(['hi']);
    });
    it('function declaration', () => {
      function funky(hi) {}
      expect(getParameterList(funky)).toEqual(['hi']);
    });
    it('anonymous function expression', () => {
      const funky = function (hi) {};
      expect(getParameterList(funky)).toEqual(['hi']);
    });
    it('named function expression', () => {
      const funky = function funk(hi) {};
      expect(getParameterList(funky)).toEqual(['hi']);
    });
  });
  describe('multiple parameters', () => {
    it('arrow', () => {
      const funky = (hi, bye, chai) => {};
      expect(getParameterList(funky)).toEqual(['hi', 'bye', 'chai']);
    });
    it('function declaration', () => {
      function funky(hi, bye, chai) {}
      expect(getParameterList(funky)).toEqual(['hi', 'bye', 'chai']);
    });
    it('anonymous function expression', () => {
      const funky = function (hi, bye, chai) {};
      expect(getParameterList(funky)).toEqual(['hi', 'bye', 'chai']);
    });
    it('named function expression', () => {
      const funky = function funk(hi, bye, chai) {};
      expect(getParameterList(funky)).toEqual(['hi', 'bye', 'chai']);
    });
  });
  describe('rest parameters', () => {
    it('arrow', () => {
      const funky = (hi, bye, ...chai) => {};
      expect(getParameterList(funky)).toEqual(['hi', 'bye', 'chai']);
    });
    it('function declaration', () => {
      function funky(hi, bye, ...chai) {}
      expect(getParameterList(funky)).toEqual(['hi', 'bye', 'chai']);
    });
    it('anonymous function expression', () => {
      const funky = function (hi, bye, ...chai) {};
      expect(getParameterList(funky)).toEqual(['hi', 'bye', 'chai']);
    });
    it('named function expression', () => {
      const funky = function funk(hi, bye, ...chai) {};
      expect(getParameterList(funky)).toEqual(['hi', 'bye', 'chai']);
    });
  });
  describe('default parameters', () => {
    it('arrow', () => {
      const funky = (hi = 1, bye = '') => {};
      expect(getParameterList(funky)).toEqual(['hi', 'bye']);
    });
    it('function declaration', () => {
      function funky(hi = 1, bye = '') {}
      expect(getParameterList(funky)).toEqual(['hi', 'bye']);
    });
    it('anonymous function expression', () => {
      const funky = function (hi = 1, bye = '') {};
      expect(getParameterList(funky)).toEqual(['hi', 'bye']);
    });
    it('named function expression', () => {
      const funky = function funk(hi = 1, bye = '') {};
      expect(getParameterList(funky)).toEqual(['hi', 'bye']);
    });
  });
  describe('destructured parameters', () => {
    it('arrow', () => {
      const funky = ({ hi, bye }) => {};
      expect(getParameterList(funky)).toEqual(['hi', 'bye']);
    });
    it('function declaration', () => {
      function funky({ hi, bye }) {}
      expect(getParameterList(funky)).toEqual(['hi', 'bye']);
    });
    it('anonymous function expression', () => {
      const funky = function ({ hi, bye }) {};
      expect(getParameterList(funky)).toEqual(['hi', 'bye']);
    });
    it('named function expression', () => {
      const funky = function funk({ hi, bye }) {};
      expect(getParameterList(funky)).toEqual(['hi', 'bye']);
    });
  });
  describe('destructured parameters with defaults', () => {
    it('arrow', () => {
      const funky = ({ hi = 1, bye = '' }) => {};
      expect(getParameterList(funky)).toEqual(['hi', 'bye']);
    });
    it('function declaration', () => {
      function funky({ hi = 1, bye = '' }) {}
      expect(getParameterList(funky)).toEqual(['hi', 'bye']);
    });
    it('anonymous function expression', () => {
      const funky = function ({ hi = 1, bye = '' }) {};
      expect(getParameterList(funky)).toEqual(['hi', 'bye']);
    });
    it('named function expression', () => {
      const funky = function funk({ hi = 1, bye = '' }) {};
      expect(getParameterList(funky)).toEqual(['hi', 'bye']);
    });
  });
  describe('disasters', () => {
    it('arrow', () => {
      const funky = (a, { b, c = '' }, d = 3 + 2, ...e) => {};
      expect(getParameterList(funky)).toEqual(['a', 'b', 'c', 'd', 'e']);
    });
    it('function declaration', () => {
      function funky(a, { b, c = '' }, d = 3 + 2, ...e) {}
      expect(getParameterList(funky)).toEqual(['a', 'b', 'c', 'd', 'e']);
    });
    it('anonymous function expression', () => {
      const funky = function (a, { b, c = '' }, d = 3 + 2, ...e) {};
      expect(getParameterList(funky)).toEqual(['a', 'b', 'c', 'd', 'e']);
    });
    it('named function expression', () => {
      const funky = function funk(a, { b, c = '' }, d = 3 + 2, ...e) {};
      expect(getParameterList(funky)).toEqual(['a', 'b', 'c', 'd', 'e']);
    });
  });
});
