import React from 'react'
import { useRouter } from 'next/router'

const ClientProjectsPage = () => {
    const router = useRouter()

    console.log(router.query)
    const loadProjectHandler = () => {
        //Load data
        // router.push('/clients/thach/projecta')
        router.push({
            pathname: "/clients/[id]/[clientprojectid]",
            query: { id: "thach", clientprojectid: "thachpro"}
        })
    }

    return (
        <div>
            <h1>The Projects of Given Client</h1>
            <button onClick={loadProjectHandler}>Load Project</button>
        </div>
    )
}

export default ClientProjectsPage
