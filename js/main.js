$(document).ready(function() {
    "use strict";

    // Préchargeur
    $(window).on('load', function() {
        $('.preloader').fadeOut(500);
    });

    // Définir l'année courante dans le pied de page
    $('#currentYear').text(new Date().getFullYear());

    // Initialiser Particles.js
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#6c63ff"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#6c63ff",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 6,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });
    }

    // Bascule de Thème
    $('.theme-toggle').on('click', function() {
        const themeCourant = $('html').attr('data-theme');
        const nouveauTheme = themeCourant === 'dark' ? 'light' : 'dark';
        
        $('html').attr('data-theme', nouveauTheme);
        
        // Changer l'icône
        if (nouveauTheme === 'dark') {
            $('.theme-toggle i').removeClass('fa-sun').addClass('fa-moon');
        } else {
            $('.theme-toggle i').removeClass('fa-moon').addClass('fa-sun');
        }
        
        // Sauvegarder la préférence dans localStorage
        localStorage.setItem('theme', nouveauTheme);
    });
    
    // Vérifier la préférence de thème sauvegardée
    const themeSauvegarde = localStorage.getItem('theme');
    if (themeSauvegarde) {
        $('html').attr('data-theme', themeSauvegarde);
        
        // Définir l'icône correcte
        if (themeSauvegarde === 'dark') {
            $('.theme-toggle i').removeClass('fa-sun').addClass('fa-moon');
        }
    }

    // Sélecteur de Langue
    const traductions = {
        'fr': {
            'nav-home': 'Accueil',
            'nav-about': 'À propos',
            'nav-skills': 'Compétences',
            'nav-projects': 'Projets',
            'nav-contact': 'Contact',
            'current-lang': 'FR',
            'home-greeting': 'Bonjour, je suis',
            'home-role': 'Développeur Web',
            'home-description': 'Spécialisé en développement web full-stack et en conception logiciel, je crée des solutions modernes, interactives et performantes adaptées aussi bien aux applications web que aux logiciels métiers.',
            'home-btn-projects': 'Voir mes projets',
            'home-btn-contact': 'Me contacter',
            'about-title': 'À propos de moi',
            'about-subtitle': 'Qui suis-je?',
            'about-p1': 'Je suis un développeur web passionné par la création d\'applications web modernes et performantes. Avec une solide expérience en développement front-end et back-end, je m\'efforce de créer des solutions élégantes et efficaces pour répondre aux besoins des utilisateurs.',
            'about-p2': 'Mon parcours m\'a permis d\'acquérir une expertise en PHP (Laravel), JavaScript (Vue.js), ainsi qu\'en HTML, CSS, jQuery et Bootstrap. J\'ai également des connaissances de base en Python et Java.',
            'about-name-label': 'Nom:',
            'about-email-label': 'Email:',
            'about-availability-label': 'Disponibilité:',
            'about-availability-value': 'Disponible immédiatement',
            'about-location-label': 'Localisation:',
            'about-btn-cv': 'Télécharger CV',
            'skills-title': 'Mes compétences',
            'skills-description': 'Voici les technologies et langages de programmation avec lesquels je travaille. Je m\'efforce constamment d\'améliorer mes compétences et d\'en apprendre de nouvelles.',
            'projects-title': 'Mes projets',
            'featured-project-title': 'Projet Vedette: Gestion des patients',
            'featured-project-description': 'Ce système permet au médecin d’assurer un suivi médical complet des employés du Ministère (suivi des consultations, suivi cas médicaux, remplissage et impression directe d’un ordonnance,…)',
            'project-demo': 'Démo',
            'project-code': 'Code',
            'filter-all': 'Tous',
            'filter-web': 'Web',
            'filter-app': 'Applications',
            'filter-design': 'Design',
            'project1-description': 'Ce système permet au médecin d’assurer un suivi médical complet des employés du Ministère (suivi des consultations, suivi cas médicaux, remplissage et impression directe d’un ordonnance,…)',
            'project2-description': 'Ce système permet au médecin d’assurer un suivi médical complet des employés du Ministère (suivi des consultations, suivi cas médicaux, remplissage et impression directe d’un ordonnance,…)',
            'project3-description': 'Mise en place d’un tableau de board interactif pour le suivi des activités. Conception et implémentation de modules CRUD pour la gestion des véhicules, des chauffeurs, des trajets et des réservations.',
            'project4-description': 'Transformation d’une maquette Photoshop en interface web fonctionnelle.',
            'contact-title': 'Me contacter',
            'contact-location-title': 'Localisation',
            'contact-email-title': 'Email',
            'contact-phone-title': 'Téléphone',
            'contact-linkedin-title': 'LinkedIn',
            'contact-form-title': 'Envoyez-moi un message',
            'contact-name-placeholder': 'Votre nom',
            'contact-email-placeholder': 'Votre email',
            'contact-subject-placeholder': 'Sujet',
            'contact-message-placeholder': 'Votre message',
            'contact-submit-btn': 'Envoyer',
            'footer-copyright': 'Mon Portfolio. Tous droits réservés.',
            'demo-gpatient-title': 'Démo : Gestion des patients',
            'demo-transport-title': 'Démo : Gestion de transport',
            'demo-axit-title': 'Démo : Maquette PSD en site web'
        },
        'en': {
            'nav-home': 'Home',
            'nav-about': 'About',
            'nav-skills': 'Skills',
            'nav-projects': 'Projects',
            'nav-contact': 'Contact',
            'current-lang': 'EN',
            'home-greeting': 'Hello, I am',
            'home-role': 'Web Developer',
            'home-description': 'Specialized in full-stack web development and software design, I create modern, interactive and high-performance solutions tailored to both web applications and business software.',
            'home-btn-projects': 'See my projects',
            'home-btn-contact': 'Contact me',
            'about-title': 'About Me',
            'about-subtitle': 'Who am I?',
            'about-p1': 'I am a web developer passionate about creating modern and high-performance web applications. With strong experience in both front-end and back-end development, I strive to build elegant and efficient solutions that meet users’ needs.',
            'about-p2': 'My journey has allowed me to gain expertise in PHP (Laravel), JavaScript (Vue.js) as well as HTML, CSS, jQuery, and Bootstrap. I also have basic knowledge of Python and Java.',
            'about-name-label': 'Name:',
            'about-email-label': 'Email:',
            'about-availability-label': 'Availability:',
            'about-availability-value': 'Available immediately',
            'about-location-label': 'Location:',
            'about-btn-cv': 'Download Resume',
            'skills-title': 'My Skills',
            'skills-description': 'Here are the technologies and programming languages I work with. I am constantly striving to improve my skills and learn new ones.',
            'projects-title': 'My Projects',
            'featured-project-title': 'Featured Project: Patient Management',
            'featured-project-description': 'This system allows doctors to ensure complete medical follow-up of employees of the Ministry (consultation tracking, medical case tracking, filling and direct printing of prescriptions, etc.)',
            'project-demo': 'Demo',
            'project-code': 'Code',
            'filter-all': 'All',
            'filter-web': 'Web',
            'filter-app': 'Applications',
            'filter-design': 'Design',
            'project1-description': 'This system allows doctors to ensure complete medical follow-up of Ministry employees (consultation tracking, medical case tracking, filling and direct printing of prescriptions, etc.)',
            'project2-description': 'This system allows doctors to ensure complete medical follow-up of Ministry employees (consultation tracking, medical case tracking, filling and direct printing of prescriptions, etc.)',
            'project3-description': 'Implementation of an interactive dashboard for activity monitoring. Design and implementation of CRUD modules for managing vehicles, drivers, routes, and reservations.',
            'project4-description': 'Transformation of a Photoshop mockup into a functional web interface.',
            'contact-title': 'Contact Me',
            'contact-location-title': 'Location',
            'contact-email-title': 'Email',
            'contact-phone-title': 'Phone',
            'contact-linkedin-title': 'LinkedIn',
            'contact-form-title': 'Send me a message',
            'contact-name-placeholder': 'Your name',
            'contact-email-placeholder': 'Your email',
            'contact-subject-placeholder': 'Subject',
            'contact-message-placeholder': 'Your message',
            'contact-submit-btn': 'Send',
            'footer-copyright': 'My Portfolio. All rights reserved.',
            'demo-gpatient-title': 'Demo: Patient Management',
            'demo-transport-title': 'Demo: Transport Management',
            'demo-axit-title': 'Demo: PSD Mockup to Website'
        }
    };

    // Fonction pour changer la langue
    function changerLangue(lang) {
        $('.language-dropdown a').removeClass('active');
        $(`.language-dropdown a[data-language="${lang}"]`).addClass('active');
        
        $('[data-lang="current-lang"]').text(traductions[lang]['current-lang']);
        
        $('[data-lang]').each(function() {
            const cle = $(this).attr('data-lang');
            if (traductions[lang][cle]) {
                if ($(this).hasClass('machine-ecrire')) {
                    $(this).css('width', '0');
                    $(this).text(traductions[lang][cle]);
                    $(this).removeClass('machine-ecrire');
                    setTimeout(() => {
                        $(this).addClass('machine-ecrire');
                    }, 10);
                } else {
                    $(this).text(traductions[lang][cle]);
                }
            }
        });
        
        $('[data-lang-placeholder]').each(function() {
            const cle = $(this).attr('data-lang-placeholder');
            if (traductions[lang][cle]) {
                $(this).attr('placeholder', traductions[lang][cle]);
            }
        });
        
        localStorage.setItem('language', lang);
    }
    
    $('.language-dropdown a').on('click', function(e) {
        e.preventDefault();
        const lang = $(this).attr('data-language');
        changerLangue(lang);
    });
    
    const langueSauvegardee = localStorage.getItem('language');
    if (langueSauvegardee && traductions[langueSauvegardee]) {
        changerLangue(langueSauvegardee);
    }

    // En-tête Fixe
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 50) {
            $('header').addClass('scrolled');
            $('.back-to-top').addClass('active');
        } else {
            $('header').removeClass('scrolled');
            $('.back-to-top').removeClass('active');
        }
    });

    // Navigation Mobile
    $('.burger').on('click', function() {
        $(this).toggleClass('active');
        $('.nav-links').toggleClass('active');
    });

    $('.nav-links a').on('click', function() {
        $('.burger').removeClass('active');
        $('.nav-links').removeClass('active');
    });

    // Défilement Fluide (exclure les .demo-btn pour éviter le conflit avec les modals)
    $('a[href*="#"]:not([href="#"]):not(.demo-btn)').on('click', function() {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var cible = $(this.hash);
            cible = cible.length ? cible : $('[name=' + this.hash.slice(1) + ']');
            if (cible.length) {
                $('html, body').animate({
                    scrollTop: cible.offset().top - 70
                }, 1000);
                return false;
            }
        }
    });

    // Lien de Navigation Actif
    $(window).on('scroll', function() {
        var positionDefilement = $(this).scrollTop();
        
        $('section').each(function() {
            var positionCible = $(this).offset().top - 100;
            var idSection = $(this).attr('id');
            
            if (positionDefilement >= positionCible) {
                $('.nav-links a').removeClass('active');
                $('.nav-links a[href="#' + idSection + '"]').addClass('active');
            }
        });
    });

    // Animations de Révélation au Défilement
    function revelationAuDefilement() {
        var hauteurFenetre = $(window).height();
        var hautDefilement = $(window).scrollTop();
        
        $('.reveal-text, .reveal-image, .reveal-card').each(function() {
            var hautElement = $(this).offset().top;
            
            if (hautElement < hautDefilement + hauteurFenetre - 100) {
                $(this).addClass('active');
            }
        });
    }
    
    revelationAuDefilement();
    
    $(window).on('scroll', function() {
        revelationAuDefilement();
    });

    // Initialiser les Barres de Progression des Compétences
    function initialiserBarresCompetences() {
        $('.skill-progress').each(function() {
            var niveau = $(this).data('level');
            $(this).css('width', niveau);
        });
    }
    
    $('#skills').waypoint(function() {
        initialiserBarresCompetences();
    }, { offset: '80%' });

    // Filtre de Projets
    $('.filter-btn').on('click', function() {
        var valeurFiltre = $(this).attr('data-filter');
        
        $('.filter-btn').removeClass('active');
        $(this).addClass('active');
        
        if (valeurFiltre === 'all') {
            $('.project-card').show();
        } else {
            $('.project-card').hide();
            $('.project-card[data-category="' + valeurFiltre + '"]').show();
        }
    });

    // Carrousel de Projets avec adaptation dynamique au resize (pour foldables)
    let diapositiveCourante = 0;
    const diapositives = $('.carousel-slide');
    const points = $('.carousel-dot');
    let largeurDiapositive = 100; // Par défaut
    
    function updateLargeurDiapositive() {
        largeurDiapositive = 100; // Reset à 100% pour tous les écrans (stacking)
        if ($(window).width() > 768) {
            largeurDiapositive = 100 / Math.min(diapositives.length, 3); // Exemple: 3 slides visibles sur grand écran
        }
        $('.carousel-slide').css('flex', `0 0 ${largeurDiapositive}%`);
        allerADiapositive(diapositiveCourante); // Rafraîchir
    }
    
    function allerADiapositive(indice) {
        if (indice < 0) {
            indice = diapositives.length - 1;
        } else if (indice >= diapositives.length) {
            indice = 0;
        }
        
        diapositiveCourante = indice;
        $('.carousel-track').css('transform', `translateX(-${diapositiveCourante * largeurDiapositive}%)`);
        
        points.removeClass('active');
        points.eq(diapositiveCourante).addClass('active');
    }
    
    $('.carousel-next').on('click', function() {
        allerADiapositive(diapositiveCourante + 1);
    });
    
    $('.carousel-prev').on('click', function() {
        allerADiapositive(diapositiveCourante - 1);
    });
    
    points.on('click', function() {
        const indice = $(this).index();
        allerADiapositive(indice);
    });
    
    let intervalleCarrousel = setInterval(function() {
        allerADiapositive(diapositiveCourante + 1);
    }, 5000);
    
    $('.carousel-container').hover(
        function() {
            clearInterval(intervalleCarrousel);
        },
        function() {
            intervalleCarrousel = setInterval(function() {
                allerADiapositive(diapositiveCourante + 1);
            }, 5000);
        }
    );

    // Appel initial et sur resize (pour foldables et orientation changes)
    updateLargeurDiapositive();
    $(window).on('resize', updateLargeurDiapositive);

    // Initialiser EmailJS
    (function() {
        emailjs.init("dK_vZe-pX74QtySkU"); // ta Public Key
    })();

    // Soumission du Formulaire de Contact
    $('#contactForm').on('submit', function(e) {
        e.preventDefault();
        console.log('Formulaire soumis !');

        const lang = localStorage.getItem('language') || 'fr';

        // Construire les données traduites
        const subjectText = lang === 'fr' 
            ? "Nouveau message de " + $('#name').val() 
            : "New message from " + $('#name').val();

        const formData = {
            name: $('#name').val(),
            email: $('#email').val(),
            subject: $('#subject').val(),
            message: $('#message').val()
        };

        console.log('Données envoyées :', formData);

        const bouton = $(this).find('button[type="submit"]');
        bouton.addClass('loading').text(lang === 'fr' ? 'Envoi...' : 'Sending...');

        // Envoi du mail
        emailjs.send('service_aw4rs78', 'template_uo015wb', formData)
            .then(function() {
                const msgSucces = lang === 'fr' 
                    ? 'Votre message a été envoyé avec succès ! Je vous répondrai dès que possible.' 
                    : 'Your message has been sent successfully! I will get back to you as soon as possible.';

                $('#formMessage').removeClass('error').addClass('success').text(msgSucces).show();
                $('#contactForm')[0].reset();
            }, function(error) {
                console.error('Erreur EmailJS:', error);
                const msgErreur = lang === 'fr' 
                    ? 'Erreur lors de l\'envoi du message. Veuillez réessayer.' 
                    : 'Error sending message. Please try again.';

                $('#formMessage').removeClass('success').addClass('error').text(msgErreur).show();
            }).finally(function() {
                bouton.removeClass('loading').text(lang === 'fr' ? 'Envoyer' : 'Send');
                setTimeout(function() {
                    $('#formMessage').fadeOut();
                }, 5000);
            });
    });


    // Effet d'Inclinaison 3D pour l'image de profil
    $('.tilt-effect').on('mousemove', function(e) {
        const $this = $(this);
        const rectLimites = this.getBoundingClientRect();
        const sourisX = e.clientX - rectLimites.left;
        const sourisY = e.clientY - rectLimites.top;
        
        const centreX = rectLimites.width / 2;
        const centreY = rectLimites.height / 2;
        
        const pourcentX = (sourisX - centreX) / centreX;
        const pourcentY = (sourisY - centreY) / centreY;
        
        const rotationMax = 20;
        
        $this.css('transform', `perspective(1000px) rotateY(${pourcentX * rotationMax}deg) rotateX(${-pourcentY * rotationMax}deg) scale(1.05)`);
    });
    
    $('.tilt-effect').on('mouseleave', function() {
        $(this).css('transform', 'perspective(1000px) rotateX(0) rotateY(0) scale(1)');
    });
});