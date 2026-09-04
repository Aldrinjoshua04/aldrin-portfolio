export default function AegisXPage() {
  const stack = [
    {
      category: "Backend",
      technologies: ["FastAPI", "Python", "REST APIs", "SQLAlchemy"],
    },
    {
      category: "Distributed Execution",
      technologies: ["Celery", "Redis", "Asynchronous Workers"],
    },
    {
      category: "Data",
      technologies: ["PostgreSQL", "Alembic", "Task Persistence"],
    },
    {
      category: "DevOps Integration",
      technologies: ["GitHub Webhooks", "CI Workflows", "Pipeline Execution"],
    },
  ];

  const features = [
    {
      number: "01",
      title: "Dependency-Aware Pipelines",
      description:
        "Pipeline stages are orchestrated according to execution dependencies, allowing later stages to wait until required tasks complete successfully.",
    },
    {
      number: "02",
      title: "Distributed Task Execution",
      description:
        "Tasks are dispatched asynchronously through a queue-based architecture and processed by distributed Celery workers.",
    },
    {
      number: "03",
      title: "GitHub-Triggered Workflows",
      description:
        "GitHub webhook events can trigger pipeline creation and initiate automated workflow execution.",
    },
    {
      number: "04",
      title: "Failure Analysis & Retries",
      description:
        "Failed tasks are persisted and analyzed using known failure patterns, with retry and timeout handling built into execution.",
    },
    {
      number: "05",
      title: "Worker Node Monitoring",
      description:
        "Workers can register with the platform, send heartbeats, and report resource and capability information.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#09090b] text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#09090b]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="/" className="text-lg font-bold tracking-tight">
            ALDRIN<span className="text-blue-400">.</span>
          </a>

          <div className="flex items-center gap-6 text-sm">
            <a
              href="/"
              className="text-zinc-400 transition hover:text-white"
            >
              ← Portfolio
            </a>

            <a
              href="https://github.com/Aldrinjoshua04"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white/15 px-4 py-2 transition hover:bg-white/5"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
<section className="mx-auto max-w-6xl px-6 pb-24 pt-28 md:pt-36">
  <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
    
    {/* Left */}
    <div>
      <div className="mb-8 flex items-center gap-3">
        <span className="rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-xs font-medium tracking-wider text-blue-400">
          FLAGSHIP ENGINEERING PROJECT
        </span>
      </div>

      <p className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
        Distributed Systems · DevOps · Backend Engineering
      </p>

      <h1 className="text-6xl font-bold tracking-tight md:text-7xl">
        Aegis
        <span className="text-blue-400"> X</span>
      </h1>

      <h2 className="mt-6 text-2xl font-medium leading-tight text-zinc-400 md:text-3xl">
        Distributed CI & Task Orchestration Platform
      </h2>

      <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
        A distributed platform for orchestrating asynchronous tasks,
        dependency-aware CI pipelines, GitHub-triggered workflows, worker
        monitoring, retries, and automated failure analysis.
      </p>

      <div className="mt-10 flex flex-wrap gap-4">
        <a
          href="#architecture"
          className="rounded-lg bg-white px-6 py-3 font-medium text-black transition hover:bg-zinc-200"
        >
          Explore Architecture ↓
        </a>

        <a
          href="#engineering"
          className="rounded-lg border border-white/15 px-6 py-3 font-medium transition hover:bg-white/5"
        >
          Engineering Decisions
        </a>
      </div>
    </div>

    {/* Right Architecture Preview */}
    <div className="relative">
      <div className="absolute -inset-1 rounded-3xl bg-blue-400/10 blur-2xl" />

      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d10] p-6 shadow-2xl md:p-8">
        
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold">
              System Overview
            </p>

            <p className="mt-1 text-xs text-zinc-500">
              Distributed execution architecture
            </p>
          </div>

          <span className="flex items-center gap-2 text-xs text-emerald-400">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            ACTIVE
          </span>
        </div>

        <div className="space-y-4">
          
          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
            <p className="text-sm font-medium">
              GitHub
            </p>

            <p className="mt-1 text-xs text-zinc-500">
              Push Event
            </p>
          </div>

          <div className="text-center text-blue-400">
            ↓
          </div>

          <div className="rounded-xl border border-blue-400/20 bg-blue-400/5 p-4">
            <p className="text-sm font-medium text-blue-300">
              Webhook API
            </p>

            <p className="mt-1 text-xs text-zinc-500">
              FastAPI
            </p>
          </div>

          <div className="text-center text-blue-400">
            ↓
          </div>

          <div className="rounded-xl border border-blue-400/30 bg-blue-400/10 p-4">
            <p className="text-sm font-medium">
              Pipeline Engine
            </p>

            <p className="mt-1 text-xs text-zinc-400">
              Dependency-Aware Orchestration
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3">
            
            <div className="rounded-lg border border-white/10 bg-white/[0.02] p-3 text-center">
              <p className="text-xs font-medium">
                Clone
              </p>
            </div>

            <div className="rounded-lg border border-white/10 bg-white/[0.02] p-3 text-center">
              <p className="text-xs font-medium">
                Test
              </p>
            </div>

            <div className="rounded-lg border border-white/10 bg-white/[0.02] p-3 text-center">
              <p className="text-xs font-medium">
                Build
              </p>
            </div>

          </div>

          <div className="text-center text-blue-400">
            ↓
          </div>

          <div className="grid grid-cols-2 gap-3">
            
            <div className="rounded-xl border border-red-400/10 bg-red-400/5 p-4">
              <p className="text-sm font-medium">
                Redis
              </p>

              <p className="mt-1 text-xs text-zinc-500">
                Task Queue
              </p>
            </div>

            <div className="rounded-xl border border-green-400/10 bg-green-400/5 p-4">
              <p className="text-sm font-medium">
                Celery
              </p>

              <p className="mt-1 text-xs text-zinc-500">
                Workers
              </p>
            </div>

          </div>

        </div>
      </div>
    </div>

  </div>
</section>

      {/* Project Stats */}
      <section className="border-y border-white/10 bg-zinc-950/40">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <p className="text-sm text-zinc-500">Architecture</p>
            <p className="mt-2 text-xl font-semibold">
              Distributed
            </p>
          </div>

          <div>
            <p className="text-sm text-zinc-500">Execution Model</p>
            <p className="mt-2 text-xl font-semibold">
              Asynchronous
            </p>
          </div>

          <div>
            <p className="text-sm text-zinc-500">Task Processing</p>
            <p className="mt-2 text-xl font-semibold">
              Queue-Based
            </p>
          </div>

          <div>
            <p className="text-sm text-zinc-500">Workflow Trigger</p>
            <p className="mt-2 text-xl font-semibold">
              GitHub Webhooks
            </p>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="mx-auto max-w-6xl px-6 py-28">
        <div className="grid gap-12 md:grid-cols-[0.35fr_0.65fr]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
              The Problem
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
              CI workflows become harder to manage as execution moves beyond a
              single process.
            </h2>

            <p className="mt-8 max-w-2xl leading-8 text-zinc-400">
              Modern engineering workflows involve multiple tasks, execution
              dependencies, asynchronous workers, retries, failures, and
              external triggers.
            </p>

            <p className="mt-5 max-w-2xl leading-8 text-zinc-400">
              Aegis X explores how these workflows can be represented,
              orchestrated, queued, executed, monitored, and analyzed through
              a centralized distributed platform.
            </p>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section
        id="architecture"
        className="border-y border-white/10 bg-zinc-950/40"
      >
        <div className="mx-auto max-w-6xl px-6 py-28">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
            System Architecture
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
            From GitHub event to distributed execution.
          </h2>

          <div className="mt-16 overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d10] p-6 md:p-12">
            <div className="flex flex-col items-center text-center">
              <ArchitectureBox
                title="GitHub"
                subtitle="Push Event"
              />

              <ArchitectureArrow />

              <ArchitectureBox
                title="Webhook API"
                subtitle="FastAPI"
              />

              <ArchitectureArrow />

              <ArchitectureBox
                title="Pipeline Engine"
                subtitle="Dependency-Aware Orchestration"
                featured
              />

              <ArchitectureArrow />

              <div className="grid w-full max-w-4xl gap-4 md:grid-cols-3">
                <ArchitectureBox
                  title="Clone"
                  subtitle="Pipeline Stage"
                />
                <ArchitectureBox
                  title="Test"
                  subtitle="Pipeline Stage"
                />
                <ArchitectureBox
                  title="Build"
                  subtitle="Pipeline Stage"
                />
              </div>

              <ArchitectureArrow />

              <ArchitectureBox
                title="Redis"
                subtitle="Task Queue"
                featured
              />

              <ArchitectureArrow />

              <ArchitectureBox
                title="Celery Workers"
                subtitle="Distributed Task Execution"
                featured
              />

              <ArchitectureArrow />

              <div className="grid w-full max-w-3xl gap-4 md:grid-cols-2">
                <ArchitectureBox
                  title="Task Execution"
                  subtitle="Workers & Handlers"
                />
                <ArchitectureBox
                  title="Failure Analysis"
                  subtitle="Patterns & Retry Logic"
                />
              </div>

              <ArchitectureArrow />

              <ArchitectureBox
                title="PostgreSQL"
                subtitle="Tasks · Pipelines · Worker State"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Features */}
      <section
        id="engineering"
        className="mx-auto max-w-6xl px-6 py-28"
      >
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
          Engineering Decisions
        </p>

        <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
          The parts of Aegis X designed to solve real orchestration problems.
        </h2>

        <div className="mt-16 grid gap-5">
          {features.map((feature) => (
            <article
              key={feature.number}
              className="grid gap-6 rounded-2xl border border-white/10 bg-zinc-950 p-7 transition hover:border-white/25 md:grid-cols-[120px_1fr_1.5fr] md:p-10"
            >
              <span className="text-sm font-medium text-blue-400">
                {feature.number}
              </span>

              <h3 className="text-xl font-semibold">
                {feature.title}
              </h3>

              <p className="leading-7 text-zinc-400">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Pipeline Flow */}
      <section className="border-y border-white/10 bg-zinc-950/40">
        <div className="mx-auto max-w-6xl px-6 py-28">
          <div className="grid gap-12 md:grid-cols-[0.4fr_0.6fr]">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
                Pipeline Execution
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight">
                Dependencies determine what runs next.
              </h2>
            </div>

            <div>
              <div className="rounded-2xl border border-white/10 bg-[#0d0d10] p-8">
                <div className="space-y-4 font-mono text-sm">
                  <p className="text-zinc-500">
                    GitHub Push Event
                  </p>

                  <p className="text-blue-400">
                    ↓ Create Pipeline
                  </p>

                  <p className="text-zinc-300">
                    ↓ Create Stage Tasks
                  </p>

                  <p className="text-zinc-300">
                    ↓ Queue Clone Stage
                  </p>

                  <p className="text-zinc-300">
                    ↓ Execute Dependencies
                  </p>

                  <p className="text-zinc-300">
                    ↓ Queue Next Eligible Stage
                  </p>

                  <p className="text-blue-400">
                    ↓ Persist Result & Continue
                  </p>
                </div>
              </div>

              <p className="mt-7 leading-8 text-zinc-400">
                The orchestration model separates workflow state from execution.
                Tasks can be queued and processed asynchronously while pipeline
                dependencies control which stages are eligible to run.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stack */}
      <section className="mx-auto max-w-6xl px-6 py-28">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
          Technology Stack
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {stack.map((item) => (
            <article
              key={item.category}
              className="rounded-2xl border border-white/10 bg-zinc-950 p-8"
            >
              <h3 className="text-xl font-semibold">
                {item.category}
              </h3>

              <div className="mt-6 flex flex-wrap gap-2">
                {item.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-white/10 px-3 py-2 text-sm text-zinc-400"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Honest Limitations */}
      <section className="border-y border-white/10 bg-zinc-950/40">
        <div className="mx-auto max-w-6xl px-6 py-28">
          <div className="grid gap-12 md:grid-cols-[0.35fr_0.65fr]">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
                Current Scope
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
                Engineering honesty is part of the project.
              </h2>

              <div className="mt-10 space-y-6">
                <div className="border-l border-blue-400 pl-6">
                  <h3 className="font-semibold">
                    Deployment Stage
                  </h3>
                  <p className="mt-2 leading-7 text-zinc-400">
                    The orchestration architecture is implemented, while the
                    deployment stage is currently designed as a controlled
                    simulation that can later be replaced with real deployment
                    adapters.
                  </p>
                </div>

                <div className="border-l border-blue-400 pl-6">
                  <h3 className="font-semibold">
                    Failure Analysis
                  </h3>
                  <p className="mt-2 leading-7 text-zinc-400">
                    Current analysis is based on known failure patterns and
                    rule-based classification rather than an LLM or autonomous
                    AI system.
                  </p>
                </div>

                <div className="border-l border-blue-400 pl-6">
                  <h3 className="font-semibold">
                    Future Direction
                  </h3>
                  <p className="mt-2 leading-7 text-zinc-400">
                    Future iterations can extend Aegis X with real deployment
                    providers, container orchestration, observability, and
                    intelligent remediation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What I Learned */}
      <section className="mx-auto max-w-6xl px-6 py-28">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
          What This Project Taught Me
        </p>

        <h2 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl">
          Building a distributed system is less about one feature and more
          about how every component behaves when execution is asynchronous.
        </h2>

        <p className="mt-10 max-w-3xl text-lg leading-8 text-zinc-400">
          Aegis X gave me practical experience thinking about task queues,
          asynchronous execution, worker coordination, retries, failures,
          pipeline dependencies, persistent state, and the architecture behind
          modern engineering platforms.
        </p>

        <a
          href="/"
          className="mt-12 inline-flex rounded-lg border border-white/15 px-6 py-3 font-medium transition hover:bg-white/5"
        >
          ← Back to Portfolio
        </a>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-zinc-600">
        © {new Date().getFullYear()} Aldrin Joshua.
      </footer>
    </main>
  );
}

function ArchitectureBox({
  title,
  subtitle,
  featured = false,
}: {
  title: string;
  subtitle: string;
  featured?: boolean;
}) {
  return (
    <div
      className={`rounded-xl border p-5 ${
        featured
          ? "border-blue-400/30 bg-blue-400/10"
          : "border-white/10 bg-zinc-950"
      }`}
    >
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-1 text-xs text-zinc-500">{subtitle}</p>
    </div>
  );
}

function ArchitectureArrow() {
  return (
    <div className="py-4 text-xl text-blue-400">
      ↓
    </div>
  );
}