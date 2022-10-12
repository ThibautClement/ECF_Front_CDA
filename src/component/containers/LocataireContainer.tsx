import React, { useState } from 'react'
import { Locataire } from '../../models/locataireModel'

type locataireContainerProps = {
    locataire : Locataire
    deleteLocataire : Function
    updateLocataire : Function
}

const LocataireContainer = (props : locataireContainerProps) => {

    /**
     * Permet de définir si le mode modification des infos est actif ou non
     */
    const [updating, setUpdating] = useState(false);

    /**
     * Permet de mettre à jour les informations du locataire
     */
    const [locataire, setLocataire] = useState({login: "", password: ""})

    /**
     * Permet d'envoyer l'id du locataire à supprimer
     */
    const deleteLocataire = () => {
        props.deleteLocataire(props.locataire.id)
    }

    /**
     * Permet d'enregistrer les modifications des inputs et 
     * mettre à jour les informations du locataire
     * @param event les modifications des inputs
     */
    const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.name, event.target.value);
        setLocataire((locataire) => ({...locataire, [event.target.name]: event.target.value}))
    }

    /**
     * Permet d'afficher les inputs de mise à jour des infos 
     * du locataire et envoie ces infos pour les mettre à jour
     */
    const updateLocataire = () => {
        setUpdating(true);
    }

    /**
     * Stop la mise à jour du locataire et remet l'updating à false
     */
    const cancel = () => {
        setUpdating(false);
    }

    const validUpdateLocataire = (event : any) => {
        event.preventDefault();
        props.updateLocataire(props.locataire.id, locataire)
        cancel()
    }

  return (
    <>
    <div>
      {(!updating) ? 
        <div>
          <span>{props.locataire.id}</span>
          <span>{props.locataire.login}</span>
          <span>{props.locataire.password}</span>
          <div>
            <button onClick={deleteLocataire}>Supprimer</button>
            <button onClick={updateLocataire}>Modifier</button>
          </div>
        </div> :
        <div>
          <span>{props.locataire.id}</span>
          <input placeholder={props.locataire.login} name="login" onChange={(event) => handleChange(event)}></input>
          <input placeholder={props.locataire.password} name="password" onChange={(event) => handleChange(event)}></input>
          <div>
            <button onClick={cancel}>Annuler</button>
            <button onClick={validUpdateLocataire}>Valider</button>
          </div>
        </div>}
    </div>
    </>
  )
}

export default LocataireContainer