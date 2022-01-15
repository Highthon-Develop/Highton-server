import { CommentRepository } from "./comment";
import { DiaryRepository } from "./diary";
import { EmojiRepository } from "./emoji";
import { SchoolEventRepository } from "./schoolEvent";
import { SchoolRepository } from "./school";
import { UserRepository } from "./user";
import { RollingPaperRepository } from "./rollingPaper";

export const RepositoryList = [
  CommentRepository,
  DiaryRepository,
  EmojiRepository,
  SchoolEventRepository,
  SchoolRepository,
  UserRepository,
  RollingPaperRepository,
];

export * from "./comment";
export * from "./diary";
export * from "./emoji";
export * from "./schoolEvent";
export * from "./school";
export * from "./user";
export * from "./rollingPaper";
