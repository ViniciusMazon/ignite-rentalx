interface ICreateUserDTO {
  name: string;
  email: string;
  password: string;
  // eslint-disable-next-line camelcase
  driver_license: string;
}

export { ICreateUserDTO };
