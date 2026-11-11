/**
 * KCET Counselling 2027 - Unified Common Resource
 * Handles shared Navbar, Footer, Mobile Drawer, and Global Helpers
 */

(function () {
    'use strict';

    // 1. Determine environment & URL resolution
    const isFileProtocol = window.location.protocol === 'file:';
    const isLocalHost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
    const isHtmlExtension = window.location.pathname.endsWith('.html');
    const useHtmlExt = isFileProtocol || isLocalHost || isHtmlExtension;

    const urls = {
        home: useHtmlExt ? 'index.html' : '/',
        predictor: useHtmlExt ? 'college-predictor.html' : '/college-predictor',
        cutoff: useHtmlExt ? 'cutoff.html' : '/cutoff',
        exam: useHtmlExt ? 'exam.html' : '/exam',
        counselling: useHtmlExt ? 'counselling.html' : '/counselling',
        registration: useHtmlExt ? 'registration.html' : '/registration',
        reservation: useHtmlExt ? 'reservation.html' : '/reservation',
        eligibility: useHtmlExt ? 'eligibility.html' : '/eligibility',
        documents: useHtmlExt ? 'documents.html' : '/documents',
        about: useHtmlExt ? 'about.html' : '/about',
        contact: useHtmlExt ? 'contact.html' : '/contact',
        privacy: useHtmlExt ? 'privacy.html' : '/privacy',
        terms: useHtmlExt ? 'terms.html' : '/terms'
    };

    // 2. Generate Common Navbar Markup
    function generateNavbarHTML() {
        return `
            <div class="container nav-inner">
                <a href="${urls.home}" class="brand-logo" aria-label="KCET Counselling 2027">
                    <div class="brand-text">
                        <span class="brand-title">KCET Counselling</span>
                    </div>
                </a>

                <!-- Desktop & Mobile Navigation Menu with Organized Dropdowns -->
                <nav class="nav-menu" id="navMenu" aria-label="Main Navigation">
                    <a href="${urls.home}" class="nav-link">Home</a>
                    <a href="${urls.cutoff}" class="nav-link">Cutoff</a>

                    <!-- Dropdown 1: Counselling -->
                    <div class="nav-item-dropdown">
                        <button type="button" class="nav-dropdown-toggle" aria-expanded="false" aria-haspopup="true">
                            <span>Counselling</span>
                            <i class="fas fa-chevron-down nav-chevron"></i>
                        </button>
                        <div class="nav-dropdown-menu" role="menu">
                            <a href="${urls.counselling}" class="dropdown-link" role="menuitem">
                                <div class="dropdown-icon-box"><i class="fas fa-arrows-split-up-and-left"></i></div>
                                <span class="dropdown-title">KEA Counselling</span>
                            </a>
                            <a href="${urls.registration}" class="dropdown-link" role="menuitem">
                                <div class="dropdown-icon-box"><i class="fas fa-clipboard-check"></i></div>
                                <span class="dropdown-title">Registration Guide</span>
                            </a>
                            <a href="${urls.documents}" class="dropdown-link" role="menuitem">
                                <div class="dropdown-icon-box"><i class="fas fa-file-shield"></i></div>
                                <span class="dropdown-title">Documents Required</span>
                            </a>
                        </div>
                    </div>

                    <!-- Dropdown 2: Eligibility & Quotas -->
                    <div class="nav-item-dropdown">
                        <button type="button" class="nav-dropdown-toggle" aria-expanded="false" aria-haspopup="true">
                            <span>Eligibility & Quotas</span>
                            <i class="fas fa-chevron-down nav-chevron"></i>
                        </button>
                        <div class="nav-dropdown-menu" role="menu">
                            <a href="${urls.eligibility}" class="dropdown-link" role="menuitem">
                                <div class="dropdown-icon-box"><i class="fas fa-user-check"></i></div>
                                <span class="dropdown-title">Eligibility Criteria</span>
                            </a>
                            <a href="${urls.reservation}" class="dropdown-link" role="menuitem">
                                <div class="dropdown-icon-box"><i class="fas fa-id-card-clip"></i></div>
                                <span class="dropdown-title">Reservation & 371(J)</span>
                            </a>
                            <a href="${urls.exam}" class="dropdown-link" role="menuitem">
                                <div class="dropdown-icon-box"><i class="fas fa-graduation-cap"></i></div>
                                <span class="dropdown-title">KCET Exam Pattern</span>
                            </a>
                        </div>
                    </div>

                    <!-- Highlighted Predictor Tool CTA -->
                    <a href="${urls.predictor}" class="nav-btn-predictor">
                        <i class="fas fa-wand-magic-sparkles"></i>
                        <span>College Predictor</span>
                    </a>
                </nav>

                <button class="mobile-toggle" id="mobileToggle" aria-label="Toggle navigation menu" aria-expanded="false">
                    <i class="fas fa-bars"></i>
                </button>
            </div>
        `;
    }

    // 3. Generate Simple Common Footer Markup
    function generateFooterHTML() {
        return `
            <div class="container">
                <ul class="footer-nav">
                    <li><a href="${urls.about}">About Us</a></li>
                    <li><a href="${urls.contact}">Contact Us</a></li>
                    <li><a href="${urls.privacy}">Privacy Policy</a></li>
                    <li><a href="${urls.terms}">Terms of Service</a></li>
                </ul>

                <p class="footer-copy">
                    &copy; KCET Counselling 2027. All Rights Reserved.
                </p>
            </div>
        `;
    }

    // 4. Inject Common Styles
    function injectCommonStyles() {
        if (document.getElementById('kcet-common-styles')) return;
        const style = document.createElement('style');
        style.id = 'kcet-common-styles';
        style.textContent = `
            /* -------------------------------------------------------------
               COMMON NAVBAR STYLES
               ------------------------------------------------------------- */
            .site-nav {
                position: sticky;
                top: 0;
                z-index: 1000;
                width: 100%;
                background: rgba(255, 255, 255, 0.94);
                backdrop-filter: blur(16px);
                -webkit-backdrop-filter: blur(16px);
                border-bottom: 1px solid rgba(226, 232, 240, 0.85);
                box-shadow: 0 1px 3px rgba(15, 23, 42, 0.03);
                transition: all 0.2s ease;
            }
            .site-nav.scrolled {
                box-shadow: 0 4px 15px -2px rgba(15, 23, 42, 0.08);
                border-bottom-color: rgba(203, 213, 225, 0.9);
            }
            .nav-inner {
                display: flex;
                align-items: center;
                justify-content: space-between;
                height: 70px;
            }
            .brand-logo {
                display: flex;
                align-items: center;
                gap: 0.75rem;
                text-decoration: none;
            }
            .brand-title {
                font-family: var(--font-heading, 'Poppins', sans-serif);
                font-size: 1.3rem;
                font-weight: 700;
                color: var(--navy-dark, #0f172a);
                letter-spacing: -0.02em;
            }
            .nav-menu {
                display: flex;
                align-items: center;
                gap: 0.4rem;
                list-style: none;
                margin: 0;
                padding: 0;
            }
            .nav-link {
                font-size: 0.9rem;
                font-weight: 500;
                color: var(--slate-text-body, #334155);
                text-decoration: none;
                padding: 0.45rem 0.8rem;
                border-radius: var(--radius-xs, 6px);
                transition: all 0.18s ease;
                white-space: nowrap;
            }
            .nav-link:hover,
            .nav-link.active {
                color: var(--primary, #1d4ed8);
                background-color: var(--primary-light, #eff6ff);
                font-weight: 600;
            }

            /* Dropdown Container */
            .nav-item-dropdown {
                position: relative;
                display: inline-flex;
                align-items: center;
            }
            .nav-dropdown-toggle {
                display: inline-flex;
                align-items: center;
                gap: 0.35rem;
                font-size: 0.9rem;
                font-weight: 500;
                color: var(--slate-text-body, #334155);
                background: none;
                border: none;
                padding: 0.45rem 0.8rem;
                border-radius: var(--radius-xs, 6px);
                cursor: pointer;
                transition: all 0.18s ease;
                font-family: inherit;
                white-space: nowrap;
            }
            .nav-dropdown-toggle:hover,
            .nav-dropdown-toggle.active,
            .nav-item-dropdown.is-open .nav-dropdown-toggle {
                color: var(--primary, #1d4ed8);
                background-color: var(--primary-light, #eff6ff);
                font-weight: 600;
            }
            .nav-chevron {
                font-size: 0.72rem;
                transition: transform 0.22s ease;
                opacity: 0.75;
            }
            .nav-item-dropdown:hover .nav-chevron,
            .nav-item-dropdown.is-open .nav-chevron {
                transform: rotate(180deg);
                opacity: 1;
            }

            /* Dropdown Menu Box */
            .nav-dropdown-menu {
                position: absolute;
                top: 100%;
                left: 0;
                margin-top: 0.4rem;
                min-width: 220px;
                background: #ffffff;
                border: 1px solid var(--slate-border, #e2e8f0);
                border-radius: 10px;
                box-shadow: 0 10px 25px -4px rgba(15, 23, 42, 0.12), 0 4px 6px -2px rgba(15, 23, 42, 0.04);
                padding: 0.4rem;
                opacity: 0;
                visibility: hidden;
                transform: translateY(8px);
                pointer-events: none;
                transition: opacity 0.2s ease, transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), visibility 0.2s ease;
                z-index: 1050;
            }
            /* Hover Bridge */
            .nav-dropdown-menu::before {
                content: '';
                position: absolute;
                top: -10px;
                left: 0;
                right: 0;
                height: 10px;
            }

            @media (min-width: 901px) {
                .nav-item-dropdown:hover .nav-dropdown-menu,
                .nav-item-dropdown:focus-within .nav-dropdown-menu,
                .nav-item-dropdown.is-open .nav-dropdown-menu {
                    opacity: 1;
                    visibility: visible;
                    transform: translateY(0);
                    pointer-events: auto;
                }
            }

            /* Dropdown Links */
            .dropdown-link {
                display: flex;
                align-items: center;
                gap: 0.65rem;
                padding: 0.5rem 0.75rem;
                border-radius: 6px;
                color: var(--slate-text-body, #334155);
                text-decoration: none;
                transition: all 0.18s ease;
            }
            .dropdown-link:hover,
            .dropdown-link.active {
                background: var(--primary-light, #eff6ff);
                color: var(--primary, #1d4ed8);
            }
            .dropdown-icon-box {
                width: 28px;
                height: 28px;
                border-radius: 6px;
                background: #f1f5f9;
                color: var(--primary, #1d4ed8);
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 0.85rem;
                flex-shrink: 0;
                transition: all 0.18s ease;
            }
            .dropdown-link:hover .dropdown-icon-box,
            .dropdown-link.active .dropdown-icon-box {
                background: #ffffff;
                color: var(--primary, #1d4ed8);
                box-shadow: 0 2px 5px rgba(29, 78, 216, 0.18);
            }
            .dropdown-title {
                font-size: 0.88rem;
                font-weight: 500;
                color: var(--navy-dark, #0f172a);
                line-height: 1.25;
            }
            .dropdown-link:hover .dropdown-title,
            .dropdown-link.active .dropdown-title {
                color: var(--primary, #1d4ed8);
                font-weight: 600;
            }

            /* Action Button / Predictor CTA in Navbar */
            .nav-btn-predictor {
                display: inline-flex;
                align-items: center;
                gap: 0.45rem;
                background: linear-gradient(135deg, var(--primary, #1d4ed8) 0%, #2563eb 100%);
                color: #ffffff !important;
                font-size: 0.88rem;
                font-weight: 600;
                padding: 0.48rem 0.95rem;
                border-radius: 8px;
                text-decoration: none;
                box-shadow: 0 2px 8px rgba(29, 78, 216, 0.25);
                transition: all 0.2s ease;
                white-space: nowrap;
                margin-left: 0.35rem;
            }
            .nav-btn-predictor:hover,
            .nav-btn-predictor.active {
                transform: translateY(-1px);
                box-shadow: 0 4px 12px rgba(29, 78, 216, 0.35);
                background: linear-gradient(135deg, #1e40af 0%, #1d4ed8 100%);
                color: #ffffff !important;
            }

            .mobile-toggle {
                display: none;
                background: none;
                border: none;
                font-size: 1.35rem;
                color: var(--navy-dark, #0f172a);
                cursor: pointer;
                padding: 0.5rem;
                border-radius: var(--radius-xs, 6px);
            }

            /* -------------------------------------------------------------
               CLEAN & SIMPLE COMMON FOOTER STYLES
               ------------------------------------------------------------- */
            .site-footer {
                background: #090d16;
                color: #94a3b8;
                padding: 2.75rem 0 2rem 0;
                border-top: 1px solid rgba(255, 255, 255, 0.08);
                text-align: center;
            }
            .footer-nav {
                display: flex;
                justify-content: center;
                flex-wrap: wrap;
                gap: 1.25rem 1.75rem;
                list-style: none;
                padding: 0;
                margin: 0 auto 0.85rem auto;
                max-width: 900px;
            }
            .footer-nav li {
                margin: 0;
            }
            .footer-nav a {
                color: #cbd5e1;
                font-size: 0.88rem;
                text-decoration: none;
                transition: color 0.15s ease;
            }
            .footer-nav a:hover {
                color: #ffffff;
            }
            .footer-copy {
                font-size: 0.8rem;
                color: #64748b;
                margin: 0;
                line-height: 1.6;
            }

            /* -------------------------------------------------------------
               RESPONSIVE BREAKPOINTS (MOBILE & TABLET NAVBAR)
               ------------------------------------------------------------- */
            @media (max-width: 900px) {
                .nav-inner {
                    height: 64px;
                }
                .mobile-toggle {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 40px;
                    height: 40px;
                    border: 1px solid var(--slate-border, #e2e8f0);
                    background: #f8fafc;
                }
                .nav-menu {
                    display: none;
                    position: absolute;
                    top: 64px;
                    left: 0;
                    right: 0;
                    background: #ffffff;
                    flex-direction: column;
                    padding: 1rem 1.15rem 1.5rem 1.15rem;
                    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);
                    border-bottom: 1px solid var(--slate-border, #e2e8f0);
                    align-items: stretch;
                    gap: 0.35rem;
                    max-height: calc(100vh - 64px);
                    overflow-y: auto;
                    -webkit-overflow-scrolling: touch;
                }
                .nav-menu.active {
                    display: flex;
                }
                .nav-link {
                    display: block;
                    width: 100%;
                    padding: 0.65rem 0.85rem;
                    font-size: 0.95rem;
                }
                .nav-item-dropdown {
                    width: 100%;
                    flex-direction: column;
                    align-items: stretch;
                }
                .nav-dropdown-toggle {
                    width: 100%;
                    justify-content: space-between;
                    padding: 0.65rem 0.85rem;
                    font-size: 0.95rem;
                }
                .nav-dropdown-menu {
                    position: static;
                    opacity: 1;
                    visibility: visible;
                    transform: none;
                    pointer-events: auto;
                    box-shadow: none;
                    border: 1px solid var(--slate-border, #e2e8f0);
                    background: #f8fafc;
                    border-radius: 8px;
                    padding: 0.35rem;
                    margin: 0.25rem 0 0.5rem 0;
                    display: none;
                }
                .nav-item-dropdown.is-open .nav-dropdown-menu {
                    display: block;
                }
                .dropdown-link {
                    padding: 0.55rem 0.65rem;
                }
                .nav-btn-predictor {
                    margin: 0.6rem 0 0.2rem 0;
                    width: 100%;
                    justify-content: center;
                    padding: 0.65rem 1rem;
                    font-size: 0.95rem;
                }
                .site-footer {
                    padding: 2.2rem 1rem 1.8rem 1rem;
                }
                .footer-nav {
                    gap: 0.75rem 1.25rem;
                }
                .footer-nav a {
                    font-size: 0.82rem;
                }
                .footer-copy {
                    font-size: 0.78rem;
                }
            }
            @media (max-width: 420px) {
                .brand-title {
                    font-size: 1.15rem;
                }
                .footer-nav {
                    gap: 0.5rem 0.85rem;
                }
            }
        `;
        document.head.appendChild(style);
    }

    // 5. Initialize Navbar & Footer in the DOM
    function initNavbarAndFooter() {
        injectCommonStyles();

        // 5a. Inject or populate Navbar
        let header = document.querySelector('header.site-nav') ||
            document.getElementById('site-header') ||
            document.getElementById('common-navbar');

        if (!header) {
            header = document.createElement('header');
            header.className = 'site-nav';
            document.body.insertBefore(header, document.body.firstChild);
        }
        header.innerHTML = generateNavbarHTML();

        // 5b. Inject or populate Footer
        let footer = document.querySelector('footer.site-footer') ||
            document.getElementById('site-footer') ||
            document.getElementById('common-footer');

        if (!footer) {
            footer = document.createElement('footer');
            footer.className = 'site-footer';
            document.body.appendChild(footer);
        }
        footer.innerHTML = generateFooterHTML();

        // 5c. Highlight current active page link & its parent dropdown
        try {
            const cleanCurrent = window.location.pathname.split('/').pop().replace(/\.html$/, '') || 'index';
            header.querySelectorAll('.nav-link, .dropdown-link, .nav-btn-predictor').forEach(link => {
                const href = link.getAttribute('href') || '';
                const cleanHref = href.replace(/^\//, '').replace(/\.html$/, '') || 'index';
                if (cleanHref === cleanCurrent) {
                    link.classList.add('active');
                    link.setAttribute('aria-current', 'page');
                    const parentDropdown = link.closest('.nav-item-dropdown');
                    if (parentDropdown) {
                        const toggle = parentDropdown.querySelector('.nav-dropdown-toggle');
                        if (toggle) toggle.classList.add('active');
                    }
                }
            });
        } catch (e) {
            // fail-safe
        }

        // 5d. Attach Interactive Dropdowns & Mobile Toggle
        initDropdowns();
        initMobileToggle();

        // 5e. Sticky scroll shadow effect
        initScrollShadow(header);
    }

    // 6. Interactive Dropdowns Handler (Desktop Click/Touch & Mobile Accordion)
    function initDropdowns() {
        const dropdownItems = document.querySelectorAll('.nav-item-dropdown');

        dropdownItems.forEach(item => {
            const toggle = item.querySelector('.nav-dropdown-toggle');
            if (!toggle) return;

            toggle.addEventListener('click', function (e) {
                e.stopPropagation();
                const isOpen = item.classList.contains('is-open');

                // Close other dropdowns
                dropdownItems.forEach(other => {
                    if (other !== item) {
                        other.classList.remove('is-open');
                        const otherToggle = other.querySelector('.nav-dropdown-toggle');
                        if (otherToggle) otherToggle.setAttribute('aria-expanded', 'false');
                    }
                });

                if (isOpen) {
                    item.classList.remove('is-open');
                    toggle.setAttribute('aria-expanded', 'false');
                } else {
                    item.classList.add('is-open');
                    toggle.setAttribute('aria-expanded', 'true');
                }
            });
        });

        // Close dropdowns on outside click
        document.addEventListener('click', function (e) {
            dropdownItems.forEach(item => {
                if (!item.contains(e.target)) {
                    item.classList.remove('is-open');
                    const toggle = item.querySelector('.nav-dropdown-toggle');
                    if (toggle) toggle.setAttribute('aria-expanded', 'false');
                }
            });
        });

        // Close dropdowns on escape key
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') {
                dropdownItems.forEach(item => {
                    item.classList.remove('is-open');
                    const toggle = item.querySelector('.nav-dropdown-toggle');
                    if (toggle) toggle.setAttribute('aria-expanded', 'false');
                });
            }
        });
    }

    // 7. Mobile Toggle Handler
    function initMobileToggle() {
        const mobileToggle = document.getElementById('mobileToggle');
        const navMenu = document.getElementById('navMenu') || document.querySelector('.nav-menu');
        if (!mobileToggle || !navMenu) return;

        mobileToggle.addEventListener('click', function (e) {
            e.stopPropagation();
            const isOpen = navMenu.classList.toggle('active');
            const icon = mobileToggle.querySelector('i');
            if (icon) {
                icon.className = isOpen ? 'fas fa-times' : 'fas fa-bars';
            }
            mobileToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });

        // Close menu when a navigation item is clicked
        navMenu.querySelectorAll('.nav-link, .dropdown-link, .nav-btn-predictor').forEach(link => {
            link.addEventListener('click', function () {
                navMenu.classList.remove('active');
                const icon = mobileToggle.querySelector('i');
                if (icon) icon.className = 'fas fa-bars';
                mobileToggle.setAttribute('aria-expanded', 'false');

                // Close any open dropdowns
                document.querySelectorAll('.nav-item-dropdown').forEach(item => {
                    item.classList.remove('is-open');
                });
            });
        });

        // Close on outside click
        document.addEventListener('click', function (e) {
            if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
                navMenu.classList.remove('active');
                const icon = mobileToggle.querySelector('i');
                if (icon) icon.className = 'fas fa-bars';
                mobileToggle.setAttribute('aria-expanded', 'false');
            }
        });

        // Close on escape key
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                const icon = mobileToggle.querySelector('i');
                if (icon) icon.className = 'fas fa-bars';
                mobileToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // 8. Sticky Header Shadow on Scroll
    function initScrollShadow(header) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 15) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }, { passive: true });
    }

    // 9. Global FAQ Accordion Toggle Helper (available for all pages)
    window.toggleFaq = function (button) {
        const item = button.parentElement;
        const isActive = item.classList.contains('active');
        document.querySelectorAll('.faq-item').forEach(el => el.classList.remove('active'));
        if (!isActive) {
            item.classList.add('active');
        }
    };

    // 10. Run on DOM Ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initNavbarAndFooter);
    } else {
        initNavbarAndFooter();
    }

    // Export helpers for manual triggering if needed
    window.KCET = window.KCET || {};
    window.KCET.initNavbarAndFooter = initNavbarAndFooter;
    window.KCET.urls = urls;

})();
