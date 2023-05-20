import Homepage from "../components/Homepage";
import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";


it('check if all elements render', ()=>{
    render(<Homepage />, {wrapper: BrowserRouter})
    const title = screen.getByText(/Find Characters/i)
    const rules = screen.getAllByRole('listitem')
    const button = screen.getByRole('button', {name:'Start Game'})
    const imgCrash =screen.getByAltText('crash bandicoot')
    const imgVash = screen.getByAltText('vash the stampede')
    const imgMarvin = screen.getByAltText('marvin the martian')

    expect(title).toBeInTheDocument()
    expect(button).toBeInTheDocument()
    expect(imgCrash).toBeInTheDocument()
    expect(imgCrash).toHaveAttribute('src', 'crash.png')
    expect(imgVash).toBeInTheDocument()
    expect(imgVash).toHaveAttribute('src', 'vash.png')
    expect(imgMarvin).toBeInTheDocument()
    expect(imgMarvin).toHaveAttribute('src', 'marvin.png')
    expect(rules.length).toBe(5)
    expect(rules[0].textContent).toBe('Find one of the 3 characters: Crash Bandicoot, Marvin The Martian, Vash the Stampede')
    expect(rules[4].textContent).toBe('GL HF!')
    expect(button).toBeInTheDocument()
})

