const userRouter = express.Router();

userRouter.get('/', isLogged(), userCtrl.get);
userRouter.patch('/', isLogged(), userCtrl.path);
userRouter.delete('/', isLogged(), userCtrl.delete);
