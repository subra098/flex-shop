import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { 
  Calendar, 
  User, 
  Clock, 
  Search,
  ArrowRight,
  BookOpen,
  TrendingUp,
  Lightbulb,
  Award
} from "lucide-react";
import { blogPosts } from "../data/mock";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const categories = ["All", ...new Set(blogPosts.map(post => post.category))];
  
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts[0];
  const recentPosts = blogPosts.slice(1);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-blue-100 text-blue-700 mb-4">
              Blog & Insights
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Industry <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Insights</span> & Tips
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Stay updated with the latest trends in printing technology, design tips, 
              and industry insights from our team of experts.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12 text-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-purple-100 text-purple-700 mb-4">Featured Article</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Don't Miss Our Latest Insights
            </h2>
          </div>

          <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative overflow-hidden">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-80 md:h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <Badge className="absolute top-4 left-4 bg-blue-600 text-white">
                  {featuredPost.category}
                </Badge>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
                    {featuredPost.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white w-fit">
                    Read Full Article
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-12 bg-gray-50 border-y">
        <div className="container mx-auto px-4">
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-2 lg:grid-cols-4">
              {categories.map((category) => (
                <TabsTrigger key={category} value={category} className="text-sm">
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Latest Articles
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover insights, tips, and industry trends that will help you 
              make informed decisions for your printing projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <Badge className="absolute top-4 left-4 bg-white/90 text-gray-800">
                    {post.category}
                  </Badge>
                </div>
                
                <CardHeader>
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <CardTitle className="text-xl font-bold group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <Button variant="outline" size="sm" className="group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      Read More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No articles found</h3>
              <p className="text-gray-500">Try adjusting your search terms or category filter</p>
            </div>
          )}
        </div>
      </section>

      {/* Categories Showcase */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-green-100 text-green-700 mb-4">Content Categories</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Explore Our Topics
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From industry trends to practical tips, we cover everything you need 
              to know about modern printing solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Industry Trends",
                description: "Latest developments in printing technology and market insights",
                icon: TrendingUp,
                color: "bg-blue-100 text-blue-600",
                count: blogPosts.filter(p => p.category === "Industry Trends").length
              },
              {
                title: "Design Tips",
                description: "Creative guidance for effective visual communication",
                icon: Lightbulb,
                color: "bg-yellow-100 text-yellow-600",
                count: blogPosts.filter(p => p.category === "Design Tips").length
              },
              {
                title: "Materials Guide",
                description: "Comprehensive guides on printing materials and finishes",
                icon: BookOpen,
                color: "bg-green-100 text-green-600",
                count: blogPosts.filter(p => p.category === "Materials Guide").length
              },
              {
                title: "Success Stories",
                description: "Case studies and client success stories",
                icon: Award,
                color: "bg-purple-100 text-purple-600",
                count: 2 // Mock count
              }
            ].map((category, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 group cursor-pointer">
                <CardHeader>
                  <div className={`w-16 h-16 ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <category.icon className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl font-bold">{category.title}</CardTitle>
                  <Badge variant="secondary" className="w-fit mx-auto">
                    {category.count} articles
                  </Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {category.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Stay Updated
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Subscribe to our newsletter and never miss the latest industry insights, 
            design tips, and printing trends.
          </p>
          
          <div className="max-w-md mx-auto flex space-x-4 mb-8">
            <Input 
              placeholder="Enter your email address"
              className="bg-white/10 border-white/20 text-white placeholder:text-white/70 flex-1"
            />
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8">
              Subscribe
            </Button>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-medium">
                Contact Our Experts
              </Button>
            </Link>
            <Link to="/quote">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-medium">
                Get Free Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;