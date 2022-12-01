import React from "react";

interface linkContext {
  link: string;
  setLink: (value: string) => void;
}

export const LinkContext = React.createContext<linkContext>(null);

export const MyContextProvider = (props) => {
  const { children } = props;
  const [link, setLink] = React.useState("lemoncode");

  return (
    <LinkContext.Provider value={{ link, setLink }}>
      {children}
    </LinkContext.Provider>
  );
};
