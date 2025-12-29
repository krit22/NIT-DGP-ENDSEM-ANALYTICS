import { Group, InfographicData, Section, SectionData } from './types';

// ============================================================================
// DATA ENTRY AREA
// This is where you will populate your data.
// ============================================================================

export const OVERALL_INFOGRAPHICS: InfographicData[] = [
  {
    id: 'ov-sgpa-avg',
    title: 'Average SGPA by Section',
    imageUrl: 'https://github.com/krit22/Resources-for-analysis-website/blob/main/images/general/unnamed.png?raw=true',
    description: 'Section G Dominates: 8.44 Avg SGPA',
    tags: ['SGPA', 'Average', 'Comparative'],
  },
  {
    id: 'ov-pass-excellence',
    title: 'Pass Rate vs. Excellence',
    imageUrl: 'https://github.com/krit22/Resources-for-analysis-website/blob/main/images/general/Code_Generated_Image.png?raw=true',
    description: 'Section G: Lowest Pass Rate. Most Toppers.',
    tags: ['Pass Rate', 'Excellence', 'Trend', 'Dual-Axis'],
  },
  {
    id: 'ov-consistency-spread',
    title: 'Grade Consistency & Spread',
    imageUrl: 'https://github.com/krit22/Resources-for-analysis-website/blob/main/images/general/Code_Generated_Image%20(4).png?raw=true',
    description: '',
    tags: ['Box Plot', 'Consistency', 'Spread', 'Distribution'],
  }
];

export const GROUP_COMPARISON_INFOGRAPHICS: InfographicData[] = [
  {
    id: 'gc-1',
    title: 'SGPA Distribution: Group 1 vs Group 2',
    imageUrl: 'https://github.com/krit22/Resources-for-analysis-website/blob/main/images/general/Code_Generated_Image%20(1).png?raw=true',
    description: 'Group 2: Higher Median. Group 1: More Compact.',
    tags: ['Comparison', 'Box Plot', 'Variance']
  }
];

export const GROUP_ONE_INFOGRAPHICS: InfographicData[] = [];

export const GROUP_TWO_INFOGRAPHICS: InfographicData[] = [];

// Helper to get initial section structure
const createSectionPlaceholder = (sec: Section): SectionData => ({
  section: sec,
  stats: { studentCount: 0, avgGpa: 0, highestGpa: 0 }, 
  infographics: [],
});

export const SECTION_DATA: Record<Section, SectionData> = {
  [Section.A]: createSectionPlaceholder(Section.A),
  [Section.B]: createSectionPlaceholder(Section.B),
  [Section.C]: createSectionPlaceholder(Section.C),
  [Section.D]: createSectionPlaceholder(Section.D),
  [Section.E]: createSectionPlaceholder(Section.E),
  [Section.F]: createSectionPlaceholder(Section.F),
  [Section.G]: createSectionPlaceholder(Section.G),
  [Section.H]: createSectionPlaceholder(Section.H),
};

export const SECTIONS_GROUP_1 = [Section.A, Section.B, Section.C, Section.D];
export const SECTIONS_GROUP_2 = [Section.E, Section.F, Section.G, Section.H];