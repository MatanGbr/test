import React from 'react';
import firebase from 'firebase';

export default function Dishes () {
    
    const [yArray, _setYArray] = React.useState([]);
   
    const yArrayRef = React.useRef(yArray)
    const setYArray = (value) => {
      yArrayRef.current = value;
      _setYArray(value);
    }
 
    React.useEffect(()=> {
        y()
        
    },) 
 
    function y () {
        let myArray = yArrayRef.current
         firebase.database().ref('dish').once('value', function (snap) {
             snap.forEach((childSnapshot) => {
                   myArray.push({
                     name: childSnapshot.key,
                     price: childSnapshot.val().price,
                 })
               setYArray(myArray)
        
             });
 
        })
    }

    const yMap = () => {
    return <button>
                {yArray.name}, {yArray.price}
            </button>
    }

    return (<div>
        {yMap}
    </div>)
}
