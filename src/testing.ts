export interface User<EmailType> {
  username: string;
  email: EmailType;
}

let getUsers: (email: string) => User<string>;

getUsers = (email: string) => {
  return {
    username: "Arsalan",
    email,
  };
};

const user: User<string> = getUsers("arslan2018@namal.edu.pk");
console.log(user);

//hello comments

function getNewPromise(): Promise<string> {
  return new Promise<string>((resolve) => resolve("resolved"));
}

export async function test() {
  const data = await getNewPromise();
  console.log(data);
}

test();
