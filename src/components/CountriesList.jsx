import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function CountriesList() {
  const [allCountries, setAllCountries]=useState(undefined)

  useEffect(()=>{
    axios.get(" https://ih-countries-api.herokuapp.com/countries")
    .then((response)=>{
      console.log(response)
      setAllCountries(response.data)

    })
    .catch((err)=>{
      console.log(err)
    })
  },[])

  if(allCountries=== undefined){
    return(
        <div>
          <h3>recibiendo los paises</h3>  
        </div>
    ) 
}

  return (
    <div className="container">
    <div className="row">
    <div  className="col-5" style={{maxHeight: "90vh", overflow: "scroll"}}>
      <div className="list-group">
      {allCountries.map((eachCountry)=>{
        return(
          
          <p key={eachCountry.alpha3Code}>
            <Link className="list-group-item list-group-item-action" to={`${eachCountry.alpha3Code}`}>{eachCountry.name.common}</Link>
            <img src={`https://flagpedia.net/data/flags/icon/72x54/${eachCountry.alpha2Code.toLowerCase()}.png `} alt="Bandera" width={"40px"} />
          </p>
          
        )
      })}
      </div>
    </div>
    </div>
    </div>
  )
}

export default CountriesList