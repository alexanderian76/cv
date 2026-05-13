import React, { useState, useEffect } from 'react';

function App() {
  const [visible, setVisible] = useState(false);
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('language');
    if (saved) return saved;
    return navigator.language.startsWith('ru') ? 'ru' : 'en';
  });

  useEffect(() => {
    setVisible(true);
    localStorage.setItem('language', language);
  }, [language]);




  const contentRu = {
    name: "Александр Малыгин",
    age: "30 лет",
    location: "Москва",
    role: "C#/.NET Developer",
    experience: "Опыт: 5 лет 6 месяцев",
    summary: ".NET разработчик с опытом 5+ лет. Специализируюсь на: C#, .NET Core, ASP.NET Core. Ключевые технологии: PostgreSQL, Oracle, Redis, Nats. Имею опыт проектирования микросервисной архитектуры. Писал unit-тесты (xUnit/NUnit), работал с Docker. Участвовал в ревью архитектуры и кода. Ищу проект со сложными, высоконагруженными задачами.",
    experienceDetails: [
      {
        period: "Декабрь 2024 — Апрель 2026",
        title: "Senior .NET Developer",
        company: "ДИТ",
        stack: ".NET Core, React, PostgreSQL, Nats",
        achievements: [
          "Full-stack разработка .NET Core, React, Oracle",
          "Разрабатывал сервисы на .NET Core, взаимодействовавшие через Nats",
          "Поддержка существующего функционала, разработка новых сервисов",
          "Работа с Quartz"
        ]
      },
      {
        period: "Апрель 2024 — Ноябрь 2024",
        title: "Full-stack Developer",
        company: "Axmor",
        stack: "ASP.NET Core, React, PostgreSQL",
        achievements: [
          "Full-stack разработка нового проекта",
          "Фронтенд на TypeScript React",
          "Бэкенд .NET Core, база данных PostgreSQL",
          "Писал unit-тесты для бизнес-логики",
          "Работа с Quartz"
        ]
      },
      {
        period: "Январь 2022 — Февраль 2024",
        title: "Full-stack Developer",
        company: "PSI-CRO",
        stack: ".NET Core, React, EntityFramework, MS SQL, RabbitMQ",
        achievements: [
          "Разработка нового приложения в команде из 7-8 человек (React + .NET Core)",
          "Писал unit-тесты для бизнес-логики",
          "Участвовал в ревью архитектуры нового приложения",
          "Бэкенд на .NET Framework(legacy) и .NET Core, база данных MS SQL",
          "Разработка нейронной сети для классификации PDF документов"
        ]
      },
      {
        period: "Январь 2021 — Декабрь 2021",
        title: ".NET разработчик",
        company: "Никотех",
        stack: ".NET Framework, SQL",
        achievements: [
          "Разработка и поддержка серверных компонентов на .NET Framework",
          "Работа с SQL, написание модульных тестов"
        ]
      }
    ],
    contacts: {
      email: "alexanderian76@gmail.com",
      github: "https://github.com/alexanderian76",
      telegram: "@AMalygin76"
    },
    sections: {
      about: "О себе",
      experience: "Опыт работы",
      skills: "Навыки",
      education: "Образование и языки",
      educationTitle: "Высшее образование",
      educationText: "МГУ им. М.В. Ломоносова, механико-математический факультет",
      languagesTitle: "Языки",
      russian: "Русский — Родной",
      english: "Английский — B2 (Средне-продвинутый)",
      footer: `© 2026 Александр Малыгин • Последнее обновление: май 2026`
    }
  };


  const contentEn = {
    name: "Alexander Malygin",
    role: "C#/.NET Developer",
    age: "30 y.o.",
    location: "Moscow",
    experience: `Experience: 5 years 6 months`,
    summary: ".NET developer with 5+ years of experience. Specialized in: C#, .NET Core, ASP.NET Core. Key technologies: PostgreSQL, Oracle, Redis, Nats. Experience in microservice architecture design. Wrote unit tests (xUnit/NUnit), worked with Docker. Participated in architecture and code reviews. Looking for a project with complex, high-load tasks.",
    sections: {
      about: "About me",
      experience: "Work experience",
      skills: "Skills",
      education: "Education & Languages",
      educationTitle: "Higher Education",
      educationText: "MSU, Faculty of Mechanics and Mathematics",
      languagesTitle: "Languages",
      russian: "Russian — Native",
      english: "English — B2 (Upper-Intermediate)",
      footer: `© 2026 Alexander Malygin • Last update: May 2026`
    },
    experienceDetails: [
      {
        period: "December 2024 — April 2026",
        title: "Senior .NET Developer",
        company: "DIT",
        stack: ".NET Core, React, PostgreSQL, Nats",
        achievements: [
          "Full-stack development .NET Core, React, Oracle",
          "Developed services on .NET Core communicating via Nats",
          "Support of existing functionality, development of new services",
          "Working with Quartz"
        ]
      },
      {
        period: "April 2024 — November 2024",
        title: "Full-stack Developer",
        company: "Axmor",
        stack: "ASP.NET Core, React, PostgreSQL",
        achievements: [
          "Full-stack development of a new project",
          "Frontend on TypeScript React",
          "Backend .NET Core, PostgreSQL database",
          "Wrote unit tests for business logic",
          "Working with Quartz"
        ]
      },
      {
        period: "January 2022 — February 2024",
        title: "Full-stack Developer",
        company: "PSI-CRO",
        stack: ".NET Core, React, EntityFramework, MS SQL, RabbitMQ",
        achievements: [
          "Development of a new application in a team of 7-8 people (React + .NET Core)",
          "Wrote unit tests for business logic",
          "Participated in the architecture review of the new application",
          "Backend on .NET Framework (legacy) and .NET Core, MS SQL database",
          "Development of a neural network for PDF document classification"
        ]
      },
      {
        period: "January 2021 — December 2021",
        title: ".NET Developer",
        company: "Nikotech",
        stack: ".NET Framework, SQL",
        achievements: [
          "Development and support of server components on .NET Framework",
          "Work with SQL, writing unit tests"
        ]
      }
    ],
    contacts: {
      email: "alexanderian76@gmail.com",
      github: "https://github.com/alexanderian76",
      telegram: "@AMalygin76"
    },
  };

  const content = language === 'ru' ? contentRu : contentEn;

  const skillsData = {
    ru: {
      languages: ["C#", ".NET Core", "ASP.NET Core", "JavaScript", "TypeScript", "SQL", "C++", "Swift"],
      databases: ["PostgreSQL", "MS SQL", "Oracle"],
      messaging: ["RabbitMQ", "Nats"],
      devops: ["Docker", "GitLab CI", "Git", "Jira"],
      testing: ["xUnit", "NUnit"],
      other: ["Микросервисная архитектура", "REST API", "GraphQL", "SignalR", "Redis"]
    },
    en: {
      languages: ["C#", ".NET Core", "ASP.NET Core", "JavaScript", "TypeScript", "SQL", "C++", "Swift"],
      databases: ["PostgreSQL", "MS SQL", "Oracle"],
      messaging: ["RabbitMQ", "Nats"],
      devops: ["Docker", "GitLab CI", "Git", "Jira"],
      testing: ["xUnit", "NUnit"],
      other: ["Microservice architecture", "REST API", "GraphQL", "SignalR", "Redis"]
    }
  };

  const skillsList = [
    { category: language === 'ru' ? "Языки и фреймворки" : "Languages & Frameworks", items: skillsData[language].languages },
    { category: language === 'ru' ? "Базы данных" : "Databases", items: skillsData[language].databases },
    { category: language === 'ru' ? "Очереди и сообщения" : "Message Brokers", items: skillsData[language].messaging },
    { category: "DevOps & Tools", items: skillsData[language].devops },
    { category: language === 'ru' ? "Тестирование" : "Testing", items: skillsData[language].testing },
    { category: language === 'ru' ? "Прочее" : "Other", items: skillsData[language].other }
  ];

  return (
    <div className={visible ? "fade-in" : ""} style={{ opacity: visible ? 1 : 0 }}>

      <div style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        zIndex: 1000,
        background: 'rgba(30, 41, 59, 0.8)',
        backdropFilter: 'blur(10px)',
        borderRadius: '40px',
        padding: '4px',
        border: '1px solid rgba(59, 130, 246, 0.3)',
        display: 'flex',
        gap: '4px'
      }}>
        <button
          onClick={() => setLanguage('ru')}
          style={{
            padding: '8px 16px',
            borderRadius: '32px',
            border: 'none',
            cursor: 'pointer',
            fontWeight: 600,
            fontSize: '14px',
            background: language === 'ru' ? '#3b82f6' : 'transparent',
            color: language === 'ru' ? 'white' : '#94a3b8',
            transition: 'all 0.2s ease'
          }}
        >
          🇷🇺 RU
        </button>
        <button
          onClick={() => setLanguage('en')}
          style={{
            padding: '8px 16px',
            borderRadius: '32px',
            border: 'none',
            cursor: 'pointer',
            fontWeight: 600,
            fontSize: '14px',
            background: language === 'en' ? '#3b82f6' : 'transparent',
            color: language === 'en' ? 'white' : '#94a3b8',
            transition: 'all 0.2s ease'
          }}
        >
          🇬🇧 EN
        </button>
      </div>


      <section style={{ paddingTop: "80px", paddingBottom: "40px" }}>
        <div className="container">
          <div className="card" style={{ textAlign: "center", background: "rgba(15, 23, 42, 0.7)" }}>
            <h1 style={{ fontSize: "3rem", marginBottom: "12px" }}>{content.name}</h1>
            <p style={{ fontSize: "1.25rem", color: "#60a5fa", marginBottom: "8px" }}>
              {content.role}
            </p>
            <p style={{ color: "#94a3b8", marginBottom: "16px" }}>
              {content.location}, {content.age} • {content.experience}
            </p>
            <div className="contact-links" style={{ justifyContent: "center" }}>
              <a href={`mailto:${content.contacts.email}`}>📧 {content.contacts.email}</a>
              <a href={content.contacts.github} target="_blank" rel="noopener noreferrer">💻 GitHub</a>
              <a href={`https://t.me/${content.contacts.telegram.slice(1)}`} target="_blank" rel="noopener noreferrer">📱 Telegram</a>
            </div>
          </div>
        </div>
      </section>


      <section>
        <div className="container">
          <h2>{content.sections.about}</h2>
          <div className="card">
            <p style={{ lineHeight: 1.7 }}>{content.summary}</p>
          </div>
        </div>
      </section>


      <section style={{ background: "rgba(0,0,0,0.2)" }}>
        <div className="container">
          <h2>{content.sections.experience}</h2>
          {content.experienceDetails.map((exp, idx) => (
            <div key={idx} className="timeline-item">
              <div className="date">{exp.period}</div>
              <h3>{exp.title}</h3>
              <div className="company">{exp.company}</div>
              {exp.stack && <div style={{ fontSize: "0.85rem", color: "#94a3b8", marginBottom: "12px" }}>Stack: {exp.stack}</div>}
              <ul style={{ marginLeft: "20px", marginTop: "8px" }}>
                {exp.achievements.map((item, i) => (
                  <li key={i} style={{ marginBottom: "6px" }}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>


      <section>
        <div className="container">
          <h2>{content.sections.skills}</h2>
          <div className="card">
            {skillsList.map((skillGroup, idx) => (
              <div key={idx} style={{ marginBottom: "24px" }}>
                <h4 style={{ color: "#60a5fa", marginBottom: "12px", fontSize: "1rem" }}>{skillGroup.category}</h4>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                  {skillGroup.items.map((skill, i) => (
                    <span key={i} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section style={{ background: "rgba(0,0,0,0.2)" }}>
        <div className="container">
          <h2>{content.sections.education}</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" }}>
            <div className="card">
              <h3 style={{ marginBottom: "16px" }}>🎓 {content.sections.educationTitle}</h3>
              <p>{content.sections.educationText}</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: "16px" }}>🗣️ {content.sections.languagesTitle}</h3>
              <p>{content.sections.russian}</p>
              <p>{content.sections.english}</p>
            </div>
          </div>
        </div>
      </section>

      <footer style={{ textAlign: "center", padding: "32px 0", borderTop: "1px solid rgba(59,130,246,0.2)" }}>
        <div className="container">
          <p style={{ color: "#94a3b8", fontSize: "0.85rem" }}>
            {content.sections.footer}
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;