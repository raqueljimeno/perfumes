import { useState } from 'react'
import welcome from './assets/welcome.jpeg'
import noseAtNoise from './assets/noseAtNoise.png'

import './App.css'

const nombres = ["Pétale Somnambule", "Pétale Silencieux", "Pétale Fragile", "Pétale Doré",
"Pétale Sombre", "Pétale Sauvage", "Pétale Lent", "Pétale Brisé", "Pétale Secret",
"Pétale Humide", "Pétale Égaré", "Pétale Froid", "Pétale Minuscule", "Pétale Immobile",
"Pétale Gris", "Pétale Rieur", "Pétale Fané", "Pétale Nocturne", "Pétale Léger",
"Pétale Obscur", "Pétale Muet", "Pétale Ancien", "Pétale Flottant", "Pétale Invisible",
"Pétale Bleu", "Pétale Pâle", "Pétale Solitaire", "Pétale Velours", "Pétale Trouble",
"Pétale Vivant", "d'Arbre", "Larme d'Arbre", "Branche d'Arbre", "Ombre d'Arbre",
"Souffle d'Arbre", "Écorce d'Arbre", "Mémoire d'Arbre", "Silence d'Arbre", "Cendre d'Arbre",
"Veine d'Arbre", "Sève d'Arbre", "Nuit d'Arbre", "Racine d'Arbre", "Poussière d'Arbre",
"Murmure d'Arbre", "Reflet d'Arbre", "Peau d'Arbre", "Épine d'Arbre", "Brume d'Arbre",
"Éclat d'Arbre", "Pluie d'Arbre", "Vertige d'Arbre", "Feuille d'Arbre", "Chute d'Arbre",
"Vent d'Arbre", "Parfum d'Arbre", "Rêve d'Arbre", "Présage d'Arbre", "Fumée d'Arbre",
"Fruit d'Arbre", "Prière d'Arbre"];

const FORM_URL = "https://docs.google.com/forms/d/1VQDpS1QaNLJ9GcbfgykqhLacyF9Z2huK0pqIIblBEhc/preview";

function App() {
  const [valor, setValor] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    const valido = nombres.some(nombre => nombre.toLowerCase().includes(valor.toLowerCase()));
    if (valido) {
      window.open(FORM_URL, '_blank')
      setValor('')
    } else {
      setError(true);
    }
  };

  return (
    <div className="container">
  <img src={welcome} alt="Welcome" className="img-welcome" />
  Tu as ton mot de passe ?
  <div className="input-wrapper">
    <input
      type="text"
      placeholder="Mot de passe"
      value={valor}
      onChange={(e) => {
        setValor(e.target.value)
        setError(false)
      }}
      onKeyDown={(e) => {
        if (e.key === 'Enter') handleSubmit();
      }}
      className={`input ${error ? 'input-error' : ''}`}
    />
    {error && (
      <p className="error-msg">Le mot de passe n'est pas valide</p>
    )}
  </div>
  <button onClick={handleSubmit} className="btn">
    Envoyer
  </button>
  <img src={noseAtNoise} alt="NoseAtNoise" className="img-logo" />
</div>
  )
}

export default App