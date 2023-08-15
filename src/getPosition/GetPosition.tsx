import React from 'react'


type ReactSetState<T> = React.Dispatch<React.SetStateAction<T>>


function getPosition(setMessage: ReactSetState<string>) {



      if('geolocation' in navigator){
        navigator.geolocation.getCurrentPosition((position: GeolocationPosition) => {
  
        //   console.log('position is: ', position)
          setMessage(`Your position is:  ${position.coords.latitude} latitude and ${position.coords.longitude} longitude`)
        }, () => {
        //   console.log('position error', error)
          setMessage('Please enable position to use this app.')
        })
      }
    }

    const apiKey: string = 'f551cddf89208d38b63c2f351454dc12'

    
    async function reverseGeocode(lat: number, lon:number, setAdress: ReactSetState<string>){
        
        const numberOfResponses = 5
        const url = `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=${numberOfResponses}&appid=${apiKey}`
        const response = await fetch(url)
        const data: Place[] = await response.json()

        console.log('Reverse geocode: ', data);

        let firstAddress: string = data[0].name
        setAdress(firstAddress)
        

        interface Place{
            name: string;
        }
    }



export {getPosition, reverseGeocode};
