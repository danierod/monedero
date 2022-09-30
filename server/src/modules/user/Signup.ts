import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { User } from "../../entity/User";
import { hashPassword } from "../../utils/password";
import { SignupInput } from "./signup/SignupInput";

@Resolver(User)
export class SignupResolver {
  @Query(() => String, { name: "helloWorld" })
  async hello() {
    return "Hello world!";
  }

  @Mutation(() => User)
  async signup(
    @Arg("data") { email, firstName, lastName, password }: SignupInput
  ): Promise<User> {
    const hashedPassword = await hashPassword(password);

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
