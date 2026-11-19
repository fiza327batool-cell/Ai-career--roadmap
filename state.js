// Shared helper used by every page. Keep this file in the same folder as the HTML files.
const Store = {
  get(k, d = null) {
    try {
      const v = localStorage.getItem(k);
      return v ? JSON.parse(v) : d;
    } catch (e) {
      return d;
    }
  },
  set(k, v) {
    try {
      localStorage.setItem(k, JSON.stringify(v));
    } catch (e) {}
  }
};

// Skills needed for each role (edit these to match your content)
const ROLE_SKILLS = {
  "Web Developer": ["HTML", "CSS", "JavaScript", "React", "Git"],
  "Data Analyst": ["SQL", "Python", "Excel", "Power BI", "Statistics"],
  "AI Engineer": ["Python", "PyTorch", "Machine Learning", "SQL", "Git"],
  "UI/UX Designer": ["Figma", "CSS", "HTML", "User Research", "Prototyping"],
  "Software Engineer": ["Java", "Git", "SQL", "Data Structures", "Cloud"],
  "Cybersecurity Analyst": ["Networking", "Linux", "Python", "Security Tools", "SQL"]
};
