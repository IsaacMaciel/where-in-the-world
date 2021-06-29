import { render, screen, fireEvent } from "@testing-library/react";
import {SelectRegion} from '../../components/SelectRegion'

describe("SelectRegion component" , () => {
    it("should render component correctly", () => {
        const handleSelectRegionMock = jest.fn()
        render(<SelectRegion handleSelectRegion={handleSelectRegionMock} />)

        expect(screen.queryAllByRole('option')).toHaveLength(6)

        expect(screen.getByText("Filter by Region")).toBeInTheDocument()
        expect(screen.getByText("África")).toBeInTheDocument()
        expect(screen.getByText("América")).toBeInTheDocument()
        expect(screen.getByText("Ásia")).toBeInTheDocument()
        expect(screen.getByText("Europe")).toBeInTheDocument()
        expect(screen.getByText("Oceania")).toBeInTheDocument()


    })
})