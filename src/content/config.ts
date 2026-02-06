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
      earlyBirdAfterLabel: z.string().optional(),
      tiers: z.array(z.object({
        id: z.string(),
        name: z.string(),
        originalPrice: z.string(),
        earlyBirdPrice: z.string(),
        regularPrice: z.string(),
        time: z.string(),
        startUtc: z.string().optional(),
        endUtc: z.string().optional(),
        timeSuffix: z.string().optional(),
        featured: z.boolean().optional(),
        features: z.array(z.object({
          text: z.string(),
          included: z.boolean(),
        })),
        buttonText: z.string(),
        paymentUrl: z.string().url(),
      })),
    }),
    
    // What You'll Master
    masterTopics: z.array(z.object({
      title: z.string(),
      description: z.string(),
      icon: z.string(), // Icon name from lucide-react
    })),
    
    // Two Day Agenda
    agenda: z.object({
      summary: z.object({
        startUtc: z.string(),
        endUtc: z.string(),
        labelSuffix: z.string().optional(),
      }).optional(),
      dayOne: z.object({
        date: z.string(),
        time: z.string(),
        startUtc: z.string().optional(),
        endUtc: z.string().optional(),
        topics: z.array(z.object({
          title: z.string(),
          description: z.string(),
          time: z.string().optional(),
        })),
      }),
      dayTwo: z.object({
        date: z.string(),
        time: z.string(),
        startUtc: z.string().optional(),
        endUtc: z.string().optional(),
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
