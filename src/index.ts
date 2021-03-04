type User = {
  age: string;
  name: string;
  email: string;
  adress: string;
  pseudo: string;
  password: string;
};

type OptionalUser = {
  [P in keyof User]?: P;
};
