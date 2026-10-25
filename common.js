/**
 * KCET Counselling 2027 - Unified Common Resource
 * Handles shared Navbar, Footer, Mobile Drawer, and Global Helpers
 */

(function () {
    'use strict';

    // 1. Determine environment & URL resolution
    const isFileProtocol = window.location.protocol === 'file:';
    const isHtmlExtension = window.location.pathname.endsWith('.html');
    const useHtmlExt = isFileProtocol || isHtmlExtension;

    const urls = {
        home: useHtmlExt ? 'index.html' : '/',
        exam: useHtmlExt ? 'exam.html' : '/exam',
        counselling: useHtmlExt ? 'counselling.html' : '/counselling',
        registration: useHtmlExt ? 'registration.html' : '/registration',
        reservation: useHtmlExt ? 'reservation.html' : '/reservation',
        eligibility: useHtmlExt ? 'eligibility.html' : '/eligibility',
        documents: useHtmlExt ? 'documents.html' : '/documents'
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

                <!-- Desktop & Mobile Navigation Menu (Common across all pages) -->
                <nav class="nav-menu" aria-label="Main Navigation">
                    <a href="${urls.home}" class="nav-link">Home</a>
                    <a href="${urls.exam}" class="nav-link">KCET Exam</a>
                    <a href="${urls.counselling}" class="nav-link">Counselling</a>
                    <a href="${urls.registration}" class="nav-link">Registration</a>
                    <a href="${urls.reservation}" class="nav-link">Reservation</a>
                    <a href="${urls.eligibility}" class="nav-link">Eligibility</a>
                    <a href="${urls.documents}" class="nav-link">Documents Required</a>
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
                    <li><a href="${urls.home}">Home</a></li>
                    <li><a href="${urls.exam}">KCET Exam 2027</a></li>
                    <li><a href="${urls.counselling}">KCET Counselling</a></li>
                    <li><a href="${urls.registration}">KCET Registration</a></li>
                    <li><a href="${urls.reservation}">KCET Reservation</a></li>
                    <li><a href="${urls.eligibility}">KCET Eligibility</a></li>
                    <li><a href="${urls.documents}">Documents Required</a></li>
                </ul>

                <p class="footer-copy">
                    &copy; KCET Counselling 2027. Authoritative Karnataka Examinations Authority (KEA) Admissions Portal. All Rights Reserved.
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
                gap: 0.5rem;
                list-style: none;
                margin: 0;
                padding: 0;
            }
            .nav-link {
                font-size: 0.9rem;
                font-weight: 500;
                color: var(--slate-text-body, #334155);
                text-decoration: none;
                padding: 0.45rem 0.85rem;
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
               SIMPLE COMMON FOOTER STYLES
               ------------------------------------------------------------- */
            .site-footer {
                background: #090d16;
                color: #94a3b8;
                padding: 3rem 0 2rem 0;
                border-top: 1px solid rgba(255, 255, 255, 0.08);
                text-align: center;
            }
            .footer-nav {
                display: flex;
                justify-content: center;
                flex-wrap: wrap;
                gap: 1.5rem;
                list-style: none;
                padding: 0;
                margin: 0 auto 1.5rem auto;
                max-width: 800px;
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
                font-size: 0.82rem;
                color: #64748b;
                margin: 0;
                line-height: 1.6;
            }

            /* -------------------------------------------------------------
               RESPONSIVE BREAKPOINTS FOR COMMON NAVBAR & FOOTER
               ------------------------------------------------------------- */
            @media (max-width: 820px) {
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
                    padding: 1.25rem;
                    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);
                    border-bottom: 1px solid var(--slate-border, #e2e8f0);
                    align-items: stretch;
                    gap: 0.4rem;
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
                    font-size: 0.92rem;
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
        `;
        document.head.appendChild(style);
    }

    // 7. Initialize Navbar & Footer in the DOM
    function initNavbarAndFooter() {
        injectCommonStyles();

        // 7a. Inject or populate Navbar
        let header = document.querySelector('header.site-nav') ||
            document.getElementById('site-header') ||
            document.getElementById('common-navbar');

        if (!header) {
            header = document.createElement('header');
            header.className = 'site-nav';
            document.body.insertBefore(header, document.body.firstChild);
        }
        header.innerHTML = generateNavbarHTML();

        // 7b. Inject or populate Footer
        let footer = document.querySelector('footer.site-footer') ||
            document.getElementById('site-footer') ||
            document.getElementById('common-footer');

        if (!footer) {
            footer = document.createElement('footer');
            footer.className = 'site-footer';
            document.body.appendChild(footer);
        }
        footer.innerHTML = generateFooterHTML();

        // 7c. Highlight current active page link
        try {
            const currentPath = window.location.pathname.split('/').pop() || 'index.html';
            header.querySelectorAll('.nav-link').forEach(link => {
                const href = link.getAttribute('href');
                if (href === currentPath || (href === 'index.html' && (currentPath === '' || currentPath === '/'))) {
                    link.classList.add('active');
                    link.setAttribute('aria-current', 'page');
                }
            });
        } catch (e) {
            // fail-safe
        }

        // 7d. Attach Interactive Mobile Toggle
        initMobileToggle();

        // 7e. Sticky scroll shadow effect
        initScrollShadow(header);
    }

    // 8. Mobile Toggle Handler
    function initMobileToggle() {
        const mobileToggle = document.getElementById('mobileToggle');
        const navMenu = document.querySelector('.nav-menu');
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

        // Close on link click
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function () {
                navMenu.classList.remove('active');
                const icon = mobileToggle.querySelector('i');
                if (icon) icon.className = 'fas fa-bars';
                mobileToggle.setAttribute('aria-expanded', 'false');
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

    // 9. Sticky Header Shadow on Scroll
    function initScrollShadow(header) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 15) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }, { passive: true });
    }

    // 10. Global FAQ Accordion Toggle Helper (available for all pages)
    window.toggleFaq = function (button) {
        const item = button.parentElement;
        const isActive = item.classList.contains('active');
        document.querySelectorAll('.faq-item').forEach(el => el.classList.remove('active'));
        if (!isActive) {
            item.classList.add('active');
        }
    };

    // 11. Run on DOM Ready
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
