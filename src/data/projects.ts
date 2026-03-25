export interface Project {
  title: string;
  image: string;
  slug: string;
  year: string;
  description: string;
  details: string[];
  gallery: string[];
}

export const projects: Project[] = [
  {
    title: "Linear Motor Guidance System",
    year: "2024",
    image: "https://images.squarespace-cdn.com/content/v1/6420a892a385a36f8cfc94cc/76b24a20-fdbb-482c-922c-fc7929146653/IMG_3945.jpg",
    slug: "linear-motor-guidance-system",
    description: "Designed and manufactured a precision guidance system for a linear induction motor, ensuring smooth and stable travel along the track.",
    details: [
      "Developed custom aluminum rail profiles for low-friction guidance",
      "Integrated adjustable roller assemblies for alignment tuning",
      "Performed FEA analysis for structural integrity under dynamic loads",
      "Achieved sub-millimeter tracking accuracy over 10m test track",
    ],
    gallery: [
      "https://images.squarespace-cdn.com/content/v1/6420a892a385a36f8cfc94cc/76b24a20-fdbb-482c-922c-fc7929146653/IMG_3945.jpg",
    ],
  },
  {
    title: "Carbon Fiber Hyperloop Monocoque",
    year: "2024",
    image: "https://images.squarespace-cdn.com/content/v1/6420a892a385a36f8cfc94cc/1720497513217-6XCX9OHSYLPOVC025NP7/IMG_9745.jpg",
    slug: "carbon-fiber-hyperloop-frame",
    description: "Led the design and fabrication of a carbon fiber monocoque shell for a hyperloop pod competition vehicle.",
    details: [
      "Designed monocoque structure using composite layup analysis",
      "Managed wet layup and vacuum bagging manufacturing process",
      "Achieved 40% weight reduction compared to previous aluminum frame",
      "Integrated mounting points for all subsystems within the shell",
    ],
    gallery: [
      "https://images.squarespace-cdn.com/content/v1/6420a892a385a36f8cfc94cc/1720497513217-6XCX9OHSYLPOVC025NP7/IMG_9745.jpg",
    ],
  },
  {
    title: "Tesla Internship I: Cybertruck Metal Forming",
    year: "2023",
    image: "https://images.squarespace-cdn.com/content/v1/6420a892a385a36f8cfc94cc/176fd77f-0181-4812-aa90-91ab4adf3c0c/Screenshot+2025-07-02+171311.jpg",
    slug: "tesla-internship-projects",
    description: "Worked on metal forming processes for the Tesla Cybertruck body panels during a manufacturing engineering internship.",
    details: [
      "Supported stamping die development for stainless steel body panels",
      "Analyzed forming simulations and correlated with physical tryout results",
      "Contributed to process optimization reducing scrap rate",
      "Collaborated cross-functionally with design and quality teams",
    ],
    gallery: [
      "https://images.squarespace-cdn.com/content/v1/6420a892a385a36f8cfc94cc/176fd77f-0181-4812-aa90-91ab4adf3c0c/Screenshot+2025-07-02+171311.jpg",
    ],
  },
  {
    title: "Ergonomic Assembly Tool",
    year: "2023",
    image: "https://images.squarespace-cdn.com/content/v1/6420a892a385a36f8cfc94cc/1723934175065-E28OI4603UKN3O37P3K4/Screen+Shot+2024-08-17+at+4.35.47+PM.png",
    slug: "ergonomic-assembly-tool",
    description: "Designed an ergonomic hand tool to reduce repetitive strain injuries during automotive assembly operations.",
    details: [
      "Conducted ergonomic analysis of existing assembly processes",
      "Prototyped multiple grip configurations using 3D printing",
      "Validated design through operator feedback and biomechanical testing",
      "Reduced wrist deviation angle by 35% compared to standard tooling",
    ],
    gallery: [
      "https://images.squarespace-cdn.com/content/v1/6420a892a385a36f8cfc94cc/1723934175065-E28OI4603UKN3O37P3K4/Screen+Shot+2024-08-17+at+4.35.47+PM.png",
    ],
  },
  {
    title: "Automotive Offline Process Optimization",
    year: "2023",
    image: "https://images.squarespace-cdn.com/content/v1/6420a892a385a36f8cfc94cc/1680917604126-H2W10432U956DH77G48F/Screenshot+2023-04-07+213309.png",
    slug: "toyota",
    description: "Optimized offline quality inspection processes at an automotive manufacturing plant to improve throughput and reduce cycle time.",
    details: [
      "Mapped existing inspection workflow and identified bottlenecks",
      "Implemented standardized work procedures for offline stations",
      "Reduced average inspection cycle time by 20%",
      "Presented findings and recommendations to plant management",
    ],
    gallery: [
      "https://images.squarespace-cdn.com/content/v1/6420a892a385a36f8cfc94cc/1680917604126-H2W10432U956DH77G48F/Screenshot+2023-04-07+213309.png",
    ],
  },
  {
    title: "Dishwasher Fitting Failure Analysis",
    year: "2022",
    image: "https://images.squarespace-cdn.com/content/v1/6420a892a385a36f8cfc94cc/1687652251789-X6TUF38F5WXLMHE8SM8W/Screenshot+2023-06-24+201613.jpg",
    slug: "dishwasher-fitting-failure-analysis",
    description: "Conducted root cause analysis on a recurring fitting failure in a consumer dishwasher product line.",
    details: [
      "Performed fractographic analysis on failed components",
      "Identified stress concentration from injection molding gate location",
      "Proposed design modification to redistribute stress",
      "Validated fix through accelerated life testing",
    ],
    gallery: [
      "https://images.squarespace-cdn.com/content/v1/6420a892a385a36f8cfc94cc/1687652251789-X6TUF38F5WXLMHE8SM8W/Screenshot+2023-06-24+201613.jpg",
    ],
  },
  {
    title: "Linear Induction Motor Development",
    year: "2021",
    image: "https://images.squarespace-cdn.com/content/v1/6420a892a385a36f8cfc94cc/1682384241610-GW5G0YOV33WP6ZNWTS1V/Screenshot+2023-04-24+205622.png",
    slug: "goosev",
    description: "Designed and built a linear induction motor from scratch for a hyperloop pod propulsion system.",
    details: [
      "Performed electromagnetic simulations to optimize coil geometry",
      "Manufactured stator assembly with precision wound copper coils",
      "Achieved target thrust force of 200N at rated current",
      "Integrated motor with power electronics and control system",
    ],
    gallery: [
      "https://images.squarespace-cdn.com/content/v1/6420a892a385a36f8cfc94cc/1682384241610-GW5G0YOV33WP6ZNWTS1V/Screenshot+2023-04-24+205622.png",
    ],
  },
  {
    title: "Linear Induction Motor Stabilization System",
    year: "2022",
    image: "https://images.squarespace-cdn.com/content/v1/6420a892a385a36f8cfc94cc/1682473150753-TAIY94PN2U0F9JR1QCXP/IMG_3890.jpg",
    slug: "goose-vi-waterloop",
    description: "Developed an active stabilization system to maintain consistent air gap between the linear motor and reaction rail.",
    details: [
      "Designed sensor array for real-time gap measurement",
      "Implemented PID control loop for active gap adjustment",
      "Integrated pneumatic actuators for rapid response",
      "Maintained gap within ±0.5mm at speeds up to 50 km/h",
    ],
    gallery: [
      "https://images.squarespace-cdn.com/content/v1/6420a892a385a36f8cfc94cc/1682473150753-TAIY94PN2U0F9JR1QCXP/IMG_3890.jpg",
    ],
  },
  {
    title: "Compliant Knee Brace",
    year: "2021",
    image: "https://images.squarespace-cdn.com/content/v1/6420a892a385a36f8cfc94cc/1679865108925-6AU0BR8P6D9JPGJZKIZZ/KneeBrac6.png",
    slug: "knee-brace",
    description: "Designed a compliant mechanism knee brace that provides support while allowing natural range of motion.",
    details: [
      "Used topology optimization to design compliant flexure hinges",
      "3D printed prototypes in flexible TPU material",
      "Validated range of motion and support torque through testing",
      "Achieved 90% of natural knee ROM while providing 15 Nm support",
    ],
    gallery: [
      "https://images.squarespace-cdn.com/content/v1/6420a892a385a36f8cfc94cc/1679865108925-6AU0BR8P6D9JPGJZKIZZ/KneeBrac6.png",
    ],
  },
  {
    title: "4 Bar Linkage Pick and Place Prototype",
    year: "2024",
    image: "https://images.squarespace-cdn.com/content/v1/6420a892a385a36f8cfc94cc/1733331364046-OQJEBMJY57G1HBJD44T3/Screenshot+2024-12-04+000042.png",
    slug: "4-bar-linkage-pick-and-place-prototype",
    description: "Prototyped a four-bar linkage mechanism for automated pick-and-place operations in a manufacturing setting.",
    details: [
      "Synthesized linkage geometry for desired end-effector trajectory",
      "Simulated mechanism kinematics and dynamics in MATLAB",
      "Manufactured prototype using laser-cut acrylic and 3D printed joints",
      "Demonstrated successful pick-and-place cycle at target speed",
    ],
    gallery: [
      "https://images.squarespace-cdn.com/content/v1/6420a892a385a36f8cfc94cc/1733331364046-OQJEBMJY57G1HBJD44T3/Screenshot+2024-12-04+000042.png",
    ],
  },
];
