interface IUser {
  name: string;
  height: number;
}

let jay: IUser = {
  name: "JAY",
  height: 175,
};

jay.name = "Miranda";
console.log("jay.name = ", jay.name);
