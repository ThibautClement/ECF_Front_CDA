import React from 'react'
import { useEffect, useState } from "react"
import VehiculeList from '../component/lists/VehiculeList'
import { Vehicule } from '../models/vehiculeModel'
import { vehiculeService } from '../services/VehiculesService'

function GestionVehicule() {
    
  const [vehicules, setVehicules] = useState<Vehicule[]>([{id: 0, marque:"", modele:"", immat:"", qualite:""}])

  useEffect(() => {
    vehiculeService.findAllVehicule().then(res => setVehicules(res));
  }, [])

  return (
    <div>
      {vehicules.map((vehicule : Vehicule, index: number) => (
        <VehiculeList
          key={index}
          data={vehicule}
        />
      ))}
    </div>
  )

}

export default GestionVehicule