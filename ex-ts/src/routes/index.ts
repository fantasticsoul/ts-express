import {Router,Request,Response,NextFunction} from 'express';
var router = Router();

/* GET home page. */
router.get('/', function(req: Request, res: Response, next: NextFunction) {
  res.render('index', { title: 'Express gogogo2233322' });
});

export default router;
