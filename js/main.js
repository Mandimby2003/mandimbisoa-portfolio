$(document).ready(function () {
  "use strict";

  //Vérification de l'existence des éléments 
  const $preloader = $(".preloader");
  const $particles = $("#particles-js");
  const $themeToggle = $(".theme-toggle");
  const $languageSelector = $(".language-selector");
  const $header = $("header");
  const $backToTop = $(".back-to-top");
  const $burger = $(".burger");
  const $navLinks = $(".nav-links");
  const $filterBtns = $(".filter-btn");
  const $contactForm = $("#contactForm");
  const $tiltEffect = $(".tilt-effect");

  /*--------------------------- Préchargeur ----------------------------*/
  if ($preloader.length) {
    $(window).on("load", function () {
      $preloader.fadeOut(500);
    });
  }

  /*--------------------------- Année courante ----------------------------*/
  $("#currentYear").text(new Date().getFullYear());

  /*--------------------------- Particles.js ----------------------------*/
  if ($particles.length && typeof particlesJS !== "undefined") {
    particlesJS("particles-js", {
      particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#6c63ff" },
        shape: { type: "circle" },
        opacity: { value: 0.5, random: false },
        size: { value: 3, random: true },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#6c63ff",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 6,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: true, mode: "grab" },
          onclick: { enable: true, mode: "push" },
          resize: true,
        },
        modes: { grab: { distance: 140, line_linked: { opacity: 1 } } },
      },
      retina_detect: true,
    });
  }

  /*--------------------------- Thème (Dark/Light) ----------------------------*/
  function applyTheme(theme) {
    $("html").attr("data-theme", theme);
    if (theme === "dark") {
      $themeToggle.find("i").removeClass("fa-sun").addClass("fa-moon");
    } else {
      $themeToggle.find("i").removeClass("fa-moon").addClass("fa-sun");
    }
  }

  if ($themeToggle.length) {
    $themeToggle.on("click", function () {
      const newTheme =
        $("html").attr("data-theme") === "dark" ? "light" : "dark";
      applyTheme(newTheme);
      localStorage.setItem("theme", newTheme);
    });

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      applyTheme(savedTheme);
    }
  }

  /*--------------------------- Traductions ----------------------------*/
  const traductions = {
    fr: {
      "nav-home": "Accueil",
      "nav-about": "À propos",
      "nav-skills": "Compétences",
      "nav-projects": "Projets",
      "nav-contact": "Contact",
      "current-lang": "FR",
      "home-greeting": "Bonjour, je suis",
      "home-role-title": "Développeur",
      "home-role": "",
      "home-description":
        "Spécialisé en développement web full-stack et en conception logiciel, je crée des solutions modernes, interactives et performantes adaptées aussi bien aux applications web que aux logiciels métiers.",
      "home-btn-projects": "Voir mes projets",
      "home-btn-contact": "Me contacter",
      "about-title": "À propos de moi",
      "about-subtitle": "Qui suis-je?",
      "about-p1":
        "Je suis un développeur Full Stack passionné par la création d’applications web modernes, performantes et centrées utilisateur. J’interviens en front-end et back-end pour concevoir des solutions élégantes et efficaces.",
      "about-p2":
        "Mon parcours m’a apporté une expertise en PHP (Laravel) et JavaScript (Vue.js) ainsi qu’en HTML, CSS, jQuery et Bootstrap. J’ai aussi de bonnes bases en Python (Django, FastAPI) et en Java, avec de projet mêlant web et IA (Gemini Vision, OpenCV, InsightFace, OCR, Pillow, Numpy).",
      "about-name-label": "Nom:",
      "about-email-label": "Email:",
      "about-availability-label": "Disponibilité:",
      "about-availability-value": "Disponible immédiatement",
      "about-location-label": "Localisation:",
      "about-btn-cv": "Télécharger CV",
      "skills-title": "Mes compétences",
      "skills-description":
        "Voici les technologies et langages de programmation avec lesquels je travaille. Je m'efforce constamment d'améliorer mes compétences et d'en apprendre de nouvelles.",
      "skills-backend-title": "Backend",
      "skills-frontend-title": "Frontend",
      "skills-database-title": "Base de données",
      "skills-ai-title": "Intelligence Artificielle",
      "skills-tools-title": "Outils",
      "projects-title": "Mes projets",
      "featured-project-title": "Projet Vedette: Gestion des patients",
      "featured-project-description":
        "Ce système permet au médecin d'assurer un suivi médical complet des employés du Ministère (suivi des consultations, suivi cas médicaux, remplissage et impression directe d'une ordonnance, etc.)",
      "project-demo": "Démo",
      "project-code": "Code",
      "carousel-title": "Autres Projets",
      "btn-coming-soon": "En cours",
      "filter-all": "Tous",
      "filter-web": "Web",
      "filter-app": "Applications",
      "filter-design": "Design",
      "project1-description":
        "Ce système permet au médecin d'assurer un suivi médical complet des employés du Ministère (suivi des consultations, suivi cas médicaux, remplissage et impression directe d'une ordonnance, etc.)",
      "project3-description":
        "Mise en place d'un tableau de board interactif pour le suivi des activités. Conception et implémentation de modules CRUD pour la gestion des véhicules, des chauffeurs, des trajets et des réservations.",
      "project4-description":
        "Transformation d'une maquette Photoshop en interface web fonctionnelle et responsive.",
      "project5-description":
        "Ce système permet l'enregistrement automatisé et la recherche intelligente de CIN malagasy par extraction automatique des données (recto/verso), reconnaissance faciale, recherche multi-critères et recherche par visage via upload ou webcam en temps réel.",
      "contact-title": "Me contacter",
      "contact-location-title": "Localisation",
      "contact-email-title": "Email",
      "contact-phone-title": "Téléphone",
      "contact-linkedin-title": "LinkedIn",
      "contact-form-title": "Envoyez-moi un message",
      "contact-name-placeholder": "Votre nom",
      "contact-email-placeholder": "Votre email",
      "contact-subject-placeholder": "Sujet",
      "contact-message-placeholder": "Votre message",
      "contact-submit-btn": "Envoyer",
      "footer-copyright": "Mandimbisoa RANDRIAMANANTSOA. Tous droits réservés.",
      "ocr": "Reconnaissance de texte",
      "face": "Reconnaissance faciale",
      "opencv": "Vision par ordinateur",
      "pillow": "Traitement d'image",
      "numpy": "Calcul scientifique",
      "postgresql": "Relationnelle",
      "mysql": "Relationnelle",
    },
    en: {
      "mysql": "Relational",
      "postgresql": "Relational",
      "numpy": "Scientific Computing",
      "pillow": "Image Processing",
      "opencv": "Computer Vision",
      "face": "Face Recognition",
      "ocr": "Text Recognition",
      "nav-home": "Home",
      "nav-about": "About",
      "nav-skills": "Skills",
      "nav-projects": "Projects",
      "nav-contact": "Contact",
      "current-lang": "EN",
      "home-greeting": "Hello, I am",
      "home-role-title": "Developer",
      "home-role": "",
      "home-description":
        "Specialized in full-stack web development and software design, I create modern, interactive and high-performance solutions tailored to both web applications and business software.",
      "home-btn-projects": "See my projects",
      "home-btn-contact": "Contact me",
      "about-title": "About Me",
      "about-subtitle": "Who am I?",
      "about-p1":
        "I’m a Full‑Stack developer passionate about building modern, high‑performance, user‑centric web applications. I work across front‑end and back‑end to deliver elegant and efficient solutions.",
      "about-p2":
        "My background includes expertise in PHP (Laravel) and JavaScript (Vue.js) as well as HTML, CSS, jQuery and Bootstrap. I also have solid foundations in Python (Django, FastAPI) and Java, with AI‑driven project experience (Gemini Vision, OpenCV, InsightFace, OCR, Pillow, Numpy).",
      "about-name-label": "Name:",
      "about-email-label": "Email:",
      "about-availability-label": "Availability:",
      "about-availability-value": "Available immediately",
      "about-location-label": "Location:",
      "about-btn-cv": "Download Resume",
      "skills-title": "My Skills",
      "skills-description":
        "Here are the technologies and programming languages I work with. I am constantly striving to improve my skills and learn new ones.",
      "skills-backend-title": "Backend",
      "skills-frontend-title": "Frontend",
      "skills-database-title": "Database",
      "skills-ai-title": "Artificial Intelligence",
      "skills-tools-title": "Tools",
      "projects-title": "My Projects",
      "featured-project-title": "Featured Project: Patient Management",
      "featured-project-description":
        "This system allows doctors to ensure complete medical follow-up of Ministry employees (consultation tracking, medical case tracking, filling and direct printing of prescriptions, etc.)",
      "project-demo": "Demo",
      "project-code": "Code",
      "carousel-title": "Other Projects",
      "btn-coming-soon": "In progress",
      "filter-all": "All",
      "filter-web": "Web",
      "filter-app": "Applications",
      "filter-design": "Design",
      "project1-description":
        "This system allows doctors to ensure complete medical follow-up of Ministry employees (consultation tracking, medical case tracking, filling and direct printing of prescriptions, etc.)",
      "project3-description":
        "Implementation of an interactive dashboard for activity monitoring. Design and implementation of CRUD modules for managing vehicles, drivers, routes, and reservations.",
      "project4-description":
        "Transformation of a Photoshop mockup into a functional and responsive web interface.",
      "project5-description":
        "This system enables automated registration and intelligent search of Malagasy ID cards using automatic data extraction (front/back), facial recognition, multi-criteria search, and face-based search via upload or real-time webcam.",
      "contact-title": "Contact Me",
      "contact-location-title": "Location",
      "contact-email-title": "Email",
      "contact-phone-title": "Phone",
      "contact-linkedin-title": "LinkedIn",
      "contact-form-title": "Send me a message",
      "contact-name-placeholder": "Your name",
      "contact-email-placeholder": "Your email",
      "contact-subject-placeholder": "Subject",
      "contact-message-placeholder": "Your message",
      "contact-submit-btn": "Send",
      "footer-copyright": "Mandimbisoa RANDRIAMANANTSOA. All rights reserved.",
    },
  };

  function changerLangue(lang) {
    if (!$languageSelector.length || !traductions[lang]) return;

    $(".language-dropdown a").removeClass("active");
    $('.language-dropdown a[data-language="' + lang + '"]').addClass("active");

    $('[data-lang="current-lang"]').text(traductions[lang]["current-lang"]);

    $("[data-lang]").each(function () {
      const cle = $(this).attr("data-lang");
      if (cle !== "home-role" && traductions[lang][cle]) {
        $(this).text(traductions[lang][cle]);
      }
    });

    $("[data-lang-placeholder]").each(function () {
      const cle = $(this).attr("data-lang-placeholder");
      if (traductions[lang][cle]) {
        $(this).attr("placeholder", traductions[lang][cle]);
      }
    });

    localStorage.setItem("language", lang);
  }

  if ($languageSelector.length) {
    $(".language-dropdown a").on("click", function (e) {
      e.preventDefault();
      const lang = $(this).attr("data-language");
      changerLangue(lang);
      startRoleAnimation(lang);
    });

    const langueSauvegardee = localStorage.getItem("language") || "fr";
    changerLangue(langueSauvegardee);
  }

  /*--------------------------- Animation Rôle Infinie (Web ↔ Logiciel) - VERSION FINALE CORRIGÉE ----------------------------*/
  let activeRoleTimers = [];
  const roleWords = {
    fr: ["Web", "Logiciel"],
    en: ["Web", "Software"],
  };

  function stopRoleAnimation() {
    activeRoleTimers.forEach(clearTimeout);
    activeRoleTimers = [];
  }

  function startRoleAnimation(lang = "fr") {
    const $roleEl = $("#role-animated");
    if (!$roleEl.length) return;

    stopRoleAnimation();

    let wordIndex = 0;
    const words = roleWords[lang] || roleWords.fr;

    function typeWriter(text, callback) {
      let i = 0;
      $roleEl.text("");

      function typeChar() {
        if (i < text.length) {
          $roleEl.text($roleEl.text() + text.charAt(i));
          i++;
          const timerId = setTimeout(typeChar, 150);
          activeRoleTimers.push(timerId);
        } else {
          const timerId = setTimeout(callback, 1500);
          activeRoleTimers.push(timerId);
        }
      }
      typeChar();
    }

    function eraseWriter(callback) {
      let i = $roleEl.text().length;

      function eraseChar() {
        if (i > 0) {
          $roleEl.text($roleEl.text().slice(0, -1));
          i--;
          const timerId = setTimeout(eraseChar, 80);
          activeRoleTimers.push(timerId);
        } else {
          const timerId = setTimeout(callback, 300);
          activeRoleTimers.push(timerId);
        }
      }
      eraseChar();
    }

    function nextWord() {
      const currentWord = words[wordIndex];
      typeWriter(currentWord, () => {
        eraseWriter(() => {
          wordIndex = (wordIndex + 1) % words.length;
          nextWord();
        });
      });
    }

    nextWord();
  }

  startRoleAnimation(localStorage.getItem("language") || "fr");

  /*--------------------------- Header fixe + Back-to-top ----------------------------*/
  if ($header.length) {
    $(window).on("scroll", function () {
      const isScrolled = $(this).scrollTop() > 50;
      $header.toggleClass("scrolled", isScrolled);
      if ($backToTop.length) $backToTop.toggleClass("active", isScrolled);
    });
  }

  /*--------------------------- Navigation Mobile ----------------------------*/
  if ($burger.length) {
    $burger.on("click", function () {
      $(this).toggleClass("active");
      $navLinks.toggleClass("active");
      $("body").toggleClass("menu-open");
    });
  }

  if ($navLinks.length) {
    $navLinks.find("a").on("click", function () {
      $burger.removeClass("active");
      $navLinks.removeClass("active");
      $("body").removeClass("menu-open");
    });
  }

  /*--------------------------- Défilement fluide ----------------------------*/
  $('a[href*="#"]:not([href="#"]):not(.demo-btn)').on("click", function (e) {
    if (
      location.pathname.replace(/^\//, "") ===
        this.pathname.replace(/^\//, "") &&
      location.hostname === this.hostname
    ) {
      let target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        e.preventDefault();
        const headerHeight = $header.length ? $header.outerHeight() : 70;
        $("html, body").animate(
          { scrollTop: target.offset().top - headerHeight },
          800
        );
      }
    }
  });

  /*--------------------------- Lien de Navigation Actif ----------------------------*/
  $(window).on("scroll", function () {
    const scrollPos = $(this).scrollTop();
    const headerHeight = $header.length ? $header.outerHeight() + 20 : 90;
    $("section[id]").each(function () {
      if (
        $(this).offset().top <= scrollPos + headerHeight &&
        $(this).offset().top + $(this).height() > scrollPos + headerHeight
      ) {
        $(".nav-links a").removeClass("active");
        $('.nav-links a[href="#' + $(this).attr("id") + '"]').addClass(
          "active"
        );
      }
    });
  });

  /*--------------------------- Animations de Révélation ----------------------------*/
  function revelationAuDefilement() {
    const windowHeight = $(window).height();
    const scrollTop = $(window).scrollTop();
    $(".reveal-text, .reveal-image, .reveal-card").each(function () {
      const elementTop = $(this).offset().top;
      if (elementTop < scrollTop + windowHeight - 100) {
        $(this).addClass("active");
      }
    });
  }
  revelationAuDefilement();
  $(window).on("scroll", revelationAuDefilement);

  /*--------------------------- Filtre de Projets ----------------------------*/
  if ($filterBtns.length) {
    $filterBtns.on("click", function () {
      const filterValue = $(this).attr("data-filter");
      $filterBtns.removeClass("active");
      $(this).addClass("active");
      if (filterValue === "all") {
        $(".project-card").fadeIn(300);
      } else {
        $(".project-card").fadeOut(100);
        $('.project-card[data-category="' + filterValue + '"]').fadeIn(300);
      }
    });
  }

  /*======================== CARROUSEL DE PROJETS ========================*/
  const $carousel = $(".projects-carousel");
  if ($carousel.length) {
    let currentSlide = 0;
    const $track = $carousel.find(".carousel-track");
    const $slides = $carousel.find(".carousel-slide");
    const $dots = $carousel.find(".carousel-dot");
    const totalSlides = $slides.length;
    let autoplayTimer;

    function updateCarousel(index, isImmediate = false) {
      if (index < 0) index = totalSlides - 1;
      if (index >= totalSlides) index = 0;

      currentSlide = index;

      const slideWidth = $slides.first().width();
      const newTransform = -currentSlide * slideWidth;

      $track.css({
        transition: isImmediate
          ? "none"
          : "transform 0.6s cubic-bezier(0.68, -0.55, 0.27, 1.55)",
        transform: "translateX(" + newTransform + "px)",
      });

      $dots.removeClass("active");
      $dots.eq(currentSlide).addClass("active");

      $carousel.find(".current-slide").text(currentSlide + 1);
    }

    function startAutoplay() {
      clearInterval(autoplayTimer);
      autoplayTimer = setInterval(() => updateCarousel(currentSlide + 1), 5000);
    }

    function resetAutoplay() {
      startAutoplay();
    }

    $carousel.find(".carousel-control.next").on("click", (e) => {
      e.preventDefault();
      updateCarousel(currentSlide + 1);
      resetAutoplay();
    });

    $carousel.find(".carousel-control.prev").on("click", (e) => {
      e.preventDefault();
      updateCarousel(currentSlide - 1);
      resetAutoplay();
    });

    $dots.on("click", function () {
      updateCarousel($(this).index());
      resetAutoplay();
    });

    $carousel.on("mouseenter", () => clearInterval(autoplayTimer));
    $carousel.on("mouseleave", startAutoplay);

    // Support tactile
    let touchStart = 0;
    $track.on(
      "touchstart",
      (e) => (touchStart = e.originalEvent.touches[0].clientX)
    );
    $track.on("touchend", (e) => {
      const touchEnd = e.originalEvent.changedTouches[0].clientX;
      if (touchStart - touchEnd > 50) updateCarousel(currentSlide + 1);
      if (touchStart - touchEnd < -50) updateCarousel(currentSlide - 1);
      resetAutoplay();
    });

    $(window).on("resize", () => updateCarousel(currentSlide, true));

    if (totalSlides > 0) {
      $carousel.find(".total-slides").text(totalSlides);
      updateCarousel(0, true);
      startAutoplay();
    }
  }

  /*--------------------------- EmailJS ----------------------------*/
  if ($contactForm.length && typeof emailjs !== "undefined") {
    emailjs.init("dK_vZe-pX74QtySkU");

    $contactForm.on("submit", function (e) {
      e.preventDefault();
      const lang = localStorage.getItem("language") || "fr";
      const $button = $(this).find('button[type="submit"]');
      $button
        .addClass("loading")
        .prop("disabled", true)
        .text(lang === "fr" ? "Envoi..." : "Sending...");

      emailjs
        .sendForm("service_aw4rs78", "template_uo015wb", this)
        .then(
          () => {
            const successMsg =
              lang === "fr"
                ? "Message envoyé avec succès !"
                : "Message sent successfully!";
            $("#formMessage")
              .removeClass("error")
              .addClass("success")
              .text(successMsg)
              .fadeIn();
            $contactForm[0].reset();
          },
          (error) => {
            const errorMsg =
              lang === "fr"
                ? "Erreur d'envoi. Veuillez réessayer."
                : "Failed to send. Please try again.";
            $("#formMessage")
              .removeClass("success")
              .addClass("error")
              .text(errorMsg)
              .fadeIn();
            console.error("EmailJS Error:", error);
          }
        )
        .finally(() => {
          $button
            .removeClass("loading")
            .prop("disabled", false)
            .text(lang === "fr" ? "Envoyer" : "Send");
          setTimeout(() => $("#formMessage").fadeOut(), 5000);
        });
    });
  }

  /*--------------------------- Effet Tilt 3D ----------------------------*/
  if ($tiltEffect.length) {
    $tiltEffect.on("mousemove", function (e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const { width, height } = rect;
      const rotateX = (y / height - 0.5) * -20;
      const rotateY = (x / width - 0.5) * 20;
      $(this).css(
        "transform",
        `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`
      );
    });

    $tiltEffect.on("mouseleave", function () {
      $(this).css(
        "transform",
        "perspective(1000px) rotateX(0) rotateY(0) scale(1)"
      );
    });
  }
});