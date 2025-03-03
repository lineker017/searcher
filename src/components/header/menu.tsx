import { useNavigate } from "react-router-dom"

const MENU_LIST = [
  {
    path: '/', label: 'Home'
  },
  {
    path: '/licitacoes', label: 'Licitações'
  }
]

export function Menu() {
  const navigate = useNavigate()

  return (
    <nav>
      <ul className="flex items-center gap-4">
        {MENU_LIST.map((menu) => (
          <li key={menu.path}>
            <a 
              className="cursor-pointer text-sm font-medium"
              onClick={() => navigate(menu.path)}
            >
              {menu.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}