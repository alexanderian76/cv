import React, { useEffect, useState } from 'react';

function App() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  // Данные резюме
  const resumeData = {
    name: "Александр Малыгин",
    age: 30,
    location: "Москва",
    role: "C#/.NET Developer",
    experience: "5 лет 6 месяцев",
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
          "Поддержка существующиего функционала, разработка новых сервисов",
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
    skills: {
      languages: ["C#", ".NET Core", "ASP.NET Core", "JavaScript", "TypeScript", "SQL", "C++", "Swift"],
      databases: ["PostgreSQL", "MS SQL", "Redis"],
      messaging: ["RabbitMQ", "Nats"],
      devops: ["Docker", "GitLab CI", "Git", "Jira"],
      testing: ["xUnit", "NUnit"],
      other: ["Микросервисная архитектура", "REST API", "GraphQL", "SignalR"]
    },
    contacts: {
      email: "alexanderian76@gmail.com",
      github: "https://github.com/alexanderian76",
      telegram: "@AMalygin76"
    }
  };

  const skillsList = [
    { category: "Языки и фреймворки", items: resumeData.skills.languages },
    { category: "Базы данных", items: resumeData.skills.databases },
    { category: "Очереди и сообщения", items: resumeData.skills.messaging },
    { category: "DevOps и инструменты", items: resumeData.skills.devops },
    { category: "Тестирование", items: resumeData.skills.testing },
    { category: "Прочее", items: resumeData.skills.other }
  ];

  return (
    <div className={visible ? "fade-in" : ""} style={{ opacity: visible ? 1 : 0 }}>
      
      <section style={{ paddingTop: "80px", paddingBottom: "40px" }}>
        <div className="container">
          <div className="card" style={{ textAlign: "center", background: "rgba(15, 23, 42, 0.7)" }}>
            <h1 style={{ fontSize: "3rem", marginBottom: "12px" }}>{resumeData.name}</h1>
            <p style={{ fontSize: "1.25rem", color: "#60a5fa", marginBottom: "8px" }}>
              {resumeData.role}
            </p>
            <p style={{ color: "#94a3b8", marginBottom: "16px" }}>
              {resumeData.location} • {resumeData.age} лет • Опыт: {resumeData.experience}
            </p>
            <div className="contact-links" style={{ justifyContent: "center" }}>
              {resumeData.contacts.phone && <a href={`tel:${resumeData.contacts.phone}`}>📞 {resumeData.contacts.phone}</a>}
              <a href={`mailto:${resumeData.contacts.email}`}>📧 {resumeData.contacts.email}</a>
              <a href={resumeData.contacts.github} target="_blank" rel="noopener noreferrer">💻 GitHub</a>
              <a href={`https://t.me/${resumeData.contacts.telegram.slice(1)}`} target="_blank" rel="noopener noreferrer">📱 Telegram</a>
            </div>
          </div>
        </div>
      </section>

      
      <section>
        <div className="container">
          <h2>О себе</h2>
          <div className="card">
            <p style={{ lineHeight: 1.7 }}>{resumeData.summary}</p>
          </div>
        </div>
      </section>

      
      <section style={{ background: "rgba(0,0,0,0.2)" }}>
        <div className="container">
          <h2>Опыт работы</h2>
          {resumeData.experienceDetails.map((exp, idx) => (
            <div key={idx} className="timeline-item">
              <div className="date">{exp.period}</div>
              <h3>{exp.title}</h3>
              <div className="company">{exp.company}</div>
              {exp.stack && <div style={{ fontSize: "0.85rem", color: "#94a3b8", marginBottom: "12px" }}>Стек: {exp.stack}</div>}
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
          <h2>Навыки</h2>
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
          <h2>Образование и языки</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" }}>
            <div className="card">
              <h3 style={{ marginBottom: "16px" }}>🎓 Высшее образование</h3>
              <p>МГУ им. М.В. Ломоносова, механико-математический факультет</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: "16px" }}>🗣️ Языки</h3>
              <p>Русский — Родной</p>
              <p>Английский — B2 (Средне-продвинутый)</p>
            </div>
          </div>
        </div>
      </section>

      
      <footer style={{ textAlign: "center", padding: "32px 0", borderTop: "1px solid rgba(59,130,246,0.2)" }}>
        <div className="container">
          <p style={{ color: "#94a3b8", fontSize: "0.85rem" }}>
            © 2026 Александр Малыгин • Последнее обновление: май 2026
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;