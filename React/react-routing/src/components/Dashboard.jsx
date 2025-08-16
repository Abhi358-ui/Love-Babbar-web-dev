import React from 'react'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard page</h1>
            <Outlet/> {/* jab hame kisi route ke andar kisi child route ko render karna rahta ha tab hme ye outlet lagana parta ha */}
        </div>
    )
}

export default Dashboard