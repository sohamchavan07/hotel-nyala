import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useStore } from "@/lib/store";

const About = () => {
  const { t } = useStore();
  
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-primary">{t("aboutTitle")}</h1>
          
          <div className="space-y-6 text-lg">
            <p>
              {t("aboutPara1")}
            </p>
            
            <p>
              {t("aboutPara2")}
            </p>
            
            <p>
              {t("aboutPara3")}
            </p>
            
            <div className="mt-8 p-6 bg-card border rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-primary">{t("visitUs")}</h2>
              <p className="mb-2"><strong>{t("location")}:</strong> {t("locationValue")}</p>
              <p className="mb-2"><strong>{t("hours")}:</strong> {t("hoursValue")}</p>
              <p><strong>{t("phone")}:</strong> 9970592229</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;

