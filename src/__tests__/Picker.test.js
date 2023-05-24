import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import Picker from "../components/Picker";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";

//mock props

const xVash = 1273
const yVash = 91

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
    expect(guessHandler).toHaveBeenCalledTimes(2)
    expect(guessHandler).toHaveBeenCalledWith({show: false, guess:null})
})

it('check if clicking not on vash', async ()=>{
    const user = userEvent.setup()
    render(
        <BrowserRouter>
            <Picker x={xVash} y={yVash} target={'vash'} guessHandler={guessHandler} />
        </BrowserRouter>
    )
    const vash = screen.getByAltText('vash') 
    await user.click(vash)
    expect(guessHandler).toHaveBeenCalledTimes(2)
    expect(guessHandler).toHaveBeenCalledWith({show: true, guess:true})
    expect(vash).not.toBeInTheDocument()
})
