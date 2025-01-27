import farmaciaImg from '../../assets/marcia.png';


function Home() {
    return (
        <>
            <div className="w-full flex justify-center bg-gradient-to-r from-teal-950 to-teal-300 py-4 text-white">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                            Seja Bem vinde!
                        </h2>
                        <p className='text-xl'>
                            Sua farmácia só que da Marcia!
                        </p>

                        <div className="flex justify-around gap-4">
                            <div className='rounded text-white 
                                            border-white border-solid border-2 py-2 px-4'
                                >
                                Nova categoria
                            </div>
                         </div>

                         <div className="flex justify-around gap-4">
                            <div className='rounded text-white 
                                            border-white border-solid border-2 py-2 px-4'
                                >
                                Novo produto
                            </div>
                         </div>
                        
                    </div>

                    <div className="flex justify-center ">
                        <img src={farmaciaImg} alt="imagem da farmacia"  />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home