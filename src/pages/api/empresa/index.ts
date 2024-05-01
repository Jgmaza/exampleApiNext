import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
  mg001_id: number;
  mg001_razon_social: string | null;
  mg001_nit: string | null;
  mg001_estado: number | null;
  mg001_direccion: string | null;
  mg001_telefono: string | null;
  mg001_celular: string | null;
  mg001_pais: number | null;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (req.method === "GET") {
    return prisma.mg001_empresas.findMany().then((empresas) => {
      return res.status(200).json(empresas as any);
    });
  }
}
