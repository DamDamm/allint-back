const userRouter = express.Router();

userRouter.get('/', isLogged(), userController.get);
userRouter.patch('/', isLogged(), userController.path);
userRouter.delete('/', isLogged(), useruserController.delete);
