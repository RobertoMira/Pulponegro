

interface PrimaryButtonProps {
    texto: string;
    btnColor: string;
}


export const PrimaryButton = ({ texto, btnColor }: PrimaryButtonProps) => {
  return (
    <>
      <p>{texto}</p>
      <p>{btnColor}</p>
    </>
  )
}
