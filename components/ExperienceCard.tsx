"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Waves, Mountain, Compass, Landmark } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export interface ExperienceItem {
  id: string;
  title: string;
  subtitle: string;
  iconName: "Waves" | "Mountain" | "Compass" | "Landmark";
  image: string;
  link: string;
}

interface ExperienceCardProps {
  item: ExperienceItem;
}

export default function ExperienceCard({ item }: ExperienceCardProps) {
  const { t } = useLanguage();

  const getLocalizedContent = () => {
    switch (item.id) {
      case "beaches":
        return {
          title: t.experience.beachesTitle,
          subtitle: t.experience.beachesDesc,
        };
      case "mountains":
        return {
          title: t.experience.mountainsTitle,
          subtitle: t.experience.mountainsDesc,
        };
      case "wildlife":
        return {
          title: t.experience.wildlifeTitle,
          subtitle: t.experience.wildlifeDesc,
        };
      case "culture":
        return {
          title: t.experience.cultureTitle,
          subtitle: t.experience.cultureDesc,
        };
      default:
        return {
          title: item.title,
          subtitle: item.subtitle,
        };
    }
  };

  const localized = getLocalizedContent();

  const renderIcon = () => {
    switch (item.iconName) {
      case "Waves":
        return <Waves className="w-5 h-5 text-[#0FA3A3]" />;
      case "Mountain":
        return <Mountain className="w-5 h-5 text-[#0FA3A3]" />;
      case "Compass":
        return <Compass className="w-5 h-5 text-[#0FA3A3]" />;
      case "Landmark":
        return <Landmark className="w-5 h-5 text-[#0FA3A3]" />;
    }
  };

  return (
    <Link
      href={item.link}
      className="group relative h-80 sm:h-96 rounded-3xl overflow-hidden block shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/10"
    >
      {/* Background Image */}
      <Image
        src={item.image}
        alt={localized.title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
      />

      {/* Dark Cinematic Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#032743] via-[#032743]/50 to-transparent group-hover:from-[#032743]/90 transition-colors duration-300" />

      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
        {/* Icon Pill */}
        <div className="w-10 h-10 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center mb-4 group-hover:bg-[#0FA3A3]/30 transition-colors">
          {renderIcon()}
        </div>

        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-[#F6A623] transition-colors">
          {localized.title}
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 font-light mt-1.5 line-clamp-2">
          {localized.subtitle}
        </p>

        <div className="mt-4 pt-3 border-t border-white/15 flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#0FA3A3] group-hover:text-[#F6A623] transition-colors">
          <span>{t.experience.explore}</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 rtl-flip transition-transform" />
        </div>
      </div>
    </Link>
  );
}
