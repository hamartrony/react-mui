import { Api } from "../axios";

interface IUser {
  id: "string";
  name: "string";
  email: "string";
  password: "string";
  cpf: "string";
  phone: "string";
  birthday: "string";
  description: string;
  isSeller: boolean;
  isActive: boolean;
  cep: string;
  state: string;
  city: string;
  street: string;
  number: string;
  complement: string;
}

const UserGet = async (id: string) => {
  await Api.get(`/users/${id}`).then((response) => {
    console.log(response);
  });
};

const UserCreate = async (data: IUser) => {
  let newData = {
    name: data.name,
    email: data.email,
    password: data.password,
    cpf: data.cpf,
    phone: data.phone,
    birthday: data.birthday,
    description: data.description,
    address: {
      cep: data.cep,
      state: data.state,
      city: data.city,
      street: data.street,
      number: data.number,
      description: data.complement,
    },
  };
  console.log(newData);
  await Api.post(`/users`, newData).then((response) => {
    console.log(response);
  });
};

const UserUpdate = async (id: string, data: IUser) => {
  await Api.patch(`/users/${id}, data`).then((response) => {
    console.log(response);
  });
};
const UserDelete = async (id: string) => {
  await Api.delete(`/users/${id}`).then((response) => {
    console.log(response);
  });
};

export const UserService = {
  UserGet,
  UserCreate,
  UserDelete,
  UserUpdate,
};
