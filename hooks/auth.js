import useSWR from 'swr'
import axios from 'lib/axios'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { API_ROUTES } from "../constants/apiRoutes";

export const useAuth = ({ middleware, redirectIfAuthenticated } = {}) => {
    const router = useRouter()

    const { data: user, error, mutate } = useSWR(API_ROUTES.USER, () =>
        axios
            .get(API_ROUTES.USER)
            .then(res => res.data)
            .catch(error => {
                if (error.response.status !== 409) throw error

                router.push('/verify-email')
            }),
        {
            shouldRetryOnError: false
        }
    )

    const csrf = () => axios.get(API_ROUTES.CSRF)

    const register = async ({ ...props }) => {
        await csrf()

        axios
            .post(API_ROUTES.REGISTER, props)
            .then(() => mutate())
            .then(() => { router.push('/dashboard') })
            .catch(error => {
                if (error.response.status !== 422) throw error
            })
    }

    const login = async ({ ...props }) => {
        await csrf()

        axios
            .post(API_ROUTES.LOGIN, props)
            .then(() => mutate())
            .then(() => { router.push('/dashboard') })
            .catch(error => {
                console.log(error);
            })
    }

    const forgotPassword = async ({ setErrors, setStatus, email }) => {
        await csrf()

        setErrors([])
        setStatus(null)

        axios
            .post(API_ROUTES.FORGOT_PASSWORD, { email })
            .then(response => setStatus(response.data.status))
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(Object.values(error.response.data.errors).flat())
            })
    }

    const resetPassword = async ({ setErrors, setStatus, ...props }) => {
        await csrf()

        setErrors([])
        setStatus(null)

        axios
            .post(API_ROUTES.RESET_PASSWORD, { token: router.query.token, ...props })
            .then(response => router.push('/login?reset=' + btoa(response.data.status)))
            .catch(error => {
                if (error.response.status != 422) throw error

                setErrors(Object.values(error.response.data.errors).flat())
            })
    }

    const resendEmailVerification = ({ setStatus }) => {
        axios
            .post(API_ROUTES.EMAIL_VERIFICATION)
            .then(response => setStatus(response.data.status))
    }

    const logout = async () => {
        if (! error) {
            await axios
                .post(API_ROUTES.LOGOUT)
                .then(() => mutate())
        }

        window.location.pathname = '/login'
    }

    useEffect(() => {
        if (middleware === 'guest' && redirectIfAuthenticated && user) router.push(redirectIfAuthenticated)
        if (middleware === 'auth' && error) logout()
    }, [user, error])

    return {
        user,
        register,
        login,
        forgotPassword,
        resetPassword,
        resendEmailVerification,
        logout,
    }
}