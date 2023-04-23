import {it,expect} from 'vitest'
import { generateToken } from './async-example'
import { generateTokenPromise } from './async-example'

it('should give a valid token (callback)',(done)=>{
    const email = "drag47@gmail.com"
    generateToken(email,(err,token)=>{
        expect(token).toBeDefined();
        done();
    })
})

it('should give a valid token(promise)',()=>{
    const email = "drag47@gmail.com"
    expect(generateTokenPromise(email)).resolves.toBeDefined()
})