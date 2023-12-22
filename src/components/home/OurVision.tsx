import React from 'react'
import { FirstHeading } from '../core/Heading'
import { CustomButton } from '../core/CustomButton'
import { useNavigate } from 'react-router-dom'

function OurVision() {
    const navigate = useNavigate()
    return (
        <div className='p-5 pb-16  my-10 rounded-xl'>
            <div className='text-center'>
                <FirstHeading title='Notre vision' />
                <p className='my-2  mx-auto max-w-[600px]' >
                    Notre vision chez CHIKEN, nous vous offrons tout une gamme des produits et les services, Vous trouverez les produits comme , hjdcu cdoiclkvdsudi udsiop

                </p>
            </div>
            <div className=' min-h-[350px]'
                style={{
                    position: "relative",
                    width: "100%",
                    backgroundImage: "url(https://res.cloudinary.com/chanel-muhesi/image/upload/v1703227010/poules/team_xopyyp.jpg)",
                    backgroundColor: "rgba(0, 0, 0, 0.25)",
                    backgroundBlendMode: "multiply"

                }}>
                <div className=' px-5'
                    style={{
                        maxWidth: "50%",
                        left: "50%",
                        bottom: 0,
                        position: "absolute",
                        transform: "translate(-50% , 50%)"
                    }}
                >
                    <div className='justify-self-auto  text-center text-white rounded-xl bg-black bg-opacity-[0.7] p-2 hover:shadow-full'>
                        La République Démocratique du Congo dispose de plus de 80 000 hectares des terres arables, un climat favorable a deux grandes saisons, une végétation favorable à l’élevage, Et pourtant plus de 26 millions des congolais vivent dans l’insécurité alimentaire cad ne dispose pas du minimum requis pour leur besoin alimentaire.

                        <div className='flex  justify-center  py-2  px-2'>
                            <CustomButton
                                className='bg-[#ffc132] hover:bg-transparent'
                                label='Lire plus'
                                onClick={() => navigate('/vision')}
                            />
                        </div>
                    </div>


                </div>
            </div>

        </div>
    )
}

export default OurVision



