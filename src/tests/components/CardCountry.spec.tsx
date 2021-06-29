import { render, screen, fireEvent } from "@testing-library/react";
import {CardCountry} from '../../components/CardCountry'

const dataCountry = {
    name: "Afghanistan",
    capital: "Kabul",
    flag:"https://restcountries.eu/data/afg.svg",
    region: "Asia",
    population: "27.657.145"
}

describe("CardCountry component", () => {

    it("should render correctly", () => {
        render(<CardCountry {...dataCountry}  />)
  
        expect(screen.getByText(dataCountry.name)).toBeInTheDocument()
        expect(screen.getByText(dataCountry.capital)).toBeInTheDocument()
        expect(screen.getByText(dataCountry.region)).toBeInTheDocument()
        expect(screen.getByText(dataCountry.population)).toBeInTheDocument()
        
        expect(screen.getByRole('img')).toBeInTheDocument()
        
    })
})