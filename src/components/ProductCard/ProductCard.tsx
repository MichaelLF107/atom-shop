import styles from './styles.module.css'
import { Product } from '@prisma/client'
import { convertPrice } from '@/lib/utils'
import { Button } from '@mui/material'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import { useCartStore } from '@/store/CartStore'
import { useModalStore } from '@/store/ModalStore'
import { useBuyNowStore } from '@/store/BuyNowStore'

export default function ProductCard({ product }: { product: Product }) {
    const { addProduct } = useCartStore()
    const { openModal } = useModalStore()
    const { setProduct } = useBuyNowStore()

    function handleBuyNow() {
        setProduct(product)
        openModal()
    }

    return (
        <div className={styles.card}>
            <div className={styles.image}>
                <img src={product.picture} alt={product.name} />
            </div>
            <div className={styles.content}>
                <span className={styles.name}>{product.name}</span>
            </div>
            <div className={styles.description}>
                {product.description}
            </div>
            <div className={styles.price}>
                $ {convertPrice(product.price)}
            </div>
            <div className={styles.actions}>
                <Button variant="contained" color="primary" onClick={() => addProduct({...product, quantity: 1 })}>
                    <AddShoppingCartIcon fontSize='inherit' />
                    Add to cart
                </Button>
                <Button variant="outlined" color="primary" onClick={() => handleBuyNow()}>
                    $ Buy now
                </Button>
            </div>
        </div>
    )
}