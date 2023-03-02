const authRouter = express.Router();

authRouter.get('/login', ctrl);
authRouter.post('/register', ctrl);
