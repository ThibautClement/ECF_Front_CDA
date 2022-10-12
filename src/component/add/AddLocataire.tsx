import userEvent from '@testing-library/user-event';
import { copyFile } from 'fs/promises';
import React, { useState } from 'react'

export const AddLocataire = (props : any) => {

  const [locataire, setLocataire] = useState({id: null, login: "", password: ""});

  /**
   * enregistre les modifications des inputs de création d'un locataire
   * @param event les modifications des inputs
   */
  const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    setLocataire((locataire) => ({...locataire, [event.target.name]: event.target.value}))
  }

  /**
   * envoies les datas des inputs pour les sauvegarder en BDD
   * @param event les modifications des inputs
   */
  const addNewLocataire = (event : any) => {
    event.preventDefault();
    props.addNewLocataire(locataire);
  }

  return (
    <>
        <div>
            <h3>Ajouter un locataire</h3>
            <form onSubmit={(event) => addNewLocataire(event)}>
                <input type="text" name="login" placeholder="Identifiant" onChange={(event) => handleChange(event)} />
                <input type="text" name="password" placeholder="Mdp" onChange={(event) => handleChange(event)} />
                <button type="submit">Valider</button>
            </form>
        </div>
    </>
  )
}