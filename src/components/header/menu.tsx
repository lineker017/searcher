import { useNavigate, useLocation } from "react-router-dom"

const MENU_LIST = [
  { path: '/', label: 'Home' },
  { path: '/licitacoes', label: 'Licitações' }
]

export function Menu() {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <nav>
      <ul className="flex items-center gap-4">
        {MENU_LIST.map((menu) => {
          const isActive = location.pathname === menu.path

          return (
            <li key={menu.path}>
              <a
                className={`cursor-pointer transition-colors ${
                  isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
                onClick={() => navigate(menu.path)}
              >
                {menu.label}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
