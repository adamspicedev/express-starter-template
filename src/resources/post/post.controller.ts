import { Router, Request, Response, NextFunction } from 'express';
import Controller from '@/utils/interfaces/controller.interface';
import HttpException from '@/utils/exceptions/http.exception';
import validationMiddleware from '@/middleware/validation.middleware';
import validate from '@/resources/post/post.validation';
import Post from '@/resources/post/post.interface';
import PostService from '@/resources/post/post.service';
import authenticatedMiddleware from '@/middleware/authenticated.middleware';

class PostController implements Controller {
  public path = '/posts';
  public router = Router();
  private PostService = new PostService();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    // this.router.get(this.path, this.getAllPosts);
    // this.router.get(`${this.path}/:id`, this.getPostById);
    this.router.post(
      `${this.path}`,
      validationMiddleware(validate.create),
      authenticatedMiddleware(),
      this.create
    );
    // this.router.put(
    //   `${this.path}/:id`,
    //   validationMiddleware(validate),
    //   this.updatePost
    // );
    // this.router.delete(`${this.path}/:id`, this.deletePost);
  }

  private create = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> => {
    try {
      const { title, body } = req.body;
      const post = await this.PostService.create(title, body);

      return res.status(201).json({ post });
    } catch (e) {
      next(new HttpException(400, 'Cannot create post'));
    }
  };
}

export default PostController;
