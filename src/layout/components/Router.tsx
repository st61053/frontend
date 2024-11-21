import React from 'react'
import Dashboard from '../../dashboard/components/Dashboard'

export enum PageSegment {
    DASHBOARD = "/dashboard",
}

const Page = {
    [PageSegment.DASHBOARD]: <Dashboard />
}

const Router = ({ pathname }: { pathname: PageSegment }) => {
    return Page[pathname]
}

export default Router