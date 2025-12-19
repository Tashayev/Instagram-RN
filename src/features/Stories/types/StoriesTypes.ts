import { RootStackParamList } from '@/navigation/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
export type StoryTypes = {
  id: number;
  viewedBy: StoryViewedTypes[];
  userId: number;
  createdAt: number;
  expiresAt: number;
};

export interface StoriesState {
  stories: StoryTypes[];
  storiesContents: StoryContents[];
}

export type StoryViewedTypes = {
  id: number;
  storyId: number;
  userId: number;
  viewedAt: string;
};

export type StoryContents = {
  id: number;
  storyId: number;
  type: string;
  url: string;
  duration: number;
  createdAt: number;
  order: number;
};

export type StoriesNavProp = NativeStackNavigationProp<
  RootStackParamList,
  'StoryContent'
>;
