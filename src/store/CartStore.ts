import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { Product as DBProduct } from '@prisma/client'

interface Product extends DBProduct {
    quantity: number
}

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
                    set((state) => {
                        const productIndex = state.products.findIndex(
                            (p) => p.id === product.id
                        )
                        if (productIndex === -1) {
                            return {
                                products: [
                                    ...state.products,
                                    { ...product, quantity: 1 },
                                ],
                            }
                        }
                        const newProducts = [...state.products]
                        newProducts[productIndex].quantity += 1
                        return { products: newProducts }
                    }),
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