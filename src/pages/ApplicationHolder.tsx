import React from 'react'
import { RouterProvider } from 'react-router-dom'
import router from '../router'
import { useAuth } from '../context/authentication.context'
import authrouter from '../authRouter'
import LoadingPage from './LoadingPage'
import newClientRouter from '../newClientRouter'
import unlockRouter from '../unlockRouter'

const ApplicationHolder = () => {
    const {isAuthenticated,apploading,userData,user} = useAuth()
    
  return (

    <>
        {apploading || (!userData && isAuthenticated) ? (
          <LoadingPage/>
        ) : isAuthenticated&&userData && userData?.confirmed && userData?.active ? (
          <RouterProvider  router={router} />
        ) : isAuthenticated&&userData&& !userData?.confirmed && userData?.active? (
          <RouterProvider router={newClientRouter} />
        ) :isAuthenticated&&userData&& userData?.confirmed && !userData?.active ?(
          <RouterProvider router={unlockRouter} />
          )
        :(
          <RouterProvider router={authrouter} />
        )}
    </>
    )
}

export default ApplicationHolder