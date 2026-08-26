import PulpoHero from "../../../../assets/images/pulpoGrande.png";



export default function Hero() {
  return (
    <>
        <div className="relative w-full flex gap-10 py-20 px-5 md:px-[20%] mx-auto
            h-[calc(100vh-160px)] items-center justify-between
        ">
            <div className="flex flex-col gap-4 justify-start items-start">
                <h1 className="text-4xl font-extrabold">EN PULPO NEGRO</h1>
                <p className="text-5xl font-extrabold text-lila">TODO COMUNICA</p>
            </div>
            <div>
                <img src={PulpoHero} alt="Pulpo Hero" className="w-120 h-auto absolute top-5 right-50 -z-10" />
            </div>
        </div>
    </>
  )
}
