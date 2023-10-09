import React from 'react'
import { Link } from 'react-router-dom'
import notFound from '../../assets/404pagenotFound.jpg'
const ErrorPage = () => {
  return (
    <div className="container mx-auto pt-9 mt-8">
      <div className="flex justify-center ">
        <img className="h-[40rem]" src={notFound} alt="" />
      </div>
      <div className="flex justify-center">
        <Link to={"/"}>
          <button className="btn btn-secondary">Go Back Home</button>
        </Link>
      </div>
    </div>
  )
}

export default ErrorPage