import userRouter from '../src/routes/users';
import indexRouter from '../src/routes/index';

const conf = {
    '/':{router:indexRouter},
    '/api':{router:userRouter}
};

export default conf;