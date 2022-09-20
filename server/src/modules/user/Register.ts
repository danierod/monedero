import {
  Arg,
  FieldResolver,
  Mutation,
  Query,
  Resolver,
  Root,
} from "type-graphql";
import bcrypt from "bcryptjs";
import { User } from "../../entity/User";

@Resolver(User)
export class RegisterResolver {
  @Query(() => String, { name: "helloWorld" })
  async hello() {
    return "Hello world!";
  }

  @FieldResolver()
  async fullName(@Root() user: User) {
    return `${user.firstName} ${user.lastName}`;
  }

  @Mutation(() => User)
  async register(
    @Arg("firstName") firstName: string,
    @Arg("lastName") lastName: string,
    @Arg("email") email: string,
    @Arg("password") password: string
  ): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    }).save();

    console.log("USER: ", user);

    return user;
  }
}
