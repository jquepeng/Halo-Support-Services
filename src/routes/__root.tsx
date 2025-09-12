import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import {Navbar01} from "@/components/ui/shadcn-io/navbar-01";

const RootLayout = () => (
  <>
    <Navbar01/>
    <hr />
    <Outlet/>
    <TanStackRouterDevtools />
  </>
)

export const Route = createRootRoute({ component: RootLayout })