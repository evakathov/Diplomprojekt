const templateIdMapping: Record<number, { icon: string; route: string }> = {
  252: { icon: "edit", route: "./SurveyScreen" },
  302: { icon: "plus", route: "./BloodUrineWhatWhy" },
  352: { icon: "edit", route: "./SurveyScreen" },
  353: { icon: "book", route: "./PreperationScreen" },
  354: { icon: "calendar", route: "./AppointmentScreen" },
  402: { icon: "youtube-play", route: "/home/VideoScreen" }, // Absolut sti for VideoScreen
  403: { icon: "upload", route: "./UploadPictureScreen" },
  404: { icon: "user", route: "./PersonalityTestScreen" },
  405: { icon: "info", route: "./FinalInterviewScreen" },
};

export default templateIdMapping;
