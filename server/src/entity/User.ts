import { Field, ID, ObjectType, Root } from "type-graphql";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class User extends BaseEntity {
  @Field(() => ID, { description: "Auto generated identifier" })
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  firstName: string;

  @Field()
  @Column()
  lastName: string;

  @Field()
  fullName(@Root() user: User): string {
    return `${user.firstName} ${user.lastName}`;
  }

  @Field()
  @Column("text", { unique: true })
  email: string;

  @Column()
  password: string;
}
