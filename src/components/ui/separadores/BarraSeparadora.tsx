

interface BarraSeparadorProps {
    colorBarra?: string;
    wAncho?: string;
}



export const BarraSeparadora = ({ colorBarra = 'bg-lila', wAncho = 'w-2/3' }: BarraSeparadorProps) => {
  return (
    <div className={`${wAncho} h-2 rounded-2xl ${colorBarra}`} />
  )
}
