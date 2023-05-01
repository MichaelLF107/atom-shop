import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { Product } from '@prisma/client'

interface BuyNowStore {
    product: Product | null
    setProduct: (product: Product) => void
    clearProduct: () => void
}

export const useBuyNowStore = create<BuyNowStore>()(
    devtools(
        persist(
            (set) => ({
                product: null,
                setProduct: (product) => set({ product }),
                clearProduct: () => set({ product: null }),
            }),
            {
                name: 'buynow-storage',
            }
        )
    )
)