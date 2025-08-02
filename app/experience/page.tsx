// app/experience/page.tsx
import { ExperienceCard } from '@/components/ExperienceCard';

export default function ExperiencePage() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-6">Experience</h1>
      <ExperienceCard
        role="PhD Researcher"
        organization="INESC-ID, IST, University of Lisbon"
        date="2022 – Present"
        bullets={[
          'Working on Byzantine fault-tolerant federated learning systems.',
          'Designed and developed ByzPlug – a fault injection test framework for blockchain consensus (Hyperledger Besu).',
        ]}
      />
      <ExperienceCard
        role="Research Intern"
        organization="IIT Bhilai"
        date="2021 – 2022"
        bullets={[
          'Worked on Federated Learning, anomaly detection, blockchain analysis.',
          'Published and presented research papers in international conferences.'
        ]}
      />
    </section>
  );
}
