export const CLINIC_NAME = 'Cliningá';
export const WHATSAPP_NUMBER = '';
export const WHATSAPP_MESSAGE = 'Olá, gostaria de agendar uma consulta na Cliningá.';
export const PHONE_PRIMARY = '(44) 99107-1457';
export const PHONE_SECONDARY = '(44) 99976-2376';
export const ADDRESS = 'Av. Dr. Luiz Teixeira Mendez, 2136 - Zona 5, Maringá - PR, 87015-001';
export const HOURS = 'De segunda a sexta, das 08:00 às 18:00';
export const GOOGLE_MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Av.%20Dr.%20Luiz%20Teixeira%20Mendez%2C%202136%20-%20Zona%205%2C%20Maring%C3%A1%20-%20PR%2C%2087015-001';

export const phoneHref = (phone: string) => `tel:${phone.replace(/\D/g, '')}`;
export const whatsappUrl = (message = WHATSAPP_MESSAGE, number = WHATSAPP_NUMBER) => {
  const recipient = /^\d{10,15}$/.test(number) ? number : '';
  return `https://wa.me/${recipient}?text=${encodeURIComponent(message)}`;
};
export const WHATSAPP_URL = whatsappUrl();
export const CONTACT_URL = '#contato';

export const NAV_ITEMS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Especialidades', href: '#especialidades' },
  { label: 'Estrutura', href: '#estrutura' },
  { label: 'Médicos', href: '#medicos' },
  { label: 'Contato', href: '#contato' },
];

export const SPECIALTIES = [
  {
    title: 'Ginecologia e Obstetrícia',
    description: 'Acompanhamento da saúde da mulher em suas diferentes fases, com escuta e cuidado individualizado.',
    icon: 'female',
  },
  {
    title: 'Psicanálise',
    description: 'Escuta clínica orientada pela psicanálise, com atenção à singularidade e à história de cada pessoa.',
    icon: 'mind',
  },
  {
    title: 'Exames Médicos',
    description: 'Estrutura preparada para exames médicos e atendimento cuidadoso em todas as etapas.',
    icon: 'clipboard',
  },
  {
    title: 'Gastroenterologia',
    description: 'Avaliação clínica especializada do sistema digestivo para investigação e acompanhamento médico.',
    icon: 'gastro',
  },
  {
    title: 'Nutrologia',
    description: 'Avaliação clínica do estado nutricional e acompanhamento individualizado conforme as necessidades do paciente.',
    icon: 'nutrition',
  },
  {
    title: 'Endoscopia (EDA) e Colonoscopia',
    description: 'Exames para avaliação do aparelho digestivo, realizados conforme solicitação e orientação médica.',
    icon: 'exam',
  },
] as const;

export const IMAGES = {
  hero: '/images/cliningo-hero.avif',
  facade: '/images/clinic-hero.avif',
};

export const SOCIAL_LINKS: { label: string; url: string }[] = [];

export const SEO = {
  title: 'Cliningá | Clínica Médica em Maringá',
  description:
    'Clínica médica em Maringá com atendimento em ginecologia, obstetrícia, psicanálise, gastroenterologia, nutrologia, endoscopia e colonoscopia.',
  ogImage: IMAGES.hero,
};
