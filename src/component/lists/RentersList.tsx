import React from 'react'
import { useEffect, useState } from "react"
import { AddLocataire } from '../add/AddLocataire'
import { Locataire } from '../../models/locataireModel'
import { locataireService } from "../../services/LocataireService"
import LocataireContainer from "../containers/LocataireContainer"

function RentersList() {
    const [locataire, setLocataire] = useState<Locataire>({id: 0, login: "", password: ""})

    // const [locataires, setLocataires] = useState<Locataire[]>([{id: 0, login:"", password:""}])
    const [locataires, setLocataires] = useState<Locataire[]>([])
  
    useEffect(() => {
      getAllLocataires()
    }, [])
  
    const getAllLocataires = () => {
      locataireService.findAllLocataires().then(data => setLocataires(data))
    }
  
    const deleteLocataire = (id : number) => {
      locataireService.deleteLocataire(id).then(() => getAllLocataires())
    }
  
    const addNewLocataire = (locataire : Locataire) => {
      locataireService.createLocataire(locataire).then(() => getAllLocataires())
    }
  
    const updateLocataire = (id : number, locataire : Locataire) => {
      locataireService.updateFullLocataire(id, locataire).then(() => getAllLocataires())
    }
  
    return (
      <>
        {(locataires) && locataires.map((locataire : Locataire, index : number) => {
          return <LocataireContainer key={index} locataire={locataire} deleteLocataire={deleteLocataire} updateLocataire={updateLocataire}/>})}
        <AddLocataire addNewLocataire={addNewLocataire}/>
      </> 
    )
}

export default RentersList