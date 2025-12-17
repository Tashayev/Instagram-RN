
export type StoryTypes = {
  id: number;
  viewedBy: StoryViewedTypes[];
  userId: number;
  createdAt: number;
  expiresAt: number;
};

export interface StoriesState {
  stories: StoryTypes[];
}

export type StoryViewedTypes = {
    id: number,
    storyId: number,
    userId: number,
    viewedAt: string,
  }