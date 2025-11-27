import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import vegThali from "@/assets/veg-thali.jpg";
import chickenThali from "@/assets/chicken-thali.jpg";
import muttonThali from "@/assets/mutton-thali.jpg";
import eggCurry from "@/assets/egg-curry.jpg";
import papad from "@/assets/papad.jpg";
import buttermilk from "@/assets/buttermilk.jpg";
import rice from "@/assets/rice.jpg";
import aamti from "@/assets/aamti.jpg";
import chapati from "@/assets/chapati.jpg";
import bhakari from "@/assets/bhakari.jpg";
import bhaji from "@/assets/bhaji.jpg";

interface MenuItem {
  name: string;
  price: string;
  image?: string;
  description?: string;
}

const Menu = () => {
  const thaliSection: MenuItem[] = [
    {
      name: "Veg Thali (Chapati)",
      price: "₹80",
      image: vegThali,
      description: "Complete vegetarian meal with chapati, rice, dal, sabzi, and accompaniments"
    },
    {
      name: "Veg Thali (Bhakari)",
      price: "₹90",
      image: vegThali,
      description: "Complete vegetarian meal with bhakari, rice, dal, sabzi, and accompaniments"
    },
    {
      name: "Chicken Thali (Chapati)",
      price: "₹160",
      image: chickenThali,
      description: "Delicious chicken curry served with chapati, rice, and sides"
    },
    {
      name: "Chicken Thali (Bhakari)",
      price: "₹170",
      image: chickenThali,
      description: "Delicious chicken curry served with bhakari, rice, and sides"
    },
    {
      name: "Mutton Thali",
      price: "₹200",
      image: muttonThali,
      description: "Tender mutton curry with your choice of bread, rice, and accompaniments"
    },
  ];

  const currySection: MenuItem[] = [
    {
      name: "Egg Curry (Chapati)",
      price: "₹100",
      image: eggCurry,
      description: "Single egg curry served with chapati"
    },
    {
      name: "Egg Curry (Bhakari)",
      price: "₹120",
      image: eggCurry,
      description: "Double egg curry served with bhakari"
    },
  ];

  const sidesSection: MenuItem[] = [
    { 
      name: "Papad", 
      price: "₹10", 
      image: papad,
      description: "Crispy roasted lentil crackers"
    },
    { 
      name: "Buttermilk (Chaas)", 
      price: "₹15", 
      image: buttermilk,
      description: "Traditional refreshing spiced yogurt drink"
    },
    { 
      name: "Steamed Rice", 
      price: "₹20", 
      image: rice,
      description: "Fluffy steamed basmati rice"
    },
    { 
      name: "Aamti", 
      price: "₹20", 
      image: aamti,
      description: "Traditional Maharashtrian tangy dal with kokum and jaggery"
    },
    { 
      name: "Chapati", 
      price: "₹15", 
      image: chapati,
      description: "Soft whole wheat flatbread"
    },
    { 
      name: "Bhakari", 
      price: "₹20", 
      image: bhakari,
      description: "Traditional thick flatbread made from jowar or bajra flour"
    },
    { 
      name: "Bhaji", 
      price: "₹20", 
      image: bhaji,
      description: "Spiced mixed vegetable curry"
    },
  ];

  const MenuSection = ({ title, items }: { title: string; items: MenuItem[] }) => (
    <div className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-primary border-b-2 border-primary pb-2">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
            {item.image && (
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            )}
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <span className="text-primary font-bold text-lg whitespace-nowrap ml-2">
                  {item.price}
                </span>
              </div>
              {item.description && (
                <p className="text-sm text-muted-foreground">{item.description}</p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Menu</h1>
          <p className="text-xl md:text-2xl opacity-90">
            Traditional Indian Cuisine with Authentic Flavors
          </p>
        </div>
      </section>

      {/* Menu Content */}
      <main className="container mx-auto px-4 py-12">
        <MenuSection title="Thali Meals" items={thaliSection} />
        <MenuSection title="Curry Specials" items={currySection} />
        <MenuSection title="Sides & Accompaniments" items={sidesSection} />
      </main>

      <Footer />
    </div>
  );
};

export default Menu;
