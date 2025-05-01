// components/ClientWrapper.js
"use client";

import { useEffect } from "react";
import TagManager from "react-gtm-module";
import FloatingButton from "./FloatingButton";
import Header from "./Header";

export default function ClientWrapper({ children }) {
  useEffect(() => {
    TagManager.initialize({ gtmId: "GTM-JZX6ZPF" });
  }, []);

  return (
    <>
      <Header />
      <FloatingButton />
      {children}
    </>
  );
}
