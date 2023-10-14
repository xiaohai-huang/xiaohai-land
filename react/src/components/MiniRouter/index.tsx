import React, { createContext, useState, useContext } from "react";

const RouterContext = createContext({
  url: "/",
  navigate: (url: string) => {},
});

type MiniRouterProps = {
  children: React.ReactNode;
};

function MiniRouter({ children }: MiniRouterProps) {
  const [url, setUrl] = useState("/");
  const navigate = (newUrl: string) => {
    setUrl(newUrl);
  };
  return (
    <RouterContext.Provider value={{ url, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useNavigate() {
  return useContext(RouterContext).navigate;
}

export function useLocation() {
  return useContext(RouterContext).url;
}

type RouteProps = {
  path: string;
  element: JSX.Element;
};
export function Route({ path, element }: RouteProps) {
  const location = useLocation();
  return (
    <view
      style={{
        visibility: path === location ? "visible" : "hidden",
        position: "absolute",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
      }}
    >
      {element}
    </view>
  );
}

export default MiniRouter;
