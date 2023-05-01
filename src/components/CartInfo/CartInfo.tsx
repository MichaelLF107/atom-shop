import styles from './styles.module.css'
import { useCartStore } from '@/store/CartStore'
import { getTotalPrice, convertPrice } from '@/lib/utils'
import { ClickAwayListener } from '@mui/base'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import { Button } from '@mui/material'
import { useModalStore } from '@/store/ModalStore'

interface CartInfoProps {
    isCartOpen: boolean;
    closeCart: () => void;
}

export default function CartInfo({ isCartOpen, closeCart }: CartInfoProps) {
    if (!isCartOpen) return null
    const { products, removeProduct } = useCartStore()
    const { openModal } = useModalStore()

    return (
        <ClickAwayListener onClickAway={closeCart}>
            <div className={styles.cartInfo}>
                {products.map((product) => (
                    <div key={product.id} className={styles.cartItem}>
                        <div className={styles.info}>
                            <img src={product.picture} alt={product.name} className={styles.image} />
                            <span className={styles.name}>{product.name}</span>
                        </div>
                        <div className={styles.productPrice}>
                            <span className={styles.price}>$ {convertPrice(product.price)}</span>
                            <span className={styles.quantity}>x {product.quantity}</span>
                            <span className={styles.remove} onClick={() => removeProduct(product)}>
                                <DeleteOutlineIcon fontSize='inherit' />
                            </span>
                        </div>
                    </div>
                ))}
                {products.length > 0 && (
                    <div className={styles.checkout}>
                        <div className={styles.total}>
                            <span>Total:</span>
                            <span>${getTotalPrice(products)}</span>
                        </div>
                        <Button variant="contained" color="primary" onClick={() => openModal()}>
                            Checkout
                        </Button>
                    </div>
                )}
                {products.length === 0 && <div className={styles.empty}>Your cart is empty 🍃</div>}
            </div>
        </ClickAwayListener>
    )
}