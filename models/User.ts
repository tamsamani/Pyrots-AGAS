import { PrismaModel } from "./_utils";

async function getUsers (userModel, options) {
  return await userModel.findMany();
}

async function createUser(userModel, userData, options) {
  return await userModel.create({ data: userData });
}

const User = new PrismaModel("user", {
  all : getUsers,
  create: createUser
});

export default User;