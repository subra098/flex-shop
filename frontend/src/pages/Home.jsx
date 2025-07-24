import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { 
  ArrowRight, 
  Star, 
  CheckCircle, 
  Truck, 
  Shield, 
  Clock,
  Users,
  Trophy,
  Zap
} from "lucide-react";
import { services, portfolioItems, testimonials, stats } from "../data/mock";

const Home = () => {
  const featuredServices = services.slice(0, 3);
  const featuredProjects = portfolioItems.slice(0, 3);
  const featuredTestimonials = testimonials.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">
                  🎉 Premium Printing Solutions Since 2015
                </Badge>
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                    FlexPrints
                  </span>
                  <br />
                  <span className="text-gray-900">Your Vision,</span>
                  <br />
                  <span className="text-gray-700">Our Expertise</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                  Transform your ideas into stunning visual displays with our premium 
                  flex printing, digital signage, and vehicle wrapping services.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/quote">
                  <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-medium group">
                    Get Free Quote
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/portfolio">
                  <Button size="lg" variant="outline" className="px-8 py-4 text-lg font-medium border-2 hover:bg-gray-50">
                    View Portfolio
                  </Button>
                </Link>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    {featuredTestimonials.map((testimonial, index) => (
                      <img
                        key={index}
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-10 h-10 rounded-full border-2 border-white object-cover"
                      />
                    ))}
                  </div>
                  <div>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-sm text-gray-600">5000+ Happy Clients</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 bg-white rounded-3xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop"
                  alt="Premium flex printing services"
                  className="w-full h-80 object-cover rounded-2xl"
                />
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                  Premium Quality ✨
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 rounded-2xl shadow-xl">
                <div className="text-2xl font-bold">24hr</div>
                <div className="text-sm opacity-90">Rush Delivery</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.id} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-xl font-semibold mb-1">{stat.label}</div>
                <div className="text-blue-100 text-sm">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-700 mb-4">Why Choose Us</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Excellence in Every Print
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge technology with years of expertise to deliver 
              outstanding results that exceed expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Premium Quality",
                description: "UV-resistant inks and weather-proof materials ensure long-lasting results.",
                color: "bg-blue-100 text-blue-600"
              },
              {
                icon: Clock,
                title: "Fast Turnaround",
                description: "Rush orders completed in 24 hours with same quality standards.",
                color: "bg-green-100 text-green-600"
              },
              {
                icon: Users,
                title: "Expert Team",
                description: "15+ years of combined experience in printing and design.",
                color: "bg-purple-100 text-purple-600"
              },
              {
                icon: Truck,
                title: "Free Installation",
                description: "Professional installation services included with large orders.",
                color: "bg-orange-100 text-orange-600"
              },
              {
                icon: Trophy,
                title: "Award Winning",
                description: "Recognized for excellence in quality and customer service.",
                color: "bg-yellow-100 text-yellow-600"
              },
              {
                icon: Zap,
                title: "Latest Technology",
                description: "State-of-the-art printing equipment for superior results.",
                color: "bg-red-100 text-red-600"
              }
            ].map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 group hover:-translate-y-2">
                <CardHeader>
                  <div className={`w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-purple-100 text-purple-700 mb-4">Our Services</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Complete Printing Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to completion, we offer comprehensive printing services 
              tailored to your specific needs and requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredServices.map((service) => (
              <Card key={service.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white/90 text-gray-800">
                      {service.category}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-blue-600">
                      Starting {service.startingPrice}
                    </span>
                    <Button variant="outline" size="sm">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to="/services">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8">
                View All Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-green-100 text-green-700 mb-4">Our Work</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Recent Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take a look at some of our recent work and see the quality 
              and creativity we bring to every project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <Badge className="bg-white/20 text-white mb-2">
                      {project.category}
                    </Badge>
                    <h3 className="font-bold text-lg">{project.title}</h3>
                    <p className="text-sm text-gray-200">{project.client}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to="/portfolio">
              <Button size="lg" variant="outline" className="px-8 border-2">
                View Full Portfolio
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-yellow-100 text-yellow-700 mb-4">Testimonials</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied 
              customers have to say about our services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTestimonials.map((testimonial) => (
              <Card key={testimonial.id} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 italic">"{testimonial.comment}"</p>
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
            Ready to Bring Your Vision to Life?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Get a free quote today and discover how we can help you create 
            stunning visual displays that capture attention and drive results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/quote">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-medium">
                Get Free Quote
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-medium">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;