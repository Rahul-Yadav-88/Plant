import React from 'react'
import { useState } from 'react'
function Header() {
    const [menu, setmenu] = useState('hidden')
    const menuHandler = () => {
        if (menu === 'hidden') {
            setmenu((prev) => {
                return 'visible'
            })
        } else {
            setmenu((prev) => {
                return 'hidden'
            })
        }
    }
    return (
        <div className='border-2 border-green-700 font-moderustic p-2 sm:flex sm:justify-between'>
            <div className='flex justify-between '>
                <div className='border-2 flex gap-6 font-extrabold  text-3xl text-greens'><span><i class="fa-solid fa-tree"></i></span><span>Evergreen</span></div>
                <div className='sm:hidden text-3xl text-greens' onClick={menuHandler}><i class="fa-solid fa-burger"></i></div>
            </div>
            <div className={`border-2  flex flex-col gap-4 ${menu} text-[16px] mt-2 sm:flex-row text-greens leading-7`}>
                <span>Home</span>
                <span>Plant encyclopedia</span>
                <span>About us</span>
                <span>Contact US</span>
            </div>
        </div>
    )
}

export default Header