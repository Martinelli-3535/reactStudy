import Joi from "Joi";
import User from "../../models/user";

/* 
    POST /api/auth/register
    {
        username: 'Jungwoo',
        password: dn1122
    }
*/
export const register = async ctx => {
    //Request Body 검증하기
    const schema = Joi.object().keys({
        username: Joi.string()
        .alphanum()
        .min(3)
        .max(20)
        .required(),
        password: Joi.string().required()
    });
    const result = schema.validate(ctx.request.body);
    if (result.error) {
        ctx.status = 400;
        ctx.body = result.error;
        return;
    }

    const { username, password } = ctx.request.body;
    try {
        //username = already exist?
        const exists = await User.findByUsername(username);
        if(exists) {
            ctx.status = 409;
            return;
        }

        const user = new User({
            username,
        });
        await user.setPassword(password);
        await user.save(); // 데이터베이스에 저장

        ctx.body = user.serialize();

            const token = user.generateToken();
            ctx.cookies.set('access_token', token, {
                maxAge: 1000 * 60 * 60 * 24 * 7, // 7일
                httpOnly: true,
            });
    } catch (e) {
        ctx.throw(500, e);
    }
};

/*
    POST /api/auth/login
    {
        username: 'Jungwoo',
        password: 'dn1122'
    }
*/
export const login = async ctx => {
    const { username, password } = ctx.request.body;

    if ( !username || !password ) {
        ctx.status = 401; // Unauthorized
        return;
    }

    try {
        const user = await User.findByUsername(username);
        //계정이 존재하지 않으면 에러 처리
        if (!user) {
            ctx.status = 401;
            return;
        }
        const valid = await user.checkPassword(password);
        if (!valid) {
            ctx.status = 401;
            return;
        }
        ctx.body = user.serialize();
        const token = user.generateToken();
            ctx.cookies.set('access_token', token, {
                maxAge: 1000 * 60 * 60 * 24 * 7, // 7일
                httpOnly: true,
            });
    } catch (e) {
        ctx.throw(500, e);
    }
};

export const check = async ctx => {
    const { user } = ctx.state;
    if (!user) {
        ctx.status = 401;
        return;
    }
    ctx.body = user;
};

export const logout = async ctx => {
    ctx.cookies.set('access_token');
    ctx.status = 204; // No Content
}