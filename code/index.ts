const saySomething = (something: string): string => something;

let message: ReturnType<typeof saySomething>;
//let message: string

message = saySomething("hello");
