import { Arg, Query, Resolver } from "type-graphql";

import { User } from "../../entity/User";
import { hashPassword } from "../../utils/password";

@Resolver(User)
export class LoginResolver {
  @Query(() => User)
  async login(
    @Arg("email") email: string,
    @Arg("password") password: string
  ): Promise<User | null> {
    const user = await User.findOneBy({
      email,
    });

    const hashedPassword = await hashPassword(password);

    if (user?.password !== hashedPassword) {
      return null;
    }

    return user;
  }
}
