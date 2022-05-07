import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

const [value, setValue] = useState('');
const [submitted, setSubmitted] = useState(false);

const changeValue = (newVal) => {
  setSubmitted(false);
  setValue(newVal);
}

export default function Home() {
  return (
    <div>
      <div>
        <input onChange={e => {changeValue(e.target.value)}} type='text' placeholder='Enter Value Here:' />
        <button onClick={generateQR}>Generate QR Code</button>
      </div>
      {
        submitted ? (<QRCode value ={value} />)
        : 'Not Submitted'
      }
    </div>
  )
}
