import { Field, ID, ObjectType } from "type-graphql";
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

  @Field({
    description: "This field is a concatenation of First and Last names",
  })
  fullName: string;

  @Field()
  @Column("text", { unique: true })
  email: string;

  @Column()
  password: string;
}
