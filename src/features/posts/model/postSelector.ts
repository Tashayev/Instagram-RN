import { RootState } from "@/app/store/store"

export const selectAllPosts = (state: RootState) => state.post.posts;

