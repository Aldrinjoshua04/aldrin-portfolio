"use client";

import Image from "next/image";

export default function Home() {
  const whatsappNumber = "919360667064";
  const email = "aldrinjoshua47@gmail.com";
  const linkedin =
    "https://www.linkedin.com/in/v-a-aldrin-joshua-73216a412";
  const github = "https://github.com/Aldrinjoshua04";

  const gmailCompose = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    email
  )}`;

  return (
    <main className="min-h-screen bg-[#09090b] text-white selection:bg-blue-500/30">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#09090b]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <a
            href="#home"
            className="text-2xl font-bold tracking-tight transition hover:opacity-80"
          >
            ALDRIN<span className="text-blue-400">.</span>
          </a>

          <div className="hidden items-center gap-10 text-sm text-zinc-400 md:flex">
            <a href="#about" className="transition hover:text-white">
              About
            </a>

            <a href="#projects" className="transition hover:text-white">
              Projects
            </a>

            <a href="#skills" className="transition hover:text-white">
              Skills
            </a>

            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </div>

          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-white/15 px-5 py-3 text-sm font-medium transition hover:border-blue-400 hover:bg-blue-400/10"
          >
            GitHub ↗
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="relative overflow-hidden border-b border-white/10"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(59,130,246,0.12),transparent_35%)]" />

        <div className="relative mx-auto grid min-h-[760px] max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-[1.2fr_0.8fr]">
          {/* LEFT */}
          <div>
            <div className="mb-10 flex items-center gap-3 text-sm text-zinc-400">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.8)]" />
              Available for opportunities
            </div>

            <p className="mb-6 text-sm font-medium tracking-[0.35em] text-blue-400">
              CLOUD · DEVOPS · PLATFORM ENGINEERING
            </p>

            <h1 className="max-w-4xl text-6xl font-bold leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
              I build systems that
              <span className="block bg-gradient-to-r from-zinc-500 to-zinc-300 bg-clip-text text-transparent">
                scale beyond the screen.
              </span>
            </h1>

            <p className="mt-10 max-w-2xl text-lg leading-9 text-zinc-400 sm:text-xl">
              I&apos;m Aldrin Joshua, an aspiring Cloud & DevOps Engineer
              focused on Linux, cloud infrastructure, Vagrant-based
              environments, automation, containerized systems, distributed
              platforms, and building reliable production-oriented software.
            </p>

            <div className="mt-12 flex flex-wrap gap-5">
              <a
                href="#projects"
                className="rounded-xl bg-white px-7 py-4 font-medium text-black transition hover:scale-[1.03] hover:bg-zinc-200"
              >
                View My Work →
              </a>

              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/15 px-7 py-4 font-medium transition hover:border-blue-400 hover:bg-blue-400/10"
              >
                GitHub ↗
              </a>
            </div>
          </div>

          {/* PROFILE CARD */}
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-6 rounded-[2rem] bg-blue-500/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900/70 p-3 shadow-2xl">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
                <Image
                  src="/aldrin.jpg"
                  alt="Aldrin Joshua"
                  fill
                  priority
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <p className="text-sm tracking-[0.25em] text-blue-300">
                    ENGINEERING PORTFOLIO
                  </p>

                  <h2 className="mt-2 text-2xl font-bold">
                    Aldrin Joshua
                  </h2>

                  <p className="mt-1 text-sm text-zinc-300">
                    Cloud · DevOps · Platform Engineering
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="border-b border-white/10">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-28 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-medium tracking-[0.35em] text-blue-400">
              ABOUT ME
            </p>

            <h2 className="mt-6 text-5xl font-bold tracking-tight">
              Building for
              <span className="block text-zinc-500">real systems.</span>
            </h2>
          </div>

          <div>
            <p className="text-xl leading-9 text-zinc-300">
              My focus is not just writing code. I&apos;m interested in
              understanding how software moves from development into reliable,
              scalable infrastructure.
            </p>

            <p className="mt-6 text-lg leading-8 text-zinc-500">
              I&apos;m building hands-on experience across Linux environments,
              cloud platforms, DevOps workflows, Vagrant-based infrastructure,
              backend systems, distributed architectures, automation, CI/CD,
              containers, and platform engineering.
            </p>

            <div className="mt-10 border-l border-blue-400 pl-6 text-zinc-400">
              Continuously expanding through hands-on infrastructure projects,
              Linux administration, automation, cloud engineering, and
              production-oriented system design.
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-medium tracking-[0.35em] text-blue-400">
              SELECTED WORK
            </p>

            <h2 className="mt-6 text-5xl font-bold tracking-tight">
              Engineering projects,
              <span className="block text-zinc-500">not tutorials.</span>
            </h2>
          </div>

          {/* AEGIS X */}
          <div className="mt-16 overflow-hidden rounded-[2rem] border border-blue-400/20 bg-gradient-to-br from-blue-500/10 via-zinc-900 to-zinc-950">
            <div className="grid gap-12 p-8 lg:grid-cols-[1fr_0.9fr] lg:p-14">
              <div>
                <div className="inline-flex rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-xs font-medium tracking-[0.2em] text-blue-300">
                  FLAGSHIP ENGINEERING PROJECT
                </div>

                <p className="mt-8 text-sm tracking-[0.3em] text-blue-400">
                  DISTRIBUTED SYSTEMS · DEVOPS · BACKEND ENGINEERING
                </p>

                <h3 className="mt-6 text-6xl font-bold tracking-tight">
                  Aegis <span className="text-blue-400">X</span>
                </h3>

                <p className="mt-5 text-2xl text-zinc-400">
                  Distributed CI & Task Orchestration Platform
                </p>

                <p className="mt-8 max-w-xl text-lg leading-9 text-zinc-400">
                  A distributed platform for orchestrating asynchronous tasks,
                  dependency-aware CI pipelines, GitHub-triggered workflows,
                  worker monitoring, retries, and automated failure analysis.
                </p>

                <div className="mt-10 flex flex-wrap gap-3">
                  {[
                    "Python",
                    "FastAPI",
                    "Docker",
                    "Redis",
                    "Celery",
                    "PostgreSQL",
                    "CI/CD",
                    "Distributed Systems",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-white/10 bg-black/20 px-4 py-2 text-sm text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-10">
                  <a
                    href="/aegis-x"
                    className="inline-flex rounded-xl bg-white px-6 py-4 font-medium text-black transition hover:scale-[1.02]"
                  >
                    Explore Aegis X Architecture →
                  </a>
                </div>
              </div>

              {/* ARCHITECTURE */}
              <div className="rounded-[1.5rem] border border-white/10 bg-[#0d0d10] p-7">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-semibold">System Overview</h4>
                    <p className="mt-1 text-sm text-zinc-500">
                      Distributed execution architecture
                    </p>
                  </div>

                  <span className="flex items-center gap-2 text-xs font-medium tracking-[0.15em] text-emerald-400">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    ACTIVE
                  </span>
                </div>

                <div className="mt-10 space-y-5">
                  {[
                    ["GitHub", "Push Event"],
                    ["Webhook API", "FastAPI"],
                    ["Pipeline Engine", "Dependency-Aware Orchestration"],
                    ["Task Queue", "Redis + Celery"],
                    ["Workers", "Distributed Execution"],
                  ].map(([title, subtitle], index) => (
                    <div key={title}>
                      <div
                        className={`rounded-xl border p-5 ${
                          index === 1 || index === 2
                            ? "border-blue-400/30 bg-blue-400/5"
                            : "border-white/10 bg-white/[0.02]"
                        }`}
                      >
                        <p
                          className={`font-medium ${
                            index === 1 || index === 2
                              ? "text-blue-300"
                              : "text-white"
                          }`}
                        >
                          {title}
                        </p>

                        <p className="mt-2 text-sm text-zinc-500">
                          {subtitle}
                        </p>
                      </div>

                      {index < 4 && (
                        <div className="py-3 text-center text-blue-400">
                          ↓
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* V PROFILE */}
          <div className="mt-8 overflow-hidden rounded-[2rem] border border-emerald-400/20 bg-gradient-to-br from-emerald-500/[0.07] via-zinc-900 to-zinc-950">
            <div className="grid gap-12 p-8 lg:grid-cols-[1fr_0.9fr] lg:p-14">
              <div>
                <div className="inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-xs font-medium tracking-[0.2em] text-emerald-300">
                  INFRASTRUCTURE & DEVOPS PROJECT
                </div>

                <p className="mt-8 text-sm tracking-[0.3em] text-emerald-400">
                  LINUX · VAGRANT · VIRTUALIZATION · AUTOMATION
                </p>

                <h3 className="mt-6 text-5xl font-bold tracking-tight">
                  V Profile
                </h3>

                <p className="mt-5 text-2xl text-zinc-400">
                  Multi-VM Infrastructure & DevOps Environment
                </p>

                <p className="mt-8 max-w-xl text-lg leading-9 text-zinc-400">
                  A hands-on infrastructure environment where I worked deeply
                  with Linux systems, Vagrant, VirtualBox, networking, service
                  configuration, application deployment, and repeatable
                  provisioning across multiple virtual machines.
                </p>

                <p className="mt-6 max-w-xl text-lg leading-9 text-zinc-500">
                  The project strengthened my practical understanding of how
                  web, application, database, cache, and messaging services
                  communicate inside a distributed environment.
                </p>

                <div className="mt-10 flex flex-wrap gap-3">
                  {[
                    "Linux",
                    "Vagrant",
                    "VirtualBox",
                    "CentOS Stream 9",
                    "Ubuntu",
                    "Nginx",
                    "Tomcat",
                    "MariaDB",
                    "Memcached",
                    "RabbitMQ",
                    "Ansible",
                    "Jenkins",
                    "Maven",
                    "SonarQube",
                    "Nexus",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-white/10 bg-black/20 px-4 py-2 text-sm text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-10 rounded-2xl border border-white/10 bg-black/20 p-6">
                  <p className="text-xs font-medium tracking-[0.2em] text-emerald-400">
                    WHAT I PRACTICED
                  </p>

                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    {[
                      "Linux service administration",
                      "Virtual machine provisioning",
                      "Vagrant environment management",
                      "Private-network communication",
                      "Nginx reverse proxy configuration",
                      "Tomcat application hosting",
                      "Infrastructure troubleshooting",
                      "Manual → automated provisioning",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 text-sm text-zinc-400"
                      >
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* V PROFILE ARCHITECTURE */}
              <div className="rounded-[1.5rem] border border-white/10 bg-[#0d0d10] p-7">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-semibold">Infrastructure Overview</h4>
                    <p className="mt-1 text-sm text-zinc-500">
                      Multi-VM Linux environment
                    </p>
                  </div>

                  <span className="flex items-center gap-2 text-xs font-medium tracking-[0.15em] text-emerald-400">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    LAB
                  </span>
                </div>

                <div className="mt-10 space-y-4">
                  {[
                    ["web01", "Nginx / Reverse Proxy", "192.168.56.11"],
                    ["app01", "Tomcat Application", "192.168.56.12"],
                    ["mc01", "Memcached", "192.168.56.14"],
                    ["db01", "MariaDB", "192.168.56.15"],
                    ["rmq01", "RabbitMQ", "192.168.56.16"],
                  ].map(([name, role, ip]) => (
                    <div
                      key={name}
                      className="rounded-xl border border-white/10 bg-white/[0.02] p-5"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <p className="font-semibold text-white">{name}</p>

                        <span className="font-mono text-xs text-zinc-600">
                          {ip}
                        </span>
                      </div>

                      <p className="mt-2 text-sm text-zinc-500">{role}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-7 border-t border-white/10 pt-6">
                  <p className="text-xs tracking-[0.2em] text-zinc-600">
                    INFRASTRUCTURE FLOW
                  </p>

                  <p className="mt-3 text-sm leading-7 text-zinc-400">
                    Client → Nginx → Tomcat → supporting services
                  </p>

                  <p className="mt-4 text-sm leading-7 text-zinc-500">
                    Worked through both manual provisioning and automated
                    provisioning approaches, building practical understanding
                    of repeatability and infrastructure-as-code workflows.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* DISTRIBUTED TASK SCHEDULER */}
          <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/[0.02] p-8 lg:p-14">
            <p className="text-sm tracking-[0.3em] text-zinc-500">
              DISTRIBUTED SYSTEMS · AUTOMATION
            </p>

            <h3 className="mt-6 text-4xl font-bold tracking-tight">
              Distributed Task Scheduler
            </h3>

            <p className="mt-6 max-w-3xl text-lg leading-9 text-zinc-400">
              A practical exploration of task scheduling, worker coordination,
              asynchronous execution, and distributed-system patterns.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Python",
                "Task Scheduling",
                "Workers",
                "Automation",
                "Distributed Systems",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-white/10 bg-black/20 px-4 py-2 text-sm text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="border-b border-white/10">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-28 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-medium tracking-[0.35em] text-blue-400">
              TECHNICAL FOCUS
            </p>

            <h2 className="mt-6 text-5xl font-bold tracking-tight">
              Building across
              <span className="block text-zinc-500">
                the modern stack.
              </span>
            </h2>

            <p className="mt-10 max-w-md text-lg leading-9 text-zinc-400">
              My technical interests are centered around Linux infrastructure,
              cloud engineering, automation, distributed systems, and building
              reliable platforms.
            </p>
          </div>

          <div className="space-y-5">
            <SkillCard
              number="01"
              title="Linux & Infrastructure"
              description="Hands-on experience working with Linux environments, services, networking, virtualization, and infrastructure configuration."
              skills={[
                "Linux",
                "CentOS",
                "Ubuntu",
                "Networking",
                "System Administration",
              ]}
            />

            <SkillCard
              number="02"
              title="Cloud & Virtualization"
              description="Building and understanding infrastructure environments through cloud concepts and repeatable virtualized systems."
              skills={[
                "AWS",
                "Vagrant",
                "VirtualBox",
                "Cloud Infrastructure",
                "Virtual Machines",
              ]}
            />

            <SkillCard
              number="03"
              title="DevOps & Automation"
              description="Automating infrastructure and software delivery workflows with repeatable provisioning and CI/CD practices."
              skills={[
                "Docker",
                "Ansible",
                "Jenkins",
                "CI/CD",
                "GitHub Actions",
                "Git",
                "Automation",
              ]}
            />

            <SkillCard
              number="04"
              title="Backend Engineering"
              description="APIs, services, asynchronous workloads, and system-level application design."
              skills={[
                "Python",
                "FastAPI",
                "REST APIs",
                "SQL",
                "PostgreSQL",
              ]}
            />

            <SkillCard
              number="05"
              title="Distributed Systems"
              description="Designing and understanding systems that coordinate asynchronous workloads across multiple services and workers."
              skills={[
                "Redis",
                "Celery",
                "RabbitMQ",
                "Task Queues",
                "Workers",
                "Orchestration",
              ]}
            />
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <div className="mx-auto max-w-7xl px-6 py-28">
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-zinc-900 to-[#09090b] p-8 lg:p-14">
            <p className="text-sm font-medium tracking-[0.35em] text-blue-400">
              CONTACT
            </p>

            <div className="mt-8 grid gap-12 lg:grid-cols-[1fr_0.9fr]">
              <div>
                <h2 className="text-5xl font-bold tracking-tight">
                  Let&apos;s build
                  <span className="block text-zinc-500">
                    something meaningful.
                  </span>
                </h2>

                <p className="mt-8 max-w-xl text-lg leading-9 text-zinc-400">
                  Open to opportunities, engineering conversations, projects,
                  and collaborations in Cloud, DevOps, Backend, and Platform
                  Engineering.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-xl border border-white/10 p-6 transition hover:border-emerald-400/50 hover:bg-emerald-400/5"
                >
                  <p className="text-sm text-zinc-500">WhatsApp</p>

                  <p className="mt-2 text-lg font-medium">
                    +91 93606 67064 ↗
                  </p>
                </a>

                <a
                  href={gmailCompose}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-xl border border-white/10 p-6 transition hover:border-blue-400/50 hover:bg-blue-400/5"
                >
                  <p className="text-sm text-zinc-500">
                    Email
                  </p>

                  <p className="mt-2 break-all text-lg font-medium">
                    {email} ↗
                  </p>
                </a>

                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-xl border border-white/10 p-6 transition hover:border-blue-400/50 hover:bg-blue-400/5"
                >
                  <p className="text-sm text-zinc-500">LinkedIn</p>

                  <p className="mt-2 text-lg font-medium">
                    V. A. Aldrin Joshua ↗
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Aldrin Joshua.</p>

          <p>Cloud · DevOps · Platform Engineering</p>
        </div>
      </footer>
    </main>
  );
}

function SkillCard({
  number,
  title,
  description,
  skills,
}: {
  number: string;
  title: string;
  description: string;
  skills: string[];
}) {
  return (
    <div className="grid gap-6 rounded-[1.5rem] border border-white/10 bg-white/[0.02] p-7 transition hover:border-blue-400/30 hover:bg-blue-400/[0.03] md:grid-cols-[auto_1fr_auto] md:items-center">
      <div className="flex h-13 w-13 items-center justify-center rounded-xl border border-blue-400/25 bg-blue-400/10 font-semibold text-blue-300">
        {number}
      </div>

      <div>
        <h3 className="text-xl font-semibold">{title}</h3>

        <p className="mt-2 max-w-md leading-6 text-zinc-500">
          {description}
        </p>
      </div>

      <div className="flex max-w-md flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-lg border border-white/10 px-4 py-2 text-sm text-zinc-400"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}