/*==================================================
  WANAFUNZI INTERACTIVITY
  Plain JavaScript for quiz, search, chatbot, FAQ,
  mobile navigation, and learner feedback.
==================================================*/

const careers = {
  software: {
    title: "Software Engineer",
    aliases: ["software engineer", "programmer", "developer", "coding", "computer science"],
    description: "Builds websites, mobile apps, school systems, payment tools and business software used in Kenya and globally.",
    subjects: ["Mathematics", "Computer Studies", "Physics", "English", "Business Studies"],
    courses: ["BSc Computer Science", "BSc Software Engineering", "BSc Information Technology", "Diploma in ICT"],
    universities: ["University of Nairobi", "JKUAT", "Kenyatta University", "Strathmore University", "Technical University of Kenya", "Zetech University"],
    skills: ["Problem solving", "Programming", "Communication", "Teamwork", "Creativity"],
    salary: "KSh 60,000 - KSh 400,000+ per month depending on skills and experience.",
    demand: "Very high demand as Kenyan businesses, schools, banks and startups digitise.",
    nextStep: "Practise HTML, CSS, JavaScript and Python, build small apps, and join a school coding club."
  },
  medicine: {
    title: "Doctor / Health Professional",
    aliases: ["doctor", "medicine", "clinical officer", "health", "medical"],
    description: "Diagnoses, treats and prevents illness in hospitals, clinics, research centres and community health programmes.",
    subjects: ["Biology", "Chemistry", "Mathematics", "English", "Physics"],
    courses: ["MBChB", "BSc Clinical Medicine", "BSc Nursing", "Diploma in Clinical Medicine"],
    universities: ["University of Nairobi", "Moi University", "Kenyatta University", "Maseno University", "Egerton University", "KMTC"],
    skills: ["Compassion", "Attention to detail", "Science reasoning", "Communication", "Resilience"],
    salary: "KSh 80,000 - KSh 500,000+ per month depending on role, county and experience.",
    demand: "Very high demand across county hospitals, private hospitals and public health programmes.",
    nextStep: "Strengthen Biology and Chemistry, volunteer in health clubs, and learn first aid basics."
  },
  engineering: {
    title: "Engineer",
    aliases: ["engineer", "civil engineer", "mechanical engineer", "electrical engineer", "construction"],
    description: "Designs and improves roads, buildings, machines, power systems, water systems and infrastructure.",
    subjects: ["Mathematics", "Physics", "Chemistry", "Computer Studies", "Geography"],
    courses: ["BSc Civil Engineering", "BSc Mechanical Engineering", "BSc Electrical Engineering", "Diploma in Engineering"],
    universities: ["University of Nairobi", "JKUAT", "Technical University of Kenya", "Dedan Kimathi University", "Moi University"],
    skills: ["Design thinking", "Mathematics", "Project planning", "Problem solving", "Safety awareness"],
    salary: "KSh 70,000 - KSh 350,000+ per month depending on field and registration.",
    demand: "High demand in construction, energy, manufacturing, transport and water projects.",
    nextStep: "Focus on Mathematics and Physics, join science fairs, and build models or repair projects."
  },
  teaching: {
    title: "Teacher / Education Specialist",
    aliases: ["teacher", "education", "trainer", "lecturer"],
    description: "Helps learners grow by teaching subjects, mentoring students and designing learning experiences.",
    subjects: ["English", "Kiswahili", "Mathematics", "Sciences", "Humanities"],
    courses: ["Bachelor of Education", "Diploma in Teacher Education", "Early Childhood Education", "Special Needs Education"],
    universities: ["Kenyatta University", "Moi University", "University of Nairobi", "Maseno University", "Mount Kenya University"],
    skills: ["Communication", "Patience", "Leadership", "Planning", "Creativity"],
    salary: "KSh 35,000 - KSh 180,000+ per month depending on level and employer.",
    demand: "Steady demand in public schools, private schools, training centres and online education.",
    nextStep: "Tutor classmates, practise public speaking, and identify the subject you love explaining most."
  },
  law: {
    title: "Lawyer / Legal Professional",
    aliases: ["lawyer", "law", "advocate", "judge", "legal"],
    description: "Advises people and organisations, prepares legal documents and represents clients in legal matters.",
    subjects: ["English", "Kiswahili", "History", "CRE/IRE", "Business Studies"],
    courses: ["Bachelor of Laws (LLB)", "Diploma in Law", "Criminology", "Public Policy"],
    universities: ["University of Nairobi", "Kenyatta University", "Strathmore University", "Moi University", "Mount Kenya University"],
    skills: ["Reading", "Writing", "Public speaking", "Research", "Ethical judgement"],
    salary: "KSh 50,000 - KSh 500,000+ per month depending on practice area and experience.",
    demand: "Strong demand in firms, companies, government, NGOs and dispute resolution.",
    nextStep: "Read widely, debate respectfully, improve English and Kiswahili, and follow civic issues."
  },
  business: {
    title: "Business Analyst / Entrepreneur",
    aliases: ["business", "entrepreneur", "accountant", "banker", "finance", "marketing"],
    description: "Solves business problems, manages money, grows organisations and creates new ventures.",
    subjects: ["Mathematics", "Business Studies", "English", "Computer Studies", "Geography"],
    courses: ["BCom", "BSc Economics", "CPA", "Diploma in Business Management", "Bachelor of Procurement"],
    universities: ["University of Nairobi", "KCA University", "Strathmore University", "Kenyatta University", "USIU-Africa"],
    skills: ["Numeracy", "Communication", "Planning", "Customer focus", "Decision making"],
    salary: "KSh 45,000 - KSh 300,000+ per month, with entrepreneurship varying widely.",
    demand: "High demand because every sector needs finance, sales, operations and management talent.",
    nextStep: "Start a small project, learn budgeting, practise Excel/Sheets and study Kenyan businesses."
  },
  creative: {
    title: "Creative Designer / Media Professional",
    aliases: ["designer", "graphic designer", "artist", "media", "journalist", "music", "fashion"],
    description: "Creates visual designs, stories, videos, brands, fashion, music and media content for audiences.",
    subjects: ["Art and Design", "English", "Kiswahili", "Computer Studies", "Music"],
    courses: ["Graphic Design", "Journalism", "Film Production", "Fashion Design", "Digital Media"],
    universities: ["Kenyatta University", "Multimedia University", "Technical University of Kenya", "KCA University", "BuruBuru Institute of Fine Arts"],
    skills: ["Creativity", "Storytelling", "Design tools", "Presentation", "Client communication"],
    salary: "KSh 30,000 - KSh 250,000+ per month depending on portfolio and clients.",
    demand: "Growing demand in advertising, content creation, digital media, events and brand design.",
    nextStep: "Build a portfolio, practise Canva or design software, and publish your best work safely."
  },
  agriculture: {
    title: "Agricultural Scientist",
    aliases: ["agriculture", "agronomist", "veterinarian", "farming", "environment"],
    description: "Improves food production, animal health, soil care, climate-smart farming and agribusiness.",
    subjects: ["Agriculture", "Biology", "Chemistry", "Mathematics", "Geography"],
    courses: ["BSc Agriculture", "Veterinary Medicine", "Agribusiness Management", "Environmental Science"],
    universities: ["Egerton University", "University of Nairobi", "JKUAT", "Kenyatta University", "Maseno University"],
    skills: ["Observation", "Science reasoning", "Field work", "Data collection", "Enterprise skills"],
    salary: "KSh 40,000 - KSh 250,000+ per month depending on specialisation and enterprise.",
    demand: "High demand because agriculture remains central to Kenya's economy and food security.",
    nextStep: "Join 4K Club, grow a small project, track yields and learn climate-smart farming."
  },
  aviation: {
    title: "Pilot / Aviation Professional",
    aliases: ["pilot", "aviation", "cabin crew", "air traffic", "aircraft"],
    description: "Works in flying, aircraft maintenance, cabin safety, airport operations or air traffic control.",
    subjects: ["Mathematics", "Physics", "English", "Geography", "Computer Studies"],
    courses: ["Commercial Pilot Licence", "Aeronautical Engineering", "Cabin Crew Training", "Air Traffic Control"],
    universities: ["Kenya School of Flying", "East African School of Aviation", "Technical University of Kenya", "JKUAT"],
    skills: ["Discipline", "Communication", "Spatial awareness", "Safety", "Calm decision making"],
    salary: "KSh 70,000 - KSh 800,000+ per month depending on role, licence and airline.",
    demand: "Competitive but valuable in airlines, cargo, tourism, airports and aircraft maintenance.",
    nextStep: "Strengthen Physics, Mathematics and English, then research licensing and medical requirements."
  }
};

const careerValues = Object.values(careers);

function byId(id) {
  return document.getElementById(id);
}

function findCareer(query) {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return careers.software;
  return careerValues.find((career) =>
    career.aliases.some((alias) => normalized.includes(alias)) ||
    career.title.toLowerCase().includes(normalized)
  ) || careerValues.find((career) =>
    career.subjects.some((subject) => normalized.includes(subject.toLowerCase()))
  ) || careers.software;
}

function listItems(items) {
  return items.map((item) => `<li>${item}</li>`).join("");
}

function showCareer(career) {
  const result = byId("careerResult");
  if (!result) return;

  byId("careerTitle").textContent = career.title;
  byId("careerDescription").textContent = `${career.description} ${career.nextStep}`;
  byId("subjectsList").innerHTML = listItems(career.subjects);
  byId("courseName").textContent = career.courses.join(", ");
  byId("universitiesList").innerHTML = listItems(career.universities);
  byId("skillsList").innerHTML = listItems(career.skills);
  byId("salaryRange").textContent = career.salary;
  byId("futureDemand").textContent = career.demand;
  result.classList.add("show");
}

function initNavigation() {
  const menuButton = document.querySelector(".menu-btn");
  const links = document.querySelector(".nav-links");
  if (!menuButton || !links) return;

  menuButton.addEventListener("click", () => links.classList.toggle("active"));
  links.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => links.classList.remove("active"));
  });
}

function initQuiz() {
  const form = byId("careerQuiz");
  if (!form) return;

  const cards = [...form.querySelectorAll(".question-card")];
  const total = cards.length;
  let current = 0;

  const currentQuestion = byId("currentQuestion");
  const progressPercent = byId("progressPercent");
  const progressFill = byId("progressFill");
  const prevButton = byId("prevBtn");
  const nextButton = byId("nextBtn");

  function updateQuiz() {
    cards.forEach((card, index) => card.classList.toggle("active", index === current));
    const percent = Math.round(((current + 1) / total) * 100);
    currentQuestion.textContent = current + 1;
    progressPercent.textContent = `${percent}%`;
    progressFill.style.width = `${percent}%`;
    prevButton.disabled = current === 0;
    nextButton.textContent = current === total - 1 ? "View Results" : "Next";
  }

  form.addEventListener("change", (event) => {
    const label = event.target.closest("label");
    if (!label) return;
    const card = event.target.closest(".question-card");
    card.querySelectorAll("label").forEach((item) => item.classList.remove("selected"));
    label.classList.add("selected");
    card.classList.add("completed");
  });

  prevButton.addEventListener("click", () => {
    if (current > 0) {
      current -= 1;
      updateQuiz();
    }
  });

  nextButton.addEventListener("click", () => {
    const selected = cards[current].querySelector("input:checked");
    if (!selected) {
      addChatMessage("bot", "Choose one answer before moving on. Honest answers make your career match more useful.");
      return;
    }

    if (current < total - 1) {
      current += 1;
      updateQuiz();
      return;
    }

    showQuizResults(new FormData(form));
  });

  byId("restartQuiz")?.addEventListener("click", () => {
    form.reset();
    cards.forEach((card) => {
      card.classList.remove("completed");
      card.querySelectorAll("label").forEach((label) => label.classList.remove("selected"));
    });
    current = 0;
    byId("results")?.classList.remove("show");
    updateQuiz();
    document.querySelector("#career-quiz")?.scrollIntoView({ behavior: "smooth" });
  });

  byId("downloadResults")?.addEventListener("click", downloadResults);
  updateQuiz();
}

function showQuizResults(formData) {
  const scores = Object.fromEntries(Object.keys(careers).map((key) => [key, 0]));
  for (const value of formData.values()) {
    if (scores[value] !== undefined) scores[value] += 1;
  }

  const ranked = Object.entries(scores)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([key, score], index) => ({
      key,
      career: careers[key],
      percent: Math.max(62, Math.min(98, 72 + score * 5 - index * 3))
    }));

  document.querySelectorAll(".result-card").forEach((card, index) => {
    const match = ranked[index];
    if (!match) return;
    card.querySelector("h3").textContent = `${index + 1}. ${match.career.title}`;
    card.querySelector("p").textContent = match.career.description;
  });

  byId("career1Percent").textContent = `${ranked[0].percent}%`;
  byId("career2Percent").textContent = `${ranked[1].percent}%`;
  byId("career3Percent").textContent = `${ranked[2].percent}%`;
  updateDetailsCard(ranked[0].career);

  const results = byId("results");
  results.classList.add("show");
  results.scrollIntoView({ behavior: "smooth" });
}

function updateDetailsCard(career) {
  const card = document.querySelector(".details-card");
  if (!card) return;

  byId("careerName").textContent = career.title;
  const sections = card.querySelectorAll("ul, p");
  sections[0].innerHTML = listItems(career.subjects);
  sections[1].innerHTML = listItems(career.courses);
  sections[2].innerHTML = listItems(career.universities);
  sections[3].textContent = career.description;
  sections[4].innerHTML = listItems(career.skills);
  sections[5].textContent = career.salary;
  sections[6].textContent = `${career.demand} ${career.nextStep}`;
}

function downloadResults() {
  const title = byId("careerName")?.textContent || "Career Match";
  const text = `Wanafunzi Career Result\n\nTop match: ${title}\n\nUse this as a starting point. Talk to a parent, teacher, mentor or career office before choosing subjects or courses.`;
  const blob = new Blob([text], { type: "text/plain" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "wanafunzi-career-result.txt";
  link.click();
  URL.revokeObjectURL(link.href);
}

function initCareerSearch() {
  const input = byId("careerSearch");
  const button = byId("searchButton");
  if (!input || !button) return;

  const runSearch = () => showCareer(findCareer(input.value));
  button.addEventListener("click", runSearch);
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") runSearch();
  });

  document.querySelectorAll(".career-tag").forEach((tag) => {
    tag.addEventListener("click", () => {
      input.value = tag.textContent;
      runSearch();
      document.querySelector("#career-search")?.scrollIntoView({ behavior: "smooth" });
    });
  });
}

function careerAnswer(message) {
  const lower = message.toLowerCase();
  const career = findCareer(lower);

  if (lower.includes("cbc") || lower.includes("pathway") || lower.includes("grade 10")) {
    return "In Kenya's CBC Senior School, learners choose one of three pathways: STEM, Social Sciences, or Arts & Sports Science. STEM suits science, technology and technical strengths; Social Sciences suits communication, business and humanities; Arts & Sports suits creative, performance and sports talents.";
  }
  if (lower.includes("stem")) {
    return "STEM has tracks such as Pure Sciences, Applied Sciences and Technical Studies. Useful subjects include Advanced Mathematics, Biology, Chemistry, Physics, Computer Studies, Agriculture and technical subjects where offered. Careers include medicine, engineering, ICT, aviation, agriculture and laboratory science.";
  }
  if (lower.includes("social science") || lower.includes("social sciences")) {
    return "Social Sciences includes Languages & Literature and Humanities & Business Studies. Useful subjects include English, Kiswahili, Literature, History & Citizenship, Geography, CRE/IRE/HRE and Business Studies. Careers include law, teaching, journalism, business, accounting, diplomacy and public service.";
  }
  if (lower.includes("arts") || lower.includes("sports")) {
    return "Arts & Sports Science includes Arts and Sports tracks. Useful areas include Fine Arts, Theatre & Film, Music & Dance, Sports & Recreation and Media Technology. Careers include design, film, music, photography, animation, fashion, coaching and sports-related professions.";
  }
  if (lower.includes("biology")) {
    return "With Biology in Kenya, explore Medicine, Nursing, Clinical Medicine, Pharmacy, Nutrition, Agriculture, Veterinary Medicine and Environmental Science. Add Chemistry and Mathematics for stronger options.";
  }
  if (lower.includes("math") || lower.includes("maths") || lower.includes("business")) {
    return "Maths plus Business can lead to Accounting, Finance, Procurement, Economics, Data Analysis, Entrepreneurship and Actuarial Science. Build spreadsheet, communication and budgeting skills early.";
  }
  if (lower.includes("tvet")) {
    return "TVET is a strong route in Kenya. Consider ICT, electrical installation, plumbing, automotive engineering, hospitality, fashion, media production or agribusiness depending on your strengths.";
  }
  if (lower.includes("kuccps") || lower.includes("university")) {
    return "For KUCCPS-style choices, compare your subjects, grades, cluster requirements, course interest, cost and career demand. Shortlist both university and TVET routes.";
  }
  if (lower.includes("salary") || lower.includes("pay")) {
    return "Pay in Kenya depends on skill, portfolio, employer, county, experience and professional certification. Use salary as one factor, but also check demand, talent fit and growth path.";
  }

  return `${career.title}: ${career.description} Useful subjects include ${career.subjects.join(", ")}. Courses to explore include ${career.courses.join(", ")}. ${career.nextStep}`;
}

function addChatMessage(type, message) {
  const messages = byId("chatMessages");
  if (!messages) return;

  const bubble = document.createElement("div");
  bubble.className = type === "user" ? "user-message" : "bot-message";
  bubble.textContent = message;
  messages.appendChild(bubble);
  messages.scrollTop = messages.scrollHeight;
}

function initChatbot() {
  const toggle = byId("chatbotToggle");
  const close = byId("chatbotClose");
  const panel = byId("chatbotPanel");
  const input = byId("userMessage");
  const send = byId("sendMessage");
  if (!toggle || !panel || !input || !send) return;

  function setOpen(open) {
    panel.classList.toggle("open", open);
    panel.setAttribute("aria-hidden", String(!open));
    toggle.setAttribute("aria-expanded", String(open));
    if (open) input.focus();
  }

  function sendMessage(text = input.value) {
    const message = text.trim();
    if (!message) return;
    addChatMessage("user", message);
    input.value = "";
    window.setTimeout(() => addChatMessage("bot", careerAnswer(message)), 250);
  }

  toggle.addEventListener("click", () => setOpen(!panel.classList.contains("open")));
  close?.addEventListener("click", () => setOpen(false));
  send.addEventListener("click", () => sendMessage());
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") sendMessage();
  });

  document.querySelectorAll('a[href="#chatbot"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      setOpen(true);
    });
  });

  document.querySelectorAll(".suggestion-btn").forEach((button) => {
    button.addEventListener("click", () => {
      setOpen(true);
      sendMessage(button.textContent);
    });
  });
}

function initFaq() {
  document.querySelectorAll(".faq-question").forEach((question) => {
    question.addEventListener("click", () => {
      const item = question.closest(".faq-item");
      item.classList.toggle("active");
      const answer = item.querySelector(".faq-answer");
      answer.style.maxHeight = item.classList.contains("active") ? `${answer.scrollHeight}px` : "0";
    });
  });
}

function initForms() {
  document.querySelectorAll(".contact-form").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      let status = form.querySelector(".form-status");
      if (!status) {
        status = document.createElement("div");
        status.className = "form-status";
        form.appendChild(status);
      }
      status.textContent = "Thank you. This demo has saved your message visually; connect a backend later to send it.";
      form.reset();
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  initQuiz();
  initCareerSearch();
  initChatbot();
  initFaq();
  initForms();
  showCareer(careers.medicine);
});

window.WanafunziApp = { careers, findCareer, careerAnswer };
