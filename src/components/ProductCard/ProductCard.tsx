import styles from './styles.module.css'
import { Product } from '@prisma/client'
import { convertPrice } from '@/lib/utils'
import { Button } from '@mui/material'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'

export default function ProductCard({ product }: { product: Product }) {
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
                <Button variant="contained" color="primary">
                    <AddShoppingCartIcon fontSize='inherit' />
                    Add to cart
                </Button>
                <Button variant="outlined" color="primary">$ Buy now</Button>
            </div>
        </div>
    )
}