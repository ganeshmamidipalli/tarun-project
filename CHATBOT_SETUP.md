# 🤖 Chatbot Setup Instructions

## OpenRouter API Configuration

To enable the full AI capabilities of the chatbot, you need to configure your OpenRouter API key:

### Step 1: Get OpenRouter API Key
1. Go to [OpenRouter.ai](https://openrouter.ai)
2. Sign up for an account
3. Navigate to your API keys section
4. Create a new API key
5. Copy the API key

### Step 2: Configure the Chatbot
1. Open `chatbot.js` file
2. Find line 4: `openrouterApiKey: 'YOUR_OPENROUTER_API_KEY'`
3. Replace `'YOUR_OPENROUTER_API_KEY'` with your actual API key
4. Save the file

### Step 3: Test the Chatbot
1. Open your portfolio website
2. Click the chatbot widget in the bottom-right corner
3. Try asking questions like:
   - "What are Tarun's main skills?"
   - "Tell me about his projects"
   - "What is data analytics?"
   - "How can I contact Tarun?"

## Features

### ✅ What's Already Working (Without API Key)
- **RAG System**: Retrieval-Augmented Generation with comprehensive knowledge base
- **Smart Search**: Vector similarity search through Tarun's information
- **Rule-based Responses**: Intelligent fallback responses for common questions
- **Interactive UI**: Modern, responsive chatbot interface
- **Mobile Support**: Fully responsive design

### 🚀 What You Get With OpenRouter API
- **Advanced AI Responses**: More natural and contextual conversations
- **Better Understanding**: Enhanced comprehension of complex queries
- **Conversational Memory**: Maintains context across the conversation
- **Creative Responses**: More engaging and personalized answers

## Knowledge Base Content

The chatbot has access to comprehensive information about:

### 👤 Personal Information
- Contact details, experience, location
- Career progression timeline
- Professional background

### 🛠️ Technical Skills
- Programming languages (Python, SQL, R, JavaScript)
- Cloud platforms (AWS, Snowflake)
- Tools and frameworks
- Certifications and expertise levels

### 💼 Projects Portfolio
- 6 detailed project descriptions
- Technologies used
- Impact and achievements
- Team sizes and durations

### 📚 Technical Knowledge
- Data analytics concepts
- Data engineering principles
- Machine learning fundamentals
- Cloud computing basics

### ❓ FAQ Database
- Common questions and answers
- Best practices and methodologies
- Tool recommendations
- Career guidance

## Customization

### Adding More Knowledge
To add more information to the knowledge base:
1. Open `chatbot.js`
2. Find the `KNOWLEDGE_BASE` object
3. Add your content to the appropriate sections
4. The RAG system will automatically index new content

### Modifying Responses
To customize chatbot responses:
1. Edit the `handleSpecificQueries()` method
2. Add new conditions and responses
3. Update the FAQ section for common questions

### Styling Changes
To modify the chatbot appearance:
1. Open `styles.css`
2. Find the "Chatbot Styles" section
3. Customize colors, sizes, animations as needed

## Troubleshooting

### Chatbot Not Appearing
- Check browser console for JavaScript errors
- Ensure all files are properly loaded
- Verify file paths are correct

### API Errors
- Verify your OpenRouter API key is correct
- Check your API usage limits
- Ensure you have credits in your OpenRouter account

### Slow Responses
- The fallback system works without API calls
- API responses depend on OpenRouter's servers
- Consider implementing response caching for better performance

## Security Notes

- Never commit API keys to version control
- Consider using environment variables for production
- The current setup is for development/demo purposes
- For production, implement proper API key management

## Support

For issues or questions:
1. Check the browser console for errors
2. Verify all files are loading correctly
3. Test with and without the API key
4. Review the knowledge base content

Happy chatting! 🎉
