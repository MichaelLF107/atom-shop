import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface ModalStore {
    isOpen: boolean
    openModal: () => void
    closeModal: () => void
}

export const useModalStore = create<ModalStore>()(
    devtools(
        persist(
            (set) => ({
                isOpen: false,
                openModal: () => set({ isOpen: true }),
                closeModal: () => set({ isOpen: false }),
            }),
            {
                name: 'modal-storage',
            }
        )
    )
)