---
permalink: /
title: "About Me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<style>
  body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif; }
  
  .skill-tag {
    display: inline-block;
    background-color: #f1f8ff; 
    color: #0366d6;            
    border: 1px solid #c8e1ff;
    border-radius: 12px;
    padding: 3px 10px;
    font-size: 0.85em;
    margin-right: 5px;
    margin-bottom: 6px;
    font-weight: 500;
  }

  .cta-box {
    background-color: #f6f8fa;
    border-left: 4px solid #0366d6;
    padding: 12px 15px;
    margin: 20px 0;
    border-radius: 0 4px 4px 0;
    font-size: 0.95em;
  }

  .date-right { float: right; color: #666; font-size: 0.9em; }
  @media (max-width: 600px) { .date-right { float: none; display: block; } }
</style>
I am currently a Junior undergraduate student (Year 3) majoring in **Computer Science** at the **University of Electronic Science and Technology of China (UESTC)**.
Despite being an undergraduate, I am deeply passionate about research. My research interests include:
* **Robust Federated Learning**: Ensuring fairness and security in decentralized systems.
* **LLM Safety & Agents**: Exploring rational agents and privacy preservation in Large Language Models.
<div class="cta-box">
  🚀 <b>Open for Opportunities:</b> <br>
  I am actively looking for <b>Summer Internships (2026)</b> or <b>PhD positions (Fall 2027)</b>. Please feel free to reach out!
</div>

## 🔥 News
* **[Dec. 2025]** My paper on Rational Agents (RLAA) was released on arXiv.
* **[Sep. 2025]** My first paper on Federated Learning was accepted by **IEEE IPCCC 2025**.
* **[Sep. 2023]** Entered UESTC as an undergraduate student.

## 📝 Publications
<ul>
{% for post in site.publications %}
  {% include archive-single-cv.html %}
{% endfor %}
</ul>

## 🎖 Honors and Awards
* **2024** <span class="date-right">UESTC</span>
  **Special Scholarship**
* **2024** <span class="date-right">UESTC</span>
  **Outstanding Student Scholarship**

## 📖 Education
* **University of Electronic Science and Technology of China (UESTC)**
  <br>B.S. in Computer Science <span class="date-right">2023.09 - Present</span>
  * **Status**: Junior Student (Year 3)
  * **GPA**: **3.98 / 4.00**
  * **English**: CET-6 (607) & CET-4 (617)

## 💻 Technical Skills
* **Programming**: Python, C/C++, JavaScript, Verilog, LaTeX
* **AI Frameworks**: PyTorch, HuggingFace Transformers, DeepSpeed
* **Development**: Linux/Unix, Docker, k8s, Git