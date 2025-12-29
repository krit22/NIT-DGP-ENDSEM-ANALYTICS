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
  },
  {
    id: 'ov-1',
    title: 'Overall GPA Distribution',
    imageUrl: 'https://picsum.photos/1200/800?random=1',
    description: 'Section A: Best Median. Section H: Top Outlier.',
    tags: ['Comparative', 'Mean', 'Median'],
  },
  {
    id: 'ov-2',
    title: 'Pass vs. Fail Metrics',
    imageUrl: 'https://picsum.photos/1200/800?random=2',
    description: '92% Overall Pass Rate.',
    tags: ['Performance', 'Overview'],
  },
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

export const GROUP_ONE_INFOGRAPHICS: InfographicData[] = [
  {
    id: 'g1-1',
    title: 'Group 1 Aggregate',
    imageUrl: 'https://picsum.photos/1200/800?random=3',
    description: 'Group 1: Low Variance, Stable Scores.',
  },
];

export const GROUP_TWO_INFOGRAPHICS: InfographicData[] = [
  {
    id: 'g2-1',
    title: 'Group 2 Aggregate',
    imageUrl: 'https://picsum.photos/1200/800?random=4',
    description: 'Group 2: High Variance, Section G Leads.',
  },
];

// Helper to get initial section structure
const createSectionPlaceholder = (sec: Section): SectionData => ({
  section: sec,
  stats: { studentCount: 60, avgGpa: 3.5, highestGpa: 4.0 }, // Placeholder stats
  infographics: [
    {
      id: `sec-${sec}-1`,
      title: `Section ${sec} Toppers`,
      imageUrl: 'https://picsum.photos/1200/800?random=5',
      description: `Top 5% Performers: Section ${sec}`,
    },
  ],
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