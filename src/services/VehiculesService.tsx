import React from 'react'

const URL : string = "http://localhost:3000/vehicules"

class VehiculesService {

  /**
   * Permet de récuperer tous les vehicules en DB
   * @returns liste de vehicules
   */
  findAllVehicule = () => {
    return fetch(URL)
    .then(res => res.json())
  }
}

export const vehiculeService = Object.freeze(new VehiculesService())