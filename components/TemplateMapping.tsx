// Mapping for templateID to icon and route
const templateIdMapping: Record<number, { icon: string; route: string }> = {
  352: { icon: "document", route: "./SurveyScreen" },
  353: { icon: "book", route: "./PreperationScreen" },
  354: { icon: "calendar", route: "./AppointmentScreen" },
  402: { icon: "medical", route: "./MedicalExaminationScreen" },
  403: { icon: "upload", route: "./UploadPictureScreen" },
  404: { icon: "personality", route: "./PersonalityTestScreen" },
  405: { icon: "info", route: "./FinalInterviewScreen" },
  // Tilføj flere templateID mappings her...
};

// Eksporter mappingen som standardeksport
export default templateIdMapping;
