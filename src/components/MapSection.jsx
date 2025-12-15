import { AnimatedSection } from './AnimatedSection';

export function MapSection() {
  const address = "26, 2nd Cross Rd, Coconut Grove Layout, Ashirvad Colony, Horamavu, Bengaluru, Karnataka 560113";
  const encodedAddress = encodeURIComponent(address);
  const mapEmbedUrl = `https://www.google.com/maps?q=${encodedAddress}&output=embed`;
  const mapSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;

  return (
    <section id="map" className="section map-section py-20 bg-gradient-to-b from-[#0D0F1A] to-[#1A0B2E] overflow-hidden">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
          {/* Left column: map (reduced size, left aligned) */}
          <AnimatedSection>
            <div className="map-wrap relative w-full rounded-xl overflow-hidden border border-white/10 shadow-xl shadow-cyan-500/5" id="mapWrap">
              <iframe
                className="map-iframe w-full h-[360px] md:h-[420px]"
                id="mapIframe"
                src={mapEmbedUrl}
                title="Tutelar Tech Labs location"
                aria-label="Map showing Tutelar Tech Labs location"
                frameBorder="0"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </AnimatedSection>

          {/* Right column: details */}
          <AnimatedSection className="text-left space-y-6">
            <div>
              <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-white to-[#0ABCF9] bg-clip-text text-transparent">
                Find us
              </h2>
              <p className="section-sub text-gray-300 text-lg leading-relaxed">
                {address}
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href={mapSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn map-open inline-block px-6 py-3 bg-gradient-to-r from-[#0ABCF9] to-[#6A4DFB] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
              >
                Open in Google Maps
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
