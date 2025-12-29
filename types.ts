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

export interface SectionData {
  section: Section;
  stats: {
    studentCount: number;
    avgGpa: number;
    highestGpa: number;
  };
  infographics: InfographicData[];
}

export interface GroupData {
  name: Group;
  sections: Section[];
  infographics: InfographicData[];
}
