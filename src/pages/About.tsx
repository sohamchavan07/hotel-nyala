import Header from "@/components/Header";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-primary">About Hotel Nyala</h1>
          
          <div className="space-y-6 text-lg">
            <p>
              Welcome to Hotel Nyala, where traditional Indian hospitality meets authentic cuisine. 
              Since 1990, we have been serving delicious, home-style meals that bring the warmth and 
              flavors of India to your table.
            </p>
            
            <p>
              Our specialty lies in our traditional Maharashtrian thali meals, prepared with fresh 
              ingredients and time-honored recipes passed down through generations. From our signature 
              Aamti (tangy dal with kokum and jaggery) to authentic bhakari made from jowar and bajra 
              flour, each dish is crafted with care, ensuring an authentic taste that reminds you of home.
            </p>
            
            <p>
              Whether you're craving a hearty vegetarian thali or our signature mutton curry, 
              Hotel Nyala offers a dining experience that celebrates the rich culinary heritage 
              of India in a welcoming, family-friendly atmosphere.
            </p>
            
            <div className="mt-8 p-6 bg-card border rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-primary">Visit Us</h2>
              <p className="mb-2"><strong>Location:</strong> [Your Address]</p>
              <p className="mb-2"><strong>Hours:</strong> 11:00 AM - 11:00 PM Daily</p>
              <p><strong>Phone:</strong> 9970592229</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-card border-t py-8 mt-12">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2025 Hotel Nyala. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default About;
