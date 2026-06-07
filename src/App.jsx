import { useState } from 'react'
import welcome from './assets/welcome.jpeg'
import noseAtNoise from './assets/noseAtNoise.jpeg'

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
    <div style={{
      backgroundColor: 'white',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '12px',
      width: '100vh',
      margin: '0',
    }}>
      <img src={welcome} alt="Welcome" style={{ width: '1000px', height: 'auto' }} />
      Tu as ton mot de passe ?
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
        <input
          type="text"
          placeholder="Passe"
          value={valor}
          onChange={(e) => {
            setValor(e.target.value)
            setError(false)
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleSubmit();
          }}
          style={{
            padding: '10px',
            fontSize: '16px',
            borderRadius: '6px',
            border: error ? '1px solid red' : '1px solid black',
            backgroundColor: 'white',
            color: 'black',
            outline: 'none'
          }}
        />
        {error && (
          <p style={{ color: 'red', fontSize: '13px', margin: '0' }}>
            Le mot de passe n'est pas valide
          </p>
        )}
      </div>
      <button
        onClick={handleSubmit}
        style={{
          padding: '10px 24px',
          fontSize: '16px',
          borderRadius: '6px',
          backgroundColor: 'black',
          color: 'white',
          cursor: 'pointer'
        }}
      >
        Envoyer
      </button>
      <img src={noseAtNoise} alt="NoseAtNoise" style={{ width: '270px', height: 'auto' }} />
    </div>
  )
}

export default App