"use client";

import { useState, useEffect } from "react";
import CreateServerModal from "@components/modals/create-server-modal";

export default function ModalProvider() {
  const [mounted, setMounted] = useState(false);

  if (!mounted) return null;

  useEffect(() => {
    setMounted(true);
  }, []);

  return <CreateServerModal />;
}
