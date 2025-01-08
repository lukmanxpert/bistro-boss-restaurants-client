import React from 'react';
const Menu = ({ menu }) => {
    console.log(menu);
    return (
        <div className='flex my-4 items-center gap-4'>
            <div>
                <img style={{borderRadius: "0px 200px 200px 200px"}} className='w-[100px] menu-image' src={menu.image} alt="" />
            </div>
            <div>
                <p className='text-xl font-semibold'>{menu.name}-----------------</p>
                <p>{menu.recipe}</p>
            </div>
            <div className='text-orange-400'>
                ${menu.price}
            </div>
        </div>
    );
};

export default Menu;