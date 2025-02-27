import { useNavigate } from "react-router-dom"

export function BackHome() {
  const navigate = useNavigate()

  return (
    <button
      onClick={() => navigate('/')} 
      className="z-10 text-white font-semibold text-2xl cursor-pointer">
        Ir para a página inicial
    </button>
  )
}