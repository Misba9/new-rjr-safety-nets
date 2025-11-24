import Section from '../common/Section';
import SectionTitle from '../common/SectionTitle';
import ProductCard from '../products/ProductCard';
import { services } from '../../data/mockData';
import Button from '../common/Button';

const ServicesOverview = () => {
  const featuredServices = services.slice(0, 6);

  return (
    <Section className="bg-brand-light-gray">
      <SectionTitle title="Our Services" subtitle="What We Offer" />
      
      {/* Additional service category images */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mb-8">
        <div className="text-center">
          <div><img src="/images/balcony.jpg" alt="Balcony Safety Nets" className="w-16 h-16 mx-auto rounded-full object-cover" /></div>
          <p className="mt-2 text-sm font-medium">Balcony Nets</p>
        </div>
        <div className="text-center">
          <div><img src="/images/anti-bird-net.jpg" alt="Bird Protection Nets" className="w-16 h-16 mx-auto rounded-full object-cover" /></div>
          <p className="mt-2 text-sm font-medium">Bird Nets</p>
        </div>
        <div className="text-center">
          <div><img src="/images/children.jpg" alt="Children Safety Nets" className="w-16 h-16 mx-auto rounded-full object-cover" /></div>
          <p className="mt-2 text-sm font-medium">Kids Safety</p>
        </div>
        <div className="text-center">
          <div><img src="/images/slider/construction-safety-nets.jpg" alt="Construction Safety Nets" className="w-16 h-16 mx-auto rounded-full object-cover" /></div>
          <p className="mt-2 text-sm font-medium">Construction</p>
        </div>
        <div className="text-center">
          <div><img src="/images/slider/monkey-protection-nets.jpg" alt="Monkey Protection Nets" className="w-16 h-16 mx-auto rounded-full object-cover" /></div>
          <p className="mt-2 text-sm font-medium">Monkey Nets</p>
        </div>
        <div className="text-center">
          <div><img src="/images/cricket-nets.jpg" alt="Sports Practice Nets" className="w-16 h-16 mx-auto rounded-full object-cover" /></div>
          <p className="mt-2 text-sm font-medium">Sports Nets</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {featuredServices.map(service => (
          <ProductCard key={service.id} service={service} />
        ))}
      </div>
      <div className="text-center mt-8 sm:mt-10 md:mt-12">
        <Button asLink to="/services" variant="secondary" className="text-sm sm:text-base">View All Services</Button>
      </div>
    </Section>
  );
};

export default ServicesOverview;