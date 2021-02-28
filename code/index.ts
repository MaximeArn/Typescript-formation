const saySomething = (something: string): void => {
  console.log(something);
};

//passing a function signature
type saySomethingParams2 = Parameters<(something: string) => void>;
//type saySomethingParams2 = [something: string]
