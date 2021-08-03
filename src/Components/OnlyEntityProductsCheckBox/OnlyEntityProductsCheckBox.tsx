import React from 'react'

const OnlyEntityProductsCheckBox = () => {
    return (
        <div className='d-flex align-items-center mt-2'>
            <input type="checkbox" name={"brandName"} id={"checkBox"} />
            <label htmlFor={"checkBox"} className="mx-3">فقط کالاهای موجود</label>
        </div>
    )
}

export default OnlyEntityProductsCheckBox
