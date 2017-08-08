import {Application} from 'express';
import urlRoute from '../../config/url-route';

export function registerRoute(app: Application): void{
    for(let url in urlRoute){
        app.use(url, urlRoute[url].router)
    }
}
