import { intersect, intToBinary, parseInts } from "./lib"

test('parseInts', () => {
  expect(parseInts(['123', '45'])).toStrictEqual([123, 45])
  expect(() => {parseInts(['as', '45'])}).toThrow()

  expect(parseInts(['111', '100'], 2)).toStrictEqual([7, 4])
})

test('intToBinary', () => {
  expect(intToBinary(7)).toEqual('111')
  expect(intToBinary(4)).toEqual('100')
  expect(intToBinary(34)).toEqual('100010')
})

test('intersect', () => {
  expect(intersect([1,2], [2])).toEqual([2])
  expect(intersect([1,2], [3])).toEqual([])
  expect(intersect(['a','a','c'], ['c','a'])).toEqual(['a','c'])

})
