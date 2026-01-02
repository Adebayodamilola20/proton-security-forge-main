import AnimatedSection from "@/components/AnimatedSection";

const PolicyStatement = () => {
  return (
    <div className="section-padding">
      <div className="container-custom max-w-4xl">
        <AnimatedSection>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Policy Statement</h1>
        </AnimatedSection>

        <div className="bg-white rounded-lg shadow-md p-8 space-y-8">
          <AnimatedSection delay={100}>
            <div>
              <p className="text-lg text-gray-700 leading-relaxed">
                At Proton Security, we are committed to providing exceptional security services
                while maintaining the highest standards of professionalism, integrity, and ethical conduct.
                Our policies guide every aspect of our operations and ensure consistent, reliable service delivery.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">Mission Statement</h2>
              <p className="text-gray-700 leading-relaxed">
                To deliver world-class security solutions that protect our clients' assets, personnel,
                and interests through innovative approaches, rigorous training, and unwavering dedication
                to excellence.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">Core Values</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-highlight font-bold mr-3">•</span>
                  <span><strong>Integrity:</strong> We conduct all business with honesty, transparency, and ethical responsibility.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-highlight font-bold mr-3">•</span>
                  <span><strong>Excellence:</strong> We strive for the highest standards in all aspects of our service delivery.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-highlight font-bold mr-3">•</span>
                  <span><strong>Professionalism:</strong> Our team maintains the highest level of professional conduct at all times.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-highlight font-bold mr-3">•</span>
                  <span><strong>Innovation:</strong> We continuously adapt and improve our methods to meet evolving security challenges.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-highlight font-bold mr-3">•</span>
                  <span><strong>Client Focus:</strong> Our clients' needs and satisfaction are at the center of everything we do.</span>
                </li>
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={400}>
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">Quality Assurance</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                All Proton Security personnel undergo comprehensive training and certification programs
                to ensure they meet our stringent standards. We maintain:
              </p>
              <ul className="space-y-2 text-gray-700 ml-6">
                <li>• Regular training updates and skills assessments</li>
                <li>• Strict background verification processes</li>
                <li>• Continuous performance monitoring and evaluation</li>
                <li>• Adherence to industry best practices and regulatory requirements</li>
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={500}>
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">Confidentiality & Data Protection</h2>
              <p className="text-gray-700 leading-relaxed">
                We are committed to protecting the confidentiality of our clients' information.
                All personnel sign non-disclosure agreements and are trained in data protection protocols.
                We comply with all applicable data privacy laws and regulations.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={600}>
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">Health & Safety</h2>
              <p className="text-gray-700 leading-relaxed">
                The health and safety of our personnel and clients is paramount. We maintain comprehensive
                health and safety policies, provide appropriate protective equipment, and ensure all operations
                comply with occupational health and safety regulations.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={700}>
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">Equal Opportunity</h2>
              <p className="text-gray-700 leading-relaxed">
                Proton Security is an equal opportunity employer. We are committed to creating an inclusive
                environment free from discrimination and harassment, where all individuals are treated with
                dignity and respect regardless of race, gender, age, religion, disability, or any other
                protected characteristic.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={800}>
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">Environmental Responsibility</h2>
              <p className="text-gray-700 leading-relaxed">
                We recognize our responsibility to minimize our environmental impact. We promote sustainable
                practices in our operations and encourage environmentally conscious decision-making throughout
                our organization.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={900}>
            <div className="pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-600 italic">
                This policy statement is reviewed and updated regularly to ensure it remains relevant and
                effective. Last updated: October 2025
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default PolicyStatement;
