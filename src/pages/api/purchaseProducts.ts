import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prisma'
import { Product } from '@prisma/client'

type Data = {
    products: Product[] | null
    message: string
    success: boolean
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const ids = JSON.parse(req.body) as number[]
    let products = [] as Product[]
    ids.forEach(async (id: number) => {
        const product = await prisma.product.findUnique({
            where: {
                id,
            },
        })
        if (!product) {
            return res.status(404).json({
                products: null,
                message: 'Product not found',
                success: false,
            })
        }
        if (product.stock === 0) {
            return res.status(400).json({
                products: null,
                message: 'Product out of stock',
                success: false,
            })
        }
        const updatedProduct = await prisma.product.update({
            where: {
                id,
            },
            data: {
                stock: product.stock - 1,
            },
        })
        products.push(updatedProduct)
    })
    res.status(200).json({
        products,
        message: 'Product purchased',
        success: true,
    })
}