import {it , expect} from 'vitest'
import {add} from './math.js'

it('should add all the numbers in array',()=>{
  //arrange
  const numbers = [1,2]
  //act
  const result =   add(numbers)
  //assert
  const expectedResult = numbers.reduce((a,b)=>a+b)

  expect(result).toBe(expectedResult)
});

it('should yield NaN if a least one invalid number is provided',()=>{
    //arrange
    const number = [1,'Invalid']
    const result = add(number)

    expect(result).toBeNaN();
})

it('should yield a correct sum if numeric string is provided',()=>{
   //arrange
   const numbers = [1,'2',3]
   //action
   const result = add(numbers)
   //assert
   const expectedResult = numbers.reduce((a,b)=>+a + +b)
   expect(result).toBe(expectedResult)
})

it('check if it throws error if nothing is passed into the function',()=>{
  const func = ()=>{
      add()
  }
  expect(func).toThrow();
})