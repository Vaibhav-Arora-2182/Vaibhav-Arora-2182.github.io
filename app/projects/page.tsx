// app/projects/page.tsx
import { ProjectCard } from '@/components/ProjectCard';

export default function ProjectsPage() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <ProjectCard
        title="ByzPlug"
        description="A fault injection framework to test blockchain consensus algorithms (QBFT, IBFT)."
        tags={['Blockchain', 'Consensus', 'Fault Tolerance']}
      />
      <ProjectCard
        title="Async Federated Learning"
        description="Simulation and deployment of hierarchical async FL with divergence-aware dynamic clustering."
        tags={['Federated Learning', 'Distributed Systems', 'Voronoi']}
      />
    </section>
  );
}
