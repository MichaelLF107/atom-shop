import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prisma'
import { Product } from '@prisma/client'

type Data = {
  products: Product[]
  success: boolean
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const products = await prisma.product.findMany({
    where: {
      stock: {
        gt: 0,
      },
    },
  })
  res.status(200).json({ products, success: true })
}
