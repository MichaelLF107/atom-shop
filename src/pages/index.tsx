import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import swr from 'swr'
import Navbar from '@/components/Navbar/Navbar'
import ProductCard from '@/components/ProductCard/ProductCard'
import PurchaseModal from '@/components/PurchaseModal/PurchaseModal'
import { Product } from '@prisma/client'
import { useModalStore } from '@/store/ModalStore'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function Home() {
  const { data, error } = swr('/api/getProducts', fetcher)
  const { isOpen, openModal, closeModal } = useModalStore()
  let products = data?.products

  return (
    <>
      <Head>
        <title>Atom Shop</title>
        <meta name="description" content="E-commerce app example" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        {error && <div>Failed to load</div>}
        {!data && <div>Loading...</div>}
        {products && products.map((product: Product) => <ProductCard key={product.id} product={product} />)}
      </main>
      <PurchaseModal isOpen={isOpen} onClose={() => closeModal()} />
    </>
  )
}
