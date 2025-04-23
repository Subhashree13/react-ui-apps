import React from 'react'
import { useRouteError } from 'react-router'
const Error = () => {
const error = useRouteError();
  return (
    <div>Opps! There is an error finding this page!!!

        <div>{error.status} - {error.statusText}</div>
    </div>
  )
}

export default Error