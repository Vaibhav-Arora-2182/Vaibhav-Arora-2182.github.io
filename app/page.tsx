// app/page.tsx
export default function HomePage() {
  return (
    <section>
      <h1 className="text-4xl font-bold mb-4">Vaibhav Arora</h1>
      <p className="mb-2">PhD Researcher @ INESC-ID, IST, ULisboa</p>
      <p className="mb-2">Research in Byzantine Fault Tolerance, Federated Learning, Blockchain Security.</p>
      <div className="mt-4 space-x-4">
        <a href="/Vaibhav_Arora_IIT_Bh_resume_final.pdf" className="text-blue-500 hover:underline">Download Resume</a>
        <a href="https://github.com/Vaibhav-Arora-2182" className="text-blue-500 hover:underline">GitHub</a>
        <a href="mailto:vaibhav.arora@tecnico.ulisboa.pt" className="text-blue-500 hover:underline">Email</a>
      </div>
    </section>
  );
}
