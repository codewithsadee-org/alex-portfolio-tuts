/**
 * @copyright 2026 codewithsadee
 * @license Apache-2.0
 */

/**
 * Assets
 */
import {
  CpuIcon,
  GlobeIcon,
  LayersIcon,
  MailIcon,
  SparklesIcon,
  TerminalIcon,
  GraduationCapIcon,
  AwardIcon,
} from 'lucide-react';
import {
  React,
  NextJs,
  TypeScript,
  NodeJs,
  Docker,
  PostgreSQL,
} from '@/assets/TechStackIcons';

/**
 * Types
 */
import type { Project } from '@/types';

export const PROFILE_TAGS = [
  'React 19',
  'TypeScript',
  'Node.js',
  'AWS',
  'GraphQL',
];

export const PROJECTS: Project[] = [
  {
    Icon: GlobeIcon,
    bg: '#D0E4FF',
    title: 'EcoSphere AI',
    desc: 'A comprehensive sustainability tracking platform that uses machine learning to analyze carbon footprints and provide actionable insights for businesses and individuals.',
    techStacks: ['React', 'Node.js', 'AI'],
    projectUrl: '',
  },
  {
    Icon: CpuIcon,
    bg: '#FAD8FD',
    title: 'NeuroFlow',
    desc: 'Real-time productivity dashboard that syncs with biometric devices to optimize work schedules based on focus levels and energy patterns.',
    techStacks: ['Next.js', 'Socket.io'],
    projectUrl: '',
  },
  {
    Icon: TerminalIcon,
    bg: '#E2F1E6',
    title: 'Veritas API',
    desc: 'High-performance authentication gateway built for Web3 applications with zero-knowledge proof integration and distributed session management.',
    techStacks: ['Go', 'Redis', 'Docker'],
    projectUrl: '',
  },
  {
    Icon: LayersIcon,
    bg: '#FFE8D6',
    title: 'CloudSync Pro',
    desc: 'Enterprise-grade cloud storage management system that seamlessly integrates AWS, Azure, and GCP for unified data management.',
    techStacks: ['Vue.js', 'Python', 'Kubernetes'],
    projectUrl: '',
  },
  {
    Icon: SparklesIcon,
    bg: '#E8F5E9',
    title: 'DataViz Studio',
    desc: 'Powerful data visualization toolkit with real-time rendering capabilities for large datasets using WebGL acceleration.',
    techStacks: ['D3.js', 'React', 'WebGL'],
    projectUrl: '',
  },
  {
    Icon: MailIcon,
    bg: '#FFF3E0',
    title: 'SecureChat',
    desc: 'Privacy-focused messaging app with military-grade encryption, self-destructing messages, and decentralized architecture.',
    techStacks: ['React Native', 'WebRTC', 'Rust'],
    projectUrl: '',
  },
];

export const EXPERIENCES = [
  {
    company: 'CloudScale System',
    position: 'Senior Backend Engineer',
    joinDate: '2021',
    achievements: [
      'Led migration to microservices architecture, improving system scalability by 300%',
      'Mentored team of 8 junior developers',
    ],
    skills: ['React', 'Node.js', 'AWS'],
  },
  {
    company: 'Nexus Labs',
    position: 'Full Stack Developer',
    joinDate: '2019',
    resignDate: '2021',
    achievements: [
      'Built real-time analytics dashboard serving 50K+ users',
      'Implemented CI/CD pipeline reducing bugs by 60%',
    ],
    skills: ['View.js', 'Python', 'PostgreSQL'],
  },
];

export const EDUCATIONS = [
  {
    title: 'B.S. Computer Science',
    academy: 'Tech Institute of Excellence',
    year: '2019',
    certificate: 'Graduated with Honors',
    Icon: GraduationCapIcon,
    skills: ['Algorithm', 'Distributed Systems', 'ML'],
  },
  {
    title: 'AWS Certified Architect',
    academy: 'Amazon Web Services',
    year: '2022',
    certificate: 'Amazon Web Services',
    Icon: AwardIcon,
    skills: ['Cloud Architecture', 'Security', 'Cost Optimization'],
  },
  {
    title: 'Google Cloud Professional',
    academy: 'Google Cloud',
    year: '2023',
    certificate: 'Google Cloud',
    Icon: AwardIcon,
    skills: ['Infrastructure', 'DevOps', 'Networking'],
  },
];

export const TECH_STACKS = [
  {
    name: 'React',
    Icon: React,
  },
  {
    name: 'Next.js',
    Icon: NextJs,
  },
  {
    name: 'TypeScript',
    Icon: TypeScript,
  },
  {
    name: 'NodeJs',
    Icon: NodeJs,
  },
  {
    name: 'Docker',
    Icon: Docker,
  },
  {
    name: 'PostgreSQL',
    Icon: PostgreSQL,
  },
];

export const FOOTER_LINKS = [
  {
    url: '#',
    label: 'Resume',
  },
  {
    url: '#',
    label: 'LinkedIn',
  },
  {
    url: '#',
    label: 'Github',
  },
];
