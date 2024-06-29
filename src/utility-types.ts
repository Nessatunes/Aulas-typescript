// 3 opçoes

type User = {
id: number;
username: string;
password: string;
}
const user: User = {
  id: 1,
  username:'Vanessa',
  password:'type123',
}
type PartialUser = Partial<User>; // parcial

type NewUser = Omit<User, 'id'>; // omit o que quizer

type SearchUser = Pick<User, 'username'>; // busca só o que quer
