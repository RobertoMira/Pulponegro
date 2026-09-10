

interface CardInputProps {
    fLabel: string;
    fType: 'text' | 'email' | 'tel' | 'textarea';
    variant: 'predeterminados' | 'textarea';
    fid?: string;
    fname: string;
    fplaceHolder: string;
    frequired?: boolean;
    className?: string;
    bgColor: string;
    focusColor: string;
    borderColor?: string;
}


export const CardInput = ({ fLabel, fType, variant, fid, fname, fplaceHolder, frequired, className = '', bgColor, focusColor, borderColor }: CardInputProps) => {


    const baseStyles = `w-full rounded-2xl px-3 py-2 border border-gray-200
        transition-[background-color,border-color,outline,outline-offset] duration-80 ${bgColor} ${borderColor} ${focusColor}`;

    const variantStyles = {
        predeterminados: 'h-15',
        textarea: 'h-50 resize-none', 
    }

    const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${className}`

  return (

    <div className="flex flex-col gap-2 w-full h-fit">
        <label htmlFor="" className={`text-lila font-bold`}>{fLabel}</label>
        {(fType === 'textarea' || variant === 'textarea') ? (
            <textarea
                name={fname}
                id={fid}
                placeholder={fplaceHolder}
                required={frequired}
                className={combinedStyles}
            />
        ) : (
            <input
                type={fType}
                id={fid}
                name={fname}
                placeholder={fplaceHolder}
                required={frequired}
                className={combinedStyles}
            />
        )}
    </div>
  )
}
