import { route as routeFn } from 'ziggy-js'

declare global {
    // eslint-disable-next-line no-var
    var route: typeof routeFn
}

type User = {
    id: number
    name: string
    email: string
    email_verified_at: string | null
    created_at: string
    updated_at: string
}

type PublicAuth = {
    user: User | null
}

type DashboardAuth = {
    user: User
}

type EditProps = {
    auth: DashboardAuth
    mustVerifyEmail: boolean
    status: string | null
}
