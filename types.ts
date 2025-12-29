export enum Section {
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D',
  E = 'E',
  F = 'F',
  G = 'G',
  H = 'H',
}

export enum Group {
  ONE = 'Group 1 (A-D)',
  TWO = 'Group 2 (E-H)',
}

export interface InfographicData {
  id: string;
  title: string;
  imageUrl: string;
  description: string;
  tags?: string[];
  dateGenerated?: string;
}

export interface Student {
  NAME: string;
  Program: string;
  SGPA: number;
}

export interface SectionSummary {
  average_sgpa: number;
  strength: number;
  tag: string;
}

export interface RadarScores {
  Elite_Index: number;
  Stability_Index: number;
  Uniformity: number;
  Resilience: number;
}

export interface SectionData {
  summary: SectionSummary;
  hall_of_fame: Student[];
  branch_battle: Record<string, number>;
  local_hurdles: Record<string, number>;
  radar_scores: RadarScores;
  grade_density: Record<string, number>;
  infographics?: InfographicData[]; // Optional/Deprecated
}

export interface SectionMetricData {
  metrics: {
    average_sgpa: number;
    median_sgpa: number;
    max_sgpa: number;
    min_sgpa: number;
  };
  performance: {
    pass_percentage: number;
    toppers_9_plus_count: number;
    total_students: number;
  };
}

export interface GroupData {
  name: Group;
  sections: Section[];
  infographics: InfographicData[];
}