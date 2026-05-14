import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import hotelHero from "@/assets/hotel.jpeg";
import vegThali from "@/assets/veg-thali.jpg";
import chickenThali from "@/assets/chicken-thali.jpg";
import muttonThali from "@/assets/mutton-thali.jpg";
import { UtensilsCrossed, Clock, Award } from "lucide-react";
import { useStore } from "@/lib/store";

const Index = () => {
  const { t } = useStore();

  const features = [
    {
      icon: UtensilsCrossed,
      title: t("authenticCuisine"),
      description: t("authenticCuisineDesc")
    },
    {
      icon: Clock,
      title: t("quickService"),
      description: t("quickServiceDesc")
    },
    {
      icon: Award,
      title: t("qualityFood"),
      description: t("qualityFoodDesc")
    }
  ];

  const specialties = [
    { name: t("vegThaliChapati"), price: `${t("from")} ₹80`, image: vegThali },
    { name: t("chickenChapatiThali"), price: `${t("from")} ₹160`, image: chickenThali },
    { name: t("muttonChapatiThali"), price: "₹260", image: muttonThali }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${hotelHero})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <p className="text-lg md:text-xl mb-2 opacity-80 font-medium">{t("since")}</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {t("welcome")}
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            {t("homeTagline")}
          </p>
          <div className="flex justify-center">
            <Link to="/menu">
              <Button size="lg" variant="default" className="text-lg px-8">
                {t("viewMenu")}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
            {t("whyChooseUs")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-8 pb-6">
                  <feature.icon className="w-16 h-16 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary">
            {t("ourSpecialties")}
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            {t("specialtiesDesc")}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specialties.map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-2xl font-bold mb-2">{item.name}</h3>
                  <p className="text-primary font-semibold text-xl">{item.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/menu">
              <Button size="lg" variant="outline" className="text-lg">
                {t("seeFullMenu")}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("readyToExperience")}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {t("visitUsToday")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/menu">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                {t("viewMenu")}
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8"
              >
                {t("contactUs")}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

