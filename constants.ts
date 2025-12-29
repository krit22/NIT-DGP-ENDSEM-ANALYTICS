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
    description: 'A bar chart comparing the Average SGPA across all 8 sections (A-H). Section G records the highest average SGPA (approx. 8.44), followed closely by Section E and H. Section D and A show the lowest average performance in this metric.',
    tags: ['SGPA', 'Average', 'Comparative'],
  },
  {
    id: 'ov-pass-excellence',
    title: 'Pass Rate and Excellence Trend by Section',
    imageUrl: 'https://github.com/krit22/Resources-for-analysis-website/blob/main/images/general/Code_Generated_Image.png?raw=true',
    description: 'A dual-axis chart visualizing Pass Percentage (blue bars) versus the count of students with SGPA ≥ 9 (red line). Section G stands out with both a high pass rate and the highest count of top performers (>30). Section D shows a high pass rate but the lowest number of top scorers. Sections A and B lag slightly in pass percentage.',
    tags: ['Pass Rate', 'Excellence', 'Trend', 'Dual-Axis'],
  },
  {
    id: 'ov-consistency-spread',
    title: 'Article 4: Sectional Grade Consistency & Spread',
    imageUrl: 'https://github.com/krit22/Resources-for-analysis-website/blob/main/images/general/Code_Generated_Image%20(4).png?raw=true',
    description: 'A box plot analysis illustrating the distribution, consistency, and spread of SGPA across all sections. The box represents the Interquartile Range (IQR), with the horizontal line indicating the median and the white dot representing the mean. Section G shows high performance with a compact upper quartile. Sections B and E exhibit wider variability, indicating a broader range of student capabilities. Section C displays a notable low-performance outlier.',
    tags: ['Box Plot', 'Consistency', 'Spread', 'Distribution'],
  },
  {
    id: 'ov-1',
    title: 'Overall GPA Distribution',
    imageUrl: 'https://picsum.photos/1200/800?random=1',
    description: 'A comparative bar chart showing the median and mean GPA across all 8 sections. Section A shows a slight lead in median scores, while Section H has the highest individual outlier.',
    tags: ['Comparative', 'Mean', 'Median'],
  },
  {
    id: 'ov-2',
    title: 'Pass vs. Fail Metrics',
    imageUrl: 'https://picsum.photos/1200/800?random=2',
    description: 'Pie charts representing the pass/fail ratio for the entire college batch. The overall pass percentage sits at 92%.',
    tags: ['Performance', 'Overview'],
  },
];

export const GROUP_ONE_INFOGRAPHICS: InfographicData[] = [
  {
    id: 'g1-1',
    title: 'Group 1 Aggregate Performance',
    imageUrl: 'https://picsum.photos/1200/800?random=3',
    description: 'Aggregated GPA curves for Sections A, B, C, and D. Group 1 shows a tighter standard deviation compared to Group 2.',
  },
];

export const GROUP_TWO_INFOGRAPHICS: InfographicData[] = [
  {
    id: 'g2-1',
    title: 'Group 2 Aggregate Performance',
    imageUrl: 'https://picsum.photos/1200/800?random=4',
    description: 'Performance metrics specifically for Sections E, F, G, and H. Section G shows significant improvement in the second semester data.',
  },
];

// Helper to get initial section structure
const createSectionPlaceholder = (sec: Section): SectionData => ({
  section: sec,
  stats: { studentCount: 60, avgGpa: 3.5, highestGpa: 4.0 }, // Placeholder stats
  infographics: [
    {
      id: `sec-${sec}-1`,
      title: `Section ${sec} Toppers Analysis`,
      imageUrl: 'https://picsum.photos/1200/800?random=5',
      description: `Detailed breakdown of the top 5 percentile students in Section ${sec}.`,
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
