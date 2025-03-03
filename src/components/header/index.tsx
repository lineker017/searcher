import { ModeToggle } from "./mode-toggle";
import { Menu } from "./menu";

export function Header() {
  return (
    <div className="flex items-center justify-between px-4 py-3 border-b-[1px]">
      <Menu />

      <ModeToggle />
    </div>
  )
}