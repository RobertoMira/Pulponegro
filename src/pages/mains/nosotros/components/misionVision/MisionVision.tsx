






export default function MisionVision() {
  return (
    <div className="md:px-[5%] grid md:grid-cols-2 gap-10">
        <div id="mision" className="flex flex-col gap-4 bg-white w-full rounded-2xl border-lila 
            border-x-10 border-2 shadow-2xl p-10
        ">
            <div className="flex items-center gap-4">
                <span className="material-symbols-outlined"
                    style={{ color: '#99adda', fontSize: '70px' }}
                >eye_tracking</span>
                <h2 className="text-3xl font-extrabold tracking-widest text-shadow-lg">MISIÓN</h2>
            </div>
            <p className="text-lg md:text-2xl text-center font-bold text-shadow-xs">
                Acompañamos a personas, marcas y organizaciones a 
                construir historias auténticas que conectan con propósito.
                Con creatividad, estrategia y empatía, diseñamos soluciones de 
                comunicación que generan impacto y ayudan a alcanzar objetivos 
                reales, desde lo emocional hasta lo comercial.
            </p>
        </div>
        
        <div id="vision" className="flex flex-col gap-4 bg-white w-full rounded-2xl border-lila 
            border-x-10 border-2 shadow-2xl p-10
        ">
            <div className="flex items-center gap-4">
                <span className="material-symbols-outlined"
                    style={{ color: '#99adda', fontSize: '70px' }}
                >target</span>
                <h2 className="text-3xl font-extrabold tracking-widest text-shadow-lg">VISIÓN</h2>
            </div>
            <p className="text-lg md:text-2xl text-center font-bold text-shadow-xs">
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
