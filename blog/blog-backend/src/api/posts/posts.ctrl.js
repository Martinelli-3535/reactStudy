let postId = 1;

const posts = [
    {
        id: 1,
        title: '제목',
        body: '내용'
    },
];

/** 포스트 작성
 * POST /api/posts
 * {title, body}
 */

exports.write = ctx => {
    const {title, body} = ctx.request.body;
    postId += 1;
    const post = {id: postId, title, body};
    posts.push(post);
    ctx.body = post;
}

/** 포스트 조회
 * GET /api/posts
 */

exports.list = ctx => {
    ctx.body = posts;
};

/** 특정 포스트 조회
 * GET /api/posts/:id
 */

exports.read = ctx => {
    const { id } = ctx.params;
    const post = posts.find(p => p.id.toString() === id);
    if (!post) {
        ctx.status = 404;
        ctx.body = {
            message: '포스트가 존재하지 않습니다.',
        };
        return;
    }
    ctx.body = post;
};

/** 특정 포스트 제거
 * DELETE /api/posts/:id
 */

exports.remove = ctx => {
    const { id } = ctx.params;
    const index = posts.findIndex(p => p.id.toString() === id);
    if (index === -1) {
        ctx.status = 404;
        ctx.body = {
            message: '포스트가 존재하지 않습니다.'
        };
        return;
    }
    posts.splice(index, 1);
    ctx.status = 204;
}

/** 포스트 수정
 * PUT /api/posts/:id
 */

exports.replace = ctx => {
    const { id } = ctx.params;
    const index = posts.findIndex (p => p.id.toString() === id);
    if (index === -1) {
        ctx.status = 404;
        ctx.body = {
            message: '포스트가 존재하지 않습니다.',
        }
        return;
    }
    /** PUT 메서드는 전체 포스트 정보를 입력해 데이터를 통째로 교체할 때 사용함
     * 즉 id 외의 모든 정보를 날리고, 객체를 새로 생성한다.
     */
    posts[index] = {
        id,
        ...ctx.request.body,
    };

    ctx.body = posts[index];
};

/** 포스트 수정(특정 필드 변경)
 * PATCH /api/posts/:id
 * {title, body}
 */

exports.update = ctx => {
    //PATCH 메서드는 특정 필드만 교체함.
    const { id } = ctx.params;
    const index = posts.findIndex (p => p.id.toString() === id);
    if (index === -1) {
        ctx.status = 404;
        ctx.body = {
            message: '포스트가 존재하지 않습니다.',
        }
        return;
    }
    posts[index] = {
        ...posts[index],
        ...ctx.request.body
    };
    ctx.body = posts[index];
}