import { defineCollection, z } from 'astro:content';

const coursesCollection = defineCollection({
  type: 'data',
  schema: z.object({
    // Basic Info
    title: z.string(),
    subtitle: z.string(),
    slug: z.string(),
    
    // Event Details
    eventDates: z.object({
      startDate: z.string(),
      endDate: z.string(),
      displayDates: z.string(),
      earlyBirdDeadline: z.string(),
    }),
    
    // Hero Section
    hero: z.object({
      headline: z.string(),
      highlightedWord: z.string(),
      description: z.string(),
      bannerText: z.string(),
      videoUrl: z.string().optional(),
    }),
    
    // Pricing
    pricing: z.object({
      general: z.object({
        originalPrice: z.string(),
        earlyBirdPrice: z.string(),
        regularPrice: z.string(),
        time: z.string(),
      }),
      vip: z.object({
        originalPrice: z.string(),
        earlyBirdPrice: z.string(),
        regularPrice: z.string(),
        time: z.string(),
      }),
      oneOnOne: z.object({
        originalPrice: z.string(),
        earlyBirdPrice: z.string(),
        regularPrice: z.string(),
        time: z.string(),
      }),
    }),
    
    // What You'll Master
    masterTopics: z.array(z.object({
      title: z.string(),
      description: z.string(),
      icon: z.string(), // Icon name from lucide-react
    })),
    
    // Two Day Agenda
    agenda: z.object({
      dayOne: z.object({
        date: z.string(),
        time: z.string(),
        topics: z.array(z.object({
          title: z.string(),
          description: z.string(),
          time: z.string().optional(),
        })),
      }),
      dayTwo: z.object({
        date: z.string(),
        time: z.string(),
        topics: z.array(z.object({
          title: z.string(),
          description: z.string(),
          time: z.string().optional(),
        })),
      }),
    }),
    
    // FAQ
    faqs: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })),
    
    // Instructor
    instructor: z.object({
      name: z.string(),
      title: z.string(),
      bio: z.string(),
      image: z.string().optional(),
      stats: z.array(z.object({
        value: z.string(),
        label: z.string(),
      })).optional(),
    }),
    
    // SEO
    seo: z.object({
      metaTitle: z.string(),
      metaDescription: z.string(),
    }).optional(),
  }),
});

export const collections = {
  courses: coursesCollection,
};
