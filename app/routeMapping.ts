const routeMapping: Record<string, string> = {
    "Sample Analysis": "SampleAnalysis",
    "Interview & information": "InterviewInformation",
    "Medical examination": "MedicalExamination",
    "Blood & urine test": "BloodUrin",
    "Donor profile": "DonorProfile",
  };
  
  export const getRouteName = (title: string): string => {
    return routeMapping[title] || "SampleAnalysis"; // Fallback til standardrute
  };