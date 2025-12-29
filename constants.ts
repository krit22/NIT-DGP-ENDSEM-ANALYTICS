import { InfographicData, Section, SectionData, SectionMetricData } from './types';

// ============================================================================
// DATA ENTRY AREA
// ============================================================================

export const OVERALL_INFOGRAPHICS: InfographicData[] = [
  // Deprecated for OverallAnalysisPage, keeping for reference if needed
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

export const SECTION_METRICS_DATA: Record<string, SectionMetricData> = {
  "A": {
    "metrics": { "average_sgpa": 7.931, "median_sgpa": 8.11, "max_sgpa": 9.44, "min_sgpa": 6.25 },
    "performance": { "pass_percentage": 87.96, "toppers_9_plus_count": 15, "total_students": 108 }
  },
  "B": {
    "metrics": { "average_sgpa": 7.999, "median_sgpa": 8.055, "max_sgpa": 9.78, "min_sgpa": 5.86 },
    "performance": { "pass_percentage": 85.85, "toppers_9_plus_count": 13, "total_students": 106 }
  },
  "C": {
    "metrics": { "average_sgpa": 8.216, "median_sgpa": 8.44, "max_sgpa": 9.56, "min_sgpa": 5.75 },
    "performance": { "pass_percentage": 93.81, "toppers_9_plus_count": 25, "total_students": 113 }
  },
  "D": {
    "metrics": { "average_sgpa": 7.896, "median_sgpa": 8.0, "max_sgpa": 9.67, "min_sgpa": 6.0 },
    "performance": { "pass_percentage": 90.27, "toppers_9_plus_count": 12, "total_students": 113 }
  },
  "E": {
    "metrics": { "average_sgpa": 8.275, "median_sgpa": 8.22, "max_sgpa": 9.78, "min_sgpa": 6.0 },
    "performance": { "pass_percentage": 91.96, "toppers_9_plus_count": 22, "total_students": 112 }
  },
  "F": {
    "metrics": { "average_sgpa": 8.265, "median_sgpa": 8.33, "max_sgpa": 9.67, "min_sgpa": 6.63 },
    "performance": { "pass_percentage": 88.6, "toppers_9_plus_count": 20, "total_students": 114 }
  },
  "G": {
    "metrics": { "average_sgpa": 8.442, "median_sgpa": 8.33, "max_sgpa": 9.78, "min_sgpa": 7.0 },
    "performance": { "pass_percentage": 81.98, "toppers_9_plus_count": 31, "total_students": 111 }
  },
  "H": {
    "metrics": { "average_sgpa": 8.261, "median_sgpa": 8.33, "max_sgpa": 9.56, "min_sgpa": 6.56 },
    "performance": { "pass_percentage": 92.52, "toppers_9_plus_count": 20, "total_students": 107 }
  }
};

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

export const SECTIONS_GROUP_1 = [Section.A, Section.B, Section.C, Section.D];
export const SECTIONS_GROUP_2 = [Section.E, Section.F, Section.G, Section.H];

export const SECTION_DATA: Record<Section, SectionData> = {
  "A": {
    "summary": {"average_sgpa": 7.93, "strength": 108, "tag": "Growing"},
    "hall_of_fame": [{"NAME": "RUPAM BISWAS", "Program": "B.Tech-MC", "SGPA": 9.44}, {"NAME": "TULSI PATHAK", "Program": "B.Tech-EC", "SGPA": 9.44}, {"NAME": "ABHISHEK KUMAR", "Program": "B.Tech-CS", "SGPA": 9.33}, {"NAME": "RAVI SHANKAR PANDIT", "Program": "B.Tech-EE", "SGPA": 9.33}, {"NAME": "SHRIYESH BHUI", "Program": "B.Tech-EC", "SGPA": 9.33}, {"NAME": "ABHIJEET KUMAR", "Program": "B.Tech-CS", "SGPA": 9.22}, {"NAME": "HARSH KUMAR SINGH", "Program": "B.Tech-EC", "SGPA": 9.22}, {"NAME": "SUPRATIK BERA", "Program": "B.Tech-CS", "SGPA": 9.22}, {"NAME": "PREETAM MANDAL", "Program": "B.Tech-CS", "SGPA": 9.11}, {"NAME": "SREEJAN PAUL", "Program": "B.Tech-ME", "SGPA": 9.11}],
    "branch_battle": {"B.Tech-EC": 8.5, "B.Tech-MC": 8.43, "B.Tech-CS": 8.34, "B.Tech-EE": 8.31, "B.Tech-CE": 7.63, "B.Tech-MM": 7.58, "B.Tech-ME": 7.5, "B.Tech-CH": 7.44, "B.Tech-BT": 7.35},
    "local_hurdles": {"XEC02": 10, "XEC01": 9, "ESC01": 4},
    "radar_scores": {"Elite_Index": 13.9, "Stability_Index": 88.0, "Uniformity": 88.6, "Resilience": 91.7},
    "grade_density": {"<6": 0, "6-7": 22, "7-8": 30, "8-9": 46, "9-10": 10}
  },
  "B": {
    "summary": {"average_sgpa": 8.0, "strength": 106, "tag": "Growing"},
    "hall_of_fame": [{"NAME": "ANURAG TEWARY", "Program": "B.Tech-MC", "SGPA": 9.78}, {"NAME": "KUMAR HARSHRAJ", "Program": "B.Tech-CS", "SGPA": 9.56}, {"NAME": "ALOK RAJ", "Program": "B.Tech-CS", "SGPA": 9.33}, {"NAME": "ANISH DEB ROY", "Program": "B.Tech-EC", "SGPA": 9.33}, {"NAME": "SARTHAK JANA", "Program": "B.Tech-CS", "SGPA": 9.33}, {"NAME": "RICK BISWAS", "Program": "B.Tech-EE", "SGPA": 9.22}, {"NAME": "SUBHADEEP DATTA", "Program": "B.Tech-EE", "SGPA": 9.22}, {"NAME": "ANEEK PAL", "Program": "B.Tech-EC", "SGPA": 9.11}, {"NAME": "KAMAL KANTA MAHATO", "Program": "B.Tech-EC", "SGPA": 9.11}, {"NAME": "KUSUMANJALI PAILA", "Program": "B.Tech-CS", "SGPA": 9.11}],
    "branch_battle": {"B.Tech-MC": 8.37, "B.Tech-CS": 8.32, "B.Tech-CH": 8.25, "B.Tech-EC": 8.22, "B.Tech-CE": 8.14, "DD-CH": 7.89, "INT-MSC-CY": 7.89, "B.Tech-EE": 7.82, "B.Tech-ME": 7.75, "B.Tech-MM": 7.62, "B.Tech-BT": 7.39, "DD-BT": 7.22},
    "local_hurdles": {"XEC01": 11, "XEC02": 4, "MAC01": 4},
    "radar_scores": {"Elite_Index": 12.3, "Stability_Index": 85.8, "Uniformity": 89.4, "Resilience": 89.6},
    "grade_density": {"<6": 1, "6-7": 14, "7-8": 38, "8-9": 42, "9-10": 11}
  },
  "C": {
    "summary": {"average_sgpa": 8.22, "strength": 113, "tag": "High Performer"},
    "hall_of_fame": [{"NAME": "ADITYA RAJ", "Program": "B.Tech-EC", "SGPA": 9.56}, {"NAME": "SAPTARSHI GHOSH", "Program": "B.Tech-CS", "SGPA": 9.56}, {"NAME": "AISHIK DAS", "Program": "B.Tech-MC", "SGPA": 9.44}, {"NAME": "GAYATRI PRABHAKAR\nRAMTEKE", "Program": "B.Tech-CH", "SGPA": 9.44}, {"NAME": "MONOSIJ SENAPATI", "Program": "B.Tech-CS", "SGPA": 9.44}, {"NAME": "SAIKAT DAS", "Program": "B.Tech-EE", "SGPA": 9.44}, {"NAME": "ABHIRAJ DAS", "Program": "B.Tech-EE", "SGPA": 9.33}, {"NAME": "ARITRA BASU", "Program": "B.Tech-EE", "SGPA": 9.33}, {"NAME": "DAKSH JAIN", "Program": "B.Tech-EC", "SGPA": 9.33}, {"NAME": "ABHIROOP PRADHAN", "Program": "B.Tech-EE", "SGPA": 9.22}],
    "branch_battle": {"B.Tech-BT": 8.48, "B.Tech-EE": 8.42, "B.Tech-MC": 8.41, "B.Tech-CS": 8.4, "B.Tech-CH": 8.21, "B.Tech-EC": 8.13, "B.Tech-MM": 8.06, "B.Tech-CE": 8.04, "DD-CH": 8.0, "B.Tech-ME": 7.93, "INT-MSC-CY": 7.39},
    "local_hurdles": {"XEC01": 5, "XEC02": 2, "MAC01": 2},
    "radar_scores": {"Elite_Index": 22.1, "Stability_Index": 93.8, "Uniformity": 89.3, "Resilience": 95.6},
    "grade_density": {"<6": 1, "6-7": 14, "7-8": 25, "8-9": 54, "9-10": 18}
  },
  "D": {
    "summary": {"average_sgpa": 7.9, "strength": 113, "tag": "Consistent"},
    "hall_of_fame": [{"NAME": "SOMANSHU SAHA", "Program": "B.Tech-CS", "SGPA": 9.67}, {"NAME": "SHASWATA BANERJEE", "Program": "B.Tech-ME", "SGPA": 9.33}, {"NAME": "ARIJEET BHANDARI", "Program": "B.Tech-CS", "SGPA": 9.22}, {"NAME": "RAVULAPALLI PAVANI", "Program": "B.Tech-CS", "SGPA": 9.22}, {"NAME": "SUMAN SARKAR", "Program": "B.Tech-EE", "SGPA": 9.22}, {"NAME": "AYUSH CHATTERJEE", "Program": "B.Tech-CH", "SGPA": 9.11}, {"NAME": "NISHANT NAYAK", "Program": "B.Tech-CS", "SGPA": 9.11}, {"NAME": "SHUBHAM MONDAL", "Program": "B.Tech-BT", "SGPA": 9.11}, {"NAME": "SOHAM LAYEK", "Program": "B.Tech-EC", "SGPA": 9.11}, {"NAME": "KOTHAPATI KINISHA REDDY", "Program": "B.Tech-EE", "SGPA": 9.0}],
    "branch_battle": {"B.Tech-EC": 8.58, "B.Tech-EE": 8.24, "B.Tech-CH": 8.03, "B.Tech-CS": 8.01, "B.Tech-MC": 8.0, "B.Tech-BT": 7.76, "B.Tech-ME": 7.76, "B.Tech-CE": 7.62, "B.Tech-MM": 7.47, "INT-MSC-CY": 6.78, "DD-BT": 6.75},
    "local_hurdles": {"XEC01": 10, "MAC01": 7, "CSC01": 3},
    "radar_scores": {"Elite_Index": 10.6, "Stability_Index": 90.3, "Uniformity": 89.4, "Resilience": 91.2},
    "grade_density": {"<6": 1, "6-7": 25, "7-8": 32, "8-9": 46, "9-10": 9}
  },
  "E": {
    "summary": {"average_sgpa": 8.27, "strength": 112, "tag": "High Performer"},
    "hall_of_fame": [{"NAME": "KAUSTAV BETAL", "Program": "B.Tech-CS", "SGPA": 9.78}, {"NAME": "ABHIK MAHATO", "Program": "B.Tech-CS", "SGPA": 9.67}, {"NAME": "ADITYA S BHAT", "Program": "B.Tech-ME", "SGPA": 9.56}, {"NAME": "JAGANNATH SAHA", "Program": "B.Tech-ME", "SGPA": 9.44}, {"NAME": "SHATADRU GHOSH", "Program": "B.Tech-EE", "SGPA": 9.44}, {"NAME": "SHUDDHASATTWA BOSE", "Program": "B.Tech-EC", "SGPA": 9.44}, {"NAME": "AKSHAR GHOSH", "Program": "B.Tech-CS", "SGPA": 9.33}, {"NAME": "KUNJARI NAYAK", "Program": "B.Tech-EC", "SGPA": 9.33}, {"NAME": "RAVI RAJ", "Program": "B.Tech-EC", "SGPA": 9.22}, {"NAME": "RUPAM GIRI", "Program": "B.Tech-ME", "SGPA": 9.22}],
    "branch_battle": {"B.Tech-EC": 8.73, "B.Tech-CS": 8.52, "INT-MSC-CY": 8.5, "B.Tech-CE": 8.33, "B.Tech-EE": 8.32, "B.Tech-MC": 8.32, "B.Tech-BT": 8.21, "B.Tech-ME": 8.09, "B.Tech-MM": 8.03, "B.Tech-CH": 7.89, "DD-BT": 7.6},
    "local_hurdles": {"XEC01": 8, "PHC01": 3, "MAC01": 1},
    "radar_scores": {"Elite_Index": 19.6, "Stability_Index": 92.0, "Uniformity": 91.2, "Resilience": 92.9},
    "grade_density": {"<6": 1, "6-7": 3, "7-8": 36, "8-9": 59, "9-10": 13}
  },
  "F": {
    "summary": {"average_sgpa": 8.27, "strength": 114, "tag": "High Performer"},
    "hall_of_fame": [{"NAME": "RAJARSHI ROY", "Program": "B.Tech-ME", "SGPA": 9.67}, {"NAME": "PANKAJ KUMAR", "Program": "B.Tech-CS", "SGPA": 9.44}, {"NAME": "PRINCE PAL", "Program": "B.Tech-EE", "SGPA": 9.44}, {"NAME": "SOHAM RANA", "Program": "B.Tech-MM", "SGPA": 9.33}, {"NAME": "DWARAPUREDDY HARSHA\nVARDHAN", "Program": "B.Tech-ME", "SGPA": 9.22}, {"NAME": "RITU VISHWAKARMA", "Program": "B.Tech-MC", "SGPA": 9.22}, {"NAME": "ANTAR BOSE", "Program": "B.Tech-EC", "SGPA": 9.11}, {"NAME": "ANURAG KUMAR", "Program": "B.Tech-BT", "SGPA": 9.11}, {"NAME": "DIKSHA KUMARI", "Program": "B.Tech-CS", "SGPA": 9.11}, {"NAME": "GUVVALA SAINATH REDDY", "Program": "B.Tech-CS", "SGPA": 9.11}],
    "branch_battle": {"B.Tech-CS": 8.57, "B.Tech-MC": 8.46, "DD-CH": 8.44, "B.Tech-ME": 8.41, "B.Tech-EE": 8.38, "B.Tech-MM": 8.26, "B.Tech-BT": 8.04, "B.Tech-CH": 8.03, "B.Tech-EC": 8.02, "B.Tech-CE": 8.0, "INT-MSC-CY": 7.48},
    "local_hurdles": {"PHC01": 12, "MAC01": 3, "XEC01": 3},
    "radar_scores": {"Elite_Index": 17.5, "Stability_Index": 88.6, "Uniformity": 92.0, "Resilience": 97.4},
    "grade_density": {"<6": 0, "6-7": 4, "7-8": 40, "8-9": 56, "9-10": 14}
  },
  "G": {
    "summary": {"average_sgpa": 8.44, "strength": 111, "tag": "High Performer"},
    "hall_of_fame": [{"NAME": "KARTIKEY KANAUJIYA", "Program": "B.Tech-CS", "SGPA": 9.78}, {"NAME": "ARINDAM CHANDRA", "Program": "B.Tech-EC", "SGPA": 9.67}, {"NAME": "DARAK ARNAV GIRISH", "Program": "B.Tech-CS", "SGPA": 9.67}, {"NAME": "PIYUSH PATWARI", "Program": "B.Tech-EC", "SGPA": 9.67}, {"NAME": "SUNKARI VAIBHAV", "Program": "B.Tech-CS", "SGPA": 9.67}, {"NAME": "SWAPNEEL MUKHOPADHYAY", "Program": "B.Tech-ME", "SGPA": 9.67}, {"NAME": "WASIM MONDAL", "Program": "B.Tech-CS", "SGPA": 9.67}, {"NAME": "LUV SHREY", "Program": "B.Tech-ME", "SGPA": 9.56}, {"NAME": "AISHANI SENGUPTA", "Program": "B.Tech-CS", "SGPA": 9.44}, {"NAME": "GOURAB PAUL", "Program": "B.Tech-MM", "SGPA": 9.44}],
    "branch_battle": {"B.Tech-ME": 8.83, "B.Tech-CS": 8.77, "B.Tech-EC": 8.52, "B.Tech-CE": 8.42, "DD-BT": 8.33, "B.Tech-MC": 8.32, "B.Tech-CH": 8.28, "B.Tech-MM": 8.25, "B.Tech-EE": 8.22, "DD-CH": 8.22, "B.Tech-BT": 7.99, "INT-MSC-CY": 7.85},
    "local_hurdles": {"XEC01": 19, "PHC01": 5, "MAC01": 5},
    "radar_scores": {"Elite_Index": 27.9, "Stability_Index": 82.0, "Uniformity": 91.9, "Resilience": 82.9},
    "grade_density": {"<6": 0, "6-7": 1, "7-8": 36, "8-9": 49, "9-10": 25}
  },
  "H": {
    "summary": {"average_sgpa": 8.26, "strength": 107, "tag": "High Performer"},
    "hall_of_fame": [{"NAME": "MANISHA DAS", "Program": "B.Tech-CS", "SGPA": 9.56}, {"NAME": "SOUMYA SRIMANI", "Program": "B.Tech-MC", "SGPA": 9.56}, {"NAME": "AVNEESH KHAWAS", "Program": "B.Tech-ME", "SGPA": 9.44}, {"NAME": "SAUMADITYA CHAKRABORTY", "Program": "B.Tech-CS", "SGPA": 9.44}, {"NAME": "ARMAN SAHOO", "Program": "B.Tech-ME", "SGPA": 9.33}, {"NAME": "HARSH RAJ", "Program": "B.Tech-ME", "SGPA": 9.22}, {"NAME": "MEESALA JEEVAN", "Program": "B.Tech-EE", "SGPA": 9.22}, {"NAME": "SHASHANK GUPTA", "Program": "B.Tech-MM", "SGPA": 9.22}, {"NAME": "SUVASISH GHOSH", "Program": "B.Tech-EE", "SGPA": 9.22}, {"NAME": "ABHISHEK DUTTA", "Program": "B.Tech-CH", "SGPA": 9.11}],
    "branch_battle": {"B.Tech-CS": 8.69, "B.Tech-EE": 8.66, "B.Tech-EC": 8.49, "B.Tech-MC": 8.48, "B.Tech-MM": 8.44, "B.Tech-CH": 8.3, "B.Tech-ME": 7.98, "B.Tech-CE": 7.96, "B.Tech-BT": 7.78, "DD-BT": 7.56},
    "local_hurdles": {"PHC01": 5, "CSC01": 2, "MAC01": 2},
    "radar_scores": {"Elite_Index": 18.7, "Stability_Index": 92.5, "Uniformity": 91.3, "Resilience": 100.0},
    "grade_density": {"<6": 0, "6-7": 7, "7-8": 31, "8-9": 52, "9-10": 17}
  }
};