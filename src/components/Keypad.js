import React,{useState,useEffect} from 'react';
import styles from './Keypad.module.css';
import axios from "axios";

export default function Keypad({usedKeys}) {
    const [letters,setLetters]= useState(null);
    const getData = async()=>{
      
            try{
            const res = await axios.get("http://localhost:3001/letters");
            console.log(res);
            const data = await res.data;
            setLetters(data);
          
             
            }catch(e){
              console.log(e);
            }

    }



    useEffect(getData,[]);

  return (
    <div className={styles['keypad']}>
        {letters&&letters.map((l)=>{
        const color =usedKeys[l.key];
        return (
        <div key={l.key} className={styles[color]}>{l.key} </div>
    ) })}
      </div>
  )
};
