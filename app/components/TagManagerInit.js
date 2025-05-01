"use client";

import { useEffect } from "react";
import TagManager from "react-gtm-module";

export default function TagManagerInit() {
  useEffect(() => {
    TagManager.initialize({ gtmId: "GTM-JZX6ZPF" });
  }, []);

  return null;
}
