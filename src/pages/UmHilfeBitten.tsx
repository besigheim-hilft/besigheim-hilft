import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useEffect } from "react";

const UmHilfeBitten = () => {
  useEffect(() => {
    // Load GetResponse script dynamically
    const script = document.createElement('script');
    script.src = 'https://app.getresponse.com/view_webform_v2.js?u=BBHXR&webforms_id=73775856-7129-425d-9c6b-ea7e355aa963';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      const existingScript = document.querySelector(`script[src="${script.src}"]`);
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div>
      <Header />
      <div className="min-h-screen bg-background py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-card rounded-3xl p-8 shadow-glow mb-8">
                  <div 
                    dangerouslySetInnerHTML={{
                      __html: '<getresponse-form form-id="73775856-7129-425d-9c6b-ea7e355aa963" e="0"></getresponse-form>'
                    }}
                  />
                </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UmHilfeBitten;
