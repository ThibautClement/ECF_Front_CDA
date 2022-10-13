import React, { useState } from 'react'

export const AddVehicule = (props : any) => {

  const [vehicule, setVehicule] = useState({id: 0, img:"", immat:"", brand:"", model:"", state: "", type: "", priceDay: "", available: ""})

   /**
  * Permet d'enregistrer les modifications des inputs de création d'un vehicule
  * @param event les modifications des inputs
  */
  const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    setVehicule((vehicule) => ({...vehicule, [event.target.name]: event.target.value}))
   }

   /**
    * Permet d'envoyer les datas des inputs pour les sauvegarder en BDD
    * @param event les modifications des inputs
    */
   const addNewVehicule = (event : any) => {
     event.preventDefault();
     props.addNewVehicule(vehicule);
     setVehicule({id: 0, img:"", immat:"", brand:"", model:"", state: "", type: "", priceDay: "", available: ""})
   }

  return (
    <>
      <div>
        <h3>Ajouter un vehicule</h3>
        <form onSubmit={(event) => addNewVehicule(event)}>
          <input type="file" name="img" placeholder="Image" onChange={(event) => handleChange(event)} />
          <input type="text" name="immat" placeholder="Immatriculation" onChange={(event) => handleChange(event)} />
          <input type="text" name="brand" placeholder="Marque" onChange={(event) => handleChange(event)} />
          <input type="text" name="model" placeholder="Modele" onChange={(event) => handleChange(event)} />
          <input type="text" name="state" placeholder="Etat" onChange={(event) => handleChange(event)} />
          <input type="text" name="type" placeholder="Type" onChange={(event) => handleChange(event)} />
          <input type="text" name="priceDay" placeholder="Prix" onChange={(event) => handleChange(event)} />
          <input type="checkbox" name="available" placeholder="Disponible" onChange={(event) => handleChange(event)} />
          <button type="submit">Valider</button>
        </form>
      </div>
    </>
  )
}