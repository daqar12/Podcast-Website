export interface Episode {
  id: number;
  title: string;
  description: string;
  duration: string;
  date: string;
  imageUrl: string;
}


const episodesData : Episode[] = [
  {
    id: 127,
    title: "Building Your Voice",
    description: "Discover how to develop and strengthen your unique voice in storytelling.",
    duration: "38 min",
    date: "Nov 15, 2024",
    imageUrl: "https://videocdn.cdnpk.net/videos/b3a8f007-e80a-5d2f-9929-c0b28e8d8260/horizontal/thumbnails/large.jpg?semt=ais_hybrid&item_id=4388987&w=740&q=80",
  },
  {
    id: 129,
    title: "The Power of Listening",
    description: "Explore the skill of active listening in meaningful conversations.",
    duration: "42 min",
    date: "Nov 8, 2024",
    imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
  },
  {
    id: 130,
    title: "Crafting a Narrative",
    description: "Learn the art of structuring compelling narratives that captivate audiences.",
    duration: "51 min",
    date: "Nov 1, 2024",
    imageUrl: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop",
  },
  {
    id: 131,
    title: "Overcoming Creative Blocks",
    description: "Strategies to break through creative barriers and find inspiration.",
    duration: "36 min",
    date: "Oct 25, 2024",
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
  },
  {
    id: 132,
    title: "The Interviewer's Craft",
    description: "Master the art of conducting engaging and insightful interviews.",
    duration: "39 min",
    date: "Oct 18, 2024",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
  },
  {
    id: 133,
    title: "Building a Community",
    description: "Create and nurture a community around your content and interests.",
    duration: "47 min",
    date: "Oct 11, 2024",
    imageUrl: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=300&fit=crop",
  },
  {
    id: 128,
    title: "The Trump of Conversation",
    description: "Deep dive into how conversations can shape our views and stories.",
    duration: "45 min",
    date: "Nov 22, 2024",
    imageUrl: "https://static01.nyt.com/newsgraphics/2019/08/01/candidate-pages/3b31eab6a3fd70444f76f133924ae4317567b2b5/trump.jpg",
  },
  {
    id: 129,
    title: "The Art of Storytelling",
    description: "Learn the techniques of crafting compelling narratives.",
    duration: "42 min",
    date: "Nov 15, 2024",
    imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
  }
];

export default episodesData;
