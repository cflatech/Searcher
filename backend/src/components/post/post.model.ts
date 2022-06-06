import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Post {
  @Field((type) => String)
  id: string;

  // @FieldはGraphQLスキーマのためのデコレータ
  // schemaファイル(今回はschema.gql)と対応
  @Field((type) => String)
  title: string;
}
