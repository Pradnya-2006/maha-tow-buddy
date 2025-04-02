import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { AlertCircle } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[80vh] py-8">
      <AlertCircle className="h-24 w-24 text-muted-foreground mb-6" />
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-xl text-muted-foreground mb-8 text-center max-w-md">
        Sorry, we couldn't find the page you're looking for. Let's get you back on track.
      </p>
      <div className="flex gap-4">
        <Button asChild>
          <Link to="/">Go Home</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link to="/services">Request Tow</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
