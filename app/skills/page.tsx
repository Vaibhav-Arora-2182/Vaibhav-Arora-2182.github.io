// app/skills/page.tsx
import { SkillCategory } from '@/components/SkillCategory';

export default function SkillsPage() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-6">Skills</h1>
      <SkillCategory title="Programming Languages" skills={['Python', 'C++', 'Solidity']} />
      <SkillCategory title="Frameworks & Tools" skills={['gRPC', 'Docker', 'TensorFlow', 'PyTorch']} />
      <SkillCategory title="Blockchain & Cloud" skills={['Hyperledger Besu', 'GCP', 'AWS']} />
    </section>
  );
}
