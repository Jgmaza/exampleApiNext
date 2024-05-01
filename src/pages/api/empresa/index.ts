import { PrismaClient, mg001_empresas } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
import error from 'next/error';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<mg001_empresas[] | error>
) {
  try {
    if (req.method === 'GET') {
      const empresas = await prisma.mg001_empresas.findMany();
      return res.status(200).json(empresas);
    }
  } catch (error) {
    console.log('Error: ', error);
    return res.status(500).json(error as error);
  }
}
