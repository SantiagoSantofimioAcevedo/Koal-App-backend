import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const roleValidator = (roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      const authHeader = req.headers.authorization;
      if (!authHeader) throw new Error('Authorization header is missing');

      const token = authHeader.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET || 'defaultSecretKey') as any;

      if (!roles.includes(decoded.role)) {
        throw new Error('Access denied: insufficient permissions');
      }

      next();
    } catch (error) {
      const message = (error instanceof Error) ? error.message : 'An unknown error occurred';
      res.status(403).json({ error: message });
    }
  };
};

