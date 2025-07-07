## 🎓 Betadoexe — Smart Quiz Platform for SRM University

**Betadoexe** is a full-stack AI-powered quiz-taking platform built exclusively for SRM University students. It streamlines personalized assessments by integrating college login, course recognition, 
syllabus-based quiz generation, and performance tracking — all in one seamless experience.

### 🚀 Key Features

- 🔐 **SRM College Login Integration**  
  Students log in using their SRM credentials, ensuring secure and verified access.

- 🎓 **Auto-Detected Stream & Subjects**  
  Based on the student’s selected stream (e.g., CSE, ECE, etc.), the platform fetches the current semester’s subjects.

- 📚 **Topic-wise Quiz Generation**  
  Each subject includes 5 predefined core topics. On selection, the complete topic syllabus is sent to a pre-trained **OpenAI model** to auto-generate a high-quality quiz tailored to that topic.

- 📝 **Dynamic, AI-Generated Questions**  
  The quiz includes a mix of multiple-choice and short-form questions, directly aligned with the syllabus.

- 📊 **Instant Results & Feedback**  
  After submission, students can view their total score, correct answers, and receive performance insights.

---

## 🛠️ Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Authentication**: SRM College SSO or Supabase Auth (optional)
- **Database**: PostgreSQL (via Supabase)
- **AI Integration**: OpenAI GPT (fine-tuned or prompt-engineered)
- **State Management**: React Context / Redux (as needed)
- **Deployment**: Vercel (Frontend), Render / Railway (Backend)
- **OCR / PDF Parsing (Optional)**: pdf.js or Tika for syllabus input (future)

---

> 🎯 Designed to help SRM students test smarter, faster, and better — all driven by intelligent automation.

