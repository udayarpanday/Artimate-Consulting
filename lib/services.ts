import { type LucideIcon, Zap, Lightbulb, Plug, ShieldCheck, ListChecks, Code2 } from "lucide-react"

export type Service = {
  slug: string
  title: string
  short: string
  icon: LucideIcon
  heroImage: string
  intro: string[]
  pointers: string[]
  deliverables: string[]
  standards: string[]
}

export const services: Service[] = [
  {
    slug: "lv-system-design",
    title: "LV System Design",
    short:
      "End-to-end low voltage system design: load studies, protection coordination, short-circuit calculations, and compliance.",
    icon: Zap,
    heroImage: "/low-voltage-sld.png",
    intro: [
      "We produce LV designs that are buildable, compliant, and optimized for cost and reliability.",
      "Our approach combines standards-driven calculations with practical installation constraints and future expansion needs.",
    ],
    pointers: [
      "Load flow and diversity analysis with growth allowances",
      "Short-circuit, arc flash and protection coordination",
      "Cable sizing, derating and voltage drop compliance",
      "Busbar and switchboard specification and layout",
      "Selectivity and discrimination studies",
    ],
    deliverables: [
      "Single-line diagrams and schedules",
      "Protection settings and coordination report",
      "Cable lists, routing and tray sizing",
      "Load summaries and equipment datasheets",
      "As-built and handover documentation",
    ],
    standards: ["IEC 60364", "IEEE 242 (Buff Book)", "NFPA 70/NEC", "Local authority regulations"],
  },
  {
    slug: "lighting-services",
    title: "Lighting Services",
    short: "Lighting calculations, layouts, and specifications that balance efficiency, safety, and visual comfort.",
    icon: Lightbulb,
    heroImage: "/architectural-lighting-layout.png",
    intro: [
      "We deliver compliant lighting solutions for workplaces, industrial sites and public spaces.",
      "Our designs prioritize visual comfort, energy efficiency, maintenance and safety.",
    ],
    pointers: [
      "Illuminance and uniformity calculations",
      "Glare control (UGR), CRI and CCT selection",
      "Emergency lighting and egress mapping",
      "Daylight integration and controls strategy",
      "Maintainability and replacement planning",
    ],
    deliverables: [
      "Lighting layouts and luminaire schedules",
      "Lux calculation report and method statement",
      "Emergency lighting logbook and test points",
      "Control zoning and wiring diagrams",
      "Bill of quantities and specifications",
    ],
    standards: ["EN 12464-1/2", "IES LM-79/LM-80", "NFPA 101", "Local building codes"],
  },
  {
    slug: "earthing-and-bonding",
    title: "Earthing & Bonding",
    short: "Design and verification of earthing and bonding systems for personnel safety and equipment protection.",
    icon: Plug,
    heroImage: "/earthing-bonding-grid.png",
    intro: [
      "We engineer grounding systems that keep touch and step voltages within safe limits.",
      "We consider soil resistivity, fault current paths and corrosion/maintenance factors.",
    ],
    pointers: [
      "Soil resistivity surveys and modeling",
      "Ground grid layout and conductor sizing",
      "Touch/step voltage analysis and mitigation",
      "Bonding of metallic systems and enclosures",
      "Lightning protection interfaces",
    ],
    deliverables: [
      "Grounding plan and details",
      "Calculation notes and safety assessment",
      "Material specifications and corrosion control",
      "Testing and commissioning checklists",
      "Maintenance guidelines",
    ],
    standards: ["IEEE 80", "IEC 60364-5-54", "BS 7430", "IEC 62305 (lightning)"],
  },
  {
    slug: "rams-engineering",
    title: "RAMS Engineering",
    short: "Reliability, availability, maintainability and safety analysis to de-risk design and operations.",
    icon: ShieldCheck,
    heroImage: "/rams-fmea-fault-tree.png",
    intro: [
      "We integrate RAMS early to reduce whole-life risk and cost.",
      "Our analyses support design decisions, spares strategies and operational readiness.",
    ],
    pointers: [
      "Reliability block diagrams and availability modeling",
      "FMEA/FMECA and fault tree analysis",
      "Maintainability assessments and LORA",
      "Spares modeling and MTBF/MTTR targets",
      "Safety cases and hazard logs",
    ],
    deliverables: [
      "RAMS plan and methodology",
      "Analysis models and result reports",
      "Maintenance concept and spares lists",
      "Verification/validation traceability",
      "Safety case inputs",
    ],
    standards: ["EN 50126/8/9", "IEC 61508", "MIL-HDBK-217", "ISO 26262 (sector-specific)"],
  },
  {
    slug: "requirements-management",
    title: "Requirements Management",
    short: "Traceable requirements capture, V&V planning, and change control aligned with industry standards.",
    icon: ListChecks,
    heroImage: "/requirements-traceability-matrix.png",
    intro: [
      "Clear, testable requirements de-risk delivery and simplify handover.",
      "We implement practical processes and toolchains that teams actually use.",
    ],
    pointers: [
      "Stakeholder needs capture and decomposition",
      "SMART requirement writing and IDs",
      "Traceability matrices and coverage analysis",
      "V&V plans, procedures and evidence control",
      "Change control and baselining",
    ],
    deliverables: [
      "Requirement specifications and IDs",
      "Traceability and coverage reports",
      "V&V plan and procedure templates",
      "Tooling workflows and training",
      "Governance and change logs",
    ],
    standards: ["ISO/IEC/IEEE 29148", "INCOSE SE Handbook", "DO-178C/DO-254 (as applicable)"],
  },
  {
    slug: "software-development",
    title: "Software Development",
    short: "Full-stack web and systems development: architecture, APIs, front-end, testing, DevOps, and documentation.",
    icon: Code2,
    heroImage: "/software-dev-architecture.png",
    intro: [
      "We design and build robust, secure, and maintainable software aligned with your business outcomes. From discovery through production, we focus on clarity, testability, and operability.",
      "Our delivery approach integrates requirements management and RAMS thinking with modern engineering practices—versioned APIs, automated testing, CI/CD, observability, and documentation your team will actually use.",
    ],
    pointers: [
      "System architecture and solution design",
      "API design (REST/GraphQL) with versioning",
      "Front-end apps with React/Next.js",
      "Backend services in Node.js (or your preferred stack)",
      "Security hardening and threat modeling",
      "Automated testing: unit, integration, e2e",
      "CI/CD pipelines and environments",
      "Observability: logging, metrics, tracing",
    ],
    deliverables: [
      "Architecture diagrams and decision records",
      "API specifications (OpenAPI 3.1 / GraphQL schema)",
      "Codebase with linting, formatting, and docs",
      "Test suites with coverage reports",
      "CI/CD pipeline configuration and deployment scripts",
      "Runbooks, SLOs/SLIs, and on-call guides",
    ],
    standards: [
      "ISO/IEC/IEEE 12207 (software lifecycle)",
      "OWASP ASVS and OWASP Top 10",
      "OpenAPI 3.1 / GraphQL best practices",
      "The Twelve-Factor App methodology",
      "GitOps and trunk-based development",
    ],
  },
]

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug)
}
