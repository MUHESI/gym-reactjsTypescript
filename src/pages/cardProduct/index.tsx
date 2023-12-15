import React from 'react'

type ICard = {
    id: number,
    img: any,
    name: string
    description: string
    prices: {
        smallPrice: number,
        mediumPrice: number,
        largePrice: number
    }
}
interface IProps {
    card: ICard
}
function CardPanier({ card }: IProps) {
    return (
        <div className="">
            <div className='flex justify-center items-center'>
                <img className='w-[180px] transition hover:scale-[1.2] rounded-full cover border  border-[#5d0000]' alt='...' src={card.img} />
            </div>
            <div className='text-center '>
                <h5 className=' mt-4 mb-2 font-bold'>{card.name}</h5>
                <div>
                    {card.description}
                </div>
            </div>
            <h5 className=' mt-4 text-center font-600'>Choisir le format</h5>
            <div className='text-sm'>

                <p className='p-2 border rounded  my-2 transition hover:shadow flex gap-3'>  <input type='radio' /> <span> Petit:<strong> {card.prices.smallPrice}$ </strong></span> </p>
                <p className='p-2 border rounded  my-2 transition hover:shadow flex gap-3'>  <input type='radio' /> <span> Medium:<strong> {card.prices.mediumPrice}$ </strong></span> </p>
                <p className='p-2 border rounded  my-2 transition hover:shadow flex gap-3'>  <input type='radio' /> <span> Large:<strong> {card.prices.largePrice}$ </strong></span> </p>
            </div>
        </div>
    )
}

export default CardPanier
