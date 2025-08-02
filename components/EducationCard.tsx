interface EducationCardProps {
  institution: string;
  degree: string;
  date: string;
}

export function EducationCard({ institution, degree, date }: EducationCardProps) {
  return (
    <div className="mb-6 border-l-4 border-green-600 pl-4">
      <div className="flex justify-between font-semibold text-lg mb-1">
        <span>{degree}</span>
        <span className="text-sm text-gray-600 dark:text-gray-400">{date}</span>
      </div>
      <p className="text-gray-700 dark:text-gray-300">{institution}</p>
    </div>
  );
}
