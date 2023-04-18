import {it, expect} from 'vitest'
import { transformToNumber } from './numbers'

it('check if the number string converted to number',()=>{
    //arrange
    const value = '4'
    //action
    const result = transformToNumber(value)
    //assert
    expect(result).toBe(4)
})

it('check if any word is converted to number',()=>{
    //arrange
    const value = 'bot'
    //action
    const result = transformToNumber(value)
    //assert
    expect(result).toBeNaN() 
})


