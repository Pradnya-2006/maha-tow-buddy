import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Truck, Shield, Clock, MapPin } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              24/7 Professional Towing Service at Your Fingertips
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Get instant roadside assistance with our reliable towing service. We're here to help you get back on the road safely.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/services">Request Tow <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/vehicles">My Vehicles</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Maha Tow?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<Truck className="h-10 w-10" />}
              title="Professional Service"
              description="Experienced and certified tow truck operators ready to assist you"
            />
            <FeatureCard
              icon={<Clock className="h-10 w-10" />}
              title="24/7 Availability"
              description="Round-the-clock emergency towing service when you need it most"
            />
            <FeatureCard
              icon={<MapPin className="h-10 w-10" />}
              title="Wide Coverage"
              description="Serving all major areas with quick response times"
            />
            <FeatureCard
              icon={<Shield className="h-10 w-10" />}
              title="Fully Insured"
              description="Your vehicle is protected with our comprehensive insurance coverage"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-muted-foreground mb-8">
              Join thousands of satisfied customers who trust Maha Tow for their vehicle towing needs.
            </p>
            <Button size="lg" asChild>
              <Link to="/services">Request Service Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="p-6 rounded-lg border bg-card text-card-foreground">
    <div className="mb-4 text-primary">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

export default Home;
