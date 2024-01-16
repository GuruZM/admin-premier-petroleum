import React, { useEffect } from 'react'
import { Divider, Input, Select, SelectItem } from '@nextui-org/react'
import { useDispatch,useSelector } from 'react-redux'
import InputText from './InputText'
export function InvoiceField({register,index,handleRemove,handlePriceChange,getValues,handleQuantityChange}) {
return (
    <div>

    <div className='animate-in flex dark:text-white justify-between space-x-5 items-center'>
        <div className=' flex flex-wrap  w-full   '>
            <div className=' flex-1 flex px-2   flex-col  '>
                
                
            <div className=' flex px-2   flex-1  flex-col items-start'>
                <InputText
               register={register}
               name={`items.${index}.description`}
                onChange={(event)=>(handleQuantityChange(index,event))}
               title='Description'
               className='w-full flex-1'
                />
              
            </div>

      
            </div>

            <div className=' flex px-2   flex-1  flex-col items-start'>
                <InputText
                 title='Qty.'
                type='number'
                name={`items.${index}.quantity`}
                register={register}
                onChange={(event)=>(handleQuantityChange(index,event))}
                />

            </div>

            <div className=' flex px-2 flex-1  flex-col items-start'>
            <InputText
              name={`items.${index}.rate`}
                onChange={(event)=>(handlePriceChange(index,event))}    
                register={register}
                title='Rate'

                />
        
            </div>

            <div className="w-fit flex flex-col     float-right">
            <span className='text-sm'>Amount</span>
            <InputText       
            
                type='number'
                className='bg-gray-100 w-fit mt-1 p-2 rounded-xl '
                readOnly={true}
                 register={register}
                 name={`items.${index}.amount`}
                />
               
           
            </div>
        </div>
        <button 
        className='pt-8'
        onClick={() => { handleRemove(index)  }}>
         
              🗑️
        </button>

    </div>
</div>
)


}