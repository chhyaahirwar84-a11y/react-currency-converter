import React, {useId} from 'react'

// Variables


function InputBox({
    label,
    amount,
    onAmountChange,
    OnCurrencyChange,
    CurrencyOptions = [],
    SelectCurrency = "usd",
    AmountDisable = false,
    currencyDisable = false,
    className = "",
}) {

  const amountInputId = useId()

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className='w-1/2'>
                <label htmlFor={amountInputId}className='text-black/40 mb-2 inline-block'>{label}</label>

                <input
                id={amountInputId}
                    className='outline-none w-full bg-transparent py-1.5'
                    type="number"
                    placeholder='Enter Amount'
                    disabled={AmountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>

            <div className='w-1/2 flex flex-wrap justify-end text-right'>
                <p className='text-black/40 mb-2 w-full'>Currency type</p>

                <select
                    className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none'
                    value={SelectCurrency}
                    onChange={(e) => OnCurrencyChange && OnCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >
                    {CurrencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}
export default InputBox
