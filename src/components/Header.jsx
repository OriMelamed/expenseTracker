import React from 'react'

function Header({ name }) {
    return (
        <h1 className='text-6xl font-bold text-fuchsia-950 mx-2 mt-2 mb-5 p-2 text-center'>Hello {name} To My Expense Tracker</h1>
    )
}

export default Header