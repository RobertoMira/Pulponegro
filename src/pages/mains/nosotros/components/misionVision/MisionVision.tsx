






export default function MisionVision() {
  return (
    <div className="md:px-[5%] grid md:grid-cols-2 gap-10">
        <div className="flex flex-col gap-4 bg-lila w-full rounded-2xl p-10">
            <div className="flex items-center gap-4">
                <h2 className="text-3xl font-extrabold">MISIÓN</h2>
                <img src="sd" alt="sd" />    
            </div>
            <p className="text-lg md:text-2xl text-center">
                En Pulpo Negro, creemos en el poder de las ideas para transformar 
                realidades. Acompañamos a personas, marcas y organizaciones a 
                construir historias auténticas que conectan con propósito.
                Con creatividad, estrategia y empatía, diseñamos soluciones de 
                comunicación que generan impacto y ayudan a alcanzar objetivos 
                reales, desde lo emocional hasta lo comercial.
            </p>
        </div>
        
        <div className="flex flex-col gap-4 bg-lila w-full rounded-2xl p-10">
            <div className="flex items-center gap-4">
                <h2 className="text-3xl font-extrabold">VISIÓN</h2>
                <img src="sd" alt="sd" />    
            </div>
            <p className="text-lg md:text-2xl text-center">
                Ser una agencia reconocida por poner lo humano en el centro de 
                cada historia. Buscamos inspirar y colaborar con quienes desean 
                transformar su entorno a través de la comunicación, siendo un 
                puente entre lo que una marca sueña y lo que el mundo necesita 
                escuchar.
            </p>
        </div>
    </div>
  )
}
