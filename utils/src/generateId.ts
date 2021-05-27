import { customAlphabet } from 'nanoid';

export const generateId = customAlphabet('1234567890abcdefghijklmnopqrstuvwxyz', 10);

export const generatePassword = () => {
  return [
    customAlphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 1)(),
    customAlphabet('1234567890abcdefghijklmnopqrstuvwxyz', 6)(),
    customAlphabet('1234567890', 1)(),
  ].join('');
};