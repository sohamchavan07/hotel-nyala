import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { useStore } from "@/lib/store";
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
  const { t } = useStore();

  const thaliSection: MenuItem[] = [
    {
      name: t("vegThaliChapati"),
      price: "₹100",
      image: vegThali,
      description: t("descVegThali")
    },
    {
      name: t("vegThaliBhakari"),
      price: "₹110",
      image: vegThali,
      description: t("descVegThali")
    },
    {
      name: t("chickenChapatiThali"),
      price: "₹170",
      image: chickenThali,
      description: t("descChickenThali")
    },
    {
      name: t("chickenBhakariThali"),
      price: "₹180",
      image: chickenThali,
      description: t("descChickenThali")
    },
    {
      name: t("muttonChapatiThali"),
      price: "₹260",
      image: muttonThali,
      description: t("descMuttonThali")
    },
    {
      name: t("muttonBhakariThali"),
      price: "₹280",
      image: muttonThali,
      description: t("descMuttonThali")
    },
  ];

  const currySection: MenuItem[] = [
    {
      name: t("eggCurryChapati"),
      price: "₹110   / ₹130",
      image: eggCurry,
      description: t("descEggCurry")
    },
    {
      name: t("eggCurryBhakari"),
      price: "₹120 / ₹140",
      image: eggCurry,
      description: t("descEggCurry")
    },
    {
      name: t("muttonPlate"),
      price: "₹200",
      image: muttonThali,
      description: t("descMuttonThali")
    },
    {
      name: t("chickenPlate"),
      price: "₹100",
      image: chickenThali,
      description: t("descChickenThali")
    },
    {
      name: t("singleEggCurryPlate"),
      price: "₹50",
      image: eggCurry,
      description: t("descEggCurry")
    },
  ];

  const sidesSection: MenuItem[] = [
    {
      name: t("twoChapatiBhaji"),
      price: "₹60",
      image: bhaji,
      description: t("descBhaji")
    },
    {
      name: t("riceAamtiVaran"),
      price: "₹50",
      image: aamti,
      description: t("descAamti")
    },
    {
      name: t("bhajiPlate"),
      price: "₹30",
      image: bhaji,
      description: t("descBhaji")
    },
    {
      name: t("ricePlate"),
      price: "₹20",
      image: rice,
      description: t("descRice")
    },
    {
      name: t("chapati"),
      price: "₹15",
      image: chapati,
      description: t("descChapati")
    },
    {
      name: t("bhakari"),
      price: "₹25",
      image: bhakari,
      description: t("descBhakari")
    },
    {
      name: t("papad"),
      price: "₹10",
      image: papad,
      description: t("descPapad")
    },
    {
      name: t("aamtiVati"),
      price: "₹30",
      image: aamti,
      description: t("descAamti")
    },
    {
      name: t("taak"),
      price: "₹15",
      image: buttermilk,
      description: t("descTaak")
    },
    {
      name: t("dahiVati"),
      price: "₹15",
      image: aamti, // Assuming a similar placeholder if dahi image missing
      description: t("dahiVati")
    },
    {
      name: t("boilEgg"),
      price: "₹15",
      image: eggCurry,
      description: t("boilEgg")
    },
    {
      name: t("rassaVati"),
      price: "₹30",
      image: aamti,
      description: t("rassaVati")
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t("ourMenu")}</h1>
          <p className="text-xl md:text-2xl opacity-90">
            {t("tagline")}
          </p>
        </div>
      </section>

      {/* Menu Content */}
      <main className="container mx-auto px-4 py-12">
        <MenuSection title={t("thaliSection")} items={thaliSection} />
        <MenuSection title={t("currySection")} items={currySection} />
        <MenuSection title={t("sidesSection")} items={sidesSection} />
      </main>

      <Footer />
    </div>
  );
};

export default Menu;

