# Portfolio Website - Arunava Nandi

A modern, secure, professional portfolio website built with Astro, Tailwind CSS, and Web3Forms. Designed for a QA engineer transitioning to product development.

**Live Demo:** https://YOUR_USERNAME.github.io/portfolio-website/

---

## 🚀 Features

✅ **Minimalist, Professional Design** - Clean, single-page layout inspired by modern portfolios  
✅ **Fully Responsive** - Mobile, tablet, and desktop optimized  
✅ **SEO Optimized** - Meta tags, Open Graph, Twitter cards, sitemap.xml, robots.txt, JSON-LD schema  
✅ **Secure Contact Form** - Web3Forms-powered; your email never exposed in page source  
✅ **Privacy-First** - No cookies, no tracking, no visitor data collection  
✅ **Fast & Lightweight** - Astro static generation, minimal JavaScript  
✅ **Easy to Maintain** - Markdown-style data files, simple component structure  
✅ **GitHub Pages Ready** - Deploy from your repo with a single push  

---

## 📋 Tech Stack

- **Framework:** [Astro](https://astro.build) 4.11+ (static site generator)
- **Styling:** [Tailwind CSS](https://tailwindcss.com) 3.4+
- **Form Handling:** [Web3Forms](https://web3forms.com) (free, secure, no backend)
- **Hosting:** GitHub Pages (free)
- **Language:** TypeScript + Astro components

---

## 🛠️ Setup & Local Development

### Prerequisites

- **Node.js** v20+ and npm
- **Git** for version control

### Step 1: Clone or Download This Project

```bash
# Via Git (if already initialized)
git clone https://github.com/YOUR_USERNAME/portfolio-website.git
cd portfolio-website

# Or manually navigate to the folder if you downloaded it
cd portfolio-website
```

### Step 2: Install Dependencies

```bash
npm install
```

This installs:
- Astro
- Tailwind CSS
- @astrojs/sitemap (for auto-generating sitemap.xml)
- TypeScript

### Step 3: Configure Environment Variables

Create a `.env` file in the project root:

```bash
cp .env.example .env
```

Then edit `.env` and add your Web3Forms access key:

```
PUBLIC_WEB3FORMS_KEY=your_access_key_here
```

**How to get your Web3Forms key:**

1. Visit https://web3forms.com/
2. Sign up free (email verification required)
3. Go to your dashboard → find your **Access Key**
4. Copy it and paste into `.env`

**Why is this safe?** The `PUBLIC_` prefix means it's exposed client-side, but Web3Forms uses rate-limiting and validation server-side per key. It's an identifier, not a secret.

### Step 4: Customize Your Content

Edit these files to personalize your portfolio:

#### **About Section & Personal Info**
- `src/components/About.astro` — Your bio and story
- `src/components/Contact.astro` — Your email and social links

#### **Projects**
- `src/data/projects.ts` — Add/edit your projects
  - Edit existing entries or add new ones to the `projects` array
  - Each project has: title, description, tech stack, GitHub/demo links

#### **Skills**
- `src/data/skills.ts` — Update skills by category
  - Organize into categories like "Automation Testing", "Development", etc.

#### **Blog Posts**
- `src/data/blogPosts.ts` — Link your Medium articles
  - Add your Medium post URL, title, excerpt, date, tags, and cover image
  - When users click a blog card, it opens your Medium post in a new tab

#### **Social Links**
Update `YOUR_USERNAME`, `YOUR_LINKEDIN`, `YOUR_TWITTER` in:
- `src/components/Header.astro`
- `src/components/Footer.astro`
- `src/components/Contact.astro`
- `src/components/SEO.astro`

#### **GitHub Pages Config**
In `astro.config.mjs`:

```javascript
// If your repo is at YOUR_USERNAME/portfolio-website:
const SITE_URL = 'https://YOUR_USERNAME.github.io/portfolio-website';
// uncomment this line:
// base: '/portfolio-website/',

// If using a custom domain (e.g., yourdomain.com):
const SITE_URL = 'https://yourdomain.com';
// leave base: as '/'
```

### Step 5: Run Local Dev Server

```bash
npm run dev
```

Your site will be available at `http://localhost:3000`

- Edit files → changes appear live (hot reload)
- Test the contact form with your Web3Forms key
- Check responsive design with browser DevTools

### Step 6: Build for Production

```bash
npm run build
```

This generates a static `dist/` folder ready to deploy. Includes:
- Optimized HTML/CSS/JS
- Auto-generated `sitemap.xml`
- All static assets

To preview the production build:

```bash
npm run preview
```

---

## 📧 Web3Forms: How It Works (Technical Explanation)

### Architecture

```
User Form Submission
       ↓
  Client-side validation (required fields, email format)
       ↓
  POST to: https://api.web3forms.com/submit
       ↓
  Web3Forms receives submission with:
    - PUBLIC_WEB3FORMS_KEY (public access key, rate-limited)
    - name, email, subject, message (form data)
    - honeypot field (empty, for bot detection)
       ↓
  Web3Forms validates & rate-limits (server-side)
       ↓
  Email sent to YOUR registered inbox
       ↓
  Optional: User redirected to success page (?success=true)
```

### Privacy & Security

- ✅ **Your email never in HTML/JS** — It's stored on Web3Forms' servers, not your site
- ✅ **No scraper harvesting** — Bots can't extract your email from page source
- ✅ **No PII storage on your site** — Submissions only stored temporarily by Web3Forms
- ✅ **Honeypot field** — Catches spam bots (field named `bot_field` is hidden)
- ✅ **Rate-limited per key** — Web3Forms throttles submissions (e.g., 20/day for free tier)
- ✅ **No tracking cookies** — This site has no analytics or cookies
- ✅ **GDPR compliant** — User data goes directly to your inbox

### Monitoring Submissions

For basic monitoring, Web3Forms offers a **free dashboard** (optional):
- Log in at https://web3forms.com/dashboard
- See submission history, IP addresses (anonymized option), timestamps
- Set up email notifications for new submissions

For this portfolio, submissions are simply emailed to your inbox. No dashboard login required.

---

## 🚀 Deployment to GitHub Pages

### Option 1: Using GitHub Actions (Recommended - Automatic)

GitHub Actions automatically builds and deploys your site when you push to `main`.

1. **Create a GitHub repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Portfolio website with Astro"
   git remote add origin https://github.com/YOUR_USERNAME/portfolio-website.git
   git branch -M main
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repo → **Settings** → **Pages**
   - Source: Select **GitHub Actions**
   - GitHub will auto-detect Astro and deploy on push

3. **Add secrets for your .env key** (optional but recommended)
   - Go to repo → **Settings** → **Secrets and variables** → **Actions**
   - Click **New repository secret**
   - Name: `PUBLIC_WEB3FORMS_KEY`
   - Value: Your access key
   - Update `.github/workflows/deploy.yml` to use this secret

4. **Push and deploy**
   ```bash
   git push origin main
   ```
   - GitHub Actions runs automatically
   - Your site deploys to `https://YOUR_USERNAME.github.io/portfolio-website/`

### Option 2: Manual Deployment (gh-pages Branch)

1. **Build locally**
   ```bash
   npm run build
   ```

2. **Deploy to gh-pages branch**
   ```bash
   npm install --save-dev gh-pages
   npx gh-pages -d dist
   ```

3. **Enable GitHub Pages**
   - Repo → Settings → Pages → Source: **gh-pages**

4. **Visit your site**
   - https://YOUR_USERNAME.github.io/portfolio-website/

### Option 3: Custom Domain

If you own a domain:

1. **Update DNS records** pointing to GitHub Pages
   - [GitHub docs on custom domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)

2. **Update `astro.config.mjs`**
   ```javascript
   const SITE_URL = 'https://yourdomain.com';
   // base: '/' (leave as root)
   ```

3. **Add CNAME file**
   - `public/CNAME` with content: `yourdomain.com`

4. **Push and deploy**

---

## 📊 SEO Optimization (What's Included)

### Implemented Features

1. **Meta Tags** ✅
   - `<title>`, `<meta description>`, `<meta author>`
   - Canonical URLs for duplicate prevention
   - Robots meta (index, follow)

2. **Open Graph (OG) Tags** ✅
   - `og:title`, `og:description`, `og:image`, `og:url`, `og:type`
   - For rich sharing on Facebook, LinkedIn, Twitter

3. **Twitter Cards** ✅
   - `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`
   - Previews when sharing on Twitter/X

4. **Sitemap** ✅
   - Auto-generated `sitemap.xml` at build time
   - Listed in `robots.txt`
   - Helps search engines discover all pages

5. **robots.txt** ✅
   - Allows all search engines
   - Points to sitemap
   - Rate-limits aggressive crawlers

6. **JSON-LD Structured Data** ✅
   - Person schema on homepage (name, jobTitle, sameAs links)
   - Helps Google understand your content
   - May result in rich snippets in search results

7. **Semantic HTML** ✅
   - Proper heading hierarchy (h1, h2, h3)
   - Landmark elements (`<header>`, `<main>`, `<footer>`, `<section>`, `<nav>`)
   - Improves accessibility and SEO

### How to Test SEO

1. **Google Search Console**
   - Submit your sitemap: https://search.google.com/search-console
   - Monitor indexing and search performance

2. **Google Pagespeed Insights**
   - https://pagespeed.web.dev/
   - Check performance, accessibility, best practices

3. **LinkedIn Preview**
   - Paste your URL in LinkedIn share box to see OG tags in action

4. **Twitter Card Validator**
   - https://cards-dev.twitter.com/validator
   - Test Twitter card rendering

---

## 🛡️ Security Best Practices

### What's Protected

- ✅ No plaintext email in HTML (Web3Forms relay)
- ✅ No secrets in version control (`.env` in `.gitignore`)
- ✅ Form spam protection (honeypot + Web3Forms rate-limiting)
- ✅ No third-party trackers or cookies
- ✅ HTTPS enforced by GitHub Pages

### Before Pushing to GitHub

1. **Never commit `.env`** — It's in `.gitignore`, but verify:
   ```bash
   git status
   ```
   Should NOT show `.env` listed.

2. **Verify no sensitive data in commits**
   ```bash
   git log -p | grep -i "password\|key\|secret"
   ```

3. **Update social links and contact info**
   - Replace `YOUR_USERNAME`, `YOUR_LINKEDIN`, `YOUR_TWITTER` everywhere

### Running Locally vs. Production

- **Local dev:** Form submissions still go to Web3Forms (requires real API key)
- **Production:** Same setup; no differences

---

## 🎨 Customization Tips

### Colors & Branding

Edit `tailwind.config.mjs` to customize:
- Accent colors (currently blue/purple gradient)
- Font choices (system sans, Fira Code mono)
- Spacing and breakpoints

Example: Change primary color from blue to green
```javascript
// In global.css or theme
.gradient-text {
  @apply bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent;
}
```

### Dark Mode (Optional)

The site has light/dark theme support via CSS media queries. To enable dark mode toggle, add a button in `Header.astro`:

```astro
<button id="theme-toggle" class="p-2">
  <!-- Icon SVG -->
</button>
```

Then add JavaScript to toggle `prefers-color-scheme` or `data-theme` attribute.

### Animations

Subtle fade-in animations are defined in `global.css`. Adjust timing or add more as needed.

---

## 📁 File Structure Reference

```
portfolio-website/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Skills.astro
│   │   ├── Projects.astro
│   │   ├── ProjectCard.astro
│   │   ├── BlogPreview.astro
│   │   ├── Contact.astro        ← Web3Forms form
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   └── SEO.astro            ← Meta tags & structured data
│   ├── layouts/
│   │   └── BaseLayout.astro     ← Wrapper for all pages
│   ├── pages/
│   │   ├── index.astro          ← Homepage (all sections)
│   │   └── blog/
│   │       └── index.astro      ← Blog listing
│   ├── data/
│   │   ├── projects.ts          ← Project data (edit this)
│   │   ├── skills.ts            ← Skills data (edit this)
│   │   └── blogPosts.ts         ← Medium post links (edit this)
│   └── styles/
│       └── global.css           ← Tailwind + base styles
├── public/
│   ├── robots.txt               ← SEO robot rules
│   ├── favicon.svg              ← Site icon
│   └── og-image.png             ← Social share image (placeholder)
├── astro.config.mjs             ← Astro config (edit for GitHub Pages)
├── tailwind.config.mjs          ← Tailwind config
├── tsconfig.json                ← TypeScript config
├── package.json                 ← Dependencies
├── .env.example                 ← Environment template
├── .gitignore                   ← Git ignore rules
└── README.md                    ← This file
```

---

## 🐛 Troubleshooting

### "Contact form not working"

**Check:**
1. Is `.env` file created with `PUBLIC_WEB3FORMS_KEY` set?
2. Did you restart the dev server after adding `.env`?
3. Test form submission — check browser DevTools Network tab
4. Is your Web3Forms key valid? (Test at https://web3forms.com/dashboard)

**Solution:**
- Stop dev server: `Ctrl+C`
- Restart: `npm run dev`
- Verify `.env` is NOT in git: `git status`

### "Styles not loading"

**Check:**
1. Did Tailwind CSS install correctly? Check `node_modules`
2. Are you using class names from tailwind config?

**Solution:**
```bash
npm install --save-dev tailwindcss
npm run dev
```

### "Build fails"

**Check:**
1. Any TypeScript errors? `npm run build` shows them
2. Missing components referenced in pages?

**Solution:**
```bash
npm run build -- --verbose
```

Shows detailed build output.

### "Sitemap.xml not generated"

**Check:**
1. Is `@astrojs/sitemap` installed? Check `package.json`
2. Did you run `npm run build`? Sitemap only generated at build time

**Solution:**
```bash
npm install @astrojs/sitemap
npm run build
ls dist/sitemap-index.xml  # Should exist after build
```

---

## 📚 Learn More

- **Astro Docs:** https://docs.astro.build/
- **Tailwind CSS:** https://tailwindcss.com/docs
- **Web3Forms:** https://web3forms.com/documentation
- **GitHub Pages:** https://pages.github.com/
- **SEO Best Practices:** https://developers.google.com/search

---

## ✍️ Future Enhancements (Optional)

Consider adding:
- [ ] Dark mode toggle with persistent preference
- [ ] Search functionality for blog posts
- [ ] Newsletter signup form (Mailchimp, ConvertKit)
- [ ] Analytics (Plausible Privacy-First Analytics)
- [ ] Reading time estimates for blog posts
- [ ] "Back to Top" button
- [ ] Comments section on blog (Giscus, Utterances)
- [ ] Project filtering by technology
- [ ] Resume/CV PDF download

---

## 📝 License

This portfolio template is open source. Feel free to use it as inspiration for your own site.

---

## 🤝 Contributing & Feedback

Questions or improvements? Refer back to the [Astro docs](https://docs.astro.build/) or [Web3Forms docs](https://web3forms.com/documentation).

---

## 👨‍💻 About the Author

**Arunava Nandi**  
QA Automation Engineer → Product Developer  
Expertise: Tricentis Tosca, Playwright, System Design, DSA, Agentic Engineering

- **GitHub:** https://github.com/YOUR_USERNAME
- **LinkedIn:** https://linkedin.com/in/YOUR_LINKEDIN
- **Medium:** https://medium.com/@YOUR_USERNAME
- **Twitter:** https://twitter.com/YOUR_TWITTER

---

**Built with ❤️ using Astro, Tailwind CSS, and Web3Forms**
