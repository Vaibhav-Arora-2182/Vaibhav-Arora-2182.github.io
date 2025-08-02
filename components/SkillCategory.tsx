interface SkillCategoryProps {
  title: string;
  skills: string[];
}

export function SkillCategory({ title, skills }: SkillCategoryProps) {
  return (
    <div className="mb-6">
      <h3 className="font-semibold text-xl mb-2">{title}</h3>
      <ul className="flex flex-wrap gap-2">
        {skills.map((skill, i) => (
          <li
            key={i}
            className="bg-blue-200 text-blue-800 dark:bg-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
