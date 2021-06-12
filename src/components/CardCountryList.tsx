import {SimpleGrid} from '@chakra-ui/react'
import {CardCountry} from "./CardCountry"


export const CardCountryList = () => {

    return (
        <SimpleGrid w="100%" minChildWidth="280px" templateRows="4"  spacing={["20px","40px"]} paddingBottom="30px" >
          <CardCountry />                  
          <CardCountry />
          <CardCountry />

          <CardCountry />                  
          <CardCountry />
          <CardCountry />

          <CardCountry />                  
          <CardCountry />
          <CardCountry />
        </SimpleGrid>
    )
}