import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  bgColor?: 'white' | 'light' | 'green' | 'amber';
  spacing?: 'sm' | 'md' | 'lg';
}

const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  bgColor = 'white',
  spacing = 'md',
}) => {
  const bgColorClasses = {
    white: 'bg-white',
    light: 'bg-gray-50',
    green: 'bg-green-50',
    amber: 'bg-amber-50',
  };
  
  const spacingClasses = {
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-20',
  };
  
  return (
    <section className={`${bgColorClasses[bgColor]} ${spacingClasses[spacing]} ${className}`}>
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  );
};

export default Section;