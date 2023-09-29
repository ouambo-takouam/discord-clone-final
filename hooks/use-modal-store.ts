import { Server } from "@prisma/client";
import { create } from "zustand";

export type ModalType = "createServer" | "invite" | "editServer" | "members";

interface modalData {
  server?: Server;
}

interface ModalStore {
  type: ModalType | null;
  data: modalData;
  isOpen: boolean;
  onOpen: (type: ModalType, data?: modalData) => void;
  onClose: () => void;
}

export const useModal = create<ModalStore>((set) => ({
  type: null,
  data: {},
  isOpen: false,
  onOpen: (type, data = {}) => set({ type, data, isOpen: true }),
  onClose: () => set({ type: null, isOpen: false }),
}));
