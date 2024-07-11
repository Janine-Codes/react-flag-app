import { useState, useEffect } from "react"
import { getCountryByCountryCode } from "../../services/api"
import { useParams } from 'react-router-dom';

export const CountryPage = () => {
    const { cca3 } = useParams();
    const [countryDetails, setCountryDetails] = useState(null)

    useEffect( () =>  {
        const fetchCountry = async () => {
            try {
              const data = await getCountryByCountryCode(cca3);
              console.log(data[0])
              setCountryDetails(data[0]);
            } catch (error) {
              console.error("Error when trying to get a country by using cca3", error);
            }
        }

        fetchCountry()
    }, []);

    if (countryDetails == null) {
        return <h1> No data yet </h1>
    }

    const hasBordercountries = (borders) => {
        if (borders && borders.length > 0) {
            return (
                <ol>
                    {countryDetails.borders.map((border) => (
                        <li key={border}> {border} </li>
                    ))}
                </ol> 
            )
        }
    }

    return (
        <div>
           <h2>{countryDetails.name.common}</h2>
            {hasBordercountries(countryDetails.borders)}   
        </div>
    );
}