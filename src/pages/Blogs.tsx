import { useState } from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const sampleBlogs = [
  {
    id: 1,
    title: 'The Future of Remote Work: Trends Shaping 2024',
    excerpt:
      'Explore how remote work is evolving and what it means for businesses and professionals in the coming year.',
    author: 'Sarah Johnson',
    date: 'March 15, 2024',
    readTime: '5 min read',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    category: 'Remote Work',
  },
  {
    id: 2,
    title: 'Wellness in the Workplace: Creating Healthier Work Environments',
    excerpt:
      'Discover innovative approaches to employee wellness that boost productivity and job satisfaction.',
    author: 'Dr. Michael Chen',
    date: 'March 10, 2024',
    readTime: '7 min read',
    image:
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80',
    category: 'Wellness',
  },
  {
    id: 3,
    title: 'Global Talent Acquisition: Strategies for Success',
    excerpt:
      'Learn how to build diverse, global teams that drive innovation and growth across international markets.',
    author: 'Emma Rodriguez',
    date: 'March 5, 2024',
    readTime: '6 min read',
    image:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71b?auto=format&fit=crop&w=800&q=80',
    category: 'Talent',
  },
  {
    id: 4,
    title: "Altitude Group's Journey: From Vision to Global Impact",
    excerpt:
      'A behind-the-scenes look at how Altitude Group has grown to serve clients worldwide.',
    author: 'Altitude Group Team',
    date: 'February 28, 2024',
    readTime: '4 min read',
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
    category: 'Company',
  },
  {
    id: 5,
    title: 'Movement Therapy: Revolutionizing Physical Wellness',
    excerpt:
      'How movement therapy is transforming approaches to physical health and rehabilitation.',
    author: 'Dr. Lisa Thompson',
    date: 'February 20, 2024',
    readTime: '8 min read',
    image:
      'https://images.unsplash.com/photo-1544367565-4f48adf39b4c?auto=format&fit=crop&w=800&q=80',
    category: 'Therapy',
  },
  {
    id: 6,
    title: 'The Altitude Trinity: Integrating Mind, Body, and Spirit',
    excerpt:
      'Understanding the holistic approach that makes our wellness programs truly transformative.',
    author: 'James Wilson',
    date: 'February 15, 2024',
    readTime: '5 min read',
    image:
      'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=800&q=80',
    category: 'Wellness',
  },
];

const Blogs = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Remote Work',
    'Wellness',
    'Talent',
    'Company',
    'Therapy',
  ];

  const filteredBlogs =
    selectedCategory === 'All'
      ? sampleBlogs
      : sampleBlogs.filter((blog) => blog.category === selectedCategory);

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50'>
      {/* Hero Section */}
      <section className='relative py-20 bg-gradient-to-r from-black via-gray-900 to-black'>
        <div className='absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20'></div>
        <div className='relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-center'>
          <h1 className='text-4xl md:text-6xl font-bold text-white mb-6'>
            Altitude Insights
          </h1>
          <p className='text-xl text-white/80 max-w-3xl mx-auto leading-relaxed'>
            Explore our latest thoughts on wellness, talent acquisition, global
            business strategies, and the innovative approaches that are shaping
            the future of work and well-being.
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <section className='py-16'>
        <div className='max-w-7xl mx-auto px-6 md:px-12 lg:px-20'>
          {/* Category Filter */}
          <div className='flex flex-wrap gap-4 mb-12 justify-center'>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-black text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {filteredBlogs.map((blog) => (
              <article
                key={blog.id}
                className='group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer'
              >
                <div className='relative overflow-hidden'>
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className='w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300'
                  />
                  <div className='absolute top-4 left-4 bg-black/80 text-white px-3 py-1 rounded-full text-xs font-medium'>
                    {blog.category}
                  </div>
                </div>

                <div className='p-6'>
                  <div className='flex items-center gap-4 text-sm text-gray-500 mb-3'>
                    <div className='flex items-center gap-2'>
                      <User size={16} />
                      <span>{blog.author}</span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <Calendar size={16} />
                      <span>{blog.date}</span>
                    </div>
                  </div>

                  <h3 className='text-xl font-semibold text-gray-900 mb-3 group-hover:text-black transition-colors'>
                    {blog.title}
                  </h3>

                  <p className='text-gray-600 mb-4 leading-relaxed'>
                    {blog.excerpt}
                  </p>

                  <div className='flex items-center justify-between'>
                    <span className='text-sm text-gray-500'>
                      {blog.readTime}
                    </span>
                    <button className='flex items-center gap-2 text-black font-medium group-hover:text-gray-700 transition-colors'>
                      Read More
                      <ArrowRight
                        size={16}
                        className='group-hover:translate-x-1 transition-transform'
                      />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className='mt-20 bg-gradient-to-r from-black to-gray-800 rounded-3xl p-8 md:p-12 text-center'>
            <h2 className='text-2xl md:text-3xl font-bold text-white mb-4'>
              Stay Updated with Altitude Insights
            </h2>
            <p className='text-white/80 mb-8 max-w-2xl mx-auto'>
              Subscribe to our newsletter and receive the latest articles,
              industry insights, and wellness tips directly to your inbox.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 max-w-md mx-auto'>
              <input
                type='email'
                placeholder='Your email address'
                className='flex-1 px-4 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50'
              />
              <button className='bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors'>
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
