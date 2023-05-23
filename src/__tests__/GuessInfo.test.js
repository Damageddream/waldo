import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import GuessInfo from "../components/GuessInfo";

it('check if when passed true, "correct" is dispaying', ()=>{
    render(<GuessInfo guess={true} />)
    const correct = screen.getByText(/correct!/i)
    expect(correct).toBeInTheDocument()
})

it('checks if "wrong" is display when passed false', ()=>{
    render(<GuessInfo guess={false} />)
    const wrong = screen.getByText(/wrong!/i)
    expect(wrong).toBeInTheDocument()
})