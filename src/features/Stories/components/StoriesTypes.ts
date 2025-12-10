type StoryTypes = {
  name: string;
  id: number;
  avatar: string;
  viewed: boolean;
};
export interface StoriesTypes {
  stories: StoryTypes[];
  size: number;
}
