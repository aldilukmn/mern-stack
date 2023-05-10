import React from 'react'
import { loginBg } from '../../assets'
import { Button, Gap, Input, Link } from '../../components'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate();
  return (
        <main className='main-page'>
            <div className="left">
                <img src={loginBg} className='bg-image' alt='image-regiter'/>
            </div>
            <div className="right">
                <p className='title'>Login</p>
                <Input label={`Email`} placeholder="Email"/>
                <Gap height={`10px`}/>
                <Input label={`Password`}
                placeholder="Password"/>
                <Gap height={`30px`}/>
                <Button title={`Login`} onClick={() => navigate('/')}/>
                <Gap height={`60px`} />
                <Link title={`Create account`} onClick={() => navigate('/register')}/>
            </div>
        </main>
  )
}

export default Login