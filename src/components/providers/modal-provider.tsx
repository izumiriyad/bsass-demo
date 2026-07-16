"use client";

import { createContext, useCallback, useContext, useState, type ReactNode } from "react";
import { RegisterModal } from "@/components/auth/register-modal";
import { LoginModal } from "@/components/auth/login-modal";
import { DepositModal } from "@/components/auth/deposit-modal";
import { WithdrawModal } from "@/components/auth/withdraw-modal";

type ModalType = "login" | "register" | "deposit" | "withdraw" | null;

interface ModalContextValue {
  modal: ModalType;
  openModal: (type: Exclude<ModalType, null>) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextValue | null>(null);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [modal, setModal] = useState<ModalType>(null);

  const openModal = useCallback((type: Exclude<ModalType, null>) => setModal(type), []);
  const closeModal = useCallback(() => setModal(null), []);

  return (
    <ModalContext.Provider value={{ modal, openModal, closeModal }}>
      {children}
      {modal === "register" && <RegisterModal />}
      {modal === "login" && <LoginModal />}
      {modal === "deposit" && <DepositModal />}
      {modal === "withdraw" && <WithdrawModal />}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("useModal must be used within ModalProvider");
  return ctx;
}
