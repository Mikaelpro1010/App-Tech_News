import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
        <div className='flex justify-center grid justify-items-stretch'>
            <h1 className='justify-self-center'>Entre em contato conosco!</h1>
            <div className='flex items-center mt-2 mb-2'>
                <div className='flex items-center mx-4'>
                    <div>
                        <img src="/whatsapp.png" alt="" width="25" />
                    </div>
                    <div className='mx-2 hover:text-blue-500'>
                        <h2><Link href='https://web.whatsapp.com'>Whatsapp</Link></h2>
                    </div>
                </div>
                <div className='flex items-center mx-4'>
                    <div>
                        <img src="/email.png" alt="" width="25" />
                    </div>
                    <div className='mx-2 hover:text-blue-500'>
                    <h2><Link href='mailto:mikaelantonio398@gmail.com'>Email</Link></h2>
                    </div>
                </div>
                <div className='flex items-center mx-4'>
                    <div>
                        <img src="/instagram.png" alt="" width="25" />
                    </div>
                    <div className='mx-2 hover:text-blue-500'>
                        <h2><Link href='https://www.instagram.com'>Instagram</Link></h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
