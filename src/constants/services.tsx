import { Scissors, Printer, Users, Heart, Edit } from 'lucide-react';

const services = [
    {
      title: "Custom Tailoring",
      description: "Expert craftsmanship for perfectly fitted garments. Our master tailors create bespoke clothing that matches your style and measurements with precision.",
      icon: <Scissors className="w-6 h-6" />,
      features: [
        "Personal measurements",
        "Fabric selection assistance",
        "Multiple fittings",
        "Style consultation"
      ],
      imageUrl: "/services/custom-tailor.png"
    },
    {
      title: "Printing and Design",
      description: "Professional printing services for all your textile needs. From digital prints to custom designs, we bring your vision to life with quality and creativity.",
      icon: <Printer className="w-6 h-6" />,
      features: [
        "Digital printing",
        "Custom designs",
        "Logo printing",
        "Pattern creation"
      ],
    imageUrl: "/services/print-design.png"
    },
    {
      title: "Alterations and Repairs",
      description: "Quick and reliable clothing alterations and repair services. We restore and adjust your garments to ensure the perfect fit and extend their lifespan.",
      icon: <Scissors className="w-6 h-6" />,
      features: [
        "Size adjustments",
        "Hem repairs",
        "Zipper replacement",
        "Patch work"
      ],
      imageUrl: "/services/alter-repair.png"
    },
    {
      title: "Uniform & Corporate Wear",
      description: "Professional corporate and uniform solutions. We provide high-quality, consistent workplace attire that represents your brand with distinction.",
      icon: <Users className="w-6 h-6" />,
      features: [
        "Bulk orders",
        "Brand consistency",
        "Custom embroidery",
        "Size variations"
      ],
      imageUrl: "/services/uni-corporate.png"
    },
    {
      title: "Wedding & Formal Wear",
      description: "Make your special occasions unforgettable with our premium formal wear services. From wedding gowns to tuxedos, we ensure you look your absolute best.",
      icon: <Heart className="w-6 h-6" />,
      features: [
        "Bridal alterations",
        "Tuxedo fitting",
        "Evening gowns",
        "Accessories matching"
      ],
      imageUrl: "/services/wed-formal.png"
    },
    {
      title: "Customise Sports Wear",
      description: "Add a personal touch with our professional embroidery services. We offer custom embroidery for logos, monograms, and decorative designs.",
      icon: <Edit className="w-6 h-6" />,
      features: [
        "Custom designs",
        "Logo embroidery",
        "Monogramming",
        "Pattern work"
      ],
      imageUrl: "/services/embroidery.png"
    }
  ];

export {
    services
}