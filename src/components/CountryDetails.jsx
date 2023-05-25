import axios from "axios"
import { useState, useEffect } from "react"
import {  useParams } from "react-router-dom"
import { Link } from "react-router-dom"

function CountryDetails() {
   
    const params = useParams()
 const [details, setDetails]= useState(null)
    
const getData = async ()=>{
    try{
        const response = await axios.get(`https://ih-countries-api.herokuapp.com/countries/${params.alpha3Code}`)
        console.log(response.data)
        setDetails(response.data)
    }
    catch(err){
        console.log(err)
    }
}
useEffect(()=>{
    getData()
}, [params.alpha3Code])
if(details === null){
    return(
        <h3>Esperando la info</h3>
    )
}

  return (
    <div>

<div className="col-7">
    <div  >
<img src={`https://flagpedia.net/data/flags/icon/72x54/${details.alpha2Code.toLowerCase()}.png `} alt="Bandera" width={"40px"} />
            <h1> {details.common}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width: "30%"}}>Capital</td>
                  <td>{details.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                  {details.area}
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    {details.borders.map((eachCountry)=>{
                        return(
                            <ul>
                            <li>   
                                <Link to={`/${eachCountry}`}> {eachCountry} </Link>
                            </li> 
                            </ul>
                        )
                    })}
                    
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
       
          </div>

    </div>
  )
}

export default CountryDetails