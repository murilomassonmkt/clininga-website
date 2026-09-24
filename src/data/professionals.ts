export type ProfessionalTheme = 'fernando' | 'jovita';

export interface CurriculumSection {
  title: string;
  items: readonly string[];
}

export interface Professional {
  name: string;
  shortName: string;
  initials: string;
  href: string;
  theme: ProfessionalTheme;
  image: string;
  imageWidth: number;
  imageHeight: number;
  imagePosition: string;
  whatsappNumber: string;
  specialties: string;
  specialtyList: readonly string[];
  curriculum: readonly CurriculumSection[];
}

export const PROFESSIONALS: readonly Professional[] = [
  {
    name: 'Dr. Fernando de Souza',
    shortName: 'Dr. Fernando',
    initials: 'FS',
    href: '/profissionais/dr-fernando/',
    theme: 'fernando',
    image: '/images/dr-fernando.avif',
    imageWidth: 942,
    imageHeight: 1672,
    imagePosition: '50% 22%',
    whatsappNumber: '5544991071457',
    specialties:
      'Cirurgia gastroenterológica, coloproctologia, endoscopia digestiva, videolaparoscopia, oncologia cirúrgica e nutrologia clínica',
    specialtyList: [
      'Cirurgia gastroenterológica',
      'Coloproctologia',
      'Endoscopia digestiva alta e colonoscopia',
      'Videolaparoscopia',
      'Oncologia cirúrgica',
      'Nutrologia clínica pela Sociedade Brasileira de Nutrição Parenteral e Enteral',
    ],
    curriculum: [
      {
        title: 'Formação acadêmica',
        items: [
          'Graduação em Medicina pela Universidade Federal do Paraná (1986).',
          'Mestrado em Medicina, na área de Clínica Cirúrgica, pela Universidade Federal do Paraná (1999).',
          'Doutorado em Medicina, na área de Clínica Cirúrgica, pela Universidade Federal do Paraná (2000).',
        ],
      },
      {
        title: 'Áreas de atuação',
        items: [
          'Experiência em Medicina com ênfase em cirurgia gastroenterológica.',
          'Atuação em coloproctologia, endoscopia digestiva alta e colonoscopia, videolaparoscopia e oncologia cirúrgica.',
          'Nutrologia clínica pela Sociedade Brasileira de Nutrição Parenteral e Enteral.',
        ],
      },
      {
        title: 'Docência e atuação universitária',
        items: [
          'Professor do Departamento de Medicina desde 1991 e, atualmente, professor associado livre-docente da Universidade Estadual de Maringá.',
          'Foi chefe da Residência Médica em Clínica Cirúrgica do Hospital Universitário de Maringá.',
          'Foi coordenador da disciplina de Gastroenterologia e Cirurgia do Aparelho Digestivo do Departamento de Medicina da Universidade Estadual de Maringá, entre 2003 e 2004.',
        ],
      },
      {
        title: 'Sociedades médicas e coordenação',
        items: [
          'Membro titular do Colégio Brasileiro de Cirurgiões (CBC), habilitado em oncologia cirúrgica e videolaparoscopia.',
          'Membro titular da Sociedade Brasileira de Coloproctologia (SBCP).',
          'Membro titular da Sociedade Brasileira de Nutrição Parenteral e Enteral (SBNPE).',
          'Coordenador da Equipe Multidisciplinar de Terapia Nutricional (EMTN) do Hospital Paraná desde 1991.',
        ],
      },
    ],
  },
  {
    name: 'Dra. Jovita Matarezi de Souza',
    shortName: 'Dra. Jovita',
    initials: 'JM',
    href: '/profissionais/dra-jovita/',
    theme: 'jovita',
    image: '/images/dra-jovita.avif',
    imageWidth: 1448,
    imageHeight: 1086,
    imagePosition: '50% 34%',
    whatsappNumber: '5544999762376',
    specialties: 'Ginecologia e Obstetrícia • Formação em Psicanálise',
    specialtyList: [
      'Ginecologia e Obstetrícia',
      'Formação em Psicanálise',
      'Psicoterapia psicanalítica',
    ],
    curriculum: [
      {
        title: 'Formação acadêmica',
        items: [
          'Graduação em Medicina pela Universidade Federal do Paraná (1989).',
          'Título de Especialista em Ginecologia e Obstetrícia — TEGO (2010).',
          'Mestrado em Ciências da Saúde pela Universidade Estadual de Maringá (2006).',
        ],
      },
      {
        title: 'Docência',
        items: [
          'Professora não titular da Universidade Estadual de Maringá, na disciplina de Ginecologia e Obstetrícia do Departamento de Medicina, desde 1994.',
          'Exerceu atividade docente no curso de Fisioterapia do Centro de Ensino Superior de Maringá — Cesumar, atual Unicesumar, no início dos anos 2000.',
          'Exerceu atividade docente no curso de Enfermagem da Faculdade Intermunicipal do Noroeste do Paraná (Facinor).',
        ],
      },
      {
        title: 'Experiência',
        items: [
          'Experiência em Medicina com ênfase em Ginecologia e Obstetrícia.',
          'Atuação acadêmica em Ginecologia e Obstetrícia.',
          'Formação e experiência na área da Psicanálise.',
        ],
      },
      {
        title: 'Psicanálise e psicoterapia',
        items: [
          'Formação em Psicanálise pela Sociedade Psicanalítica do Paraná (SPP) e registro na SPB sob o número 0231/PR.',
          'Pós-graduação em Psicoterapia Psicanalítica Contemporânea pela EPPM, de 2023 a 2025.',
          'Especialização em Psicopatologia Psicanalítica na EPPM, de 2024 até o momento.',
        ],
      },
    ],
  },
] as const;

export const getProfessional = (theme: ProfessionalTheme) => {
  const professional = PROFESSIONALS.find((item) => item.theme === theme);

  if (!professional) throw new Error(`Professional not found: ${theme}`);
  return professional;
};
