import { create } from "zustand";

interface User {
  name: string;
  setName: (data: string) => void;
  balance: number;
  setBalance: (data: number) => void;
  referralCode: string;
  setReferralCode: (data: string) => void;
  deposit: number;
  setDeposit: (data: number) => void;
  userId: string;
  setUserId: (data: string) => void;
  withdrawal: number;
  setWithdrawal: (data: number) => void;
  bankName: string;
  setBankName: (data: string) => void;
  accountName: string;
  setAccountName: (data: string) => void;
  accountNumber: number;
  setAccountNumber: (data: number) => void;
}

export const useUser = create<User>()((set) => ({
  name: "",
  setName: (data: string) => set({ name: data }),
  balance: 0,
  setBalance: (data: number) => set({ balance: data }),
  referralCode: "",
  setReferralCode: (data: string) => set({ referralCode: data }),
  deposit: 0,
  setDeposit: (data: number) => set({ deposit: data }),
  userId: "",
  setUserId: (data: string) => set({ userId: data }),
  withdrawal: 0,
  setWithdrawal: (data: number) => set({ withdrawal: data }),
  bankName: "",
  setBankName: (data: string) => set({ bankName: data }),
  accountName: "",
  setAccountName: (data: string) => set({ accountName: data }),
  accountNumber: 0,
  setAccountNumber: (data: number) => set({ accountNumber: data }),
}));
