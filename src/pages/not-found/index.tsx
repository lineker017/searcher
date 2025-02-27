import moon from "../../assets/moon.svg";
import vector191 from "../../assets/Vector 191.svg"
import astronaut from '../../assets/Astronaut.svg'
import fog from '../../assets/Fog1.svg'
import earth from '../../assets/earth.svg'
import stars from '../../assets/Stars.svg'
import arrow from '../../assets/arrow-back.svg'
import notFound from '../../assets/404.svg'
import pageNotFound from '../../assets/Page not found!.svg'
import { BackHome } from "./back-home";



export function NotFound() {

  return (
    <div className="w-full h-screen bg-[#1E1E1E]">
      <div className="relative">
      <img className="absolute h-[42.5rem]  w-[86.25rem]" src={stars} alt="" />

        <div className="relative flex justify-between">
          <img src={moon} alt="" />

          <div className="absolute top-70 left-150 flex flex-col items-center gap-4">
            <img className="w-[6.25rem]" src={notFound} alt="" />
            <img className="w-[20rem]" src={pageNotFound} alt="" />
          </div>

          <img src={astronaut} alt="" />
        </div>

        <div>
          <img className="absolute top-32 left-18 w-[25rem]" src={vector191} alt="" />

          <img className="absolute right-25 top-130" src={earth} alt="" />

          <img className="absolute top-60 right-0 w-[20.875rem]" src={fog} alt="" />
        </div>

        <div className="flex items-center gap-2.5 justify-center">
          <img className="w-[1.875rem]" src={arrow} alt="" />

          <BackHome />
        </div>
      </div>
    </div>
  )
}