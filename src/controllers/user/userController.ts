import { Request, Response } from "express";
import { prismaClient } from "../../routes/index.routes";
import { errorMessage, successfullyMessage } from "../functions/functions";

export const getAllUsers = async (_req: Request, res: Response) => {
  try {
    const users = await prismaClient.user.findMany({
      include: {
        permissions: true,
      },
    });
    res.send(users);
  } catch (error) {
    res.status(404).send(error);
  }
};

export const getUserByID = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const userFounded = await prismaClient.user.findFirst({
      where: {
        id: Number(id),
      },
      include: {
        permissions: true,
      },
    });
    res.send(userFounded);
  } catch (error) {
    errorMessage(res, error);
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const data = req.body;

    const { id } = req.params;

    const userUpdated = await prismaClient.user.update({
      where: {
        id: Number(id),
      },
      data,
    });
    successfullyMessage(res, "User successfully updated", userUpdated);
  } catch (error) {
    errorMessage(res, error);
  }
};

export const addUser = async (req: Request, res: Response) => {
  const data = req.body;
  try {
    const newUser = await prismaClient.user.create({
      data,
      include: {
        permissions: true,
      },
    });
    res.send(newUser);
  } catch (error) {
    errorMessage(res, error);
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.body;

  try {
    const userDeleted = await prismaClient.user.delete({
      where: { id },
    });

    successfullyMessage(res, "User successfully deleted", userDeleted);
  } catch (error) {
    errorMessage(res, error);
  }
};
