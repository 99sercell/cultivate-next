import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Leaf, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-earth-green text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-tech-green" />
              <h3 className="text-2xl font-bold">SmartFarm</h3>
            </div>
            <p className="text-green-100">
              Revolutionizing agriculture with smart technology for a sustainable future.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-green-100 hover:text-tech-green hover:bg-white/10">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-green-100 hover:text-tech-green hover:bg-white/10">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-green-100 hover:text-tech-green hover:bg-white/10">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-green-100 hover:text-tech-green hover:bg-white/10">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Products</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-green-100 hover:text-tech-green transition-colors">Fresh Vegetables</a></li>
              <li><a href="#" className="text-green-100 hover:text-tech-green transition-colors">Organic Herbs</a></li>
              <li><a href="#" className="text-green-100 hover:text-tech-green transition-colors">Leafy Greens</a></li>
              <li><a href="#" className="text-green-100 hover:text-tech-green transition-colors">Microgreens</a></li>
            </ul>
          </div>

          {/* Technology */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Technology</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-green-100 hover:text-tech-green transition-colors">Smart Sensors</a></li>
              <li><a href="#" className="text-green-100 hover:text-tech-green transition-colors">IoT Solutions</a></li>
              <li><a href="#" className="text-green-100 hover:text-tech-green transition-colors">Hydroponic Systems</a></li>
              <li><a href="#" className="text-green-100 hover:text-tech-green transition-colors">AI Analytics</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-tech-green" />
                <span className="text-green-100">hello@smartfarm.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-tech-green" />
                <span className="text-green-100">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-tech-green" />
                <span className="text-green-100">San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-green-800" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-green-100 text-sm">
            © 2025 SmartFarm. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-green-100 hover:text-tech-green text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-green-100 hover:text-tech-green text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-green-100 hover:text-tech-green text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;