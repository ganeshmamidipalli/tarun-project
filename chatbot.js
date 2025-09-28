// Chatbot Configuration
const CHATBOT_CONFIG = {
    openrouterApiKey: process.env.OPENROUTER_API_KEY || 'YOUR_OPENROUTER_API_KEY', // Use environment variable or fallback
    openrouterUrl: 'https://openrouter.ai/api/v1/chat/completions',
    model: process.env.CHATBOT_MODEL || 'openai/gpt-3.5-turbo',
    maxTokens: parseInt(process.env.CHATBOT_MAX_TOKENS) || 500,
    temperature: parseFloat(process.env.CHATBOT_TEMPERATURE) || 0.7
};

// Comprehensive Dummy Knowledge Base for Data Analytics & Engineering
const KNOWLEDGE_BASE = {
    // Tarun's Personal Information
    personal: {
        name: "Tarun",
        experience: "5+ years",
        specialization: "Data Analytics & Engineering",
        current_role: "Senior Data Engineer",
        location: "San Francisco, CA",
        email: "tarun.analytics@email.com",
        phone: "+1 (555) 123-4567"
    },
    
    // Technical Skills
    skills: {
        programming: {
            python: {
                level: "Expert (95%)",
                experience: "5 years",
                frameworks: ["Pandas", "NumPy", "Scikit-learn", "FastAPI", "Django"],
                use_cases: ["Data analysis", "Machine learning", "Web APIs", "Automation"]
            },
            sql: {
                level: "Expert (98%)",
                experience: "5 years",
                databases: ["PostgreSQL", "MySQL", "SQL Server", "Snowflake"],
                use_cases: ["Data querying", "ETL processes", "Data modeling", "Performance optimization"]
            },
            r: {
                level: "Advanced (80%)",
                experience: "3 years",
                packages: ["dplyr", "ggplot2", "shiny", "caret"],
                use_cases: ["Statistical analysis", "Data visualization", "Research"]
            }
        },
        cloud: {
            aws: {
                level: "Expert (92%)",
                services: ["S3", "Glue", "Athena", "Lambda", "EC2", "RDS", "Redshift"],
                certifications: ["AWS Certified Solutions Architect"],
                experience: "4 years"
            },
            snowflake: {
                level: "Expert (90%)",
                features: ["Data warehousing", "dbt integration", "Snowpark", "Streams"],
                experience: "3 years"
            }
        },
        tools: {
            visualization: ["Tableau", "Power BI", "Plotly", "Matplotlib", "Seaborn"],
            etl: ["Apache Airflow", "Apache Kafka", "Apache Spark", "dbt", "Fivetran"],
            ml: ["Scikit-learn", "TensorFlow", "PyTorch", "MLflow", "Kubeflow"],
            databases: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch"]
        }
    },
    
    // Projects Information
    projects: {
        "real-time-analytics": {
            name: "Real-time Analytics Dashboard",
            description: "Built a comprehensive real-time analytics platform processing 1M+ events daily",
            technologies: ["Apache Kafka", "Apache Spark", "React", "Python", "PostgreSQL"],
            impact: "Reduced data processing time by 70%",
            duration: "6 months",
            team_size: "5 members"
        },
        "data-lake": {
            name: "Data Lake Architecture",
            description: "Designed and implemented a scalable data lake solution on AWS",
            technologies: ["AWS S3", "AWS Glue", "AWS Athena", "Lambda", "Python"],
            impact: "Reduced data processing time by 70%",
            duration: "8 months",
            team_size: "3 members"
        },
        "ml-pipeline": {
            name: "ML Model Pipeline",
            description: "Developed end-to-end ML pipeline for customer churn prediction",
            technologies: ["Python", "Scikit-learn", "Docker", "Kubernetes", "MLflow"],
            impact: "85% prediction accuracy",
            duration: "4 months",
            team_size: "4 members"
        },
        "bi-suite": {
            name: "Business Intelligence Suite",
            description: "Created comprehensive BI solution with automated reporting",
            technologies: ["Tableau", "Power BI", "SQL Server", "ETL", "Python"],
            impact: "Reduced manual analysis time by 80%",
            duration: "5 months",
            team_size: "6 members"
        },
        "cloud-warehouse": {
            name: "Cloud Data Warehouse",
            description: "Migrated legacy data warehouse to Snowflake",
            technologies: ["Snowflake", "dbt", "Airflow", "Fivetran", "Python"],
            impact: "300% query performance improvement, 40% cost reduction",
            duration: "10 months",
            team_size: "8 members"
        },
        "data-quality": {
            name: "Data Quality Framework",
            description: "Implemented automated data quality monitoring system",
            technologies: ["Great Expectations", "Python", "Slack API", "Docker"],
            impact: "95% data accuracy improvement",
            duration: "3 months",
            team_size: "2 members"
        }
    },
    
    // Experience Timeline
    experience: {
        "2024-present": {
            role: "Senior Data Engineer",
            company: "Tech Solutions Inc.",
            achievements: [
                "Architected cloud-based data platform serving 10M+ users",
                "Reduced data processing costs by 45% through optimization",
                "Implemented CI/CD pipelines for data workflows"
            ]
        },
        "2022-2024": {
            role: "Data Analytics Engineer",
            company: "DataCorp Analytics",
            achievements: [
                "Built real-time analytics dashboards with 99.9% uptime",
                "Deployed ML models with 85% prediction accuracy",
                "Led team of 4 data engineers"
            ]
        },
        "2021-2022": {
            role: "Data Analyst",
            company: "Analytics Pro",
            achievements: [
                "Created 50+ interactive dashboards using Tableau",
                "Automated reporting processes saving 20 hours/week",
                "Improved data accuracy by 95% through quality frameworks"
            ]
        },
        "2020-2021": {
            role: "Junior Data Analyst",
            company: "StartUp Analytics",
            achievements: [
                "Developed first ETL pipelines using Python",
                "Created monthly business reports",
                "Learned advanced SQL and statistical analysis"
            ]
        },
        "2019-2020": {
            role: "Data Analytics Intern",
            company: "Digital Solutions",
            achievements: [
                "Assisted in data collection and cleaning",
                "Created basic reports and visualizations",
                "Supported senior analysts in ad-hoc analysis"
            ]
        }
    },
    
    // Technical Knowledge Base
    technical: {
        "data-analytics": {
            definition: "Data analytics is the process of examining datasets to draw conclusions about the information they contain",
            key_concepts: ["Descriptive analytics", "Predictive analytics", "Prescriptive analytics", "Diagnostic analytics"],
            tools: ["Python", "R", "SQL", "Tableau", "Power BI", "Excel"],
            methodologies: ["CRISP-DM", "SEMMA", "KDD Process"]
        },
        "data-engineering": {
            definition: "Data engineering focuses on the practical application of data collection and processing",
            key_concepts: ["ETL/ELT", "Data pipelines", "Data warehousing", "Data lakes", "Real-time processing"],
            tools: ["Apache Kafka", "Apache Spark", "Airflow", "dbt", "Snowflake"],
            best_practices: ["Data quality", "Monitoring", "Scalability", "Security"]
        },
        "machine-learning": {
            definition: "Machine learning is a subset of AI that enables systems to learn and improve from experience",
            types: ["Supervised learning", "Unsupervised learning", "Reinforcement learning"],
            algorithms: ["Linear regression", "Random Forest", "Neural Networks", "Clustering"],
            frameworks: ["Scikit-learn", "TensorFlow", "PyTorch", "XGBoost"]
        },
        "cloud-computing": {
            definition: "Cloud computing delivers computing services over the internet",
            services: ["IaaS", "PaaS", "SaaS"],
            providers: ["AWS", "Azure", "GCP"],
            benefits: ["Scalability", "Cost-effectiveness", "Flexibility", "Reliability"]
        }
    },
    
    // Common Questions and Answers
    faq: {
        "what-is-data-analytics": "Data analytics is the process of examining datasets to draw conclusions about the information they contain. It involves using statistical analysis, machine learning, and visualization techniques to extract insights from data.",
        "what-tools-do-you-use": "I primarily use Python for data analysis and machine learning, SQL for database queries, and visualization tools like Tableau and Power BI. For cloud platforms, I work extensively with AWS services and Snowflake.",
        "what-is-your-experience": "I have 5+ years of experience in data analytics and engineering, progressing from intern to Senior Data Engineer. I've worked on projects ranging from basic reporting to complex ML pipelines and real-time analytics platforms.",
        "what-are-your-strengths": "My key strengths include building scalable data pipelines, implementing ML models, cloud architecture design, and leading cross-functional teams. I'm particularly strong in Python, SQL, AWS, and data visualization.",
        "how-can-you-help": "I can help with data analytics questions, technical implementations, project guidance, and career advice in the data field. I can explain complex concepts, suggest best practices, and provide code examples."
    }
};

// Simple Vector Search Implementation (without external dependencies)
class SimpleVectorSearch {
    constructor() {
        this.documents = [];
        this.embeddings = [];
        this.initializeDocuments();
    }
    
    initializeDocuments() {
        // Convert knowledge base to searchable documents
        this.documents = [
            // Personal info
            "Tarun is a Senior Data Engineer with 5+ years of experience in data analytics and engineering, located in San Francisco, CA.",
            
            // Skills
            "Python expertise: Expert level (95%) with 5 years experience in Pandas, NumPy, Scikit-learn for data analysis and machine learning.",
            "SQL expertise: Expert level (98%) with 5 years experience in PostgreSQL, MySQL, Snowflake for data querying and ETL processes.",
            "AWS expertise: Expert level (92%) with 4 years experience in S3, Glue, Athena, Lambda, EC2, RDS, Redshift services.",
            "Snowflake expertise: Expert level (90%) with 3 years experience in data warehousing, dbt integration, Snowpark, Streams.",
            
            // Projects
            "Real-time Analytics Dashboard: Built comprehensive platform processing 1M+ events daily using Apache Kafka, Spark, React, Python.",
            "Data Lake Architecture: Designed scalable AWS data lake solution using S3, Glue, Athena, Lambda, reducing processing time by 70%.",
            "ML Model Pipeline: Developed end-to-end ML pipeline for customer churn prediction with 85% accuracy using Python, Scikit-learn, Docker.",
            "Business Intelligence Suite: Created comprehensive BI solution with automated reporting using Tableau, Power BI, SQL Server, reducing manual time by 80%.",
            "Cloud Data Warehouse: Migrated legacy warehouse to Snowflake with dbt, Airflow, achieving 300% query performance improvement and 40% cost reduction.",
            "Data Quality Framework: Implemented automated monitoring system using Great Expectations, Python, achieving 95% data accuracy improvement.",
            
            // Experience
            "Senior Data Engineer at Tech Solutions Inc (2024-present): Architected cloud-based data platform serving 10M+ users, reduced costs by 45%.",
            "Data Analytics Engineer at DataCorp Analytics (2022-2024): Built real-time dashboards with 99.9% uptime, deployed ML models with 85% accuracy.",
            "Data Analyst at Analytics Pro (2021-2022): Created 50+ interactive dashboards using Tableau, automated reporting saving 20 hours/week.",
            "Junior Data Analyst at StartUp Analytics (2020-2021): Developed ETL pipelines using Python, created monthly business reports.",
            "Data Analytics Intern at Digital Solutions (2019-2020): Assisted in data collection and cleaning, created basic reports and visualizations.",
            
            // Technical concepts
            "Data analytics is the process of examining datasets to draw conclusions using statistical analysis, machine learning, and visualization.",
            "Data engineering focuses on practical application of data collection and processing, including ETL/ELT, data pipelines, warehousing.",
            "Machine learning is a subset of AI enabling systems to learn from experience, including supervised, unsupervised, and reinforcement learning.",
            "Cloud computing delivers computing services over the internet, providing scalability, cost-effectiveness, and flexibility through AWS, Azure, GCP.",
            
            // FAQ
            "Data analytics involves using statistical analysis, machine learning, and visualization techniques to extract insights from data.",
            "Primary tools include Python for analysis and ML, SQL for database queries, Tableau and Power BI for visualization, AWS and Snowflake for cloud platforms.",
            "5+ years experience progressing from intern to Senior Data Engineer, working on projects from basic reporting to complex ML pipelines.",
            "Key strengths include building scalable data pipelines, implementing ML models, cloud architecture design, and leading cross-functional teams.",
            "Can help with data analytics questions, technical implementations, project guidance, and career advice in the data field."
        ];
        
        // Create simple embeddings (TF-IDF style)
        this.embeddings = this.documents.map(doc => this.createSimpleEmbedding(doc));
    }
    
    createSimpleEmbedding(text) {
        // Simple tokenization and frequency counting
        const tokens = text.toLowerCase()
            .replace(/[^\w\s]/g, ' ')
            .split(/\s+/)
            .filter(token => token.length > 2);
        
        const embedding = {};
        tokens.forEach(token => {
            embedding[token] = (embedding[token] || 0) + 1;
        });
        
        return embedding;
    }
    
    cosineSimilarity(vec1, vec2) {
        const keys = new Set([...Object.keys(vec1), ...Object.keys(vec2)]);
        let dotProduct = 0;
        let norm1 = 0;
        let norm2 = 0;
        
        keys.forEach(key => {
            const val1 = vec1[key] || 0;
            const val2 = vec2[key] || 0;
            dotProduct += val1 * val2;
            norm1 += val1 * val1;
            norm2 += val2 * val2;
        });
        
        if (norm1 === 0 || norm2 === 0) return 0;
        return dotProduct / (Math.sqrt(norm1) * Math.sqrt(norm2));
    }
    
    search(query, topK = 3) {
        const queryEmbedding = this.createSimpleEmbedding(query);
        const similarities = this.embeddings.map((embedding, index) => ({
            index,
            similarity: this.cosineSimilarity(queryEmbedding, embedding)
        }));
        
        return similarities
            .sort((a, b) => b.similarity - a.similarity)
            .slice(0, topK)
            .map(result => ({
                document: this.documents[result.index],
                similarity: result.similarity
            }));
    }
}

// Chatbot Class
class Chatbot {
    constructor() {
        this.vectorSearch = new SimpleVectorSearch();
        this.chatHistory = [];
        this.isOpen = false;
        this.isTyping = false;
        
        this.initializeEventListeners();
    }
    
    initializeEventListeners() {
        const toggle = document.getElementById('chatbot-toggle');
        const container = document.getElementById('chatbot-container');
        const close = document.querySelector('.chatbot-close');
        const input = document.getElementById('chatbot-input');
        const sendButton = document.getElementById('chatbot-send');
        
        toggle.addEventListener('click', () => this.toggleChat());
        close.addEventListener('click', () => this.closeChat());
        sendButton.addEventListener('click', () => this.sendMessage());
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                this.sendMessage();
            }
        });
        
        // Auto-focus input when chat opens
        container.addEventListener('animationend', () => {
            if (this.isOpen) {
                input.focus();
            }
        });
    }
    
    toggleChat() {
        this.isOpen = !this.isOpen;
        const container = document.getElementById('chatbot-container');
        
        if (this.isOpen) {
            container.classList.add('active');
            document.getElementById('chatbot-input').focus();
        } else {
            container.classList.remove('active');
        }
    }
    
    closeChat() {
        this.isOpen = false;
        document.getElementById('chatbot-container').classList.remove('active');
    }
    
    async sendMessage() {
        const input = document.getElementById('chatbot-input');
        const message = input.value.trim();
        
        if (!message) return;
        
        // Clear input
        input.value = '';
        
        // Add user message to chat
        this.addMessage(message, 'user');
        
        // Show typing indicator
        this.showTyping();
        
        try {
            // Get response using RAG system
            const response = await this.getResponse(message);
            this.hideTyping();
            this.addMessage(response, 'bot');
        } catch (error) {
            this.hideTyping();
            this.addMessage('Sorry, I encountered an error. Please try again.', 'bot');
            console.error('Chatbot error:', error);
        }
    }
    
    addMessage(content, sender) {
        const messagesContainer = document.getElementById('chatbot-messages');
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;
        
        const avatar = document.createElement('div');
        avatar.className = 'message-avatar';
        avatar.innerHTML = sender === 'user' ? '<i class="fas fa-user"></i>' : '<i class="fas fa-robot"></i>';
        
        const messageContent = document.createElement('div');
        messageContent.className = 'message-content';
        messageContent.innerHTML = this.formatMessage(content);
        
        messageDiv.appendChild(avatar);
        messageDiv.appendChild(messageContent);
        messagesContainer.appendChild(messageDiv);
        
        // Scroll to bottom
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
        
        // Store in chat history
        this.chatHistory.push({ role: sender, content });
    }
    
    formatMessage(content) {
        // Basic formatting for better readability
        return content
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\*(.*?)\*/g, '<em>$1</em>')
            .replace(/\n/g, '<br>')
            .replace(/•/g, '&bull;');
    }
    
    showTyping() {
        this.isTyping = true;
        const typingIndicator = document.getElementById('chatbot-typing');
        typingIndicator.style.display = 'flex';
        
        // Disable input while typing
        const input = document.getElementById('chatbot-input');
        const sendButton = document.getElementById('chatbot-send');
        input.disabled = true;
        sendButton.disabled = true;
    }
    
    hideTyping() {
        this.isTyping = false;
        const typingIndicator = document.getElementById('chatbot-typing');
        typingIndicator.style.display = 'none';
        
        // Re-enable input
        const input = document.getElementById('chatbot-input');
        const sendButton = document.getElementById('chatbot-send');
        input.disabled = false;
        sendButton.disabled = false;
        input.focus();
    }
    
    async getResponse(userMessage) {
        // Step 1: Retrieve relevant documents using RAG
        const relevantDocs = this.vectorSearch.search(userMessage, 3);
        
        // Step 2: Create context from retrieved documents
        const context = relevantDocs
            .filter(doc => doc.similarity > 0.1)
            .map(doc => doc.document)
            .join('\n\n');
        
        // Step 3: Check for direct matches in FAQ
        const faqResponse = this.checkFAQ(userMessage);
        if (faqResponse) {
            return faqResponse;
        }
        
        // Step 4: Check for specific information requests
        const specificResponse = this.handleSpecificQueries(userMessage, context);
        if (specificResponse) {
            return specificResponse;
        }
        
        // Step 5: Use OpenRouter API with context (if API key is provided)
        if (CHATBOT_CONFIG.openrouterApiKey !== 'YOUR_OPENROUTER_API_KEY') {
            return await this.getOpenRouterResponse(userMessage, context);
        }
        
        // Step 6: Fallback to rule-based responses
        return this.getFallbackResponse(userMessage, context);
    }
    
    checkFAQ(userMessage) {
        const message = userMessage.toLowerCase();
        
        if (message.includes('what is data analytics') || message.includes('define data analytics')) {
            return KNOWLEDGE_BASE.faq['what-is-data-analytics'];
        }
        
        if (message.includes('what tools') || message.includes('which tools')) {
            return KNOWLEDGE_BASE.faq['what-tools-do-you-use'];
        }
        
        if (message.includes('your experience') || message.includes('how long')) {
            return KNOWLEDGE_BASE.faq['what-is-your-experience'];
        }
        
        if (message.includes('your strengths') || message.includes('what are you good at')) {
            return KNOWLEDGE_BASE.faq['what-are-your-strengths'];
        }
        
        if (message.includes('how can you help') || message.includes('what can you do')) {
            return KNOWLEDGE_BASE.faq['how-can-you-help'];
        }
        
        return null;
    }
    
    handleSpecificQueries(userMessage, context) {
        const message = userMessage.toLowerCase();
        
        // Personal information queries
        if (message.includes('tarun') && (message.includes('contact') || message.includes('email') || message.includes('phone'))) {
            return `You can contact Tarun at:\n• Email: ${KNOWLEDGE_BASE.personal.email}\n• Phone: ${KNOWLEDGE_BASE.personal.phone}\n• Location: ${KNOWLEDGE_BASE.personal.location}`;
        }
        
        // Project queries
        if (message.includes('project') || message.includes('portfolio')) {
            const projectNames = Object.values(KNOWLEDGE_BASE.projects).map(p => p.name).join(', ');
            return `Tarun has worked on several key projects including: ${projectNames}. Would you like to know more about any specific project?`;
        }
        
        // Skills queries
        if (message.includes('skill') || message.includes('technology') || message.includes('programming')) {
            return `Tarun's key technical skills include:\n• **Programming**: Python (95%), SQL (98%), R (80%), JavaScript (75%)\n• **Cloud Platforms**: AWS (92%), Snowflake (90%)\n• **Tools**: Tableau, Power BI, Apache Spark, Kafka, Airflow\n• **Databases**: PostgreSQL, MongoDB, Redis`;
        }
        
        // Experience queries
        if (message.includes('experience') || message.includes('career') || message.includes('background')) {
            return `Tarun has ${KNOWLEDGE_BASE.personal.experience} of experience in data analytics and engineering. He started as a Data Analytics Intern in 2019 and has progressed to Senior Data Engineer, working at companies like Tech Solutions Inc., DataCorp Analytics, and Analytics Pro.`;
        }
        
        // Technical concept queries
        if (message.includes('machine learning') || message.includes('ml')) {
            return `Machine learning is a subset of AI that enables systems to learn from experience. Key types include supervised learning (predicting outcomes), unsupervised learning (finding patterns), and reinforcement learning (learning through trial and error). Popular frameworks include Scikit-learn, TensorFlow, and PyTorch.`;
        }
        
        if (message.includes('data engineering') || message.includes('etl')) {
            return `Data engineering focuses on building and maintaining data infrastructure. Key concepts include ETL/ELT processes, data pipelines, data warehousing, and data lakes. Popular tools include Apache Kafka, Spark, Airflow, dbt, and cloud platforms like AWS and Snowflake.`;
        }
        
        return null;
    }
    
    async getOpenRouterResponse(userMessage, context) {
        const messages = [
            {
                role: 'system',
                content: `You are Tarun's AI assistant, a helpful expert in data analytics and engineering. Use the following context about Tarun to answer questions accurately and professionally:

${context}

Always be helpful, accurate, and professional. If you don't know something specific about Tarun, say so and offer to help with general data analytics questions instead.`
            },
            ...this.chatHistory.slice(-5), // Include recent chat history
            {
                role: 'user',
                content: userMessage
            }
        ];
        
        try {
            const response = await fetch(CHATBOT_CONFIG.openrouterUrl, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${CHATBOT_CONFIG.openrouterApiKey}`,
                    'Content-Type': 'application/json',
                    'HTTP-Referer': window.location.origin,
                    'X-Title': 'Tarun Portfolio Chatbot'
                },
                body: JSON.stringify({
                    model: CHATBOT_CONFIG.model,
                    messages: messages,
                    max_tokens: CHATBOT_CONFIG.maxTokens,
                    temperature: CHATBOT_CONFIG.temperature
                })
            });
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            return data.choices[0].message.content;
        } catch (error) {
            console.error('OpenRouter API error:', error);
            throw error;
        }
    }
    
    getFallbackResponse(userMessage, context) {
        const message = userMessage.toLowerCase();
        
        // Default responses based on context
        if (context.includes('Python')) {
            return `I can help you with Python-related questions! Tarun has expert-level Python skills (95%) with 5 years of experience in data analysis, machine learning, and building web APIs. He's proficient in Pandas, NumPy, Scikit-learn, and various frameworks. What specific Python topic would you like to know about?`;
        }
        
        if (context.includes('SQL')) {
            return `Great question about SQL! Tarun has expert-level SQL skills (98%) and works extensively with PostgreSQL, MySQL, Snowflake, and SQL Server. He uses SQL for data querying, ETL processes, data modeling, and performance optimization. What SQL topic can I help you with?`;
        }
        
        if (context.includes('AWS') || context.includes('cloud')) {
            return `I can help with cloud and AWS questions! Tarun has expert-level AWS expertise (92%) with 4 years of experience. He works with S3, Glue, Athena, Lambda, EC2, RDS, Redshift, and has AWS certifications. He's also experienced with Snowflake for data warehousing. What cloud topic interests you?`;
        }
        
        if (context.includes('project')) {
            return `Tarun has worked on several impressive projects! Some highlights include building a real-time analytics platform processing 1M+ events daily, designing a scalable data lake architecture that reduced processing time by 70%, and developing ML pipelines with 85% prediction accuracy. Which type of project are you most interested in learning about?`;
        }
        
        // Generic helpful response
        return `I'd be happy to help! As Tarun's AI assistant, I can answer questions about data analytics, data engineering, machine learning, cloud technologies, and Tarun's specific experience and projects. Could you be more specific about what you'd like to know?`;
    }
}

// Initialize chatbot when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const chatbot = new Chatbot();
    
    // Add some initial helpful suggestions
    const suggestions = [
        "What are Tarun's main skills?",
        "Tell me about his projects",
        "What is data analytics?",
        "How can I contact Tarun?",
        "What tools does he use?"
    ];
    
    // Add suggestion buttons (optional enhancement)
    setTimeout(() => {
        const messagesContainer = document.getElementById('chatbot-messages');
        const suggestionContainer = document.createElement('div');
        suggestionContainer.className = 'suggestion-container';
        suggestionContainer.style.cssText = `
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-top: 10px;
        `;
        
        suggestions.forEach(suggestion => {
            const button = document.createElement('button');
            button.textContent = suggestion;
            button.className = 'suggestion-button';
            button.style.cssText = `
                background: #f1f5f9;
                border: 1px solid #e2e8f0;
                border-radius: 15px;
                padding: 6px 12px;
                font-size: 0.8rem;
                cursor: pointer;
                transition: all 0.2s ease;
            `;
            
            button.addEventListener('click', () => {
                document.getElementById('chatbot-input').value = suggestion;
                chatbot.sendMessage();
            });
            
            button.addEventListener('mouseenter', () => {
                button.style.background = '#e2e8f0';
            });
            
            button.addEventListener('mouseleave', () => {
                button.style.background = '#f1f5f9';
            });
            
            suggestionContainer.appendChild(button);
        });
        
        messagesContainer.appendChild(suggestionContainer);
    }, 1000);
});

// Export for potential external use
window.Chatbot = Chatbot;
window.KNOWLEDGE_BASE = KNOWLEDGE_BASE;
