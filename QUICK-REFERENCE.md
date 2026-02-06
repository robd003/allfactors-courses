# Quick Reference Card

## 🚀 Commands

```bash
npm install          # Install dependencies
npm run dev          # Start dev server (http://localhost:4321)
npm run build        # Build for production
npm run preview      # Preview production build
npm run check        # Type check
```

## 📁 Where Things Are

| What | Where |
|------|-------|
| **Add new course** | `src/content/courses/your-course.json` |
| **Course images** | `public/assets/` |
| **Modify components** | `src/components/` |
| **Change styles** | `src/styles/global.css` |
| **Build output** | `dist/` (deploy this folder) |

## 🎯 Course URLs

```
/                                    → Redirects to first course
/courses/paid-ads-masterclass        → Paid Ads course
/courses/email-marketing-bootcamp    → Email course
/courses/your-new-course             → Your new course
```

## 📝 JSON File Structure (Minimal)

```json
{
  "title": "Course Title",
  "subtitle": "Description",
  "slug": "url-slug",
  "eventDates": {
    "displayDates": "Feb 20-21, 2026",
    "earlyBirdDeadline": "2026-02-10T23:59:59"
  },
  "hero": {
    "headline": "Main Text",
    "highlightedWord": "Highlighted",
    "description": "Rest",
    "bannerText": "SALE ENDS SOON!",
    "videoUrl": "https://youtube.com/embed/ID"
  },
  "pricing": { /* 3 tiers */ },
  "masterTopics": [ /* 6 topics */ ],
  "agenda": { /* 2 days */ },
  "faqs": [ /* questions */ ],
  "instructor": { /* bio */ }
}
```

## 🎨 Common Icons

```
Layout, Users, Sparkles, DollarSign, BarChart, Rocket,
Target, Zap, TrendingUp, Award, CheckCircle, Star
```

[Full list](https://lucide.dev/icons/)

## ⚡ Quick Add Course

```bash
# 1. Copy template
cp src/content/courses/paid-ads-masterclass.json \
   src/content/courses/new-course.json

# 2. Edit the JSON file
# 3. Build
npm run build

# 4. Test
npm run preview
```

## 🐛 Troubleshooting

| Problem | Solution |
|---------|----------|
| Build fails | Check JSON syntax at jsonlint.com |
| Page 404 | Ensure `slug` matches filename |
| Countdown wrong | Check date format: `YYYY-MM-DDTHH:MM:SS` |
| Images broken | Put in `public/assets/`, use `/assets/` path |

## 📚 Documentation

- **Full guide**: `COURSES-README.md`
- **Migration info**: `MIGRATION-SUMMARY.md`
- **Step-by-step**: `HOW-TO-ADD-COURSE.md`
- **This file**: `QUICK-REFERENCE.md`

## 🚢 Deploy

**Vercel**:
```bash
npm install -g vercel
vercel
```

**Netlify**:
```bash
npm run build
# Drag dist/ to netlify.com/drop
```

**Cloudflare Pages**:
- Connect repo
- Build: `npm run build`
- Output: `dist`

## 📊 File Sizes

- Total JS: ~20KB (gzipped)
- Per page HTML: ~50-100KB
- Build time: ~2 seconds
- Pages: 3 (1 redirect + 2 courses)

## ✅ Pre-Launch Checklist

- [ ] All dates correct
- [ ] Pricing set for 3 tiers
- [ ] Video URLs work
- [ ] FAQs answered
- [ ] Images added
- [ ] SEO metadata set
- [ ] Build succeeds
- [ ] Tested in browser
- [ ] Mobile responsive checked
- [ ] Countdown tested

## 🎓 Example Courses

1. `/courses/paid-ads-masterclass` - Original
2. `/courses/email-marketing-bootcamp` - Example

## 💡 Time Estimates

| Task | Time |
|------|------|
| Add 1 course | 5-10 min |
| Add 12 courses | 3-4 hours |
| Deploy | 5 min |
| Make changes | 2 min + rebuild |

---

**Need help?** Read the full documentation files!
