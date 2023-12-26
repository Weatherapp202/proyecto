import { Request, Response } from "express";
import { prismaClient } from "../../routes/index.routes";

export const loginService = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  const userFounded = await prismaClient.user.findFirst({
    where: {
      name: username,
    },
  });

  if (userFounded) {
    userFounded.password === password &&
      res.send({
        message: "login success",
      });
  } else {
    res.status(404).json({ message: "login failed" });
  }
};
