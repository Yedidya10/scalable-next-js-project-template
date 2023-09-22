import { getProviders, signIn } from 'next-auth/react'
import styles from './page.module.scss'
import { Metadata } from 'next'
import SignIn from '@/components/signIn/SignIn'

export const metadata: Metadata = {
  title: 'Login',
}

// Define the interface for the Login component
export interface ILogin {
  providersLoginText: string
  providers: any
  Login: any
}

export async function getServerSideProps({}: {}) {
  try {
    const providers = await getProviders()

    return {
      props: {
        providers,
      },
    }
  } catch (error) {
    console.error('Error fetching providers:', error)
  }
}

const Login: React.FC<ILogin> = ({
  providers
}) => {

  return (
    <div>
      <SignIn providers={providers} label={''}/>
    </div>
  )
}

export default Login
