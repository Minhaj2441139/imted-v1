export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  author: string
  category: string
  tags: string[]
  image: string
  publishedAt: string
  readTime: number
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "How AI is Revolutionizing Energy Management",
    slug: "ai-revolutionizing-energy-management",
    excerpt:
      "Discover how artificial intelligence is transforming the way we monitor and optimize energy consumption in buildings.",
    content: `Artificial intelligence has become a game-changer in the energy management industry. By analyzing vast amounts of data in real-time, AI systems can predict energy consumption patterns, identify inefficiencies, and automatically optimize building systems.

Our AI Energy Assistant uses machine learning algorithms to learn your building's unique energy profile. Over time, it becomes increasingly accurate at predicting consumption and detecting anomalies that could indicate equipment failures or inefficiencies.

Key benefits include:
- 30-40% reduction in energy costs
- Early detection of equipment failures
- Automated optimization of HVAC systems
- Real-time anomaly alerts
- Predictive maintenance scheduling

The future of energy management is intelligent, automated, and sustainable.`,
    author: "Asheka Arafa",
    category: "Technology",
    tags: ["AI", "Energy", "Optimization", "Machine Learning"],
    image: "/ai-energy-management-dashboard.jpg",
    publishedAt: "2024-01-15",
    readTime: 5,
  },
  {
    id: "2",
    title: "Carbon-Neutral Buildings: The Future is Now",
    slug: "carbon-neutral-buildings-future",
    excerpt:
      "Learn how modern buildings are achieving carbon neutrality through smart energy management and renewable integration.",
    content: `Carbon-neutral buildings are no longer a distant dream—they're becoming a reality. With the right combination of renewable energy sources, efficient systems, and intelligent management, any building can achieve carbon neutrality.

The path to carbon neutrality involves:
1. Energy efficiency improvements
2. Renewable energy integration (solar, wind)
3. Smart building management systems
4. Behavioral changes and awareness
5. Carbon offset programs

Our AI Energy Assistant plays a crucial role in this journey by optimizing energy consumption and identifying opportunities for improvement. By reducing waste and maximizing efficiency, buildings can significantly lower their carbon footprint.

Join us in building a sustainable future, one building at a time.`,
    author: "Shahnewaz Shuva",
    category: "Sustainability",
    tags: ["Carbon Neutral", "Sustainability", "Green Energy", "Environment"],
    image: "/sustainable-carbon-neutral-building.jpg",
    publishedAt: "2024-01-10",
    readTime: 6,
  },
  {
    id: "3",
    title: "Anomaly Detection: Catching Problems Before They Happen",
    slug: "anomaly-detection-predictive-maintenance",
    excerpt:
      "Explore how anomaly detection technology helps identify equipment failures and inefficiencies before they become costly problems.",
    content: `Anomaly detection is one of the most powerful features of modern energy management systems. By establishing baseline patterns and identifying deviations, AI can catch problems early.

Common anomalies detected by our system:
- Unexpected spikes in consumption
- Equipment operating outside normal parameters
- HVAC system inefficiencies
- Sensor malfunctions
- Occupancy pattern changes

Early detection means:
- Reduced downtime
- Lower repair costs
- Improved occupant comfort
- Extended equipment lifespan
- Better energy efficiency

Our AI Energy Assistant continuously monitors your building's energy profile and alerts you to any unusual patterns. This proactive approach saves money and prevents emergencies.`,
    author: "Sagar Shahriar",
    category: "Technology",
    tags: ["Anomaly Detection", "Predictive Maintenance", "AI", "Monitoring"],
    image: "/anomaly-detection-monitoring-system.jpg",
    publishedAt: "2024-01-05",
    readTime: 4,
  },
  {
    id: "4",
    title: "Real-Time Energy Monitoring: See Your Data Live",
    slug: "real-time-energy-monitoring",
    excerpt: "Understand the importance of real-time energy monitoring and how it enables better decision-making.",
    content: `Real-time energy monitoring provides instant visibility into your building's energy consumption. Instead of waiting for monthly utility bills, you can see exactly how much energy is being used at any moment.

Benefits of real-time monitoring:
- Immediate identification of issues
- Better occupant awareness
- Faster response to problems
- Data-driven decision making
- Continuous optimization

With our dashboard, you can:
- View live energy consumption
- Compare real vs predicted usage
- Identify peak consumption times
- Track cost savings
- Generate automated reports

Real-time data is the foundation of effective energy management.`,
    author: "Asheka Arafa",
    category: "Features",
    tags: ["Monitoring", "Real-time", "Dashboard", "Data"],
    image: "/real-time-energy-monitoring-dashboard.jpg",
    publishedAt: "2023-12-28",
    readTime: 3,
  },
  {
    id: "5",
    title: "Spot Market Access: Maximize Your Energy Savings",
    slug: "spot-market-access-savings",
    excerpt: "Learn how accessing spot markets can help you buy energy at the lowest prices and maximize your savings.",
    content: `Spot markets offer dynamic pricing for electricity, allowing savvy energy managers to buy power when prices are lowest. Our AI Energy Assistant integrates with spot markets to automatically optimize your purchasing strategy.

How spot market access works:
- Real-time price monitoring
- Automated buying decisions
- Load shifting strategies
- Battery storage optimization
- Peak shaving

Potential savings:
- 15-25% reduction in energy costs
- Reduced peak demand charges
- Better utilization of renewable energy
- Improved grid stability

By leveraging spot markets, your building can become a smart energy consumer that benefits from market dynamics.`,
    author: "Shahnewaz Shuva",
    category: "Features",
    tags: ["Spot Market", "Cost Reduction", "Energy Trading", "Optimization"],
    image: "/energy-spot-market-trading.jpg",
    publishedAt: "2023-12-20",
    readTime: 5,
  },
  {
    id: "6",
    title: "Automatic Reports: Stay Informed Without the Effort",
    slug: "automatic-reports-insights",
    excerpt:
      "Discover how automated reporting keeps you informed about your building's energy performance without manual work.",
    content: `Manual energy reporting is time-consuming and error-prone. Our automatic reporting system generates comprehensive insights and delivers them directly to your inbox.

What's included in automatic reports:
- Daily energy consumption summaries
- Weekly trend analysis
- Monthly cost breakdowns
- Anomaly alerts and recommendations
- Comparison with similar buildings
- Predictive forecasts

Customization options:
- Choose report frequency
- Select metrics to track
- Set alert thresholds
- Share with stakeholders
- Export for analysis

Automated reports save time and ensure you never miss important insights about your building's energy performance.`,
    author: "Sagar Shahriar",
    category: "Features",
    tags: ["Reports", "Automation", "Analytics", "Insights"],
    image: "/automated-energy-reports-analytics.jpg",
    publishedAt: "2023-12-15",
    readTime: 4,
  },
]

export const categories = ["Technology", "Sustainability", "Features", "Case Studies", "Industry News"]
export const allTags = Array.from(new Set(blogPosts.flatMap((post) => post.tags)))
