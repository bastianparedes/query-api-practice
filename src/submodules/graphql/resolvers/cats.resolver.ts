import { Resolver, Query } from '@nestjs/graphql';
import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Cat {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  age: number;
}

@Resolver()
export class CatsResolver {
  private cats = [
    { id: 1, name: 'Mittens', age: 2 },
    { id: 2, name: 'Whiskers', age: 5 },
  ];

  @Query(() => [Cat], { name: 'cats' })
  getCats() {
    return this.cats;
  }
}
