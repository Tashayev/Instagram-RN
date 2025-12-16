export const size = 81;

export const users = [
  {
    id: 1,
    username: "mister",
    fullName: "John Walker",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    bio: "Traveler • Photographer • Coffee addict",
    website: "https://johnwalker.dev",
    followers: 1023,
    following: 540,
    posts: 12,
    isVerified: true,
  },
  {
    id: 2,
    username: "mister2",
    fullName: "Arsen K",
    avatar: "https://randomuser.me/api/portraits/men/76.jpg",
    bio: "Frontend Developer | React Native",
    website: '',
    followers: 221,
    following: 180,
    posts: 8,
    isVerified: false,
  },
  {
    id: 3,
    username: "mister9845",
    fullName: "Daniel Lee",
    avatar: "https://randomuser.me/api/portraits/men/18.jpg",
    bio: "Fitness • Motivation • Lifestyle",
    followers: 600,
    following: 390,
    posts: 23,
    isVerified: false,
  },
  {
    id: 4,
    username: "mister25",
    fullName: "Alex Kim",
    avatar: "https://randomuser.me/api/portraits/men/44.jpg",
    bio: "Tech & gadgets reviews.",
    followers: 3200,
    following: 12,
    posts: 54,
    isVerified: true,
  },
  {
    id: 5,
    username: "mister894",
    fullName: "Martin Hughes",
    avatar: "https://randomuser.me/api/portraits/men/91.jpg",
    bio: "Life is short, smile while you still have teeth 😁",
    followers: 98,
    following: 120,
    posts: 3,
    isVerified: false,
  },
];

export const stories = [
  {
    id: 2001,
    userId: 1,
    createdAt: 1733800000000,
    expiresAt: 1733886400000, // 24 часа спустя
    viewedBy: [
      // userId + время просмотра
      // { userId: 3, viewedAt: 1733802000000 },
    ],
  },
  {
    id: 2002,
    userId: 2,
    createdAt: 1733810000000,
    expiresAt: 1733896400000,
    viewedBy: [],
  },
  {
    id: 2003,
    userId: 4,
    createdAt: 1733825000000,
    expiresAt: 1733911400000,
    viewedBy: [],
  },
  {
    id: 2004,
    userId: 3,
    createdAt: 1733828000000,
    expiresAt: 1733914400000,
    viewedBy: [],
  },
  {
    id: 2005,
    userId: 5,
    createdAt: 1733831000000,
    expiresAt: 1733917400000,
    viewedBy: [],
  },
];

export const storyViews = [
  {
    id: 9001,
    storyId: 2001,
    userId: 3,
    viewedAt: "2025-01-01T12:01:00Z",
  },
  {
    id: 9002,
    storyId: 2001,
    userId: 5,
    viewedAt: "2025-01-01T12:03:00Z",
  },
  {
    id: 9003,
    storyId: 2002,
    userId: 1,
    viewedAt: "2025-01-02T13:22:00Z",
  },
  {
    id: 9004,
    storyId: 2003,
    userId: 2,
    viewedAt: "2025-01-03T10:18:00Z",
  },
];

export const storyContents = [
  // Stories for user 1
  {
    id: 4001,
    storyId: 2001,
    type: "image",
    url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    duration: 5000,
    createdAt: 1733800000000,
    order: 1,
  },
  {
    id: 4002,
    storyId: 2001,
    type: "video",
    url: "https://videos.pexels.com/video-files/855166/855166-hd_1280_720_25fps.mp4",
    duration: 14000,
    createdAt: 1733800100000,
    order: 2,
  },

  // Stories for user 2
  {
    id: 4003,
    storyId: 2002,
    type: "image",
    url: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
    duration: 5000,
    createdAt: 1733810000000,
    order: 1,
  },
  {
    id: 4004,
    storyId: 2002,
    type: "video",
    url: "https://videos.pexels.com/video-files/3182833/3182833-uhd_2560_1440_30fps.mp4",
    duration: 12000,
    createdAt: 1733810100000,
    order: 2,
  },

  // Stories for user 4
  {
    id: 4005,
    storyId: 2003,
    type: "image",
    url: "https://images.unsplash.com/photo-1554151228-14d9def656e4",
    duration: 5000,
    createdAt: 1733825000000,
    order: 1,
  },

  // Stories for user 3
  {
    id: 4006,
    storyId: 2004,
    type: "video",
    url: "https://videos.pexels.com/video-files/2795744/2795744-hd_1280_720_25fps.mp4",
    duration: 10000,
    createdAt: 1733828000000,
    order: 1,
  },

  // Stories for user 5
  {
    id: 4007,
    storyId: 2005,
    type: "image",
    url: "https://images.unsplash.com/photo-1541717875227-5f61ffcec0c7",
    duration: 5000,
    createdAt: 1733831000000,
    order: 1,
  },
  {
    id: 4008,
    storyId: 2005,
    type: "image",
    url: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    duration: 5000,
    createdAt: 1733831100000,
    order: 2,
  },
];

export const postsData = [
  // ---------- 1. Фото-пост с каруселью ----------
  {
    id: 1001,
    userId: 1,
    media: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      },
    ],
    description: "Chilling in LA ☀️ #travel #lifeisgood",
    location: "Los Angeles, USA",
    likes: 421,
    createdAt: "2025-01-01T12:00:00Z",
    taggedUsers: [3],
  },

  // ---------- 2. Видео-пост (как Reels) ----------
  {
    id: 1002,
    userId: 2,
    media: [
      {
        type: "video",
        url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        thumbnail: "https://i.ytimg.com/vi/aqz-KE-bpKQ/maxresdefault.jpg",
        duration: 13,
      },
    ],
    description: "Workout routine 🔥🔥 #fitness #motivation",
    location: "Almaty",
    likes: 138,
    createdAt: "2025-01-02T12:00:00Z",
    taggedUsers: [],
  },

  // ---------- 3. Обычное фото ----------
  {
    id: 1003,
    userId: 4,
    media: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1554151228-14d9def656e4",
      },
    ],
    description: "Office day 📎",
    location: "Seoul",
    likes: 860,
    createdAt: "2025-01-03T12:00:00Z",
    taggedUsers: [],
  },

  // ---------- 4. Пост с одним фото ----------
  {
    id: 1004,
    userId: 3,
    media: [
      {
        type: "image",
        url: "https://posterjack.ca/cdn/shop/articles/landscape_photography_tips_featured_image.jpg?v=1563408049&width=1500",
      },
    ],
    description: "Never give up 💪",
    location: "Bao-Bao",
    likes: 230,
    createdAt: "2025-01-04T12:00:00Z",
    taggedUsers: [1],
  },
  {
    id: 1010,
    userId: 3,
    media: [
      {
        type: "image",
        url: 'https://cdn.pixabay.com/photo/2017/11/14/00/28/wormwood-some-competition-2947198_1280.jpg',
      },
    ],
    description: "Never give ",
    location: "Bao-Bao",
    likes: 230,
    createdAt: "2025-01-04T12:00:00Z",
    taggedUsers: [1],
  },

  // ---------- 5. Видео-пост ----------
  {
    id: 1005,
    userId: 5,
    media: [
      {
        type: "video",
        url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        thumbnail:
          "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
        duration: 11,
      },
    ],
    description: "Peaceful moment 🌿",
    location: "Tibet",
    likes: 50,
    createdAt: "2025-01-05T12:00:00Z",
    taggedUsers: [],
  },
];

export const postLikes = [
  {
    id: 9001,
    targetId: 1001,
    userId: 3,
    createdAt: 1733901000000,
    targetType:'post'
  },
  {
    id: 9002,
    targetId: 1001,
    userId: 4,
    createdAt: 1733901200000,
    targetType:'post'
  },
  {
    id: 9003,
    targetId: 1002,
    userId: 1,
    createdAt: 1733901300000,
    targetType:'post'
  },
];

export const savedPosts = [
  {
    id: 9101,
    targetId: 1001,
    userId: 3,
    savedAt: 1733905000000,
  },
  {
    id: 9102,
    targetId: 1002,
    userId: 1,
    savedAt: 1733906000000,
  },
];

export const postComments = [
  {
    id: 5001,
    targetId: 1001,
    userId: 3,
    text: "Beautiful place 🔥🔥",
    likes: 2,
    createdAt: "2025-01-10T13:00:00Z",
    replyTo: null,
  },
  {
    id: 5002,
    targetId: 1001,
    userId: 1,
    text: "@mister9845 thanks bro! 🙏",
    likes: 1,
    createdAt: "2025-01-10T13:05:00Z",
    replyTo: 5001,
  },
  {
    id: 5003,
    targetId: 1002,
    userId: 3,
    text: "Great energy!",
    likes: 0,
    createdAt: "2025-01-11T13:00:00Z",
    replyTo: null,
  },
  {
    id: 5004,
    targetId: 1005,
    userId: 1,
    text: "Looks so relaxing 😌",
    likes: 5,
    createdAt: "2025-01-11T13:00:00Z",
    replyTo: null,
  },
];




