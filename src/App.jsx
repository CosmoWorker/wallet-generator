import { useState } from 'react'
import { generateMnemonic } from "bip39";

import './App.css'
import { SolanaWallet } from './SolanaWallet';
import { EthereumWallet } from './EthereumWallet';

function App() {
  const [mnemonic, setMnemonic]=useState("");

  return (
    <>
      <button onClick={async ()=>{
        if (!mnemonic){
          const mn=generateMnemonic();
          setMnemonic(mn)
        }
      }}>
        Create Seed Phrase 
      </button>

      {mnemonic && <div>
        <h3>Your Seed Phrase - </h3>
        <p>{mnemonic}</p>
      </div>
      }

      {mnemonic && <SolanaWallet mnemonic={mnemonic}/>}
      {mnemonic && <EthereumWallet mnemonic={mnemonic}/>}
    </>
  )
}

export default App
