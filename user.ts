// user.ts

interface User {
  id: number;
  name: string;
}

export function createUser(id: number, name: string): User {
  return { id, name };
}

export function deleteUser(id: number): boolean {
  return true;
}
