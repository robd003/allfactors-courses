# How to Add a New Course (5-Minute Guide)

## 🎯 Goal
Create a new course landing page at `/courses/your-course-name`

## ⏱️ Time Required
5-10 minutes per course

## 📋 Steps

### Step 1: Create JSON File (1 minute)

Navigate to the courses directory and create a new file:

```bash
cd src/content/courses/
```

Create `your-course-name.json` (replace with your actual course slug)

**Important**: The filename (without .json) will be your URL slug!

### Step 2: Copy Existing Template (1 minute)

Copy an existing course as a starting point:

```bash
cp paid-ads-masterclass.json your-course-name.json
```

### Step 3: Update Core Info (2 minutes)

Open `your-course-name.json` and update these REQUIRED fields:

```json
{
  "title": "Your Course Title",
  "subtitle": "Brief course description",
  "slug": "your-course-name",  // MUST match filename!
  
  "eventDates": {
    "startDate": "2026-05-20",           // YYYY-MM-DD
    "endDate": "2026-05-21",             // YYYY-MM-DD
    "displayDates": "May 20-21, 2026",   // How you want it shown
    "earlyBirdDeadline": "2026-05-10T23:59:59"  // ISO format
  }
}
```

### Step 4: Customize Hero Section (1 minute)

```json
{
  "hero": {
    "headline": "Your Main Headline",
    "highlightedWord": "Highlighted",    // This word appears in color
    "description": "Rest of Headline",
    "bannerText": "SALE ENDS SOON! 🎉",
    "videoUrl": "https://www.youtube.com/embed/YOUR_VIDEO_ID"
  }
}
```

### Step 5: Set Pricing (1 minute)

```json
{
  "pricing": {
    "general": {
      "originalPrice": "$999",
      "earlyBirdPrice": "$299",
      "regularPrice": "$599",
      "time": "3pm-4pm PST (daily)"
    },
    "vip": {
      "originalPrice": "$2999",
      "earlyBirdPrice": "$499",
      "regularPrice": "$799",
      "time": "3pm-5pm PST (daily)"
    },
    "oneOnOne": {
      "originalPrice": "$9999",
      "earlyBirdPrice": "$1699",
      "regularPrice": "$4999",
      "time": "3pm-5pm PST (daily) + 1:1 call"
    }
  }
}
```

### Step 6: Build & Test (1 minute)

```bash
# From project root
npm run build
npm run preview
```

Visit: `http://localhost:4321/courses/your-course-name`

---

## ✅ Quick Checklist

Use this checklist when creating each course:

- [ ] Created JSON file in `src/content/courses/`
- [ ] Filename matches `slug` field
- [ ] Updated `title` and `subtitle`
- [ ] Set all dates correctly
- [ ] Updated hero section (headline, video)
- [ ] Set pricing for all 3 tiers
- [ ] Updated `masterTopics` (6 items)
- [ ] Updated `agenda` for both days
- [ ] Updated `faqs` (at least 4-6 questions)
- [ ] Updated `instructor` info
- [ ] Set `seo` meta title & description
- [ ] Ran `npm run build` successfully
- [ ] Tested page in browser
- [ ] Checked mobile responsive design
- [ ] Verified countdown timer works
- [ ] Verified pricing switches on deadline date

---

## 🎨 Customization Reference

### Available Icons for `masterTopics`

Choose from [Lucide Icons](https://lucide.dev/icons/):

**Popular choices:**
- `Layout` - Structure/organization
- `Users` - Audience/community
- `Sparkles` - Creative/new
- `DollarSign` - Money/pricing
- `BarChart` - Analytics/data
- `Rocket` - Growth/scaling
- `Target` - Goals/precision
- `Zap` - Speed/energy
- `TrendingUp` - Growth/improvement
- `Award` - Achievement/quality

### Master Topics Structure

```json
{
  "masterTopics": [
    {
      "title": "Topic Name",
      "description": "What they'll learn about this topic",
      "icon": "Layout"
    }
  ]
}
```

Recommended: 6 topics (displays in 2x3 grid)

### Agenda Structure

```json
{
  "agenda": {
    "dayOne": {
      "date": "Day 1 Date",
      "time": "3PM - 4PM PST",
      "topics": [
        {
          "title": "Session Title",
          "description": "What's covered",
          "time": "4PM - 5PM PST"  // Optional, only for VIP sessions
        }
      ]
    },
    "dayTwo": { /* same structure */ }
  }
}
```

Recommended: 3-4 topics per day

### FAQs

```json
{
  "faqs": [
    {
      "question": "Clear, specific question?",
      "answer": "Detailed answer. Can be multiple sentences."
    }
  ]
}
```

Recommended: 6-8 FAQs covering:
- Prerequisites/experience needed
- Platforms covered
- What if I miss live sessions
- Refund policy
- Access details
- Tier differences

---

## 🚀 Batch Creation Strategy

### For Creating 12 Courses Efficiently

**Phase 1: Setup (30 minutes)**
1. Create all 12 JSON files
2. Fill in basic info (title, slug, dates)
3. Set pricing for all

**Phase 2: Content (2-3 hours)**
4. Write unique headlines for each
5. Customize master topics
6. Write agendas
7. Write FAQs

**Phase 3: Polish (30 minutes)**
8. Add video URLs
9. Set SEO metadata
10. Review all for consistency

**Phase 4: Launch (15 minutes)**
11. Build entire site
12. Test all 12 courses
13. Deploy

**Total Time**: ~4 hours for all 12 courses

---

## 📁 File Naming Convention

Good examples:
- ✅ `paid-ads-masterclass.json`
- ✅ `email-marketing-bootcamp.json`
- ✅ `seo-fundamentals-workshop.json`

Bad examples:
- ❌ `Course 1.json` (spaces, not descriptive)
- ❌ `PAID_ADS.json` (uppercase, underscores)
- ❌ `paidads.json` (hard to read)

**Best practice**: Use lowercase, hyphens, descriptive names

---

## 🔍 Testing Checklist

After creating each course, test:

1. **URL loads**: `/courses/your-course-name`
2. **Countdown works**: Shows correct time
3. **Pricing displays**: Early bird or regular based on date
4. **Video plays**: If you added one
5. **FAQ expands**: Click to test accordion
6. **Mobile view**: Resize browser window
7. **All text updated**: No leftover placeholder text
8. **Links work**: Scroll to pricing section

---

## 💡 Pro Tips

### Reuse What Works
- Keep instructor bio same across courses
- Use similar master topics structure
- Reuse FAQ patterns (just update specifics)

### What MUST Be Unique
- Course title & slug
- Event dates
- Pricing (can vary by course value)
- Video URLs
- Specific topic names

### Content Writing Tips
- **Headlines**: Focus on transformation/outcome
- **Topics**: Be specific about what they'll learn
- **FAQs**: Answer real objections
- **Descriptions**: Benefits over features

### Time-Saving Tricks
1. Write all headlines first (maintain voice)
2. Use find-replace for common patterns
3. Keep a "master FAQ" list to draw from
4. Template your agenda structure

---

## 🎯 Example: Creating Course #2

Let's say you're creating "SEO Fundamentals Workshop":

**Step 1**: Create file
```bash
touch src/content/courses/seo-fundamentals-workshop.json
```

**Step 2**: Copy template
```bash
cp src/content/courses/paid-ads-masterclass.json \
   src/content/courses/seo-fundamentals-workshop.json
```

**Step 3**: Quick edits
```json
{
  "title": "SEO Fundamentals Workshop",
  "slug": "seo-fundamentals-workshop",
  "eventDates": {
    "displayDates": "June 10-11, 2026"
  },
  "hero": {
    "headline": "Stop Ranking Last & Start",
    "highlightedWord": "Dominating",
    "description": "With SEO"
  }
}
```

**Step 4**: Build & check
```bash
npm run build
```

Visit: `/courses/seo-fundamentals-workshop` ✅

**Time elapsed**: 7 minutes

---

## 🆘 Common Issues

### "Page not found"
- **Cause**: Slug doesn't match filename
- **Fix**: Ensure `"slug": "filename"` (without .json)

### "Invalid course data"
- **Cause**: JSON syntax error or missing required field
- **Fix**: Validate at [jsonlint.com](https://jsonlint.com)

### "Build failed"
- **Cause**: TypeScript type error
- **Fix**: Check console, ensure all required fields present

### Countdown shows "00:00:00"
- **Cause**: Date format incorrect
- **Fix**: Use `YYYY-MM-DDTHH:MM:SS` format

---

## ✨ You're Ready!

Now you know exactly how to add new courses. Each one takes just 5-10 minutes!

**Next**: Read `COURSES-README.md` for complete field reference.
