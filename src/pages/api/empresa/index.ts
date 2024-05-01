import { Prisma, PrismaClient } from '@prisma/client'

import type { mg001_empresas } from '@prisma/client'; // Import the Mg001Empresas type

const prisma = new PrismaClient()

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<mg001_empresas[]> // Change the response type to an array of mg001_empresas
) {
  if (req.method === "GET") {
    return prisma.mg001_empresas.findMany().then((empresas) => {
      return res.status(200).json(empresas);
    }).catch((error: Prisma.PrismaClientKnownRequestError) => {
      console.error(error);
      return res.status(500).json([{ mg001_id: 0, mg001_razon_social: null, mg001_nit: null, mg001_estado: null, mg001_direccion: null, mg001_telefono: null, mg001_celular: null, mg001_pais: null }]);
    });
  }
}
