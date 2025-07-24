import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { 
  Award, 
  Users, 
  Target, 
  Heart,
  ArrowRight,
  Linkedin,
  Mail,
  Calendar,
  MapPin,
  TrendingUp,
  CheckCircle
} from "lucide-react";
import { teamMembers, stats } from "../data/mock";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-700">
                  About FlexPrints
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
                  Crafting <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Visual Excellence</span> Since 2015
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  We are a leading flex printing company dedicated to transforming your 
                  ideas into stunning visual displays that capture attention and drive results.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                {stats.slice(0, 2).map((stat) => (
                  <div key={stat.id} className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-3xl font-bold text-blue-600 mb-1">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>

              <Link to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8">
                  Get In Touch
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img
                    src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=200&fit=crop"
                    alt="Flex printing services"
                    className="w-full h-48 object-cover rounded-2xl shadow-lg"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1541746972996-4e0b0f93e586?w=300&h=150&fit=crop"
                    alt="Digital signage"
                    className="w-full h-32 object-cover rounded-2xl shadow-lg"
                  />
                </div>
                <div className="space-y-4 pt-8">
                  <img
                    src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=300&h=150&fit=crop"
                    alt="Vehicle wraps"
                    className="w-full h-32 object-cover rounded-2xl shadow-lg"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=300&h=200&fit=crop"
                    alt="Wall murals"
                    className="w-full h-48 object-cover rounded-2xl shadow-lg"
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 rounded-2xl shadow-xl">
                <div className="text-2xl font-bold">10+</div>
                <div className="text-sm opacity-90">Years Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-all duration-300 group">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Target className="w-8 h-8" />
                </div>
                <CardTitle className="text-2xl font-bold">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  To provide exceptional printing solutions that help businesses 
                  communicate their message effectively and achieve their marketing goals 
                  through innovative visual displays.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 group">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Award className="w-8 h-8" />
                </div>
                <CardTitle className="text-2xl font-bold">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  To be the leading printing company in India, known for quality, 
                  innovation, and customer satisfaction, while continuously pushing 
                  the boundaries of what's possible in visual communication.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 group">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Heart className="w-8 h-8" />
                </div>
                <CardTitle className="text-2xl font-bold">Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  Quality craftsmanship, customer-first approach, innovative solutions, 
                  timely delivery, and sustainable practices form the foundation 
                  of everything we do at FlexPrints.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="bg-purple-100 text-purple-700 mb-4">Our Story</Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                A Decade of Innovation
              </h2>
              <p className="text-xl text-gray-600">
                From humble beginnings to industry leadership, here's our journey.
              </p>
            </div>

            <div className="space-y-12">
              {[
                {
                  year: "2015",
                  title: "The Beginning",
                  description: "FlexPrints was founded with a vision to revolutionize the printing industry in India. Starting with a small team and basic equipment, we focused on quality and customer satisfaction.",
                  icon: "🚀"
                },
                {
                  year: "2018",
                  title: "Expansion Phase",
                  description: "Expanded our services to include vehicle wraps and digital signage. Opened our second facility and grew our team to 25+ professionals.",
                  icon: "📈"
                },
                {
                  year: "2020",
                  title: "Technology Upgrade",
                  description: "Invested in state-of-the-art printing equipment and implemented digital workflows. Launched our online quote system and customer portal.",
                  icon: "⚡"
                },
                {
                  year: "2023",
                  title: "Market Leadership",
                  description: "Achieved recognition as one of the top printing companies in North India. Completed 10,000+ projects and served 3,000+ clients.",
                  icon: "🏆"
                },
                {
                  year: "2025",
                  title: "Future Forward",
                  description: "Continuing to innovate with sustainable materials, AI-powered design tools, and expanding our service offerings across India.",
                  icon: "🌟"
                }
              ].map((milestone, index) => (
                <div key={index} className="flex items-start space-x-6 group">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="flex-1 bg-white rounded-lg p-6 shadow-sm group-hover:shadow-md transition-shadow">
                    <div className="flex items-center space-x-3 mb-3">
                      <span className="text-2xl">{milestone.icon}</span>
                      <h3 className="text-xl font-bold text-gray-900">{milestone.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-700 mb-4">Our Team</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Meet the Experts
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our talented team of professionals brings together decades of experience 
              in printing, design, and customer service to deliver exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.id} className="text-center hover:shadow-xl transition-all duration-300 group">
                <CardHeader>
                  <div className="relative mx-auto mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full object-cover mx-auto group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-2 border-white"></div>
                  </div>
                  <CardTitle className="text-xl font-bold">{member.name}</CardTitle>
                  <p className="text-blue-600 font-semibold">{member.position}</p>
                  <p className="text-sm text-gray-500">{member.experience}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {member.description}
                  </p>
                  <div className="space-y-2 mb-4">
                    <p className="text-xs font-semibold text-gray-700">Expertise:</p>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {member.expertise.map((skill, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-center space-x-3">
                    <Button size="sm" variant="outline" className="p-2">
                      <Mail className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="p-2">
                      <Linkedin className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-green-100 text-green-700 mb-4">Why Choose Us</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              What Sets Us Apart
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence and customer satisfaction has made us 
              the preferred choice for businesses across India.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Quality Assurance",
                description: "Rigorous quality checks at every stage ensure consistent, professional results.",
                icon: CheckCircle,
                color: "text-green-600"
              },
              {
                title: "Experienced Team",
                description: "15+ years of combined experience in printing, design, and project management.",
                icon: Users,
                color: "text-blue-600"
              },
              {
                title: "Latest Technology",
                description: "State-of-the-art equipment and modern techniques for superior output quality.",
                icon: TrendingUp,
                color: "text-purple-600"
              },
              {
                title: "On-Time Delivery",
                description: "98% on-time delivery rate with efficient project management and planning.",
                icon: Calendar,
                color: "text-orange-600"
              },
              {
                title: "Pan-India Service",
                description: "Service network across major cities with local installation support.",
                icon: MapPin,
                color: "text-red-600"
              },
              {
                title: "Customer Support",
                description: "Dedicated support team available 24/7 for queries and assistance.",
                icon: Heart,
                color: "text-pink-600"
              }
            ].map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 group">
                <CardHeader>
                  <feature.icon className={`w-12 h-12 ${feature.color} mb-4 group-hover:scale-110 transition-transform`} />
                  <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of satisfied clients who trust FlexPrints for their 
            printing needs. Let's create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/quote">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-medium">
                Get Started Today
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-medium">
                Contact Our Team
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;