# Product Manager Portfolio

A modern, creative, and interactive portfolio website designed specifically for Product Manager professionals. This portfolio features beautiful 3D effects, animations, and a professional layout that showcases your work, skills, and achievements.

## Features

✨ **Modern Design**
- Clean and professional layout with gradient backgrounds
- 3D effects and animations throughout
- Responsive design that works on all devices
- Smooth scrolling and interactive elements

🎯 **Sections Included**
1. **Home** - Hero section with profile image, brief description, and social links
2. **About** - Timeline of your PM journey and education highlights
3. **Skills & Techstack** - Tools you use with progress indicators and soft skills
4. **Featured Projects** - Showcase your best projects with metrics and GitHub links
5. **A/B Testing Hub** - Document your experiments and their impact
6. **UI/UX Redesigns** - Show before/after redesigns and improvements
7. **LinkedIn Journey** - Display your published articles with engagement stats
8. **Get in Touch** - Contact form and ways to reach you

## File Structure

```
Portfolio/
├── index.html      # Main HTML structure
├── styles.css      # All styling and animations
├── script.js       # Interactive features
└── README.md       # This file
```

## How to Customize

### 1. **Profile Information**
Edit the following in `index.html`:
- Replace `Sarah Chen` with your name
- Update the profile photo URL (currently using placeholder)
- Update social links (LinkedIn, Medium, GitHub)
- Change the location and email in the contact section

### 2. **About Section**
- Edit the timeline items with your actual journey
- Update education and certifications
- Modify years to match your timeline

### 3. **Skills Section**
- Update tool names and proficiency percentages
- Modify soft skills list
- Add or remove tools based on your expertise

### 4. **Projects Section**
- Replace project titles and descriptions
- Update GitHub links
- Change metrics (user count, engagement %, etc.)
- Update gradient colors for each project

### 5. **A/B Testing Hub**
- Add your actual experiments
- Update hypotheses and results
- Change impact metrics
- Modify gradient backgrounds

### 6. **UI/UX Redesigns**
- Update redesign titles and descriptions
- Change before/after metrics
- Add your actual improvements

### 7. **LinkedIn Articles**
- Update article titles
- Change dates to publication dates
- Modify engagement stats
- Update LinkedIn links to your actual articles

### 8. **Colors & Theme**
Edit CSS variables in `styles.css`:
```css
:root {
    --primary-color: #667eea;      /* Main blue */
    --secondary-color: #764ba2;    /* Purple */
    --accent-color: #f093fb;       /* Pink */
    --light-bg: #f8f9ff;
    --dark-bg: #0f1419;
    --text-dark: #1a1a2e;
    --text-light: #fff;
}
```

## Customization Tips

### Change Profile Image
1. Replace the placeholder URL in the HTML:
   ```html
   <img src="https://via.placeholder.com/300x300?text=Your+Photo" alt="Profile" class="profile-image">
   ```
   With your actual image path:
   ```html
   <img src="path/to/your/photo.jpg" alt="Profile" class="profile-image">
   ```

### Update Social Links
Find these in the HTML and update the URLs:
```html
<a href="https://linkedin.com/in/yourprofile" target="_blank">LinkedIn</a>
<a href="https://medium.com/@yourprofile" target="_blank">Medium</a>
<a href="https://github.com/yourprofile" target="_blank">GitHub</a>
```

### Add More Projects
Copy a project card block and modify:
```html
<div class="project-card project-card-3d">
    <div class="project-image" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
        <span class="project-tag">Your Tag</span>
    </div>
    <div class="project-content">
        <h3>Your Project Title</h3>
        <p>Your project description</p>
        <!-- ... -->
    </div>
</div>
```

### Add More Articles
Copy an article card and update the details:
```html
<article class="article-card article-3d">
    <div class="article-image" style="background: linear-gradient(...)">
        <span class="article-date">Your Date</span>
    </div>
    <div class="article-content">
        <h3>Your Article Title</h3>
        <!-- ... -->
    </div>
</article>
```

## Interactive Features

- ✅ Smooth scroll navigation
- ✅ 3D hover effects on cards
- ✅ Progress bar animations
- ✅ Scroll-triggered element animations
- ✅ Active navigation highlighting
- ✅ Contact form with validation
- ✅ Parallax effects
- ✅ Mobile responsive design

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## How to Deploy

### Option 1: GitHub Pages
1. Create a GitHub repository
2. Push this folder to the repository
3. Go to Settings > Pages
4. Select main branch as source
5. Your portfolio will be live at `https://yourusername.github.io/portfolio`

### Option 2: Netlify
1. Connect your GitHub repository
2. Set publish directory to root
3. Deploy automatically with each push

### Option 3: Vercel
1. Import your repository
2. Deploy with one click
3. Get a live URL

## Tips for Best Results

1. **Use High-Quality Images**
   - Profile photo should be at least 300x300px
   - Use professional headshots

2. **Keep Content Updated**
   - Regularly update your projects
   - Add new articles as you publish them
   - Keep metrics current

3. **Add Real Data**
   - Replace all placeholder information
   - Use actual project links and metrics
   - Update social links to your profiles

4. **Optimize for Mobile**
   - Test on different devices
   - Make sure all links work
   - Check form functionality

5. **SEO Optimization**
   - Update meta description in HTML
   - Add keywords in project descriptions
   - Use proper heading hierarchy

## Customization Colors

Here are some popular gradient combinations you can use:

```css
/* Blue to Purple */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Pink to Red */
background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);

/* Blue to Cyan */
background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);

/* Orange to Yellow */
background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);

/* Teal to Cyan */
background: linear-gradient(135deg, #30cfd0 0%, #330867 100%);
```

## Contact & Support

Feel free to customize everything to match your personal brand. Change colors, fonts, layouts, and content to make it truly yours!

## License

This portfolio template is free to use and modify for personal use.

---

**Last Updated:** November 2025

Enjoy building your amazing portfolio! 🚀
