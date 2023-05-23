import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import Picker from "../components/Picker";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";

//mock props
const x = 782
const y = 281
const xVash = 1273
const yVash = 91
const xCrash = 348
const yCrash = 387
const xMarvin = 1494
const yMarvin = 830
const target1 = 'vash'
const target2 = 'crash'
const target3 = 'marvin'
const guessHandler = jest.fn()

it('check if all elements render', () => {
    
    render(
        <BrowserRouter>
            <Picker x={1} y={0} target={'target'} guessHandler={guessHandler} />
        </BrowserRouter>
    )
    const vash = screen.getByText(/vash/i)
    const vashImg = screen.getByAltText('vash')
    const crash = screen.getByText(/crash/i)
    const crashImg = screen.getByAltText('crash')
    const marvin = screen.getByText(/marvin/i)
    const marvinImg = screen.getByAltText('marvin')

    expect(vash).toBeInTheDocument()
    expect(vashImg).toBeInTheDocument()
    expect(vashImg).toHaveAttribute('src', 'vashF.png')
    expect(crash).toBeInTheDocument()
    expect(crashImg).toBeInTheDocument()
    expect(crashImg).toHaveAttribute('src', 'crashFpng.png')
    expect(marvin).toBeInTheDocument()
    expect(marvinImg).toBeInTheDocument()
    expect(marvinImg).toHaveAttribute('src', 'marvinF.png')
})

it('check if clicking not on character works', async ()=>{
    const user = userEvent.setup()
    render(
        <BrowserRouter>
            <Picker x={1} y={0} target={'target'} guessHandler={guessHandler} />
        </BrowserRouter>
    )
    const vash = screen.getByText(/vash/i)
    await user.click(vash)
    expect(guessHandler).toHaveBeenCalledTimes(1)
    expect(guessHandler).toHaveBeenCalledWith({show: false, guess:null})
})