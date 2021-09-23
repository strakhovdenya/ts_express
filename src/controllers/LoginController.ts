import {Request, Response, NextFunction} from "express";
import {post, get, controller, use, bodyValidator} from "./dicorators";


function logger(req: Request, res: Response, next: NextFunction) {
    console.log('request was made');
    next();
}

function logger2(req: Request, res: Response, next: NextFunction) {
    console.log('request was made2');
    next();
}

@controller('/auth')
class LoginController {

    @get('/login')
    @use(logger)
    @use(logger2)
    getLogin(req: Request, res: Response): void {
        res.send(`
            <form method="POST">
                <div>
                    <label>Email</label>
                    <input name="email" />
                </div>
                <div>
                    <label>Password</label>
                    <input name="password" type="password" />
                </div>
                <button>Submit</button>
            </form> `);
    };

    @post('/login')
    @bodyValidator('email', 'password')
    postLogin(req: Request, res: Response) {
        const {email, password} = req.body;
        if (email === 'my@gmail.com' && password === 'pas') {
            req.session = {loggedIn: true};
            res.redirect('/')
        } else {
            res.send('invalid email or password');
        }
    }

    @get('/logout')
    getLogout(req: Request, res: Response) {
        req.session = undefined;
        res.redirect('/')
    }
}