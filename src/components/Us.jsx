import React from 'react'
import { Card, Skeleton } from "@nextui-org/react";
export default function Us() {
    return (
<main>
        <h1 className='gradient-text-DEVOPS text-transparent text-center font-bold text-[6rem] animate-gradient mt-12'>Devops Solutions</h1>

        <section className='flex items-center justify-between mx-auto my-16 p-4 min-h-96'>

            <Card className="w-[400px] space-y-5 p-4" radius="lg">
                <p className='flex items-center justify-center'>Nosotros aca</p>
                <Skeleton className="rounded-lg">
                    <div className="h-52 rounded-lg bg-default-300"></div>
                </Skeleton>
                <div className="space-y-3">
                    <Skeleton className="w-3/5 rounded-lg">
                        <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
                    </Skeleton>
                    <Skeleton className="w-4/5 rounded-lg">
                        <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
                    </Skeleton>
                    <Skeleton className="w-2/5 rounded-lg">
                        <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
                    </Skeleton>
                </div>
            </Card>

            <div className="text-white max-w-[50%] min-h-52 p-4 text-4xl font-semibold tracking-wide ">
                <p>Nos especializamos en el desarrollo web con las últimas tecnologías, ofreciendo
                    <span className=' text-transparent bg-gradient-to-r from-pink-700 bg-pink-500 to-gray-300 font-bold bg-clip-text'> soluciones 
                    innovadoras</span> y personalizadas. Nuestro equipo garantiza resultados de 
                    <span className=' text-transparent bg-gradient-to-r from-red-400 bg-orange-500 to-yellow-300 font-bold bg-clip-text'> alta calidad </span> y una 
                    <span className='text-transparent bg-gradient-to-r from-lime-600 bg-green-400 to-green-200 font-bold bg-clip-text'> experiencia excepcional </span>
                    en cada proyecto.</p>
            </div>

        </section>
        </main>
    )
}
