import React from 'react'

function Alert(props) {
  return (
    <>
     {props.alert &&
      <div class="font-regular relative block w-full rounded-lg bg-green-500 p-4 text-base leading-5 text-white opacity-100">
        <strong>{props.alert.type}</strong>:{props.alert.msg}
      </div>}

     
    </>
  )
}

export default Alert
