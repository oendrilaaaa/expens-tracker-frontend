import Button from '@mui/material/Button'
import React,{useState} from 'react'
import AddTransaction from './AddTransaction'
import DropdownComp from '../components/Dropdown'
const Transactions = () => {
  const income = 50000
  const expenses = 35000
  const balance = income-expenses
  const transactions = [
{ id: 1, description: "Coffee", amount: 150, category: "Food" },
{ id: 2, description: "Uber ride", amount: 300, category: "Travel" },
{ id: 3, description: "Netflix", amount: 500, category: "Entertainment" },
]
  const [searchTerm, setSearchTerm] = useState('')
  const[selectedDate, setSelectedDate] = useState('')
  const filterTransaction = transactions.filter((transaction)=>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  )
  const categoryOptions = ["Housing", "Food", "Transport", "Healthcare", "Entertainment", "Utilities", "Miscellaneous"]
  const [categoryMethod, setCategoryMethod] = useState(null)
  const handleCategorySelect = (value) => {
          console.log("selected category is", value)
          setCategoryMethod(value)
  }
  const paymentOptions = ["Cash", "Card", "UPI", "Bank"]
      const [paymentMethod, setPaymentMethod] = useState(null)
      const handlePaymentSelect = (value) => {
          console.log("selected payment is", value)
          setPaymentMethod(value)}
  
  return (
    <>
    <div className=' h-screen items-center justify-center'>
        <div className='justify-center px-3 flex items-center bg-gray-400 h-60'>
            <div className="w-full max-w-sm p-6 mx-1.5 bg-white border border-gray-300 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold text-gray-900">Income</h3>
            <p className="mt-2 text-gray-600">{income}</p>
            </div>

            <div className="w-full max-w-sm p-6 mx-1.5 bg-white border border-gray-300 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold text-gray-900">Expenses</h3>
            <p className="mt-2 text-gray-600">{expenses}</p>
            </div>

            <div className="w-full max-w-sm p-6 mx-1.5 bg-white border border-gray-300 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold text-gray-900">Balance</h3>
            <p className="mt-2 text-gray-600">{balance}</p>
            </div>
            
        </div>
        <div className='items-center flex place-items-center p-2 mx-2'>
            <input type="text" 
                   id='searchbar'
                   name='searchbar'
                   placeholder='Search Transaction'
                   className='w-96 px-3 py-2 bg-white border border-gray-900 focus:outline-none rounded-xl'/>
            <button class="bg-gray-800 hover:bg-gray-700 text-white font-medium mx-2 py-2 px-2 rounded-lg transition-colors duration-200">
            Add transaction
          </button>
        </div>
        <div>
          <div className='flex flex-box px-2  py-4'>
                <select name="filter1" id="filter1" className='w-full px-7 mx-1  bg-white border border-gray-900 focus:outline-none rounded-xl'>
                    <option value="ALL">All</option>
                    <option value="INCOME">Income</option>
                    <option value="EXPENSE">Expense</option>
                </select>
          </div>
          <div className='px-2 flex py-2 mx-2'>
                <DropdownComp options={categoryOptions} handleOnChange={handleCategorySelect} />
                <DropdownComp options={paymentOptions} handleOnChange={handlePaymentSelect} />
                
                <input type="date"
                       value={selectedDate} 
                       onChange={e=>{setSelectedDate(e.target.value)}}
                       className='w-full px-7 mx-1 bg-white border border-gray-900 focus:outline-none rounded-xl' />

          </div>
        </div>
        
    </div>
    </>
  )
}

export default Transactions
