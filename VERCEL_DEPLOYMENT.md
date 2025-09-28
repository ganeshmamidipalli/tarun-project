# 🚀 Vercel Deployment Guide for Tarun's Portfolio

## 📋 Prerequisites

1. **GitHub Repository**: Your code should be pushed to GitHub
2. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
3. **OpenRouter API Key** (Optional): For chatbot functionality

## 🔧 Deployment Steps

### Method 1: Deploy via Vercel Dashboard (Recommended)

1. **Go to Vercel Dashboard**
   - Visit [vercel.com/dashboard](https://vercel.com/dashboard)
   - Sign in with your GitHub account

2. **Import Project**
   - Click "New Project"
   - Select "Import Git Repository"
   - Choose `ganeshmamidipalli/tarun-project`
   - Click "Import"

3. **Configure Project**
   - **Project Name**: `tarun-portfolio` (or your preferred name)
   - **Framework Preset**: Other
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: `npm run build` (optional)
   - **Output Directory**: `./` (leave as default)

4. **Environment Variables** (Optional - for chatbot)
   - Click "Environment Variables"
   - Add the following:
     ```
     OPENROUTER_API_KEY = your_actual_api_key_here
     CHATBOT_MODEL = openai/gpt-3.5-turbo
     CHATBOT_MAX_TOKENS = 500
     CHATBOT_TEMPERATURE = 0.7
     ```

5. **Deploy**
   - Click "Deploy"
   - Wait for deployment to complete
   - Your site will be available at `https://your-project-name.vercel.app`

### Method 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy from your project directory**
   ```bash
   cd C:\Users\ganes\OneDrive\Desktop\Tarun-Website
   vercel
   ```

4. **Follow the prompts**
   - Link to existing project or create new
   - Set up environment variables if needed
   - Deploy to production

## 🔧 Configuration Files

### vercel.json
```json
{
  "version": 2,
  "name": "tarun-portfolio",
  "builds": [
    {
      "src": "index.html",
      "use": "@vercel/static"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/$1"
    }
  ]
}
```

### package.json
```json
{
  "name": "tarun-portfolio",
  "version": "1.0.0",
  "description": "Tarun's Personal Portfolio with AI Chatbot",
  "main": "index.html",
  "scripts": {
    "dev": "vercel dev",
    "build": "echo 'Static site - no build required'",
    "deploy": "vercel --prod"
  }
}
```

## 🌐 Custom Domain (Optional)

1. **In Vercel Dashboard**
   - Go to your project
   - Click "Settings" → "Domains"
   - Add your custom domain
   - Follow DNS configuration instructions

2. **DNS Configuration**
   - Add CNAME record pointing to `cname.vercel-dns.com`
   - Or A record pointing to Vercel's IP addresses

## 🔐 Environment Variables

### Required for Full Chatbot Functionality:
- `OPENROUTER_API_KEY`: Your OpenRouter API key
- `CHATBOT_MODEL`: AI model to use (default: openai/gpt-3.5-turbo)
- `CHATBOT_MAX_TOKENS`: Maximum response length (default: 500)
- `CHATBOT_TEMPERATURE`: Response creativity (default: 0.7)

### Setting Environment Variables:
1. **Vercel Dashboard**: Project Settings → Environment Variables
2. **Vercel CLI**: `vercel env add OPENROUTER_API_KEY`

## 📱 Features After Deployment

✅ **Static Site Hosting**: Fast global CDN delivery
✅ **HTTPS**: Automatic SSL certificates
✅ **Custom Domains**: Professional URLs
✅ **Analytics**: Built-in performance monitoring
✅ **Preview Deployments**: Automatic previews for branches
✅ **Environment Variables**: Secure API key management

## 🚀 Performance Optimizations

### Automatic Optimizations:
- **Global CDN**: Content delivered from nearest location
- **Gzip Compression**: Reduced file sizes
- **HTTP/2**: Faster loading
- **Edge Caching**: Improved performance

### Manual Optimizations:
- **Image Optimization**: Use WebP format
- **Code Splitting**: Lazy load components
- **Minification**: Compress CSS/JS files

## 🔄 Continuous Deployment

### Automatic Deployments:
- **Push to main**: Deploys to production
- **Push to branch**: Creates preview deployment
- **Pull Request**: Automatic preview links

### Manual Deployments:
```bash
vercel --prod  # Deploy to production
vercel         # Deploy to preview
```

## 🐛 Troubleshooting

### Common Issues:

1. **Build Failures**
   - Check `vercel.json` configuration
   - Verify file paths are correct
   - Check for syntax errors

2. **Environment Variables Not Working**
   - Ensure variables are set in Vercel dashboard
   - Redeploy after adding variables
   - Check variable names match exactly

3. **Chatbot Not Responding**
   - Verify OpenRouter API key is set
   - Check browser console for errors
   - Ensure API key has sufficient credits

4. **Styling Issues**
   - Check CSS file paths
   - Verify font imports are working
   - Test on different devices

### Debug Commands:
```bash
vercel logs          # View deployment logs
vercel inspect       # Inspect deployment details
vercel env ls        # List environment variables
```

## 📊 Monitoring & Analytics

### Vercel Analytics:
- **Performance Metrics**: Core Web Vitals
- **Usage Statistics**: Page views, visitors
- **Error Tracking**: JavaScript errors
- **Real User Monitoring**: Actual user experience

### Access Analytics:
1. Go to Vercel Dashboard
2. Select your project
3. Click "Analytics" tab
4. View performance data

## 🔒 Security

### Automatic Security Features:
- **HTTPS**: All traffic encrypted
- **Security Headers**: XSS protection, content type options
- **DDoS Protection**: Built-in protection
- **Environment Variables**: Secure API key storage

## 📞 Support

### Vercel Support:
- **Documentation**: [vercel.com/docs](https://vercel.com/docs)
- **Community**: [github.com/vercel/vercel/discussions](https://github.com/vercel/vercel/discussions)
- **Status Page**: [vercel-status.com](https://vercel-status.com)

### Project Support:
- **GitHub Issues**: Create issues in your repository
- **Documentation**: Check this README and CHATBOT_SETUP.md

## 🎉 Success!

Once deployed, your Tarun portfolio will be available at:
- **Production URL**: `https://your-project-name.vercel.app`
- **Custom Domain**: `https://yourdomain.com` (if configured)

The portfolio includes:
- ✅ Responsive design
- ✅ AI chatbot with RAG system
- ✅ Modern animations
- ✅ Professional styling
- ✅ Mobile optimization
- ✅ Fast global delivery

Happy deploying! 🚀
