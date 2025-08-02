interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
}

export function ProjectCard({ title, description, tags }: ProjectCardProps) {
  return (
    <div className="mb-6 border border-gray-300 dark:border-gray-700 rounded p-4 shadow-sm hover:shadow-md transition">
      <h3 className="font-semibold text-xl mb-2">{title}</h3>
      <p className="mb-3 text-gray-700 dark:text-gray-300">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="bg-green-200 text-green-800 dark:bg-green-800 dark:text-green-200 px-3 py-1 rounded-full text-xs font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
