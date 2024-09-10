import React, { useEffect } from "react";
import { Divider, Input, Select, SelectItem } from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import InputText from "./InputText";

export function DeliveryNoteField({
    register,
    index,
    handleRemove,
    getValues,
}) {
    return (
        <div>
            <div className=" flex dark:text-white justify-between space-x-5 items-center">
                <div className=" flex flex-wrap  w-full   ">
                    <div className=" flex-1 flex px-2   flex-col  ">
                        <div className=" flex px-2   flex-1  flex-col items-start">
                            <InputText
                                title="Description"
                                type="text"
                                register={register}
                                name={`items.${index}.description`}
                            />
                            {/* <h1>
                    Qty.
                {/* <h1>
                    Qty.
                </h1>
                <input name='quantity' type='number' onChange={(e) => { handelOnChange(itemDetails.id, e) }} value={itemDetails.quantity} min={0} className={` dark:bg-[#1e2139] py-2 px-4 border-[.2px] rounded-lg  focus:outline-purple-400 max-w-[60px] border-gray-300 focus:outline-none      dark:border-gray-800`}  /> */}
                        </div>

                        {/* <Select
                labelPlacement='outside'
                startContent='📦'
                label='Item Name'
                {...register(`items.${index}.name`)}
                >
                    {
                        products.map((product ) => (
                            <SelectItem key={product.name} value={product.name}>
                                {product.name}
                            </SelectItem>
                        ))
                    }
                    
                </Select> */}

                        {/* <h1 className='font-medium'>
                    Item Name
                </h1>
                 
                <input name="name" onChange={(e) => { handelOnChange(itemDetails.id, e) }} value={itemDetails.name} type='text' className={` dark:bg-[#1e2139] py-2 px-4 border-[.2px] rounded-lg  focus:outline-purple-400 border-gray-300 focus:outline-none        dark:border-gray-800`} /> */}
                    </div>

                    <div className=" flex px-2   flex-1  flex-col items-start">
                        <InputText
                            title="Qty"
                            type="number"
                            register={register}
                            name={`items.${index}.quantity`}
                        />
                        {/* <h1>
                    Qty.
                {/* <h1>
                    Qty.
                </h1>
                <input name='quantity' type='number' onChange={(e) => { handelOnChange(itemDetails.id, e) }} value={itemDetails.quantity} min={0} className={` dark:bg-[#1e2139] py-2 px-4 border-[.2px] rounded-lg  focus:outline-purple-400 max-w-[60px] border-gray-300 focus:outline-none      dark:border-gray-800`}  /> */}
                    </div>
                </div>
                {/* <button 
        className='pt-8'
        onClick={() => { handleRemove(index)  }}>
         
              🗑️
        </button> */}
            </div>
        </div>
    );
}
