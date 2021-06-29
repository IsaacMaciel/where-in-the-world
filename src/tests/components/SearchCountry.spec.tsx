import { render, screen,fireEvent } from "@testing-library/react";
import { mocked } from "ts-jest/utils";
import {SearchCountry} from '../../components/SearchCountry'

describe("SearchCountryComponent", () => {
    it("Should render correctly", () => { 
        const handleSearchMocked = jest.fn((value) => {})
        render(<SearchCountry handleSearch={handleSearchMocked} />)

        const searchInput = screen.getByPlaceholderText("Search for a country...")
        fireEvent.change(searchInput,{ target: { value: 'test'}})
        expect(searchInput).toBeInTheDocument()
        expect(handleSearchMocked).toHaveBeenCalled()
    })
})