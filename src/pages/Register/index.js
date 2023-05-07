import React from 'react'
import "./register.scss"
import { registerBg } from '../../assets'
import { Button, Gap, Input, Link } from '../../components'

const Register = () => {
  return (
    <>
        <main className='main-page'>
            <div className="left">
                <img src={registerBg} className='bg-image' alt='image-regiter'/>
            </div>
            <div className="right">
                <p className='title'>Register</p>
                <Input label={`Full Name`} placeholder="Full Name"/>
                <Gap height={10}/>
                <Input label={`Email`} placeholder="Email"/>
                <Gap height={10}/>
                <Input label={`Password`}
                placeholder="Password"/>
                <Gap height={30}/>
                <Button title={`Register`}/>
                <Gap height={60} />
                <Link title={`Back to Login`}/>
            </div>
        </main>
    </>
  )
}

export default Register