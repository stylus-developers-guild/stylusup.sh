import { resourceCategories } from '../data/resources';
import { CategoryCard } from './CategoryCard';
import { WhatsPossible } from './WhatssPossible';

import { QuickStart } from './QuickStart';
import { BookOpen, Code, Rocket, Users } from 'lucide-react';

const sections = [
  {
    id: 'projects',
    title: 'Projects built with Stylus',
    subtitle: 'Explore what the community is building on Arbitrum Stylus',
    icon: Rocket,
    categories: resourceCategories.projects,
  },
  {
    id: 'learn',
    title: 'Learn Stylus',
    subtitle: 'Educational resources to get you started with building on Stylus',
    icon: BookOpen,
    categories: resourceCategories.learn,
  },
  {
    id: 'build',
    title: 'Build with Stylus',
    subtitle: 'Tools, templates, and frameworks for Stylus development',
    icon: Code,
    categories: resourceCategories.build,
  },
];

export function ResourceGrid() {
  const ProjectsIcon = sections[0].icon;

  return (
    <div className="bg-white">
      {/* What's Possible Section */}
      <WhatsPossible />

      {/* Learn and Build Sections */}
      {sections.slice(1).map((section, sectionIndex) => (
        <section
          key={section.id}
          id={section.id}
          className={`py-20 ${sectionIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'
            }`}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            {/* Section header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#5F4DED] to-[#7B68EE] mb-4 shadow-sm">
                <section.icon className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-4xl text-gray-900 mb-3">
                {section.title}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {section.subtitle}
              </p>
            </div>

            {/* Category grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {section.categories.map((category) => (
                <CategoryCard key={category.title} category={category} />
              ))}
            </div>
          </div>
        </section>
      ))}


    </div>
  );
}
