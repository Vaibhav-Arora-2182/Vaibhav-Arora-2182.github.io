// app/education/page.tsx
import { EducationCard } from '@/components/EducationCard';

export default function EducationPage() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-6">Education</h1>
      <EducationCard
        institution="IST, University of Lisbon"
        degree="Ph.D. in Distributed Systems"
        date="2022 – Present"
      />
      <EducationCard
        institution="IIT Bhilai"
        degree="B.Tech in Computer Science and Engineering"
        date="2018 – 2022"
      />
    </section>
  );
}
