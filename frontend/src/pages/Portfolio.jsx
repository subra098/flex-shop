import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../components/ui/dialog";
import { 
  Calendar, 
  User, 
  Ruler, 
  Eye,
  ArrowRight,
  ExternalLink
} from "lucide-react";
import { portfolioItems } from "../data/mock";

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  
  const categories = ["All", ...new Set(portfolioItems.map(item => item.category))];
  
  const filteredProjects = selectedCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-blue-100 text-blue-700 mb-4">
              Our Portfolio
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Creative Work</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Explore our portfolio of successful projects and see how we've helped 
              businesses across industries create impactful visual communications.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">200+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">15+</div>
                <div className="text-sm text-gray-600">Industries Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">98%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="grid w-full max-w-3xl mx-auto grid-cols-3 lg:grid-cols-7">
              {categories.map((category) => (
                <TabsTrigger key={category} value={category} className="text-sm">
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Overlay Content */}
                  <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <Badge className="bg-white/20 text-white mb-2">
                      {project.category}
                    </Badge>
                    <h3 className="font-bold text-lg mb-1">{project.title}</h3>
                    <p className="text-sm text-gray-200 mb-3">{project.description}</p>
                    
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button size="sm" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30">
                          <Eye className="w-4 h-4 mr-2" />
                          View Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle className="text-2xl font-bold">{project.title}</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-6">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-64 object-cover rounded-lg"
                          />
                          <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                              <div>
                                <h4 className="font-semibold text-gray-900 mb-2">Project Details</h4>
                                <div className="space-y-2 text-sm">
                                  <div className="flex items-center space-x-2">
                                    <User className="w-4 h-4 text-gray-500" />
                                    <span className="text-gray-600">Client: {project.client}</span>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <Ruler className="w-4 h-4 text-gray-500" />
                                    <span className="text-gray-600">Size: {project.size}</span>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <Calendar className="w-4 h-4 text-gray-500" />
                                    <span className="text-gray-600">Completed: {new Date(project.completion).toLocaleDateString()}</span>
                                  </div>
                                </div>
                              </div>
                              <div>
                                <Badge className="bg-blue-100 text-blue-700">
                                  {project.category}
                                </Badge>
                              </div>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-2">Description</h4>
                              <p className="text-gray-600 text-sm leading-relaxed">
                                {project.description}
                              </p>
                              <div className="mt-4">
                                <Link to="/quote" state={{ selectedService: project.category }}>
                                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                                    Similar Project Quote
                                    <ArrowRight className="ml-2 w-4 h-4" />
                                  </Button>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white/90 text-gray-800">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{project.client}</span>
                      </span>
                    </div>
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(project.completion).toLocaleDateString()}</span>
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Showcase */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-purple-100 text-purple-700 mb-4">Our Process</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              From Concept to Completion
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our systematic approach ensures every project meets the highest 
              standards of quality and exceeds client expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Initial Consultation",
                description: "Understanding your vision, requirements, and project goals through detailed discussions.",
                image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=300&fit=crop",
                step: "01"
              },
              {
                title: "Design Development",
                description: "Creating custom designs that align with your brand and campaign objectives.",
                image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
                step: "02"
              },
              {
                title: "Production Phase",
                description: "Using state-of-the-art equipment and premium materials for superior quality output.",
                image: "https://images.unsplash.com/photo-1453149278767-4711c46dd5cc?w=400&h=300&fit=crop",
                step: "03"
              },
              {
                title: "Installation & Delivery",
                description: "Professional installation and on-time delivery with complete quality assurance.",
                image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=300&fit=crop",
                step: "04"
              }
            ].map((process, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img
                    src={process.image}
                    alt={process.title}
                    className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-2 left-2">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {process.step}
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg mb-2">{process.title}</h3>
                  <p className="text-gray-600 text-sm">{process.description}</p>
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
            Ready to Create Your Next Project?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's discuss your vision and create something amazing together. 
            Get in touch for a free consultation and detailed quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/quote">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-medium">
                Start Your Project
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-medium">
                Contact Us
                <ExternalLink className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;