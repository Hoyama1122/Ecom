import React, { useState } from 'react'

const ChangeAddress = ({ setisModalOpen ,setaddress}) => {
    const [newAddress, setnewAddress] = useState("");
   const onClose =()=>{
     setaddress(newAddress)
     setisModalOpen(false)
   }
  return (
    <div>
      <input type="text" placeholder='Enter new address'
      className='border p-2 w-full mb-4'
      onChange={(e) => setnewAddress(e.target.value)}
      />
      <div className='flex justify-end'>
        <button 
          className='bg-gray-500 text-white px-4 py-2 rounded mr-2'
          onClick={() => setisModalOpen(false)}  // ปิด Modal เมื่อคลิก Cancel
        >
          Cancel
        </button>
        <button className='bg-blue-500 text-white px-4 py-2 rounded'
        onClick={onClose}
        >
          Save Address
        </button>
      </div>
    </div>
  )
}

export default ChangeAddress;
