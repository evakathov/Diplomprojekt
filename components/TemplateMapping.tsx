const templateIdMapping: Record<number, { icon: string; route: string }> = {
  252: { icon: "file-text", route: "./SurveyScreen" }, // Dokumentikon
  302: { icon: "flask", route: "./BloodUrineWhatWhy" }, // Laboratorieikon
  352: { icon: "file-text", route: "./SurveyScreen" }, // Dokumentikon
  353: { icon: "book", route: "./PreperationScreen" }, // Bogikon
  354: { icon: "calendar", route: "./AppointmentScreen" }, // Kalenderikon
  402: { icon: "play-circle", route: "/home/VideoScreen" }, // Videoafspilningsikon
  403: { icon: "upload", route: "./UploadPictureScreen" }, // Upload-ikon
  404: { icon: "user", route: "./PersonalityTestScreen" }, // Personikon
  405: { icon: "info", route: "./FinalInterviewScreen" }, // Informationsikon
};

export default templateIdMapping;
