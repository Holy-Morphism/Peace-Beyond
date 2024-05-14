import { getSession } from '@/api/auth';
import { create } from 'zustand'

type Role = {
  role: string
  setRole: () => void
}

const useRole = create<Role>((set) => ({
    role: "guest",
    setRole: async() => {
        const res = await getSession();
        if (res.status === "ok") {
            set((state) => ({ role: res.role }))
        }
    },
}));

