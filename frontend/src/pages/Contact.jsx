import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Badge } from "../components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { useToast } from "../hooks/use-toast";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send,
  MessageCircle,
  Users,
  CheckCircle
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
    budget: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectChange = (value, name) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      // Save to localStorage (simulating backend)
      const existingContacts = JSON.parse(localStorage.getItem('contacts') || '[]');
      const newContact = {
        ...formData,
        id: Date.now(),
        timestamp: new Date().toISOString(),
        status: 'new'
      };
      existingContacts.push(newContact);
      localStorage.setItem('contacts', JSON.stringify(existingContacts));

      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
        budget: ""
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-blue-100 text-blue-700 mb-4">
              Contact Us
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Let's <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Connect</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Ready to bring your vision to life? Get in touch with our team of experts 
              for a free consultation and personalized quote.
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-blue-600" />
                <span>24hr Response Time</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-green-600" />
                <span>Expert Consultation</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-purple-600" />
                <span>Free Quote</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  We're here to help you create stunning visual displays that make an impact. 
                  Reach out through any of the channels below or fill out the form.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                        <p className="text-gray-600 text-sm mb-2">Call us directly for immediate assistance</p>
                        <p className="text-blue-600 font-medium">+91 98765 43210</p>
                        <p className="text-gray-500 text-sm">Mon-Sat: 9AM-8PM</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                        <p className="text-gray-600 text-sm mb-2">Send us your requirements anytime</p>
                        <p className="text-green-600 font-medium">info@flexprints.com</p>
                        <p className="text-gray-500 text-sm">Response within 24 hours</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Office</h3>
                        <p className="text-gray-600 text-sm mb-2">Visit our showroom and production facility</p>
                        <p className="text-purple-600 font-medium">123 Print Street, Business District</p>
                        <p className="text-gray-500 text-sm">New Delhi - 110001</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MessageCircle className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">WhatsApp</h3>
                        <p className="text-gray-600 text-sm mb-2">Quick support and file sharing</p>
                        <p className="text-orange-600 font-medium">+91 98765 43210</p>
                        <p className="text-gray-500 text-sm">Available 24/7</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you with a detailed quote and consultation.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">
                          Full Name *
                        </label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Enter your full name"
                          required
                          className="h-12"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">
                          Email Address *
                        </label>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Enter your email"
                          required
                          className="h-12"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">
                          Phone Number *
                        </label>
                        <Input
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Enter your phone number"
                          required
                          className="h-12"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">
                          Company Name
                        </label>
                        <Input
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Enter company name (optional)"
                          className="h-12"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">
                          Service Required *
                        </label>
                        <Select onValueChange={(value) => handleSelectChange(value, 'service')}>
                          <SelectTrigger className="h-12">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="flex-banners">Flex Banners</SelectItem>
                            <SelectItem value="digital-signage">Digital Signage</SelectItem>
                            <SelectItem value="vehicle-wraps">Vehicle Wraps</SelectItem>
                            <SelectItem value="window-graphics">Window Graphics</SelectItem>
                            <SelectItem value="exhibition-displays">Exhibition Displays</SelectItem>
                            <SelectItem value="wall-murals">Wall Murals</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">
                          Budget Range
                        </label>
                        <Select onValueChange={(value) => handleSelectChange(value, 'budget')}>
                          <SelectTrigger className="h-12">
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="under-10k">Under ₹10,000</SelectItem>
                            <SelectItem value="10k-25k">₹10,000 - ₹25,000</SelectItem>
                            <SelectItem value="25k-50k">₹25,000 - ₹50,000</SelectItem>
                            <SelectItem value="50k-100k">₹50,000 - ₹1,00,000</SelectItem>
                            <SelectItem value="above-100k">Above ₹1,00,000</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Project Details *
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Please describe your project requirements, timeline, and any specific details..."
                        required
                        rows={5}
                        className="resize-none"
                      />
                    </div>

                    <div className="flex items-center space-x-4 pt-4">
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 h-12 font-medium flex-1 sm:flex-none"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                      <p className="text-sm text-gray-500">
                        We'll respond within 24 hours
                      </p>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-purple-100 text-purple-700 mb-4">Visit Us</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Locations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visit our facilities to see our work in person and discuss your project 
              with our team of experts.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                city: "Delhi NCR",
                address: "123 Print Street, Business District, New Delhi - 110001",
                phone: "+91 98765 43210",
                hours: "Mon-Sat: 9:00 AM - 8:00 PM\nSunday: 10:00 AM - 6:00 PM",
                image: "https://images.unsplash.com/photo-1577916921004-8de3c87e8e8e?w=400&h=250&fit=crop"
              },
              {
                city: "Mumbai",
                address: "456 Design Avenue, Andheri East, Mumbai - 400093",
                phone: "+91 98765 43211",
                hours: "Mon-Sat: 9:00 AM - 8:00 PM\nSunday: 10:00 AM - 6:00 PM",
                image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=250&fit=crop"
              },
              {
                city: "Bangalore",
                address: "789 Tech Park Road, Electronic City, Bangalore - 560100",
                phone: "+91 98765 43212",
                hours: "Mon-Sat: 9:00 AM - 8:00 PM\nSunday: 10:00 AM - 6:00 PM",
                image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=250&fit=crop"
              }
            ].map((location, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={location.image}
                    alt={location.city}
                    className="w-full h-40 object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-white/90 text-gray-800">
                    {location.city}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-4">{location.city} Office</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start space-x-2">
                      <MapPin className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-600">{location.address}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-gray-500 flex-shrink-0" />
                      <p className="text-blue-600 font-medium">{location.phone}</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Clock className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-600 whitespace-pre-line">{location.hours}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;