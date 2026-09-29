import React, { useState } from 'react'
import DropdownComp from '../components/Dropdown'

const AddTransaction = () => {
    const paymentOptions = ["Cash", "Card", "UPI", "Bank"]
    const [paymentMethod, setPaymentMethod] = useState(null)
    const handlePaymentSelect = (value) => {
        console.log("selected payment is", value)
        setPaymentMethod(value)
    }

    const categoryOptions = ["Housing", "Food", "Transport", "Healthcare", "Entertainment", "Utilities", "Miscellaneous"]
    const [categoryMethod, setCategoryMethod] = useState(null)
    const handleCategorySelect = (value) => {
        console.log("selected category is", value)
        setCategoryMethod(value)
    }

    return (
        <>
            <div className='flex grid min-h-screen place-items-center '>
                <div className='place-items-center'>
                    <div>Add Transaction Type</div>
                    <div className='flex flexbox p-4'>
                        <button className='px-5 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 '>Expense</button>
                        <button className='px-5 py-2 mx-3 bg-slate-800 text-white rounded-lg hover:bg-slate-700 '>Income</button>
                    </div>
                    <div className=' items-center flex flex-col place-items-center py-3 '>
                        Amount
                        <input type="number"
                            id="amount"
                            placeholder='Enter your transaction amount'
                            className='w-full px-8 py-2 bg-white border border-gray-900 focus:outline-none rounded-xl' />
                    </div>
                    <div className='flex flex- px-10 rounded'>Date
                        <div className='px-3'>
                            <input type="date" />
                        </div>
                    </div>
                    <div className='flex flex-box  px-10 rounded'>Description
                        <div className='px-3 '>
                            <input type="text"
                                id="description"
                                className='w-full px-7  bg-white border border-gray-900 focus:outline-none rounded-xl'
                            />
                        </div>
                    </div>

                    <DropdownComp options={paymentOptions} handleOnChange={handlePaymentSelect} />

                    <DropdownComp options={categoryOptions} handleOnChange={handleCategorySelect} />
                </div>
            </div>
        </>
    )
}
export default AddTransaction