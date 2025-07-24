import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { 
  CheckCircle, 
  ArrowRight, 
  Clock, 
  Shield, 
  Truck,
  Star,
  Filter
} from "lucide-react";
import { services } from "../data/mock";

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const categories = ["All", ...new Set(services.map(service => service.category))];
  
  const filteredServices = selectedCategory === "All" 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-blue-100 text-blue-700 mb-4">
              Our Services
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Complete <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Printing Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              From concept to completion, we offer comprehensive printing services 
              with premium quality materials and cutting-edge technology.
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-blue-600" />
                <span>24hr Rush Service</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-green-600" />
                <span>Premium Quality</span>
              </div>
              <div className="flex items-center space-x-2">
                <Truck className="w-5 h-5 text-purple-600" />
                <span>Free Installation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center space-x-2 text-gray-600">
              <Filter className="w-5 h-5" />
              <span className="font-medium">Filter by Category:</span>
            </div>
          </div>
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 lg:grid-cols-7">
              {categories.map((category) => (
                <TabsTrigger key={category} value={category} className="text-sm">
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
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
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-blue-600 text-white">
                      Starting {service.startingPrice}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl font-bold group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <h4 className="font-semibold text-gray-900">Key Features:</h4>
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="text-sm text-gray-600 ml-2">(4.9)</span>
                    </div>
                    <Link to="/quote" state={{ selectedService: service.title }}>
                      <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white group">
                        Get Quote
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-purple-100 text-purple-700 mb-4">Our Process</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              How We Work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our streamlined process ensures quality results and timely delivery 
              for every project, no matter the size or complexity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "We discuss your requirements and provide expert recommendations.",
                icon: "💬"
              },
              {
                step: "02",
                title: "Design & Quote",
                description: "Our team creates designs and provides detailed pricing.",
                icon: "🎨"
              },
              {
                step: "03",
                title: "Production",
                description: "Using premium materials and latest technology for printing.",
                icon: "🖨️"
              },
              {
                step: "04",
                title: "Delivery",
                description: "Professional installation and timely delivery to your location.",
                icon: "🚚"
              }
            ].map((process, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 group">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <span className="text-2xl">{process.icon}</span>
                  </div>
                  <div className="text-4xl font-bold text-gray-300 mb-2">{process.step}</div>
                  <CardTitle className="text-xl font-bold">{process.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {process.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-green-100 text-green-700 mb-4">Pricing</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              No hidden costs, no surprises. Our pricing is straightforward and competitive, 
              with options for every budget and requirement.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                plan: "Basic",
                price: "₹25/sq ft",
                description: "Perfect for simple banners and basic signage",
                features: [
                  "Standard vinyl material",
                  "Digital printing",
                  "Basic installation",
                  "3-day delivery",
                  "1-year warranty"
                ],
                popular: false
              },
              {
                plan: "Professional",
                price: "₹45/sq ft",
                description: "Ideal for business signage and vehicle graphics",
                features: [
                  "Premium vinyl material",
                  "High-resolution printing",
                  "Professional installation",
                  "24-hour rush available",
                  "3-year warranty",
                  "Design consultation"
                ],
                popular: true
              },
              {
                plan: "Premium",
                price: "₹75/sq ft",
                description: "Best for luxury projects and long-term displays",
                features: [
                  "Ultra-premium materials",
                  "UV-resistant coating",
                  "Expert installation team",
                  "Same-day service",
                  "5-year warranty",
                  "Full design service",
                  "Maintenance support"
                ],
                popular: false
              }
            ].map((tier, index) => (
              <Card key={index} className={`relative ${tier.popular ? 'ring-2 ring-blue-600 scale-105' : ''} hover:shadow-xl transition-all duration-300`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-600 text-white px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold">{tier.plan}</CardTitle>
                  <div className="text-4xl font-bold text-blue-600 my-4">{tier.price}</div>
                  <CardDescription>{tier.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/quote" state={{ selectedPlan: tier.plan }}>
                    <Button 
                      className={`w-full ${tier.popular 
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white' 
                        : ''}`}
                      variant={tier.popular ? "default" : "outline"}
                    >
                      Get Quote
                    </Button>
                  </Link>
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
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Contact us today for a free consultation and quote. Our team is ready 
            to help bring your vision to life with premium printing solutions.
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

export default Services;