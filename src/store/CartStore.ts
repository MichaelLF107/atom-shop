import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { Product } from '.prisma/client'

interface CartStore {
    products: Product[]
    addProduct: (product: Product) => void
    removeProduct: (product: Product) => void
    clearCart: () => void
}

export const useCartStore = create<CartStore>()(
    devtools(
        persist(
            (set) => ({
                products: [],
                addProduct: (product) =>
                    set((state) => ({
                        products: [...state.products, product],
                    })),
                removeProduct: (product) =>
                    set((state) => ({
                        products: state.products.filter(
                            (p) => p.id !== product.id
                        ),
                    })),
                clearCart: () => set({ products: [] }),
            }),
            {
                name: 'cart-storage',
            }
        )
    )
)