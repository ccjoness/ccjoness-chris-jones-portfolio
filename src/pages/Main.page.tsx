import { useEffect, useRef, useState } from 'react';
import { IconBriefcase, IconMail, IconUser } from '@tabler/icons-react';
import { AppShell, Burger, Container, Flex, Group, NavLink } from '@mantine/core';
import { useDisclosure, useIntersection } from '@mantine/hooks';
import { AboutMe } from '@/components/AboutMe/AboutMe';
import { Contact } from '@/components/Contact/Contact';
// import {Articles} from '@/components/Articles/Articles';
// import { ParticlesBackground } from '@/components/ParticlesBackground/ParticlesBackground';
import { Projects } from '@/components/Projects/Projects';
import globalStyles from '@/styles/global.module.css';


export function MainPage() {
    const [opened = false, {toggle, close}] = useDisclosure();
    const [activeSection, setActiveSection] = useState('about');

    // Create refs for each section
    const aboutRef = useRef<HTMLDivElement>(null);
    const projectsRef = useRef<HTMLDivElement>(null);
    // const articlesRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);

    // Set up intersection observers for each section with better configuration
    const {ref: aboutIntersectionRef, entry: aboutEntry} = useIntersection({
        threshold: 0.1, // Lower threshold for better detection
        rootMargin: '-20% 0px -20% 0px', // Only trigger when section is well within viewport
    });

    const {ref: projectsIntersectionRef, entry: projectsEntry} = useIntersection({
        threshold: 0.1,
        rootMargin: '-20% 0px -20% 0px',
    });

    // const {ref: articlesIntersectionRef, entry: articlesEntry} = useIntersection({
    //     threshold: 0.1,
    //     rootMargin: '-20% 0px -20% 0px',
    // });

    const {ref: contactIntersectionRef, entry: contactEntry} = useIntersection({
        threshold: 0.1,
        rootMargin: '-20% 0px -20% 0px',
    });

    // Update active section based on intersection with improved logic
    useEffect(() => {
        // console.log("Intersection states:", {
        //     about: aboutEntry?.isIntersecting,
        //     projects: projectsEntry?.isIntersecting,
        //     articles: articlesEntry?.isIntersecting,
        //     contact: contactEntry?.isIntersecting,
        //     currentActive: activeSection
        // });

        // Determine which section should be active based on scroll position
        const intersectingSections = [];
        if (aboutEntry?.isIntersecting) {
            intersectingSections.push({name: 'about', entry: aboutEntry});
        }
        if (projectsEntry?.isIntersecting) {
            intersectingSections.push({name: 'projects', entry: projectsEntry});
        }
        // if (articlesEntry?.isIntersecting) {
        //     intersectingSections.push({name: 'articles', entry: articlesEntry});
        // }
        if (contactEntry?.isIntersecting) {
            intersectingSections.push({name: 'contact', entry: contactEntry});
        }

        if (intersectingSections.length > 0) {
            // If multiple sections are intersecting, choose the one that's most visible
            const mostVisible = intersectingSections.reduce((prev, current) => {
                const prevRatio = prev.entry.intersectionRatio || 0;
                const currentRatio = current.entry.intersectionRatio || 0;
                return currentRatio > prevRatio ? current : prev;
            });
            setActiveSection(mostVisible.name);
        }
    }, [aboutEntry, projectsEntry, /* articlesEntry, */ contactEntry]);

    const setAboutRef = (element: HTMLDivElement | null) => {
        aboutRef.current = element;
        aboutIntersectionRef(element);
    };

    const setProjectsRef = (element: HTMLDivElement | null) => {
        projectsRef.current = element;
        projectsIntersectionRef(element);
    };

    // const setArticlesRef = (element: HTMLDivElement | null) => {
    //     articlesRef.current = element;
    //     articlesIntersectionRef(element);
    // };

    const setContactRef = (element: HTMLDivElement | null) => {
        contactRef.current = element;
        contactIntersectionRef(element);
    };

    // Smooth scroll to section
    const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement | null>) => {
        sectionRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };

    return (
      <AppShell
        header={{ height: { base: 60, xxs: 60, xs: 60, sm: 0, md: 0, lg: 0, xl: 0 } }}
        navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
        padding="md"
      >
        {/*<ParticlesBackground />*/}
        <AppShell.Header>
            <Group h="100%" px="md">
              <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
            </Group>
          </AppShell.Header>
          <AppShell.Navbar p="md" bd="none">
          <Flex
            h="100%"
            direction={{ base: 'column' }}
            gap={{ base: 'sm', sm: 'lg' }}
            justify={{ sm: 'center' }}
          >
            <NavLink
              className={globalStyles.navLink}
              label="About"
              leftSection={<IconUser size={16} stroke={1.5} />}
              active={activeSection === 'about'}
              onClick={() => {
                if (opened) {
                  close();
                }
                scrollToSection(aboutRef);
              }}
            />
            <NavLink
              className={globalStyles.navLink}
              label="Projects"
              leftSection={<IconBriefcase size={16} stroke={1.5} />}
              active={activeSection === 'projects'}
              onClick={() => {
                if (opened) {
                  close();
                }
                scrollToSection(projectsRef);
              }}
            />
            {/*<NavLink*/}
            {/*    className={globalStyles.navLink}*/}
            {/*    label="Articles"*/}
            {/*    leftSection={<IconBriefcase size={16} stroke={1.5}/>}*/}
            {/*    active={activeSection === 'articles'}*/}
            {/*    onClick={() => scrollToSection(articlesRef)}*/}
            {/*/>*/}
            <NavLink
              className={globalStyles.navLink}
              label="Get in Touch"
              leftSection={<IconMail size={16} stroke={1.5} />}
              active={activeSection === 'contact'}
              onClick={() => {
                if (opened) {
                  close();
                }
                scrollToSection(contactRef);
              }}
            />
          </Flex>
        </AppShell.Navbar>
        <AppShell.Main>
          <Container strategy="grid" size="95%" m={0}>
            <div ref={setAboutRef} id="about">
              <AboutMe />
            </div>
            <div ref={setProjectsRef} id="projects">
              <Projects />
            </div>
            {/*<div ref={setArticlesRef} id="articles">*/}
            {/*    <Articles/>*/}
            {/*</div>*/}
            <div ref={setContactRef} id="contact">
              <Contact />
            </div>
          </Container>
        </AppShell.Main>
      </AppShell>
    );
}