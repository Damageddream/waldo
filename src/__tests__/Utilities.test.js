import { timeFormater } from "../components/Utilities";

const time = timeFormater(108882)


it('checkis if formater returns full time', ()=>{
    expect(time.time).toBe('01:48')
})

it('checkis if formater returns seconds', ()=>{
    expect(time.seconds()).toBe('48')
})

it('checkis if formater returns minutes', ()=>{
    expect(time.minutes()).toBe('01')
})