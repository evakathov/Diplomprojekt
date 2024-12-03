const templateIdMapping: Record<number, { icon: string; route: string }> = {
  352: { icon: "document", route: "./SurveyScreen" },
  353: { icon: "book", route: "./PreperationScreen" },
  354: { icon: "calendar", route: "./AppointmentScreen" },
  402: { icon: "video", route: "/home/VideoScreen" }, // Absolut sti for VideoScreen
  403: { icon: "upload", route: "./UploadPictureScreen" },
  404: { icon: "personality", route: "./PersonalityTestScreen" },
  405: { icon: "info", route: "./FinalInterviewScreen" },
};

export default templateIdMapping;
