import React from 'react'


type ReactSetState<T> = React.Dispatch<React.SetStateAction<T>>


function getPosition(setMessage: ReactSetState<string>) {



      if('geolocation' in navigator){
        navigator.geolocation.getCurrentPosition((position: GeolocationPosition) => {
  
        //   console.log('position is: ', position)
          setMessage(`Your position is:  ${position.coords.latitude} latitude and ${position.coords.longitude} longitude`)
        }, error => {
        //   console.log('position error', error)
          setMessage('Please enable position to use this app.')
        })
      }
    }




export {getPosition};
