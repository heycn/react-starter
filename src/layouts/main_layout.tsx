import { Link, Outlet } from 'react-router-dom'

export const MainLayout: React.FC = () => {
  return (
    <div>
      <nav className="sticky top-0 z-30 row-start-1 p-4 shadow backdrop-blur">
        <ul className="flex flex-nowrap gap-x-8">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/2">Page 2</Link>
          </li>
          <li>
            <Link to="/3">Page 3</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}
