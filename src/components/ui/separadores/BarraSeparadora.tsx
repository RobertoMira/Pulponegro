

interface BarraSeparadorProps {
    colorBarra?: string;
    wAncho?: string;
    rBordes?: string;
}



export const BarraSeparadora = ({ colorBarra = 'bg-lila', wAncho = 'w-2/3', rBordes = 'rounded-2xl' }: BarraSeparadorProps) => {
  return (
    <div className={`${wAncho} h-2 ${rBordes}  ${colorBarra}`} />
  )
}
