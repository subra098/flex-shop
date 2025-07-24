import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Badge } from "../components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Checkbox } from "../components/ui/checkbox";
import { useToast } from "../hooks/use-toast";
import { 
  Calculator,
  CheckCircle,
  Clock,
  Shield,
  Truck,
  FileText,
  Download,
  Send
} from "lucide-react";
import { services } from "../data/mock";

const GetQuote = () => {
  const location = useLocation();
  const { toast } = useToast();
  
  const [step, setStep] = useState(1);
  const [quoteData, setQuoteData] = useState({
    // Personal Info
    name: "",
    email: "",
    phone: "",
    company: "",
    
    // Project Details
    service: location.state?.selectedService || "",
    plan: location.state?.selectedPlan || "",
    dimensions: { width: "", height: "", unit: "feet" },
    quantity: "1",
    material: "",
    finishing: "",
    installation: false,
    rushOrder: false,
    
    // Additional Details
    description: "",
    timeline: "",
    budget: "",
    
    // File uploads (simulated)
    designFiles: [],
    referenceImages: []
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [estimatedPrice, setEstimatedPrice] = useState(null);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setQuoteData({
        ...quoteData,
        [parent]: {
          ...quoteData[parent],
          [child]: value
        }
      });
    } else {
      setQuoteData({
        ...quoteData,
        [name]: type === 'checkbox' ? checked : value
      });
    }
  };

  const handleSelectChange = (value, name) => {
    setQuoteData({
      ...quoteData,
      [name]: value
    });
  };

  const calculateEstimate = () => {
    if (!quoteData.service || !quoteData.dimensions.width || !quoteData.dimensions.height) {
      return null;
    }

    const baseRates = {
      "Flex Banners": 25,
      "Digital Signage": 150,
      "Vehicle Wraps": 400, // per vehicle
      "Window Graphics": 80,
      "Exhibition Displays": 200,
      "Wall Murals": 120
    };

    const width = parseFloat(quoteData.dimensions.width) || 0;
    const height = parseFloat(quoteData.dimensions.height) || 0;
    const quantity = parseInt(quoteData.quantity) || 1;
    
    const area = width * height;
    const baseRate = baseRates[quoteData.service] || 50;
    
    let basePrice = quoteData.service === "Vehicle Wraps" 
      ? baseRate * quantity 
      : area * baseRate * quantity;

    // Add extras
    if (quoteData.installation) basePrice *= 1.15; // 15% for installation
    if (quoteData.rushOrder) basePrice *= 1.25; // 25% for rush orders
    
    // Material premium
    const materialMultipliers = {
      "premium": 1.3,
      "standard": 1.0,
      "economy": 0.8
    };
    basePrice *= materialMultipliers[quoteData.material] || 1.0;

    return Math.round(basePrice);
  };

  const handleNextStep = () => {
    if (step < 3) {
      setStep(step + 1);
      if (step === 2) {
        const estimate = calculateEstimate();
        setEstimatedPrice(estimate);
      }
    }
  };

  const handlePrevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      const existingQuotes = JSON.parse(localStorage.getItem('quotes') || '[]');
      const newQuote = {
        ...quoteData,
        id: Date.now(),
        timestamp: new Date().toISOString(),
        status: 'pending',
        estimatedPrice
      };
      existingQuotes.push(newQuote);
      localStorage.setItem('quotes', JSON.stringify(existingQuotes));

      toast({
        title: "Quote Request Submitted!",
        description: "We'll send you a detailed quote within 24 hours.",
      });

      setIsSubmitting(false);
      setStep(4); // Success step
    }, 1500);
  };

  const renderStep1 = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Full Name *</label>
            <Input
              name="name"
              value={quoteData.name}
              onChange={handleInputChange}
              placeholder="Enter your full name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Email Address *</label>
            <Input
              name="email"
              type="email"
              value={quoteData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Phone Number *</label>
            <Input
              name="phone"
              type="tel"
              value={quoteData.phone}
              onChange={handleInputChange}
              placeholder="Enter your phone number"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Company Name</label>
            <Input
              name="company"
              value={quoteData.company}
              onChange={handleInputChange}
              placeholder="Enter company name (optional)"
            />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Service Selection</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Service Required *</label>
            <Select value={quoteData.service} onValueChange={(value) => handleSelectChange(value, 'service')}>
              <SelectTrigger>
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                {services.map((service) => (
                  <SelectItem key={service.id} value={service.title}>
                    {service.title} - Starting {service.startingPrice}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          {quoteData.service && (
            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="font-medium text-blue-900 mb-2">Selected Service: {quoteData.service}</h4>
              <p className="text-sm text-blue-700">
                {services.find(s => s.title === quoteData.service)?.description}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold mb-4">Project Specifications</h3>
        
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium mb-2">Width *</label>
            <Input
              name="dimensions.width"
              type="number"
              value={quoteData.dimensions.width}
              onChange={handleInputChange}
              placeholder="Enter width"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Height *</label>
            <Input
              name="dimensions.height"
              type="number"
              value={quoteData.dimensions.height}
              onChange={handleInputChange}
              placeholder="Enter height"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Unit</label>
            <Select value={quoteData.dimensions.unit} onValueChange={(value) => {
              setQuoteData({
                ...quoteData,
                dimensions: { ...quoteData.dimensions, unit: value }
              });
            }}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="feet">Feet</SelectItem>
                <SelectItem value="inches">Inches</SelectItem>
                <SelectItem value="meters">Meters</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium mb-2">Quantity</label>
            <Input
              name="quantity"
              type="number"
              value={quoteData.quantity}
              onChange={handleInputChange}
              placeholder="Number of units"
              min="1"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Material Quality</label>
            <Select value={quoteData.material} onValueChange={(value) => handleSelectChange(value, 'material')}>
              <SelectTrigger>
                <SelectValue placeholder="Select material" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="economy">Economy (Basic quality)</SelectItem>
                <SelectItem value="standard">Standard (Good quality)</SelectItem>
                <SelectItem value="premium">Premium (Best quality)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="installation"
              checked={quoteData.installation}
              onCheckedChange={(checked) => setQuoteData({...quoteData, installation: checked})}
            />
            <label htmlFor="installation" className="text-sm font-medium">
              Include professional installation (+15%)
            </label>
          </div>
          
          <div className="flex items-center space-x-2">
            <Checkbox
              id="rushOrder"
              checked={quoteData.rushOrder}
              onCheckedChange={(checked) => setQuoteData({...quoteData, rushOrder: checked})}
            />
            <label htmlFor="rushOrder" className="text-sm font-medium">
              Rush order (24-48 hours) (+25%)
            </label>
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Project Description</label>
        <Textarea
          name="description"
          value={quoteData.description}
          onChange={handleInputChange}
          placeholder="Please describe your project requirements, design preferences, and any specific details..."
          rows={4}
        />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Timeline</label>
          <Select value={quoteData.timeline} onValueChange={(value) => handleSelectChange(value, 'timeline')}>
            <SelectTrigger>
              <SelectValue placeholder="When do you need this?" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="asap">ASAP (Rush order)</SelectItem>
              <SelectItem value="1-week">Within 1 week</SelectItem>
              <SelectItem value="2-weeks">Within 2 weeks</SelectItem>
              <SelectItem value="1-month">Within 1 month</SelectItem>
              <SelectItem value="flexible">Flexible timeline</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Budget Range (Optional)</label>
          <Select value={quoteData.budget} onValueChange={(value) => handleSelectChange(value, 'budget')}>
            <SelectTrigger>
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
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold mb-4">Quote Summary</h3>
        
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calculator className="w-5 h-5 mr-2" />
              Estimated Quote
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p><strong>Service:</strong> {quoteData.service}</p>
                  <p><strong>Dimensions:</strong> {quoteData.dimensions.width}x{quoteData.dimensions.height} {quoteData.dimensions.unit}</p>
                  <p><strong>Quantity:</strong> {quoteData.quantity}</p>
                  <p><strong>Material:</strong> {quoteData.material || 'Standard'}</p>
                </div>
                <div>
                  <p><strong>Installation:</strong> {quoteData.installation ? 'Yes (+15%)' : 'No'}</p>
                  <p><strong>Rush Order:</strong> {quoteData.rushOrder ? 'Yes (+25%)' : 'No'}</p>
                  <p><strong>Timeline:</strong> {quoteData.timeline || 'Standard'}</p>
                </div>
              </div>
              
              {estimatedPrice && (
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center text-lg font-bold">
                    <span>Estimated Total:</span>
                    <span className="text-blue-600">₹{estimatedPrice.toLocaleString()}</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    *This is an approximate estimate. Final quote may vary based on detailed requirements.
                  </p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="flex items-center space-x-2 text-sm">
            <CheckCircle className="w-5 h-5 text-green-500" />
            <span>Free design consultation</span>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <Clock className="w-5 h-5 text-blue-500" />
            <span>24-hour quote delivery</span>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <Shield className="w-5 h-5 text-purple-500" />
            <span>Quality guarantee</span>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg">
        <h4 className="font-semibold mb-3">What happens next?</h4>
        <ol className="text-sm space-y-2">
          <li className="flex items-start space-x-2">
            <span className="w-5 h-5 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</span>
            <span>We'll review your requirements and contact you within 24 hours</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="w-5 h-5 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</span>
            <span>Our design team will create mockups and provide detailed pricing</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="w-5 h-5 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">3</span>
            <span>Once approved, we'll begin production and keep you updated</span>
          </li>
        </ol>
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div className="text-center space-y-6">
      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
        <CheckCircle className="w-10 h-10 text-green-600" />
      </div>
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Quote Request Submitted!</h3>
        <p className="text-gray-600">
          Thank you for choosing FlexPrints. We've received your quote request and will get back to you within 24 hours.
        </p>
      </div>
      
      <div className="bg-blue-50 p-6 rounded-lg">
        <h4 className="font-semibold mb-2">Your Quote ID: #FP{Date.now().toString().slice(-6)}</h4>
        <p className="text-sm text-gray-600 mb-4">
          Keep this ID for reference. We'll email you a detailed quote with design mockups.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button variant="outline" className="flex items-center justify-center">
            <Download className="w-4 h-4 mr-2" />
            Download PDF
          </Button>
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
            <FileText className="w-4 h-4 mr-2" />
            View Quote Details
          </Button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-blue-100 text-blue-700 mb-4">
              Get Quote
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Get Your <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Free Quote</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Tell us about your project and get a detailed quote with pricing, 
              timeline, and design recommendations from our experts.
            </p>
            
            {/* Progress Indicator */}
            <div className="flex items-center justify-center space-x-4 mb-8">
              {[1, 2, 3].map((stepNum) => (
                <div key={stepNum} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${
                    step >= stepNum 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-200 text-gray-500'
                  }`}>
                    {stepNum}
                  </div>
                  {stepNum < 3 && (
                    <div className={`w-16 h-1 ${
                      step > stepNum ? 'bg-blue-600' : 'bg-gray-200'
                    }`} />
                  )}
                </div>
              ))}
            </div>
            
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-blue-600" />
                <span>24hr Response</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-green-600" />
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center space-x-2">
                <Truck className="w-5 h-5 text-purple-600" />
                <span>Professional Installation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">
                  {step === 1 && "Step 1: Basic Information"}
                  {step === 2 && "Step 2: Project Details"}
                  {step === 3 && "Step 3: Review & Submit"}
                  {step === 4 && "Quote Submitted"}
                </CardTitle>
                <CardDescription>
                  {step === 1 && "Let's start with your contact information and service selection"}
                  {step === 2 && "Provide detailed specifications for accurate pricing"}
                  {step === 3 && "Review your quote and submit your request"}
                  {step === 4 && "Your quote request has been successfully submitted"}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="p-6">
                <form onSubmit={handleSubmit}>
                  {step === 1 && renderStep1()}
                  {step === 2 && renderStep2()}
                  {step === 3 && renderStep3()}
                  {step === 4 && renderStep4()}
                  
                  {step < 4 && (
                    <div className="flex justify-between pt-8">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={handlePrevStep}
                        disabled={step === 1}
                      >
                        Previous
                      </Button>
                      
                      {step < 3 ? (
                        <Button
                          type="button"
                          onClick={handleNextStep}
                          disabled={step === 1 && (!quoteData.name || !quoteData.email || !quoteData.service)}
                          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                        >
                          Next Step
                        </Button>
                      ) : (
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                        >
                          {isSubmitting ? (
                            <>
                              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                              Submitting...
                            </>
                          ) : (
                            <>
                              <Send className="w-4 h-4 mr-2" />
                              Submit Quote Request
                            </>
                          )}
                        </Button>
                      )}
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetQuote;