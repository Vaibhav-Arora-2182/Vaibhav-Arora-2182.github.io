interface ExperienceCardProps {
  role: string;
  organization: string;
  date: string;
  bullets: string[];
}

export function ExperienceCard({ role, organization, date, bullets }: ExperienceCardProps) {
  return (
    <div className="mb-6 border-l-4 border-blue-600 pl-4">
      <div className="flex justify-between font-semibold text-lg mb-1">
        <span>{role} @ {organization}</span>
        <span className="text-sm text-gray-600 dark:text-gray-400">{date}</span>
      </div>
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
        {bullets.map((bullet, i) => (
          <li key={i}>{bullet}</li>
        ))}
      </ul>
    </div>
  );
}
