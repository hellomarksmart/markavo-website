import React from "react"
import loadingGIF from "../images/Icons/Markavo_logo.png"

const Logo = () => {

  return (
    <div
      className="w-10/12 mx-auto h-screen flex items-center">
      <img className="m-auto h-auto" src={loadingGIF} alt="Markavo" />
    </div>
  )
}

export default Logo