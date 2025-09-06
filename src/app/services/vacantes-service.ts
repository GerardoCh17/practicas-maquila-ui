import { Injectable } from '@angular/core';
import { Vacante } from '../interfaces/vacante';

@Injectable({
  providedIn: 'root'
})
export class VacantesService {

  vacantes: Vacante[] = [
    {
      id: 1,
      nombre: "Desarrollador Frontend Angular",
      descripcion: "Buscamos desarrollador con experiencia en Angular para unirse a nuestro equipo de desarrollo frontend.",
      fechaCreada: new Date('2024-08-15'),
      salario: 85000,
      estatus: "Activa",
      detalles: "Requisitos: 3+ años de experiencia en Angular, TypeScript, HTML5, CSS3, conocimientos en RxJS y NgRx. Ofrecemos trabajo remoto, seguro médico privado y bonos por desempeño.",
      empresa: 101,
      categoria: 1
    },
    {
      id: 2,
      nombre: "Backend Developer Node.js",
      descripcion: "Desarrollador backend especializado en Node.js para trabajar en APIs REST y microservicios.",
      fechaCreada: new Date('2024-08-20'),
      salario: 75000,
      estatus: "Activa",
      detalles: "Experiencia requerida: Node.js, Express, MongoDB, Docker, AWS. Modalidad híbrida, 2 días en oficina. Beneficios incluyen capacitaciones, días libres adicionales y stock options.",
      empresa: 102,
      categoria: 1
    },
    {
      id: 3,
      nombre: "Full Stack Developer",
      descripcion: "Desarrollador full stack para proyecto de e-commerce con tecnologías modernas.",
      fechaCreada: new Date('2024-08-10'),
      salario: 95000,
      estatus: "En Proceso",
      detalles: "Stack tecnológico: React/Angular frontend, Node.js backend, PostgreSQL, Redis. 5+ años de experiencia. Trabajo 100% remoto, horarios flexibles, 30 días de vacaciones.",
      empresa: 103,
      categoria: 1
    },
    {
      id: 4,
      nombre: "DevOps Engineer",
      descripcion: "Ingeniero DevOps para automatización de procesos de CI/CD y gestión de infraestructura cloud.",
      fechaCreada: new Date('2024-07-25'),
      salario: 105000,
      estatus: "Cerrada",
      detalles: "Conocimientos en Kubernetes, Docker, Terraform, Jenkins, AWS/Azure. Experiencia con monitoreo y logging. Prestaciones superiores, seguro de vida y fondo de ahorro.",
      empresa: 104,
      categoria: 1
    },
    {
      id: 5,
      nombre: "QA Automation Engineer",
      descripcion: "Ingeniero de QA especializado en automatización de pruebas para aplicaciones web y móviles.",
      fechaCreada: new Date('2024-08-25'),
      salario: 65000,
      estatus: "Activa",
      detalles: "Herramientas: Selenium, Cypress, Jest, Playwright. Experiencia en testing de APIs. Modalidad presencial, excelente ambiente laboral, cursos de certificación pagados.",
      empresa: 105,
      categoria: 1
    },
    {
      id: 6,
      nombre: "Data Scientist",
      descripcion: "Científico de datos para análisis predictivo y machine learning en sector financiero.",
      fechaCreada: new Date('2024-08-12'),
      salario: 110000,
      estatus: "Activa",
      detalles: "Python, R, SQL, TensorFlow, scikit-learn. Experiencia con big data y cloud platforms. Proyectos innovadores, ambiente startup, equity participation y conferences budget.",
      empresa: 106,
      categoria: 1
    }
  ];
  
  async getAllVacantes(): Promise<Vacante[]> {
    return this.vacantes;
  }
}
