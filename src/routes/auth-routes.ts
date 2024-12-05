import { Router } from 'express';
import { register, login } from '../controllers/auth.controller';
import { registerValidation, loginValidation } from '../Dtos/auth-dto';
import { validationResult } from 'express-validator';

const router = Router();

const validate = (req: any, res: any, next: any) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  next();
};

router.post('/register', registerValidation, validate, register);
router.post('/login', loginValidation, validate, login);

export default router;
