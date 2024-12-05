import User from '../entities/user-entity';

export const findUserByEmail = async (email: string) => {
  return await User.findOne({ where: { email } });
};

export const createUser = async (name: string, email: string, password: string, role: string) => {
  return await User.create({ name, email, password, role });
};

