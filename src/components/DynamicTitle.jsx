import React from 'react'
import {Helmet} from "react-helmet";
function DynamicTitle({title}) {
  return (
    <>
        <Helmet>
                <title>{title}</title>
        </Helmet>
    </>
  )
}

export default DynamicTitle