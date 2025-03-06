import { PricingCard } from "@/components/PricingCard";



const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
  },
];

export const Pricing = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#D2DCFF] to-[#FFFFFF] ">
      <div className="container">
        <div className="section-heading">
          <h2 className="title-secondary title-gradient">Piano prezzi</h2>
          <p className="text-primary mt-2">Gratis per sempre. Esegui l'upgrade per task illimitate, una sicurezza migliore e contenuti esclusivi.</p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-6 mt-10 lg:flex-row lg:items-end lg:justify-center">
        {pricingTiers.map(( card, index) => <PricingCard key={index} {...card}  />)}
      </div>
    </section>
  );
};
