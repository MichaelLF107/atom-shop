import { useState } from 'react'
import styles from './styles.module.css'
import { useCartStore } from '@/store/CartStore'
import { useBuyNowStore } from '@/store/BuyNowStore'
import { getTotalPrice, convertPrice } from '@/lib/utils'
import Modal from '../Modal/Modal'
import { Button } from '@mui/material'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'

interface PurchaseModalProps {
    isOpen: boolean;
    onClose: () => void;
}

function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.title}>
                <ShoppingBasketIcon fontSize='inherit' />
                Checkout
            </div>
            <hr className={styles.divider} />
        </div>
    )
}

export default function PurchaseModal({ isOpen, onClose }: PurchaseModalProps) {
    const [message, setMessage] = useState('')
    const { products, clearCart } = useCartStore()
    const { product, clearProduct } = useBuyNowStore()

    function closeModal() {
        clearProduct()
        onClose()
    }

    async function handlePurchase() {
        if (product) {
            await fetch('/api/purchaseProducts', {
                method: 'POST',
                body: JSON.stringify([product.id]),
            })
                .then((res) => res.json())
                .then((data) => {
                    if(data.success) {
                        setMessage('Your purchase was successful!')
                        setTimeout(() => {
                            setMessage('')
                            closeModal()
                        }, 3000)
                    }
                })
        } else {
            await fetch('/api/purchaseProducts', {
                method: 'POST',
                body: JSON.stringify(products.map((product) => product.id)),
            })
                .then((res) => res.json())
                .then((data) => {
                    if(data.success) {
                        setMessage('Your purchase was successful!')
                        setTimeout(() => {
                            setMessage('')
                            clearCart()
                            closeModal()
                        }, 3000)
                    }
                })
        }
    }

    function Footer() {
        if (message !== '') return null
        return (
            <div className={styles.footer}>
                <Button variant="contained" color="primary" onClick={() => handlePurchase()}>
                    Buy
                </Button>
                <Button variant="outlined" color="primary" onClick={() => closeModal()}>
                    Cancel
                </Button>
            </div>
        )
    }

    return (
        <Modal
            isOpen={isOpen}
            onClose={() => closeModal()}
            header={<Header />}
            footer={<Footer />}
        >
            <div className={styles.purchaseModal}>
                {message !== '' ? (
                    <div className={styles.message}>
                        <CheckCircleOutlineIcon fontSize='inherit' className={styles.check} />
                        {message}
                    </div>
                ) : product ? (
                    <div key={product.id} className={styles.cartItem}>
                        <div className={styles.info}>
                            <img src={product.picture} alt={product.name} className={styles.image} />
                            <span className={styles.name}>{product.name}</span>
                        </div>
                        <div className={styles.productPrice}>
                            <span className={styles.price}>$ {convertPrice(product.price)}</span>
                        </div>
                    </div>
                ) : (
                    <div className={styles.cart}>
                        {products.map((product) => (
                            <div key={product.id} className={styles.productList}>
                                <div key={product.id} className={styles.cartItem}>
                                    <div className={styles.info}>
                                        <img src={product.picture} alt={product.name} className={styles.image} />
                                        <span className={styles.name}>{product.name}</span>
                                    </div>
                                    <div className={styles.productPrice}>
                                        <span className={styles.price}>$ {convertPrice(product.price)}</span>
                                        <span className={styles.quantity}>x {product.quantity}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </Modal>
    )
}