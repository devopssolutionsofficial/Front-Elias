import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Textarea, Input, Button, CircularProgress } from "@nextui-org/react";
import { toast, Toaster } from 'react-hot-toast';

function FormEmail() {
    const form = useRef();
    const [loading, setLoading] = useState(false); // Estado para gestionar el indicador de carga

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true); // Mostrar el indicador de carga

        emailjs
            .sendForm('service_aq4rfcw', 'template_82srsxl', form.current, {
                publicKey: '7MQkMqtyVRFQGIU1Y',
            })
            .then(
                () => {
                    // console.log('SUCCESS!');
                    toast.success('Mensaje enviado correctamente!');
                    setLoading(false); // Ocultar el indicador de carga
                },
                (error) => {
                    // console.log('FAILED...', error.text);
                    toast.error('Error al enviar el mensaje.');
                    setLoading(false); // Ocultar el indicador de carga
                }
            );
    };

    return (
        <div className='w-full' >
            <form className='text-white flex items-center flex-col p-4 w-full' ref={form} onSubmit={sendEmail}>

                <div className="flex w-full flex-wrap md:flex-nowrap gap-4 m-4">
                    <Input type="text"
                        label="Nombre"
                        name="user_name"
                        className='w-full'
                        required />
                </div>

                <div className="flex w-full flex-wrap md:flex-nowrap gap-4 m-4">
                    <Input type="email"
                        label="Email"
                        name="user_email"
                        required
                    />
                </div>

                <div className="flex items-center justify-center flex-col w-full mt-4">
                    <label className='text-xl my-4 font-semibold'>Mensaje</label>
                    <Textarea
                        label="Mensaje"
                        placeholder="Escriba su mensaje aquí"
                        className="hover:cursor-pointer w-full"
                        name="message"
                        required
                        
                    />
                </div>

                <div className='relative mt-8 w-full'>
                    {loading ? (
                        <Button
                            className='w-full text-white font-semibold bg-orange-400'
                            color="warning"
                            variant="shadow"
                            type='submit'
                            disabled
                        >
                            <CircularProgress size="sm" aria-label="Loading..." />
                        </Button>
                    ) : (
                        <Button
                            className='w-full text-white font-semibold bg-orange-400'
                            color="warning"
                            variant="shadow"
                            type='submit'
                        >
                            Enviar
                        </Button>
                    )}
                </div>
            </form>

            <Toaster
                position="top-right"
                reverseOrder={false}
            />
        </div>
    );
}

export default FormEmail;
