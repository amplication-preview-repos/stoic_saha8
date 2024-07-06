import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { CommentUpdateManyWithoutPostsInput } from "./CommentUpdateManyWithoutPostsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PostUpdateInput = {
  category?: CategoryWhereUniqueInput | null;
  comments?: CommentUpdateManyWithoutPostsInput;
  content?: string | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
