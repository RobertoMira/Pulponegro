

interface CardInputProps {
    fLabel: string;
    fType: 'text' | 'email' | 'tel' | 'textarea';
    variant: 'predeterminados' | 'textarea';
    fid?: string;
    fname: string;
    fplaceHolder: string;
    frequired: boolean;
    className?: string;
    bgColor: string;
}


export const CardInput = ({ fLabel, fType, variant, fid, fname, fplaceHolder, frequired, className = '', bgColor }: CardInputProps) => {


    const baseStyles = `${bgColor}/50 w-full  rounded-2xl`;

    const variantStyles = {
        predeterminados: 'h-30',
        textarea: 'h-60'
    }

    const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${className}`

  return (

    <label htmlFor="">{fLabel}</label>
    {(fType == (!'textarea')) ? (
        <input type={fType} id={fid} name={fname} placeholder={fplaceHolder} {frequired ? {required} : {none}} className={combinedStyles} />
    ) : (
        <textarea name={fname} id={fid} placeholder={fplaceHolder} {frequired ? {required} : {none}} className={combinedStyles} ></textarea>
    ))}
  )
}
