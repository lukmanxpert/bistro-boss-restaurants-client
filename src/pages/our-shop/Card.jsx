import React from 'react';

const Card = ({ menu }) => {
    return (
        <div className="card rounded-none bg-base-100 shadow-xl">
            <figure>
                <img className='w-full relative'
                    src={menu.image} />
                    <span className='absolute top-0 right-5 text-white font-bold bg-black py-2 px-4 my-2 rounded-md'>${menu.price}</span>
            </figure>
            <div className="text-center">
                <h2 className="text-2xl font-bold my-2">{menu.name}</h2>
                <p>{menu.recipe}</p>
                <div className="">
                    <button className="btn btn-outline my-2">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Card;