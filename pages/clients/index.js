import React from 'react'
import Link from "next/link"

const ClientPage = () => {
    const clients = [
        {id:"thach", name: "Thạch Steven"},
        {id:"John", name: "John Doe"}
    ]

    return (
        <div>
            <h1>The Clients Page </h1>
            <ul>
                {clients.map((client, index) => {
                    return <li key={index}>
                        {/* Cách 1 */}
                        {/* <Link href={`/clients/${client.id}`}>{client.name}</Link> */} 
                        {/* Cách 2 */}
                        <Link href={{
                            pathname: "/clients/[id]",
                            query:  {id: client.id}
                        }}>
                            {client.name}
                        </Link>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default ClientPage
