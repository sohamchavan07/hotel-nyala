import { useStore } from "@/lib/store";

const Footer = () => {
  const { t } = useStore();
  
  return (
    <footer className="bg-card border-t py-8 mt-12">
      <div className="container mx-auto px-4 text-center text-muted-foreground">
        <p>&copy; 2025 Hotel Nyala. {t("rights")}
          {" "}made by{" "}
          <a
            href="https://www.sohamchavan.site/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline font-semibold"
          >
            SOHAM
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;


