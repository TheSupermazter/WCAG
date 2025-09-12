document.addEventListener('DOMContentLoaded', () => {
    // Only static text, no items here
    const content = {
        en: {
            title: "WCAG 2.2 Accessibility Checklist",
            description: "This website makes it easy to track which WCAG 2.2 criteria a website meets.",
            levelAHeading: "Level A",
            levelAAHeading: "Level AA",
            levelAAAHeading: "Level AAA",
            footerText: "&copy; 2024 WCAG Checklist",
            resetButton: "Reset",
            resetButtonConfirmation: "Are you sure you want to reset the checklist? This action cannot be undone.",
            confirm: "Confirm",
            cancel: "Cancel"
        },
        nl: {
            title: "WCAG 2.2 Toegankelijkheidschecklist",
            description: "Via deze website is makkelijk bij te houden aan welke criteria van de WCAG 2.2 een website voldoet.",
            levelAHeading: "Niveau A",
            levelAAHeading: "Niveau AA",
            levelAAAHeading: "Niveau AAA",
            footerText: "&copy; 2024 WCAG Checklist",
            resetButton: "Resetten",
            resetButtonConfirmation: "Weet u zeker dat u de checklist wilt resetten? Deze actie kan niet ongedaan worden gemaakt.",
            confirm: "Bevestigen",
            cancel: "Annuleren"
        }
    };

    let checklistItems = {};
    let imageDescriptions = {};

    fetch('content.json')
        .then(response => response.json())
        .then(json => {
            checklistItems = {
                levelA: json.levelA,
                levelAA: json.levelAA,
                levelAAA: json.levelAAA
            };
            imageDescriptions = json.imageDescriptions || {};
            initializeApp();
        });

    const resetModal = document.getElementById('reset-modal');
    const resetModalText = document.getElementById('modal-text');
    const confirmButton = document.getElementById('confirm-reset-button');
    const cancelButton = document.getElementById('cancel-reset-button');
    
    const imageModalOverlay = document.createElement('div');
    imageModalOverlay.classList.add('image-modal-overlay');
    imageModalOverlay.innerHTML = `
        <div class="image-modal-content">
            <img src="" alt="">
            <button class="close-button">&times;</button>
        </div>
    `;
    document.body.appendChild(imageModalOverlay);
    
    const imageModalImage = imageModalOverlay.querySelector('img');
    const imageCloseButton = imageModalOverlay.querySelector('.close-button');

    const showResetModal = (message) => {
        resetModalText.textContent = message;
        resetModal.style.display = 'flex';
    };

    const hideResetModal = () => {
        resetModal.style.display = 'none';
    };
    
    const showImageModal = (src, alt) => {
        imageModalImage.src = src;
        imageModalImage.alt = alt;
        imageModalOverlay.classList.add('active');
    };

    const hideImageModal = () => {
        imageModalOverlay.classList.remove('active');
    };

    const translatePage = (lang) => {
        document.getElementById('lang-toggle-button').textContent = lang === 'en' ? 'NL' : 'EN';
        document.getElementById('reset-button').textContent = content[lang].resetButton;
        document.querySelector('h1').textContent = content[lang].title;
        document.querySelector('header p').textContent = content[lang].description;
        document.querySelector('#level-a h2').textContent = content[lang].levelAHeading;
        document.querySelector('#level-aa h2').textContent = content[lang].levelAAHeading;
        document.querySelector('#level-aaa h2').textContent = content[lang].levelAAAHeading;
        document.querySelector('footer p').innerHTML = content[lang].footerText;
        confirmButton.textContent = content[lang].confirm;
        cancelButton.textContent = content[lang].cancel;
    };
    
    // New function to update the progress bars
const updateProgressBars = () => {
    const levels = ['a', 'aa', 'aaa'];
    levels.forEach(level => {
        const totalItems = checklistItems[`level${level.toUpperCase()}`].length;
        const checkedItems = document.querySelectorAll(`#level-${level} .checklist li.pass`).length;
        const percentage = totalItems > 0 ? (checkedItems / totalItems) * 100 : 0;
        const progressBar = document.getElementById(`progress-${level}`);
        const progressText = document.getElementById(`progress-text-${level}`);

        if (progressBar) {
            progressBar.style.width = `${percentage}%`;
        }

        if (progressText) {
            progressText.textContent = `${checkedItems}/${totalItems} (${level.toUpperCase()})`;
        }
    });
};

    const itemTypeMap = {
        // Level A
        "1.1.1": "C", "1.2.1": "C", "1.2.2": "C", "1.2.3": "C",
        "1.3.1": "D", "1.3.2": "D", "1.3.3": "C", "1.3.4": "D", "1.3.5": "D",
        "1.4.1": "C", "1.4.2": "D",
        "2.1.1": "D", "2.1.2": "D", "2.1.4": "D",
        "2.2.1": "D", "2.2.2": "D",
        "2.3.1": "D",
        "2.4.1": "D", "2.4.2": "C", "2.4.3": "D", "2.4.4": "C",
        "2.5.1": "D", "2.5.2": "D", "2.5.3": "D", "2.5.4": "D",
        "3.1.1": "C", "3.2.1": "D", "3.2.2": "D",
        "3.3.1": "C", "3.3.2": "C",
        "4.1.1": "D", "4.1.2": "D", "4.1.3": "D",
        // Level AA (example, edit as needed)
        "1.2.4": "C", "1.2.5": "C", "1.3.6": "D", "1.4.3": "D", "1.4.4": "D", "1.4.5": "C", "1.4.10": "D", "1.4.11": "D", "1.4.12": "D", "1.4.13": "D",
        "2.4.5": "C", "2.4.6": "C", "2.4.7": "D", "2.5.5": "D", "2.5.6": "D",
        "3.1.2": "C", "3.2.3": "D", "3.2.4": "D", "3.3.3": "C", "3.3.4": "C", "3.3.7": "C", "3.3.8": "D",
        // Level AAA (example, edit as needed)
        "1.2.6": "C", "1.2.7": "C", "1.2.8": "C", "1.2.9": "C", "1.3.7": "D", "1.4.6": "D", "1.4.7": "D", "1.4.8": "D", "1.4.9": "C",
        "2.1.3": "D", "2.2.3": "D", "2.2.4": "D", "2.2.5": "D", "2.2.6": "D", "2.3.2": "D", "2.3.3": "D",
        "2.4.8": "C", "2.4.9": "C", "2.4.10": "C", "2.4.11": "D", "2.5.7": "D", "2.5.8": "D",
        "3.1.3": "C", "3.1.4": "C", "3.1.5": "C", "3.1.6": "C", "3.2.5": "D", "3.3.5": "C", "3.3.6": "C"
    };

    const createChecklist = (level, items) => {
        const listContainer = document.querySelector(`#level-${level} .checklist`);
        listContainer.innerHTML = '';
        items.forEach(item => {
            const state = savedState[item.id] || { checked: false, expanded: false };
            const sanitizedId = item.id.replace(/\./g, '');
            const imagePath = `images/${sanitizedId}.webp`;

            const imageAltText = imageDescriptions[item.id] || `A visual example for WCAG success criterion ${item.id}.`;

            // Get the type letter for this item
            const typeLetter = itemTypeMap[item.id] || "";

            const li = document.createElement('li');
            li.setAttribute('data-item-id', item.id);
            if (state.expanded) {
                li.classList.add('expanded');
            }
            li.innerHTML = `
                <div>
                    <input type="checkbox" id="sc-${item.id}" ${state.checked ? 'checked' : ''}>
                    <div>
                        <h3>
                            ${item.id} <span class="item-name">${item.name}</span>
                        </h3>
                        <p class="item-description">${item.description}</p>
                    </div>
                </div>
                <div class="info-cd-wrapper">
                    <button class="info-button">i</button>
                    <span class="cd-label ${typeLetter}">${typeLetter}</span>
                </div>
                <div class="expanded-content">
                    <img src="${imagePath}" alt="${imageAltText}">
                    <p><i>${imageAltText}</i></p>
                </div>
            `;

            // Move .info-cd-wrapper to top right
            li.querySelector('.info-cd-wrapper').style.position = 'absolute';
            li.querySelector('.info-cd-wrapper').style.top = '5px';
            li.querySelector('.info-cd-wrapper').style.right = '5px';
            li.querySelector('.info-cd-wrapper').style.display = 'flex';
            li.querySelector('.info-cd-wrapper').style.alignItems = 'center';
            li.querySelector('.info-cd-wrapper').style.gap = '4px';

            const checkbox = li.querySelector('input[type="checkbox"]');
            const infoButton = li.querySelector('.info-button');
            const image = li.querySelector('img');

            li.addEventListener('click', (e) => {
                if (!e.target.closest('.info-button') && e.target !== image) {
                    checkbox.checked = !checkbox.checked;
                    savedState[item.id] = { ...state, checked: checkbox.checked };
                    localStorage.setItem('wcagChecklistState', JSON.stringify(savedState));
                    li.classList.toggle('pass', checkbox.checked);
                    updateProgressBars();
                }
            });

            infoButton.addEventListener('click', (e) => {
                e.stopPropagation();
                li.classList.toggle('expanded');
                const isExpanded = li.classList.contains('expanded');
                savedState[item.id] = { ...state, expanded: isExpanded };
                localStorage.setItem('wcagChecklistState', JSON.stringify(savedState));
            });

            image.addEventListener('click', (e) => {
                e.stopPropagation();
                const altText = e.target.alt;
                showImageModal(imagePath, altText);
            });

            if (state.checked) {
                li.classList.add('pass');
            }
            listContainer.appendChild(li);
        });
    };

    const resetChecklist = () => {
        localStorage.clear();
        location.reload();
    };

    const toggleLanguage = () => {
        currentLanguage = currentLanguage === 'en' ? 'nl' : 'en';
        localStorage.setItem('wcagLanguage', currentLanguage);
        renderContent(currentLanguage);
    };

    const renderContent = (lang) => {
        translatePage(lang);
        createChecklist('a', checklistItems.levelA);
        createChecklist('aa', checklistItems.levelAA);
        createChecklist('aaa', checklistItems.levelAAA);
        updateProgressBars();
        makeSectionsStickyAndCollapsible();
        setupProgressTextCategoryToggle(); // <-- Add this here
    };

    document.getElementById('reset-button').addEventListener('click', () => {
        showResetModal(content[currentLanguage].resetButtonConfirmation);
    });

    confirmButton.addEventListener('click', resetChecklist);
    cancelButton.addEventListener('click', hideResetModal);
    imageCloseButton.addEventListener('click', hideImageModal);
    
    imageModalOverlay.addEventListener('click', (e) => {
        if (e.target === imageModalOverlay) {
            hideImageModal();
        }
    });

    document.getElementById('lang-toggle-button').addEventListener('click', toggleLanguage);

    let lastScrollY = window.scrollY;
    const headerButtons = document.querySelector('.header-buttons');

    window.addEventListener('scroll', () => {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
            // Scrolling down
            headerButtons.classList.add('hidden');
        } else {
            // Scrolling up
            headerButtons.classList.remove('hidden');
        }
        lastScrollY = window.scrollY;
    });

    function initializeApp() {
        let currentLanguage = localStorage.getItem('wcagLanguage') || 'nl';
        let savedState = JSON.parse(localStorage.getItem('wcagChecklistState')) || {};

        const resetModal = document.getElementById('reset-modal');
        const resetModalText = document.getElementById('modal-text');
        const confirmButton = document.getElementById('confirm-reset-button');
        const cancelButton = document.getElementById('cancel-reset-button');
        
        const imageModalOverlay = document.createElement('div');
        imageModalOverlay.classList.add('image-modal-overlay');
        imageModalOverlay.innerHTML = `
            <div class="image-modal-content">
                <img src="" alt="">
                <button class="close-button">&times;</button>
            </div>
        `;
        document.body.appendChild(imageModalOverlay);
        
        const imageModalImage = imageModalOverlay.querySelector('img');
        const imageCloseButton = imageModalOverlay.querySelector('.close-button');

        const showResetModal = (message) => {
            resetModalText.textContent = message;
            resetModal.style.display = 'flex';
        };

        const hideResetModal = () => {
            resetModal.style.display = 'none';
        };
        
        const showImageModal = (src, alt) => {
            imageModalImage.src = src;
            imageModalImage.alt = alt;
            imageModalOverlay.classList.add('active');
        };

        const hideImageModal = () => {
            imageModalOverlay.classList.remove('active');
        };

        const translatePage = (lang) => {
            document.getElementById('lang-toggle-button').textContent = lang === 'en' ? 'NL' : 'EN';
            document.getElementById('reset-button').textContent = content[lang].resetButton;
            document.querySelector('h1').textContent = content[lang].title;
            document.querySelector('header p').textContent = content[lang].description;
            document.querySelector('#level-a h2').textContent = content[lang].levelAHeading;
            document.querySelector('#level-aa h2').textContent = content[lang].levelAAHeading;
            document.querySelector('#level-aaa h2').textContent = content[lang].levelAAAHeading;
            document.querySelector('footer p').innerHTML = content[lang].footerText;
            confirmButton.textContent = content[lang].confirm;
            cancelButton.textContent = content[lang].cancel;
        };

        const updateProgressBars = () => {
            const levels = ['a', 'aa', 'aaa'];
            levels.forEach(level => {
                const totalItems = checklistItems[`level${level.toUpperCase()}`].length;
                const checkedItems = document.querySelectorAll(`#level-${level} .checklist li.pass`).length;
                const percentage = totalItems > 0 ? (checkedItems / totalItems) * 100 : 0;
                const progressBar = document.getElementById(`progress-${level}`);
                const progressText = document.getElementById(`progress-text-${level}`);

                if (progressBar) {
                    progressBar.style.width = `${percentage}%`;
                }

                if (progressText) {
                    progressText.textContent = `${checkedItems}/${totalItems} (${level.toUpperCase()})`;
                }
            });
        };

        const itemTypeMap = {
            // Level A
            "1.1.1": "C", "1.2.1": "C", "1.2.2": "C", "1.2.3": "C",
            "1.3.1": "D", "1.3.2": "D", "1.3.3": "C", "1.3.4": "D", "1.3.5": "D",
            "1.4.1": "C", "1.4.2": "D",
            "2.1.1": "D", "2.1.2": "D", "2.1.4": "D",
            "2.2.1": "D", "2.2.2": "D",
            "2.3.1": "D",
            "2.4.1": "D", "2.4.2": "C", "2.4.3": "D", "2.4.4": "C",
            "2.5.1": "D", "2.5.2": "D", "2.5.3": "D", "2.5.4": "D",
            "3.1.1": "C", "3.2.1": "D", "3.2.2": "D",
            "3.3.1": "C", "3.3.2": "C",
            "4.1.1": "D", "4.1.2": "D", "4.1.3": "D",
            // Level AA (example, edit as needed)
            "1.2.4": "C", "1.2.5": "C", "1.3.6": "D", "1.4.3": "D", "1.4.4": "D", "1.4.5": "C", "1.4.10": "D", "1.4.11": "D", "1.4.12": "D", "1.4.13": "D",
            "2.4.5": "C", "2.4.6": "C", "2.4.7": "D", "2.5.5": "D", "2.5.6": "D",
            "3.1.2": "C", "3.2.3": "D", "3.2.4": "D", "3.3.3": "C", "3.3.4": "C", "3.3.7": "C", "3.3.8": "D",
            // Level AAA (example, edit as needed)
            "1.2.6": "C", "1.2.7": "C", "1.2.8": "C", "1.2.9": "C", "1.3.7": "D", "1.4.6": "D", "1.4.7": "D", "1.4.8": "D", "1.4.9": "C",
            "2.1.3": "D", "2.2.3": "D", "2.2.4": "D", "2.2.5": "D", "2.2.6": "D", "2.3.2": "D", "2.3.3": "D",
            "2.4.8": "C", "2.4.9": "C", "2.4.10": "C", "2.4.11": "D", "2.5.7": "D", "2.5.8": "D",
            "3.1.3": "C", "3.1.4": "C", "3.1.5": "C", "3.1.6": "C", "3.2.5": "D", "3.3.5": "C", "3.3.6": "C"
        };

        const createChecklist = (level, items) => {
            const listContainer = document.querySelector(`#level-${level} .checklist`);
            listContainer.innerHTML = '';
            items.forEach(item => {
                const state = savedState[item.id] || { checked: false, expanded: false };
                const sanitizedId = item.id.replace(/\./g, '');
                const imagePath = `images/${sanitizedId}.webp`;

                const imageAltText = imageDescriptions[item.id] || `A visual example for WCAG success criterion ${item.id}.`;

                // Get the type letter for this item
                const typeLetter = itemTypeMap[item.id] || "";

                const li = document.createElement('li');
                li.setAttribute('data-item-id', item.id);
                if (state.expanded) {
                    li.classList.add('expanded');
                }
                li.innerHTML = `
                    <div>
                        <input type="checkbox" id="sc-${item.id}" ${state.checked ? 'checked' : ''}>
                        <div>
                            <h3>
                                ${item.id} <span class="item-name">${item.name}</span>
                            </h3>
                            <p class="item-description">${item.description}</p>
                        </div>
                    </div>
                    <div class="info-cd-wrapper">
                        <button class="info-button">i</button>
                        <span class="cd-label ${typeLetter}">${typeLetter}</span>
                    </div>
                    <div class="expanded-content">
                        <img src="${imagePath}" alt="${imageAltText}">
                        <p><i>${imageAltText}</i></p>
                    </div>
                `;

                // Move .info-cd-wrapper to top right
                li.querySelector('.info-cd-wrapper').style.position = 'absolute';
                li.querySelector('.info-cd-wrapper').style.top = '5px';
                li.querySelector('.info-cd-wrapper').style.right = '5px';
                li.querySelector('.info-cd-wrapper').style.display = 'flex';
                li.querySelector('.info-cd-wrapper').style.alignItems = 'center';
                li.querySelector('.info-cd-wrapper').style.gap = '4px';

                const checkbox = li.querySelector('input[type="checkbox"]');
                const infoButton = li.querySelector('.info-button');
                const image = li.querySelector('img');

                li.addEventListener('click', (e) => {
                    if (!e.target.closest('.info-button') && e.target !== image) {
                        checkbox.checked = !checkbox.checked;
                        savedState[item.id] = { ...state, checked: checkbox.checked };
                        localStorage.setItem('wcagChecklistState', JSON.stringify(savedState));
                        li.classList.toggle('pass', checkbox.checked);
                        updateProgressBars();
                    }
                });

                infoButton.addEventListener('click', (e) => {
                    e.stopPropagation();
                    li.classList.toggle('expanded');
                    const isExpanded = li.classList.contains('expanded');
                    savedState[item.id] = { ...state, expanded: isExpanded };
                    localStorage.setItem('wcagChecklistState', JSON.stringify(savedState));
                });

                image.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const altText = e.target.alt;
                    showImageModal(imagePath, altText);
                });

                if (state.checked) {
                    li.classList.add('pass');
                }
                listContainer.appendChild(li);
            });
        };

        const resetChecklist = () => {
            localStorage.clear();
            location.reload();
        };

        const toggleLanguage = () => {
            currentLanguage = currentLanguage === 'en' ? 'nl' : 'en';
            localStorage.setItem('wcagLanguage', currentLanguage);
            renderContent(currentLanguage);
        };

        const renderContent = (lang) => {
            translatePage(lang);
            createChecklist('a', checklistItems.levelA);
            createChecklist('aa', checklistItems.levelAA);
            createChecklist('aaa', checklistItems.levelAAA);
            updateProgressBars();
            makeSectionsStickyAndCollapsible();
            setupProgressTextCategoryToggle(); // <-- Add this here
        };

        document.getElementById('reset-button').addEventListener('click', () => {
            showResetModal(content[currentLanguage].resetButtonConfirmation);
        });

        confirmButton.addEventListener('click', resetChecklist);
        cancelButton.addEventListener('click', hideResetModal);
        imageCloseButton.addEventListener('click', hideImageModal);

        imageModalOverlay.addEventListener('click', (e) => {
            if (e.target === imageModalOverlay) {
                hideImageModal();
            }
        });

        document.getElementById('lang-toggle-button').addEventListener('click', toggleLanguage);

        let lastScrollY = window.scrollY;
        const headerButtons = document.querySelector('.header-buttons');

        window.addEventListener('scroll', () => {
            if (window.scrollY > lastScrollY && window.scrollY > 100) {
                // Scrolling down
                headerButtons.classList.add('hidden');
            } else {
                // Scrolling up
                headerButtons.classList.remove('hidden');
            }
            lastScrollY = window.scrollY;
        });

        renderContent(currentLanguage);
    }

    function makeSectionsStickyAndCollapsible() {
        ['a', 'aa', 'aaa'].forEach(level => {
            const section = document.getElementById(`level-${level}`);
            if (!section) return;
            const header = section.querySelector('.sticky-section-header');
            const content = section.querySelector('.section-collapsible-content');
            if (!header || !content) return;

            // Prevent multiple event listeners
            header.onclick = null;

            header.addEventListener('click', () => {
                header.classList.toggle('collapsed');
                content.classList.toggle('collapsed');
                // Optionally, store state in localStorage here
            });
        });
    }

    // Add this after DOMContentLoaded and after your other event listeners

function setupProgressTextCategoryToggle() {
    const categories = [
        { level: 'a', section: '#level-a', bar: '#progress-a', text: '#progress-text-a', wrapper: null },
        { level: 'aa', section: '#level-aa', bar: '#progress-aa', text: '#progress-text-aa', wrapper: null },
        { level: 'aaa', section: '#level-aaa', bar: '#progress-aaa', text: '#progress-text-aaa', wrapper: null }
    ];

    // Save original wrappers for re-insertion
    categories.forEach(cat => {
        const barEl = document.querySelector(cat.bar);
        if (barEl) {
            cat.wrapper = barEl.parentElement; // .progress-bar-wrapper
        }
    });

    categories.forEach(cat => {
        const textEl = document.querySelector(cat.text);
        const sectionEl = document.querySelector(cat.section);
        const barEl = document.querySelector(cat.bar);
        const wrapperEl = cat.wrapper;
        const barsContainer = document.querySelector('.progress-bars-container');

        textEl.addEventListener('click', () => {
            const isDisabled = textEl.classList.toggle('disabled');
            if (isDisabled) {
                // Remove the progress bar wrapper from the DOM
                if (wrapperEl && wrapperEl.parentElement === barsContainer) {
                    barsContainer.removeChild(wrapperEl);
                }
                sectionEl.style.display = 'none';
            } else {
                // Re-insert the progress bar wrapper in the correct order
                // Find the correct index based on the order in categories
                let insertBefore = null;
                for (const nextCat of categories) {
                    if (nextCat === cat) continue;
                    const nextTextEl = document.querySelector(nextCat.text);
                    if (nextTextEl && !nextTextEl.classList.contains('disabled')) {
                        const nextWrapper = nextCat.wrapper;
                        if (nextWrapper && barsContainer.contains(nextWrapper)) {
                            insertBefore = nextWrapper;
                            break;
                        }
                    }
                }
                if (wrapperEl && !barsContainer.contains(wrapperEl)) {
                    barsContainer.insertBefore(wrapperEl, insertBefore);
                }
                sectionEl.style.display = '';
            }
        });
    });
}

// Call this after rendering content and updating progress bars
document.addEventListener('DOMContentLoaded', () => {
    // ...existing code...
    // After your renderContent or at the end of initializeApp/renderContent:
    setupProgressTextCategoryToggle();
});
});