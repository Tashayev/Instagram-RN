type StoryViewedUsers = {
  userId: number;
  viewedAt: number;
};
export type StoryTypes = {
  id: number;
  viewedBy: StoryViewedUsers[];
  userId: number;
  createdAt: number;
  expiresAt: number;
};

export interface StoriesState {
  stories: StoryTypes[];
}
