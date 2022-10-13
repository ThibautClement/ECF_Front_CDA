import React, { useState } from 'react'
import { Vehicule } from '../../models/vehiculeModel'

type vehiculeContainerProps = {
  vehicule : Vehicule
  deleteVehicule : Function
  updateVehicule : Function
}

const CarsContainer = (props : vehiculeContainerProps) => {

  /**
   * Permet de définir si le mode modification des infos est actif ou non
   */
  const [updating, setUpdating] = useState(false)

  /**
   * Permet de mettre à jour les informations du vehicule
   */
  const [vehicule, setVehicule] = useState({id: 0, img:"", immat:"", brand:"", model:"", state: "", type: "", priceDay: 0, available: true})

  /**
   * Permet d'envoyer l'id du vehicule à supprimer
   */
  const deleteVehicule = () => {
      props.deleteVehicule(props.vehicule.id)
  }

  /**
   * Permet d'enregistrer les modifications des inputs et 
   * mettre à jour les informations du vehicule
   * @param event les modifications des inputs
   */
  const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
      console.log(event.target.name, event.target.value);
      setVehicule((vehicule) => ({...vehicule, [event.target.name]: event.target.value}))
  }

  /**
   * Permet d'afficher les inputs de mise à jour des infos 
   * du vehicule et envoie ces infos pour les mettre à jour
   */
  const updateVehicule = () => {
      setUpdating(true);
  }

  /**
   * Stop la mise à jour du vehicule et remet l'updating à false
   */
  const cancel = () => {
      setUpdating(false);
  }

  const validUpdateVehicule = (event : any) => {
      event.preventDefault();
      props.updateVehicule(props.vehicule.id, vehicule)
      cancel()
  }

  return (
    <>
        <div>
      {(!updating) ? 
        <div>
          <span>{props.vehicule.id}</span>
          <img src={props.vehicule.img} alt=""/>
          <span>{props.vehicule.immat}</span>
          <span>{props.vehicule.brand}</span>
          <span>{props.vehicule.model}</span>
          <span>{props.vehicule.state}</span>
          <span>{props.vehicule.type}</span>
          <span>{props.vehicule.priceDay}</span>
          <span>{props.vehicule.available}</span>
          <div>
            <button onClick={deleteVehicule}>Supprimer</button>
            <button onClick={updateVehicule}>Modifier</button>
          </div>
        </div> :
        <div>
          <span>{props.vehicule.id}</span>
          <input placeholder={props.vehicule.immat} name="immat" onChange={(event) => handleChange(event)}></input>
          <input placeholder={props.vehicule.brand} name="brand" onChange={(event) => handleChange(event)}></input>
          <input placeholder={props.vehicule.model} name="model" onChange={(event) => handleChange(event)}></input>
          <input placeholder={props.vehicule.state} name="state" onChange={(event) => handleChange(event)}></input>
          <input placeholder={props.vehicule.type} name="type" onChange={(event) => handleChange(event)}></input>
          <input placeholder={props.vehicule.priceDay} name="priceDay" onChange={(event) => handleChange(event)}></input>
          <input placeholder={props.vehicule.available} name="available" onChange={(event) => handleChange(event)}></input>
          <div>
            <button onClick={cancel}>Annuler</button>
            <button onClick={validUpdateVehicule}>Valider</button>
          </div>
        </div>}
    </div>
    </>
  )
}

export default CarsContainer