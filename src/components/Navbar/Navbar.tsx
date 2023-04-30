import { useState } from 'react'
import styles from './styles.module.css'
import { useCartStore } from '@/store/CartStore'
import CartInfo from '../CartInfo/CartInfo'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

export default function Navbar() {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const { products } = useCartStore()

    function closeCart() {
        setIsCartOpen(false)
    }

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                Atom Shop
            </div>
            <div className={styles.cart} onClick={() => setIsCartOpen(!isCartOpen)}>
                <ShoppingCartIcon fontSize='inherit' />
                <span className={styles.cartCount}>
                    {products.length ? products.length : null}
                </span>
            </div>
            <CartInfo isCartOpen={isCartOpen} closeCart={closeCart} />
        </nav>
    )
}