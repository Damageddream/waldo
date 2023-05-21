import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import GameBoard from "../components/GameBoard";

jest.mock('../components/Picker', ()=>(props)=>(
    <div>
        <div data-testid='x'>{props.x}</div>
        <div data-testid='y'>{props.y}</div>
        <div data-testid='target'>{props.target}</div>
    </div>
))

it('check if all elements renders', ()=>{
    render(<GameBoard />)
    const vash = screen.getByTestId('vash')
    const crash = screen.getByTestId('crash')
    const marvin = screen.getByTestId('marvin')
    const board = screen.getByAltText('all of characters')

    expect(vash).toBeInTheDocument()
    expect(crash).toBeInTheDocument()
    expect(marvin).toBeInTheDocument()
    expect(board).toBeInTheDocument()
    expect(board).toHaveAttribute('src', 'board.jpg')
})

