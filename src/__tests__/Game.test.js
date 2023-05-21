import { screen, render } from "@testing-library/react";
import '@testing-library/jest-dom'
import Game from "../components/Game";

jest.mock('../components/Timer',()=>()=>(
    <div data-testid='timer'></div>
))

jest.mock('../components/GameBoard',()=>()=>(
    <div data-testid='game'></div>
))

it('check if all components render', ()=>{
    render(<Game />)

    const timer = screen.getByTestId('timer')
    const game = screen.getByTestId('game')

    expect(game).toBeInTheDocument()
    expect(timer).toBeInTheDocument()
})