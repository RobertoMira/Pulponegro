

interface BarraSeparadorProps {
    colorBarra: string;
}



export const BarraSeparadora = ({ colorBarra = 'bg-lila' }: BarraSeparadorProps) => {
  return (
    <div className={`w-5/6 h-2 rounded-2xl ${colorBarra}`} />
  )
}
