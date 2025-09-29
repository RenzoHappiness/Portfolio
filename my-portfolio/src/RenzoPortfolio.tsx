import React from 'react';
import {
  Box,
  Container,
  Typography,
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Paper,
  Fade,
  useScrollTrigger,
} from '@mui/material';
import {
  GitHub,
  LinkedIn,
  Email,
  Launch,
  KeyboardArrowUp,
  ArrowForward,
} from '@mui/icons-material';


interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  year: string;
  githubUrl?: string;
  liveUrl?: string;
  category: string;
}

interface Experience {
  company: string;
  position: string;
  duration: string;
  description: string;
}

const personalInfo = {
  name: 'Renzo Rafael Martinez',
  title: 'Fachinformatiker für Anwendungsentwicklung',
  subtitle: 'Junior-Anwendungsentwickler',
  location: 'Bremen, Deutschland',
  email: 'renzo.martinez@web.de',
  linkedin: 'https://www.linkedin.com/in/renzo-rafael-martinez/',
  github: 'https://github.com/renzohappiness',
};

const projects: Project[] = [
  {
    id: 1,
    title: 'Adaptive Quiz-Anwendung',
    description: 'Eine responsive Quiz-App mit dynamischen Schwierigkeitsgraden für verschiedene Altersgruppen. Features: Adaptive Algorithmik, Fortschrittstracking und benutzerfreundliches Design.',
    technologies: ['React','TypeScript', 'CSS3', 'Local Storage'],
    year: '2025',
    githubUrl: 'https://github.com/RenzoHappiness/quizapp',
    liveUrl: 'https://renzoquizapp.netlify.app/',
    category: 'Web-Anwendung'
  },
  {
    id: 2,
    title: 'Tetris-Klon',
    description: 'Ein vollständig funktionsfähiger Tetris-Klon mit Vanilla JavaScript. Implementiert klassische Spielmechaniken, Score-System und responsive Steuerung.',
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'Canvas API'],
    year: '2025',
    githubUrl: 'https://github.com/RenzoHappiness/TetrisClon',
    liveUrl: 'https://tetrisclon.netlify.app',
    category: 'Game Development'
  },
  {
    id: 3,
    title: 'Codebreaker',
    description: 'Ein intelligenter Algorithmus-Solver für das Spiel Mastermind.',
    technologies: ['JavaScript', 'HTML5', 'CSS3'],
    year: '2025',
    githubUrl: 'https://github.com/RenzoHappiness/Codebreaker',
    liveUrl: 'https://renzohappiness.github.io/Codebreaker/',
    category: 'Algorithm Tool'
  },
  {
    id: 4,
    title: 'Herzloser Hase',
    description: 'Ein interaktives Logo-Personalisierungstool für Vereinsmitglieder. Ermöglicht die Anpassung von Farben und Elementen eines SVG-Logos in Echtzeit.',
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'SVG-Manipulation'],
    year: '2025',
    githubUrl: 'https://github.com/RenzoHappiness/herzloserhase',
    liveUrl: 'https://renzohappiness.github.io/herzloserhase/',
    category: 'Design Tool'
  }
];

const experiences: Experience[] = [
  {
    company: 'Stefan Krisch IT-Dienstleistungen',
    position: 'Praktikant im IT-Bereich',
    duration: 'März 2024 — Oktober 2024',
    description: 'Entwicklung einer Enterprise-Anwendung als Ausbildungsabschluss. Konzeption neuer Datenbankmodelle und Beratung zu technischen Lösungsansätzen.'
  },
  {
    company: 'ETECTURE GmbH',
    position: 'Orientierungspraktikum IT',
    duration: 'Oktober 2022 — Dezember 2022',
    description: 'Entwicklung kleinerer Webanwendungen und Integration in professionelle SCRUM-Teams. Sammlung von Praxiserfahrung in agiler Softwareentwicklung.'
  }
];

const skills = [
  { name: 'TypeScript', level: 4, category: 'Frontend' },
  { name: 'React', level: 4, category: 'Frontend' },
  { name: 'HTML5', level: 5, category: 'Frontend' },
  { name: 'CSS3', level: 4, category: 'Frontend' },
  { name: 'Node.js', level: 3, category: 'Backend' },
  { name: 'Java', level: 3, category: 'Backend' },
  { name: 'Python', level: 3, category: 'Backend' },
  { name: 'MySQL', level: 4, category: 'Database' },
  { name: 'Neo4j', level: 3, category: 'Database' },
  { name: 'GraphQL', level: 3, category: 'Database' },
  { name: 'Git', level: 4, category: 'Tools' },
  { name: 'Docker', level: 3, category: 'Tools' },
  { name: 'VS Code', level: 5, category: 'Tools' },
];


const SimplePhotoAvatar: React.FC = () => {
  return (
    <Box
      sx={{
        width: { xs: 200, md: 280 },
        height: { xs: 200, md: 280 },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          width: { xs: 180, md: 240 },
          height: { xs: 180, md: 240 },
          borderRadius: '50%',
          overflow: 'hidden',
          border: '3px solid #667eea',
          boxShadow: '0 10px 30px rgba(102, 126, 234, 0.3)',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 15px 40px rgba(102, 126, 234, 0.4)',
            borderColor: '#5a67d8',
          },
        }}
      >
        <img 
          src="/images/ich.jpg"
          alt="Renzo Martinez" 
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'contrast(1.05) brightness(1.02)',
          }}
          onError={(e) => {
            e.currentTarget.src = 'https://commons.wikimedia.org/wiki/File:No_image_available.svg';
          }}
        />
      </Box>
    </Box>
  );
};


const ScrollToTop: React.FC = () => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Fade in={trigger}>
      <IconButton
        onClick={handleClick}
        sx={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          backgroundColor: '#667eea',
          color: 'white',
          width: 48,
          height: 48,
          zIndex: 1000,
          boxShadow: '0 4px 20px rgba(102, 126, 234, 0.4)',
          '&:hover': {
            backgroundColor: '#5a67d8',
            transform: 'translateY(-2px)',
            boxShadow: '0 6px 25px rgba(102, 126, 234, 0.5)',
          },
          transition: 'all 0.3s ease-in-out',
        }}
      >
        <KeyboardArrowUp />
      </IconButton>
    </Fade>
  );
};


const Navigation: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AppBar 
      position="fixed" 
      elevation={0}
      sx={{ 
        backgroundColor: 'rgba(255, 255, 255, 0.95)', 
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
        <Typography 
          variant="h6" 
          sx={{ 
            fontWeight: 600, 
            color: '#667eea',
            fontSize: '1rem'
          }}
        >
          {personalInfo.name}
        </Typography>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4 }}>
          <Button 
            color="inherit" 
            onClick={() => scrollToSection('work')}
            sx={{ 
              color: 'grey.700', 
              textTransform: 'none',
              fontWeight: 400,
              '&:hover': { color: '#667eea' }
            }}
          >
            Projekte
          </Button>
          <Button 
            color="inherit" 
            onClick={() => scrollToSection('about')}
            sx={{ 
              color: 'grey.700', 
              textTransform: 'none',
              fontWeight: 400,
              '&:hover': { color: '#667eea' }
            }}
          >
            Über mich
          </Button>
          <Button 
            color="inherit" 
            onClick={() => scrollToSection('contact')}
            sx={{ 
              color: 'grey.700', 
              textTransform: 'none',
              fontWeight: 400,
              '&:hover': { color: '#667eea' }
            }}
          >
            Kontakt
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};


const HeroSection: React.FC = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
        pt: 8,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            gap: 4,
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h1"
              gutterBottom
              sx={{
                fontSize: { xs: '3rem', md: '4.5rem' },
                fontWeight: 300,
                lineHeight: 1.1,
                color: 'black',
                mb: 4,
              }}
            >
              Hi, mein Name ist{' '}
              <Box component="span" sx={{ fontWeight: 600, color: '#667eea' }}>
                Renzo.
              </Box>
            </Typography>
            
            <Typography 
              variant="h5" 
              paragraph 
              sx={{ 
                fontSize: { xs: '1.25rem', md: '1.5rem' },
                lineHeight: 1.6,
                color: 'grey.700',
                fontWeight: 300,
                maxWidth: 600,
                mb: 6,
              }}
            >
              {personalInfo.subtitle}
            </Typography>

            <Button
              variant="text"
              endIcon={<ArrowForward />}
              onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
              sx={{
                color: '#667eea',
                textTransform: 'none',
                fontSize: '1rem',
                fontWeight: 500,
                p: 0,
                '&:hover': { 
                  backgroundColor: 'transparent',
                  color: '#5a67d8',
                  '& .MuiSvgIcon-root': {
                    transform: 'translateX(4px)',
                  }
                },
                '& .MuiSvgIcon-root': {
                  transition: 'transform 0.2s ease-in-out',
                }
              }}
            >
              Meine Arbeiten ansehen
            </Button>
          </Box>
          
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <SimplePhotoAvatar />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

    
const WorkSection: React.FC = () => {
  return (
    <Box id="work" sx={{ py: { xs: 8, md: 14 }, backgroundColor: 'white' }}>
      <Container maxWidth="lg">
        <Typography 
          variant="h2" 
          gutterBottom 
          sx={{ 
            fontSize: { xs: '2rem', md: '2.5rem' },
            fontWeight: 300,
            color: 'black',
            mb: 8,
          }}
        >
          Meine Projekte.
        </Typography>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: 4, lg: 5 } }}>
          {projects.map((project) => (
            <Paper key={project.id} elevation={0} sx={{ p: 3, border: '1px solid', borderColor: 'grey.200', position: 'relative' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                <Typography 
                  variant="h4" 
                  sx={{ 
                    fontSize: { xs: '1.25rem', md: '1.5rem' },
                    fontWeight: 500,
                    color: 'black',
                  }}
                >
                  {project.title}
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: 'grey.500',
                    fontSize: '0.875rem',
                    ml: 2,
                    flexShrink: 0,
                  }}
                >
                  {project.year}
                </Typography>
              </Box>
              <Typography 
                variant="body1" 
                paragraph 
                sx={{ 
                  color: 'grey.700',
                  lineHeight: 1.7,
                  fontSize: '0.95rem',
                  mb: 2,
                }}
              >
                {project.description}
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.0, mb: 2 }}>
                {project.technologies.map((tech) => (
                  <Typography
                    key={tech}
                    variant="caption"
                    sx={{
                      backgroundColor: 'rgba(102, 126, 234, 0.1)',
                      color: '#667eea',
                      px: 1.5,
                      py: 0.5,
                      borderRadius: 1,
                      fontSize: '0.75rem',
                      fontWeight: 500,
                    }}
                  >
                    {tech}
                  </Typography>
                ))}
              </Box>
              <Box sx={{ display: 'flex', gap: 3 }}>
                {project.githubUrl && (
                  <Button
                    startIcon={<GitHub />}
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: '#667eea',
                      textTransform: 'none',
                      p: 0,
                      fontWeight: 500,
                      '&:hover': { 
                        backgroundColor: 'transparent',
                        color: '#5a67d8',
                      }
                    }}
                  >
                    Code ansehen
                  </Button>
                )}
                {project.liveUrl && (
                  <Button
                    startIcon={<Launch />}
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: '#667eea',
                      textTransform: 'none',
                      p: 0,
                      fontWeight: 500,
                      '&:hover': { 
                        backgroundColor: 'transparent',
                        color: '#5a67d8',
                      }
                    }}
                  >
                    Live Demo
                  </Button>
                )}
              </Box>
            </Paper>
          ))}

          {/**
           * Platzhalter-Karten:
           */}
          {false && (
            <>
              {/*
              <Paper elevation={0} sx={{ p: 3, border: '1px solid', borderColor: 'grey.200', position: 'relative' }}>
                <Typography variant="h4" sx={{ fontSize: { xs: '1.25rem', md: '1.5rem' }, fontWeight: 500, color: 'black', mb: 2 }}>
                  Platzhalter-Projekt A
                </Typography>
                <Typography variant="body1" paragraph sx={{ color: 'grey.700' }}>
                  Kurzbeschreibung für ein zukünftiges Projekt.
                </Typography>
              </Paper>

              <Paper elevation={0} sx={{ p: 3, border: '1px solid', borderColor: 'grey.200', position: 'relative' }}>
                <Typography variant="h4" sx={{ fontSize: { xs: '1.25rem', md: '1.5rem' }, fontWeight: 500, color: 'black', mb: 2 }}>
                  Platzhalter-Projekt B
                </Typography>
                <Typography variant="body1" paragraph sx={{ color: 'grey.700' }}>
                  Kurzbeschreibung für ein zukünftiges Projekt.
                </Typography>
              </Paper>
              */}
            </>
          )}
        </Box>
      </Container>
    </Box>
  );
};

const AboutSection: React.FC = () => {
  return (
    <Box id="about" sx={{ py: { xs: 8, md: 14 }, backgroundColor: 'grey.50' }}>
      <Container maxWidth="lg">
        <Typography 
          variant="h2" 
          gutterBottom 
          sx={{ 
            fontSize: { xs: '2rem', md: '2.5rem' },
            fontWeight: 300,
            color: 'black',
            mb: 6,
          }}
        >
          Über mich.
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: 6, md: 8 },
          }}
        >
          <Box sx={{ flex: 2 }}>
            <Typography 
              variant="body1" 
              paragraph 
              sx={{ 
                fontSize: { xs: '1rem', md: '1.125rem' },
                lineHeight: 1.7,
                color: 'grey.700',
                mb: 4,
              }}
            >
              Ich bin ein leidenschaftlicher Anwendungsentwickler mit Fokus auf moderne 
              Web-Technologien. In meiner Arbeit kombiniere ich technisches Know-how 
              mit kreativen Lösungsansätzen.
            </Typography>
            
            <Typography 
              variant="body1" 
              paragraph 
              sx={{ 
                fontSize: { xs: '1rem', md: '1.125rem' },
                lineHeight: 1.7,
                color: 'grey.700',
                mb: 4,
              }}
            >
              Was mich besonders motiviert ist die Entwicklung von Anwendungen, die 
              echten Mehrwert schaffen und Benutzern das Leben erleichtern. Ich arbeite 
              gerne in Teams und lerne kontinuierlich neue Technologien.
            </Typography>

            <Typography 
              variant="body1" 
              sx={{ 
                fontSize: { xs: '1rem', md: '1.125rem' },
                lineHeight: 1.7,
                color: 'grey.700',
              }}
            >
              In meiner Freizeit beschäftige ich mich mit neuen Frameworks, arbeite an 
              persönlichen Projekten oder tausche mich mit anderen Entwicklern aus.
            </Typography>
          </Box>

          <Box sx={{ flex: 1 }}>
            <Typography 
              variant="h6" 
              gutterBottom 
              sx={{ 
                fontSize: '1rem',
                fontWeight: 500,
                color: 'black',
                mb: 3,
              }}
            >
              Berufserfahrung
            </Typography>
            
            {experiences.map((exp, index) => (
              <Box key={index} sx={{ mb: 4 }}>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    fontWeight: 500,
                    color: 'black',
                    fontSize: '0.875rem',
                  }}
                >
                  {exp.position}
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: 'grey.600',
                    fontSize: '0.875rem',
                    mb: 1,
                  }}
                >
                  {exp.company} • {exp.duration}
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: 'grey.700',
                    fontSize: '0.875rem',
                    lineHeight: 1.5,
                  }}
                >
                  {exp.description}
                </Typography>
              </Box>
            ))}

            <Typography 
              variant="h6" 
              gutterBottom 
              sx={{ 
                fontSize: '1rem',
                fontWeight: 500,
                color: 'black',
                mb: 3,
                mt: 4,
              }}
            >
              Skills
            </Typography>
            
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {skills.map((skill) => (
                <Typography
                  key={skill.name}
                  variant="caption"
                  sx={{
                    backgroundColor: 'rgba(102, 126, 234, 0.1)',
                    color: '#667eea',
                    px: 2,
                    py: 0.5,
                    borderRadius: 1,
                    fontSize: '0.75rem',
                    fontWeight: 500,
                  }}
                >
                  {skill.name}
                </Typography>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};


const ContactSection: React.FC = () => {
  return (
    <Box id="contact" sx={{ py: { xs: 8, md: 14 }, backgroundColor: 'white' }}>
      <Container maxWidth="lg">
        <Typography 
          variant="h2" 
          gutterBottom 
          sx={{ 
            fontSize: { xs: '2rem', md: '2.5rem' },
            fontWeight: 300,
            color: 'black',
            mb: 6,
          }}
        >
          Lass uns zusammenarbeiten.
        </Typography>

        <Typography 
          variant="body1" 
          paragraph 
          sx={{ 
            fontSize: { xs: '1rem', md: '1.125rem' },
            lineHeight: 1.7,
            color: 'grey.700',
            maxWidth: 600,
            mb: 6,
          }}
        >
          Haben Sie ein spannendes Projekt oder möchten Sie mehr über meine Arbeit erfahren? 
          Ich freue mich auf Ihre Nachricht und neue Herausforderungen.
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, maxWidth: 300 }}>
          <Button
            startIcon={<Email />}
            href={`mailto:${personalInfo.email}`}
            sx={{
              justifyContent: 'flex-start',
              color: '#667eea',
              textTransform: 'none',
              p: 0,
              fontWeight: 500,
              '&:hover': { 
                backgroundColor: 'transparent',
                color: '#5a67d8',
              }
            }}
          >
            {personalInfo.email}
          </Button>
          
          <Button
            startIcon={<LinkedIn />}
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              justifyContent: 'flex-start',
              color: '#667eea',
              textTransform: 'none',
              p: 0,
              fontWeight: 500,
              '&:hover': { 
                backgroundColor: 'transparent',
                color: '#5a67d8',
              }
            }}
          >
            LinkedIn Profil
          </Button>
          
          <Button
            startIcon={<GitHub />}
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              justifyContent: 'flex-start',
              color: '#667eea',
              textTransform: 'none',
              p: 0,
              fontWeight: 500,
              '&:hover': { 
                backgroundColor: 'transparent',
                color: '#5a67d8',
              }
            }}
          >
            GitHub Profil
          </Button>
        </Box>
      </Container>
    </Box>
  );
};


const Footer: React.FC = () => {
  return (
    <Box sx={{ py: 6, backgroundColor: 'white', borderTop: '1px solid', borderColor: 'grey.200' }}>
      <Container maxWidth="md">
        <Typography 
          variant="body2" 
          sx={{ 
            color: 'grey.500',
            fontSize: '0.875rem',
          }}
        >
          © 2024 {personalInfo.name}. Entwickelt mit React & TypeScript.
        </Typography>
      </Container>
    </Box>
  );
};


const RenzoPortfolio: React.FC = () => {
  return (
    <Box>
      <Navigation />
      <HeroSection />
      <WorkSection />
      <AboutSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </Box>
  );
};

export default RenzoPortfolio;