import { addUser, deleteUser, getAllUsers, getUserByID, updateUser } from "../../controllers/user/userController";
import { router } from "../index.routes";

// metodos

router.get("/user", getAllUsers);
router.get("/user/:id", getUserByID);
router.patch("/user/updateUser", updateUser);
router.post("/user/newUser", addUser);
router.delete("/user/deleteUser", deleteUser);

export default router;
