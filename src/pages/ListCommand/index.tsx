import React from 'react'
import viandenoCuiteA from "@/assets/viandenoCuiteA.png";
import viandeCuiteB from "@/assets/viandeCuiteB.png";
import { MdDelete } from "react-icons/md";

const dataCommands = {
    total: 60,

    products: [
        {
            id: 1,
            img: viandenoCuiteA,
            name: "poules de chair",
            commands: [
                {
                    smallPrice: 10,
                },
                {
                    largePrice: 10,
                },
            ],
            tot: 20,
        },
        {
            id: 2,
            img: viandeCuiteB,
            name: "poules de chair22",
            commands: [
                {
                    smallPrice: 30,
                },
                {
                    largePrice: 10,
                },

            ],
            tot: 40
        }
    ]
}

function ListCommand() {
    return (
        <div className="p-5 gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
            <h2 className='font-bold text-2xl text-center mb-4'>Commande</h2>

            <div>
                <main>
                    {dataCommands.products.map((item, key) =>
                        <div key={key} className='flex justify-between items-center gap-5  border-b pb-2 '>
                            <img alt={"..."} src={item.img} className=' cover w-[80px]' />
                            <div className='flex gap-4'>
                                <h5>{item.name}</h5>
                                <h5 className='font-bold'>{item.tot}$ </h5>
                            </div>
                            <div
                                className='cursor-pointer hover:font-bold transition'
                            >
                                <MdDelete size={20} />
                            </div>
                        </div>)}
                    <strong className='block text-right my-2'> Total:{dataCommands.total}$ </strong>
                    <div className='text-right'>
                        <button className=' bg-[#ffc132] p-1 px-5 rounded-full text-white transition hover:text-[#ffc132] hover:bg-white border border-transparent hover:border-[#ffc132]'>Valider</button>
                    </div>
                </main>
            </div>

        </div >
    )
}

export default ListCommand
