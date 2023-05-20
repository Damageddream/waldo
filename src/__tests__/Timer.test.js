import '@testing-library/jest-dom'
import { render, screen, act } from '@testing-library/react'
import Timer from '../components/Timer'

jest.useFakeTimers()

it('renders the initial time 00:00', ()=>{
    render(<Timer />)
    expect(screen.getByText(/00:/i)).toBeInTheDocument()
})

it('updates the time after a delay', ()=>{
    render(<Timer />)
    act(()=>{
        jest.advanceTimersByTime(1000)
    })
    expect(screen.getByText(/01/i)).toBeInTheDocument()
    act(()=>{
        jest.advanceTimersByTime(100000)
    })
    expect(screen.getByText(/01:/i)).toBeInTheDocument()
})