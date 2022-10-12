import React from 'react'
import { Vehicule } from '../../models/vehiculeModel'

type Props = {
    data: Vehicule
}

const VehiculeList = (props: Props) => {
  return (
    <>
        <div>{props.data.immat}</div>
        <div>{props.data.marque}</div>
        <div>{props.data.modele}</div>
        <div>{props.data.qualite}</div>
    </>
  )
}

export default VehiculeList