import type { ReactNode } from "react";

import Background from "../../components/background/Background";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className="absolute z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-3/4">{children}</div>
      <Background />
    </>
  );
};

export default Layout;
