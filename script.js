document.addEventListener('DOMContentLoaded', () => {
    const content = {
        en: {
            title: "WCAG 2.2 Toegankelijkheidschecklist",
            description: "Via deze website is makkelijk bij te houden aan welke criteria van de WCAG 2.2 een website voldoet.",
            levelAHeading: "Level A",
            levelAAHeading: "Level AA",
            levelAAAHeading: "Level AAA",
            footerText: "&copy; 2024 WCAG Checklist",
            resetButton: "Reset",
            resetButtonConfirmation: "Are you sure you want to reset the checklist? This action cannot be undone.",
            confirm: "Confirm",
            cancel: "Cancel",
            items: {
                levelA: [
                    {"id": "1.1.1", "name": "Non-text Content", "description": "Provide text alternatives for images, icons, and other non-text content so assistive technologies can present them."},
                    {"id": "1.2.1", "name": "Audio-only and Video-only (Prerecorded)", "description": "For prerecorded audio-only, provide a transcript. For prerecorded video-only, provide a text or audio alternative."},
                    {"id": "1.2.2", "name": "Captions (Prerecorded)", "description": "Add captions to prerecorded videos with audio so deaf or hard-of-hearing users can understand."},
                    {"id": "1.2.3", "name": "Audio Description or Media Alternative (Prerecorded)", "description": "Provide audio description or an alternative for video-only content."},
                    {"id": "1.3.1", "name": "Info and Relationships", "description": "Ensure that headings, lists, tables, and other structures use correct semantic markup."},
                    {"id": "1.3.2", "name": "Meaningful Sequence", "description": "Content should be presented in a logical reading order that makes sense with assistive technology."},
                    {"id": "1.3.3", "name": "Sensory Characteristics", "description": "Instructions must not rely only on shape, size, sound, or visual location (e.g., 'click the red button')."},
                    {"id": "1.3.4", "name": "Orientation", "description": "Content should not restrict display orientation (portrait/landscape)."},
                    {"id": "1.3.5", "name": "Identify Input Purpose", "description": "Collect input purpose programmatically (e.g., name, email, address) to support autofill and personalization."},
                    {"id": "1.4.1", "name": "Use of Color", "description": "Color alone should not be used to convey meaning (e.g., 'required fields in red')."},
                    {"id": "1.4.2", "name": "Audio Control", "description": "If audio plays automatically for more than 3 seconds, users must be able to pause or stop it."},
                    {"id": "2.1.1", "name": "Keyboard", "description": "All functionality must be available by keyboard alone."},
                    {"id": "2.1.2", "name": "No Keyboard Trap", "description": "Users must not get stuck in a component when using keyboard navigation."},
                    {"id": "2.1.4", "name": "Character Key Shortcuts", "description": "Provide a way to turn off or remap single-key shortcuts."},
                    {"id": "2.2.1", "name": "Timing Adjustable", "description": "If time limits exist, allow users to extend or turn them off."},
                    {"id": "2.2.2", "name": "Pause, Stop, Hide", "description": "Provide controls to pause, stop, or hide moving, blinking, or scrolling content."},
                    {"id": "2.3.1", "name": "Three Flashes or Below Threshold", "description": "No content should flash more than 3 times per second (to avoid seizures)."},
                    {"id": "2.4.1", "name": "Bypass Blocks", "description": "Provide a mechanism to skip repeated blocks of content (e.g., nav menus)."},
                    {"id": "2.4.2", "name": "Page Titled", "description": "Each page should have a descriptive, unique title."},
                    {"id": "2.4.3", "name": "Focus Order", "description": "Focus order must follow a logical, predictable sequence."},
                    {"id": "2.4.4", "name": "Link Purpose (In Context)", "description": "The purpose of each link should be clear from its text or context."},
                    {"id": "2.5.1", "name": "Pointer Gestures", "description": "Avoid requiring complex gestures (e.g., pinch) unless an alternative is provided."},
                    {"id": "2.5.2", "name": "Pointer Cancellation", "description": "Ensure actions are only triggered on release, not on initial touch."},
                    {"id": "2.5.3", "name": "Label in Name", "description": "Accessible names should include any visible text labels."},
                    {"id": "2.5.4", "name": "Motion Actuation", "description": "Functions triggered by motion (shake, tilt) should have alternatives."},
                    {"id": "3.1.1", "name": "Language of Page", "description": "Set the main language of the page in code."},
                    {"id": "3.2.1", "name": "On Focus", "description": "Changing context automatically on focus should be avoided."},
                    {"id": "3.2.2", "name": "On Input", "description": "Changing inputs should not automatically change context without warning."},
                    {"id": "3.3.1", "name": "Error Identification", "description": "Clearly identify input errors with text descriptions."},
                    {"id": "3.3.2", "name": "Labels or Instructions", "description": "Provide clear labels and instructions for form fields."},
                    {"id": "4.1.1", "name": "Parsing", "description": "Ensure code is valid and elements are properly nested."},
                    {"id": "4.1.2", "name": "Name, Role, Value", "description": "UI components must expose their name, role, and value to assistive tech."},
                    {"id": "4.1.3", "name": "Status Messages", "description": "Status messages must be conveyed to assistive technologies."}
                ],
                levelAA: [
                    {"id": "1.2.4", "name": "Captions (Live)", "description": "Provide captions for live audio content in synchronized media."},
                    {"id": "1.2.5", "name": "Audio Description (Prerecorded)", "description": "Provide audio description for all prerecorded video content with audio."},
                    {"id": "1.3.6", "name": "Identify Purpose", "description": "Identify common input fields and icons programmatically to support personalization."},
                    {"id": "1.4.3", "name": "Contrast (Minimum)", "description": "Text and images of text should have at least 4.5:1 contrast ratio (3:1 for large text)."},
                    {"id": "1.4.4", "name": "Resize Text", "description": "Text must be resizable up to 200% without loss of content or functionality."},
                    {"id": "1.4.5", "name": "Images of Text", "description": "Use real text instead of images of text, unless essential."},
                    {"id": "1.4.10", "name": "Reflow", "description": "Content should reflow without requiring scrolling in two dimensions, up to 400% zoom."},
                    {"id": "1.4.11", "name": "Non-text Contrast", "description": "Visual elements (icons, controls) should have sufficient contrast against backgrounds."},
                    {"id": "1.4.12", "name": "Text Spacing", "description": "Content must remain usable when users change text spacing (line height, letter spacing)."},
                    {"id": "1.4.13", "name": "Content on Hover or Focus", "description": "Information shown on hover or focus must be dismissible, hoverable, and persistent."},
                    {"id": "2.4.5", "name": "Multiple Ways", "description": "Provide multiple ways to locate a page within a set of pages (search, menu, sitemap)."},
                    {"id": "2.4.6", "name": "Headings and Labels", "description": "Use descriptive headings and labels to help users understand content."},
                    {"id": "2.4.7", "name": "Focus Visible", "description": "The keyboard focus indicator must be visible."},
                    {"id": "2.5.5", "name": "Target Size (Enhanced in 2.2)", "description": "Interactive targets should be at least 24x24 CSS pixels."},
                    {"id": "2.5.6", "name": "Concurrent Input Mechanisms", "description": "Websites should allow multiple input methods (mouse, keyboard, touch)."},
                    {"id": "3.1.2", "name": "Language of Parts", "description": "Specify language changes within content (e.g., foreign words)."},
                    {"id": "3.2.3", "name": "Consistent Navigation", "description": "Navigation mechanisms should appear consistently across pages."},
                    {"id": "3.2.4", "name": "Consistent Identification", "description": "Componenten with the same functionality should be identified consistently."},
                    {"id": "3.3.3", "name": "Error Suggestion", "description": "Provide suggestions for correcting input errors when possible."},
                    {"id": "3.3.4", "name": "Error Prevention (Legal, Financial, Data)", "description": "For important transactions, provide confirmation, review, and correction options."},
                    {"id": "3.3.7", "name": "Redundant Entry (new in 2.2)", "description": "Avoid asking users to re-enter the same information multiple times."},
                    {"id": "3.3.8", "name": "Accessible Authentication (new in 2.2)", "description": "Authentication must not rely only on cognitive function tests (like puzzles)."}
                ],
                levelAAA: [
                    {"id": "1.2.6", "name": "Sign Language (Prerecorded)", "description": "Provide sign language interpretation for all prerecorded audio content."},
                    {"id": "1.2.7", "name": "Extended Audio Description (Prerecorded)", "description": "Provide extended audio description where pauses are insufficient."},
                    {"id": "1.2.8", "name": "Media Alternative (Prerecorded)", "description": "Provide a full text alternative for prerecorded synchronized media."},
                    {"id": "1.2.9", "name": "Audio-only (Live)", "description": "Provide a transcript or equivalent for live audio-only content."},
                    {"id": "1.3.7", "name": "Reduced Motion (new in 2.2)", "description": "Allow users to reduce motion/animation if it causes discomfort."},
                    {"id": "1.4.6", "name": "Contrast (Enhanced)", "description": "Text and images of text must have at least 7:1 contrast ratio (4.5:1 for large text)."},
                    {"id": "1.4.7", "name": "Low or No Background Audio", "description": "Background sounds must be low, turn off-able, or at least 20 dB lower than foreground speech."},
                    {"id": "1.4.8", "name": "Visual Presentation", "description": "Allow users to customize visual presentation (colors, spacing, font)."},
                    {"id": "1.4.9", "name": "Images of Text (No Exception)", "description": "Do not use images of text at all."},
                    {"id": "2.1.3", "name": "Keyboard (No Exception)", "description": "All content and functionality must be operable through keyboard without exception."},
                    {"id": "2.2.3", "name": "No Timing", "description": "No time limits for completing tasks unless essential."},
                    {"id": "2.2.4", "name": "Interruptions", "description": "Users should be able to postpone or suppress interruptions."},
                    {"id": "2.2.5", "name": "Re-authenticating", "description": "Re-authentication should not cause loss of data."},
                    {"id": "2.2.6", "name": "Timeouts", "description": "Warn users about inactivity timeouts that cause data loss."},
                    {"id": "2.3.2", "name": "Three Flashes", "description": "No content flashes more than 3 times per second, even at higher levels."},
                    {"id": "2.3.3", "name": "Animation from Interactions (new in 2.2)", "description": "Allow users to disable animations triggered by interactions."},
                    {"id": "2.4.8", "name": "Location", "description": "Provide information about the user's location within a website, such as breadcrumbs."},
                    {"id": "2.4.9", "name": "Link Purpose (Link Only)", "description": "Each link's purpose should be identifiable from the link text alone."},
                    {"id": "2.4.10", "name": "Section Headings", "description": "Use headings to organize all content."},
                    {"id": "2.4.11", "name": "Focus Appearance (new in 2.2)", "description": "The focus indicator must be highly visible and meet contrast requirements."},
                    {"id": "2.5.7", "name": "Dragging Movements (new in 2.2)", "description": "Provide alternatives for actions that require dragging movements."},
                    {"id": "2.5.8", "name": "Target Size (Minimum) (new in 2.2)", "description": "Targets must be at least 24x24 CSS-pixels with limited exceptions."},
                    {"id": "3.1.3", "name": "Unusual Words", "description": "Provide definitions or explanations for uncommon or technical terms."},
                    {"id": "3.1.4", "name": "Abbreviations", "description": "Provide expansions or meanings of abbreviations."},
                    {"id": "3.1.5", "name": "Reading Level", "description": "Content should not require reading ability more advanced than lower secondary level."},
                    {"id": "3.1.6", "name": "Pronunciation", "description": "Provide pronunciation guidance for words where meaning depends on pronunciation."},
                    {"id": "3.2.5", "name": "Change on Request", "description": "Changes of context should only occur when requested by the user."},
                    {"id": "3.3.5", "name": "Help", "description": "Provide help mechanisms, such as FAQs, instructions, or contact options."},
                    {"id": "3.3.6", "name": "Error Prevention (All)", "description": "For all forms, allow review, correction, and confirmation before submission."}
                ]
            }
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
            cancel: "Annuleren",
            items: {
                levelA: [
                    {"id": "1.1.1", "name": "Niet-tekstuele content", "description": "Zorg voor tekstalternatieven voor afbeeldingen, iconen en andere niet-tekstuele content, zodat ondersteunende technologieën deze kunnen weergeven."},
                    {"id": "1.2.1", "name": "Louter-geluid en louter-videobeeld (vooraf opgenomen)", "description": "Zorg voor een transcript voor vooraf opgenomen audio. Zorg voor een tekst- of audioalternatief voor vooraf opgenomen video."},
                    {"id": "1.2.2", "name": "Ondertiteling (vooraf opgenomen)", "description": "Voeg ondertiteling toe aan vooraf opgenomen video's met audio, zodat dove of slechthorende gebruikers deze kunnen begrijpen."},
                    {"id": "1.2.3", "name": "Audiodescriptie of media-alternatief (vooraf opgenomen)", "description": "Zorg voor audiodescriptie of een alternatief voor louter-videobeeld content."},
                    {"id": "1.3.1", "name": "Info en relaties", "description": "Zorg ervoor dat koppen, lijsten, tabellen en andere structuren de juiste semantische opmaak gebruiken."},
                    {"id": "1.3.2", "name": "Betekenisvolle volgorde", "description": "Content moet worden gepresenteerd in een logische leesvolgorde die met ondersteunende technologieën werkt."},
                    {"id": "1.3.3", "name": "Sensorische kenmerken", "description": "Instructies mogen niet alleen afhankelijk zijn van vorm, grootte, geluid of visuele locatie (bijv. 'klik op de rode knop')."},
                    {"id": "1.3.4", "name": "Oriëntatie", "description": "Content mag de schermoriëntatie (portret/landschap) niet beperken."},
                    {"id": "1.3.5", "name": "Identificeer het invoerdoel", "description": "Verzamel programmatisch het invoerdoel (bijv. naam, e-mailadres) om automatisch invullen en personalisatie te ondersteunen."},
                    {"id": "1.4.1", "name": "Gebruik van kleur", "description": "Kleur alleen mag niet worden gebruikt om betekenis over te brengen (bijv. 'verplichte velden in het rood')."},
                    {"id": "1.4.2", "name": "Audiocontrole", "description": "Als audio automatisch afspeelt voor langer dan 3 seconden, moeten gebruikers dit kunnen pauzeren of stoppen."},
                    {"id": "2.1.1", "name": "Toetsenbord", "description": "Alle functionaliteit moet volledig bedienbaar zijn met het toetsenbord."},
                    {"id": "2.1.2", "name": "Geen toetsenbordval", "description": "Gebruikers mogen niet vast komen te zitten in een component bij gebruik van toetsenbordnavigatie."},
                    {"id": "2.1.4", "name": "Sneltoetsen met enkelvoudige karakters", "description": "Zorg voor een manier om sneltoetsen met één toets uit te schakelen of te herdefiniëren."},
                    {"id": "2.2.1", "name": "Timing aanpasbaar", "description": "Als er tijdslimieten zijn, moeten gebruikers deze kunnen verlengen of uitschakelen."},
                    {"id": "2.2.2", "name": "Pauzeren, stoppen, verbergen", "description": "Zorg voor besturingselementen om bewegende, knipperende of scrollende content te pauzeren, stoppen of verbergen."},
                    {"id": "2.3.1", "name": "Drie flitsen of beneden drempelwaarde", "description": "Geen enkele content mag meer dan 3 keer per seconde flitsen (om epileptische aanvallen te voorkomen)."},
                    {"id": "2.4.1", "name": "Blokken omzeilen", "description": "Zorg voor een mechanisme om herhaalde blokken content over te slaan (bijv. navigatiemenu's)."},
                    {"id": "2.4.2", "name": "Paginatitel", "description": "Elke pagina moet een beschrijvende, unieke titel hebben."},
                    {"id": "2.4.3", "name": "Focusvolgorde", "description": "De focusvolgorde moet een logische, voorspelbare sequentie volgen."},
                    {"id": "2.4.4", "name": "Linkdoel (in context)", "description": "Het doel van elke link moet duidelijk zijn vanuit de tekst of context."},
                    {"id": "2.5.1", "name": "Aanwijzergebaren", "description": "Vermijd het vereisen van complexe gebaren (bijv. pinch) tenzij er een alternatief wordt geboden."},
                    {"id": "2.5.2", "name": "Annulering aanwijzer", "description": "Zorg ervoor dat acties alleen worden geactiveerd bij loslaten, niet bij de initiële aanraking."},
                    {"id": "2.5.3", "name": "Label in naam", "description": "Toegankelijke namen moeten alle zichtbare tekstlabels bevatten."},
                    {"id": "2.5.4", "name": "Bewegingsactivering", "description": "Functies die worden geactiveerd door beweging (schudden, kantelen) moeten alternatieven hebben."},
                    {"id": "3.1.1", "name": "Taal van de pagina", "description": "Stel de hoofdtaal van de pagina in de code in."},
                    {"id": "3.2.1", "name": "Bij focus", "description": "Het automatisch wijzigen van context bij focus moet worden vermeden."},
                    {"id": "3.2.2", "name": "Bij invoer", "description": "Het wijzigen van invoer mag de context niet automatisch veranderen zonder waarschuwing."},
                    {"id": "3.3.1", "name": "Foutidentificatie", "description": "Identificeer invoerfouten duidelijk met tekstuele beschrijvingen."},
                    {"id": "3.3.2", "name": "Labels of instructies", "description": "Zorg voor duidelijke labels en instructies voor formuliervelden."},
                    {"id": "4.1.1", "name": "Parsen", "description": "Zorg ervoor dat de code geldig is en elementen correct genesteld zijn."},
                    {"id": "4.1.2", "name": "Naam, rol, waarde", "description": "UI-componenten moeten hun naam, rol en waarde blootstellen aan ondersteunende technologieën."},
                    {"id": "4.1.3", "name": "Statusberichten", "description": "Statusberichten moeten worden overgebracht naar ondersteunende technologieën."}
                ],
                levelAA: [
                    {"id": "1.2.4", "name": "Ondertiteling (live)", "description": "Zorg voor ondertiteling voor live audiocontent in gesynchroniseerde media."},
                    {"id": "1.2.5", "name": "Audiodescriptie (vooraf opgenomen)", "description": "Zorg voor audiodescriptie voor alle vooraf opgenomen videocontent met audio."},
                    {"id": "1.3.6", "name": "Identificeer doel", "description": "Identificeer veelvoorkomende invoervelden en pictogrammen programmatisch om personalisatie te ondersteunen."},
                    {"id": "1.4.3", "name": "Contrast (minimaal)", "description": "Tekst en afbeeldingen van tekst moeten ten minste een contrastverhouding van 4.5:1 hebben (3:1 voor grote tekst)."},
                    {"id": "1.4.4", "name": "Herschalen van tekst", "description": "Tekst moet tot 200% herschaalbaar zijn zonder verlies van content of functionaliteit."},
                    {"id": "1.4.5", "name": "Afbeeldingen van tekst", "description": "Gebruik echte tekst in plaats van afbeeldingen van tekst, tenzij dit essentieel is."},
                    {"id": "1.4.10", "name": "Reflow", "description": "Content moet herindelen zonder dat er horizontaal scrollen nodig is, tot 400% zoom."},
                    {"id": "1.4.11", "name": "Niet-tekst contrast", "description": "Visuele elementen (pictogrammen, bedieningselementen) moeten voldoende contrast hebben met de achtergrond."},
                    {"id": "1.4.12", "name": "Tekstafstand", "description": "Content moet bruikbaar blijven wanneer gebruikers de tekstafstand wijzigen (regelafstand, letterafstand)."},
                    {"id": "1.4.13", "name": "Content bij aanwijzen of focus", "description": "Informatie die wordt getoond bij aanwijzen of focus moet te verbergen zijn, aan te wijzen zijn, en persistent zijn."},
                    {"id": "2.4.5", "name": "Meerdere manieren", "description": "Zorg voor meerdere manieren om een pagina binnen een reeks pagina's te vinden (zoeken, menu, sitemap)."},
                    {"id": "2.4.6", "name": "Koppen en labels", "description": "Gebruik beschrijvende koppen en labels om gebruikers te helpen content te begrijpen."},
                    {"id": "2.4.7", "name": "Focus zichtbaar", "description": "De focusindicator van het toetsenbord moet zichtbaar zijn."},
                    {"id": "2.5.5", "name": "Doelgrootte (verbeterd in 2.2)", "description": "Interactieve doelen moeten ten minste 24x24 CSS-pixels zijn."},
                    {"id": "2.5.6", "name": "Gelijktijdige invoermechanismen", "description": "Websites moeten meerdere invoermethoden toestaan (muis, toetsenbord, aanraken)."},
                    {"id": "3.1.2", "name": "Taal van onderdelen", "description": "Specificeer taalveranderingen binnen content (bijv. buitenlandse woorden)."},
                    {"id": "3.2.3", "name": "Consistente navigatie", "description": "Navigatiemechanismen moeten consistent verschijnen over verschillende pagina's."},
                    {"id": "3.2.4", "name": "Consistente identificatie", "description": "Componenten met dezelfde functionaliteit moeten consistent worden geïdentificeerd."},
                    {"id": "3.3.3", "name": "Foutsuggestie", "description": "Zorg voor suggesties om invoerfouten te corrigeren waar mogelijk."},
                    {"id": "3.3.4", "name": "Foutpreventie (wettelijk, financieel, gegevens)", "description": "Voor belangrijke transacties, bied bevestigings-, beoordelings- en correctiemogelijkheden."},
                    {"id": "3.3.7", "name": "Redundante invoer (nieuw in 2.2)", "description": "Vermijd het vragen aan gebruikers om dezelfde informatie meerdere keren opnieuw in te voeren."},
                    {"id": "3.3.8", "name": "Toegankelijke authenticatie (nieuw in 2.2)", "description": "Authenticatie mag niet alleen afhankelijk zijn van cognitieve functietesten (zoals puzzels)."}
                ],
                levelAAA: [
                    {"id": "1.2.6", "name": "Gebarentaal (vooraf opgenomen)", "description": "Zorg voor gebarentaalinterpretatie voor alle vooraf opgenomen audiocontent."},
                    {"id": "1.2.7", "name": "Uitgebreide audiodescriptie (vooraf opgenomen)", "description": "Zorg voor uitgebreide audiodescriptie waar pauzes onvoldoende zijn."},
                    {"id": "1.2.8", "name": "Media-alternatief (vooraf opgenomen)", "description": "Zorg voor een volledig tekstalternatief voor vooraf opgenomen gesynchroniseerde media."},
                    {"id": "1.2.9", "name": "Louter-geluid (live)", "description": "Zorg voor een transcript of equivalent voor live louter-geluid content."},
                    {"id": "1.3.7", "name": "Verminderde beweging (nieuw in 2.2)", "description": "Zorg dat gebruikers beweging/animatie kunnen verminderen als dit ongemak veroorzaakt."},
                    {"id": "1.4.6", "name": "Contrast (verbeterd)", "description": "Tekst en afbeeldingen van tekst moeten ten minste een contrastverhouding van 7:1 hebben (4.5:1 voor grote tekst)."},
                    {"id": "1.4.7", "name": "Weinig of geen achtergrondgeluid", "description": "Achtergrondgeluiden moeten zacht zijn, uitschakelbaar, of ten minste 20 dB zachter dan voorgrondspraak."},
                    {"id": "1.4.8", "name": "Visuele weergave", "description": "Sta gebruikers toe om de visuele weergave (kleuren, afstand, lettertype) aan te passen."},
                    {"id": "1.4.9", "name": "Afbeeldingen van tekst (geen uitzondering)", "description": "Gebruik helemaal geen afbeeldingen van tekst."},
                    {"id": "2.1.3", "name": "Toetsenbord (geen uitzondering)", "description": "Alle content en functionaliteit moeten zonder uitzondering met het toetsenbord te bedienen zijn."},
                    {"id": "2.2.3", "name": "Geen timing", "description": "Geen tijdslimieten voor het voltooien van taken, tenzij essentieel."},
                    {"id": "2.2.4", "name": "Onderbrekingen", "description": "Gebruikers moeten onderbrekingen kunnen uitstellen of onderdrukken."},
                    {"id": "2.2.5", "name": "Herauthentiseren", "description": "Herauthenticatie mag niet leiden tot gegevensverlies."},
                    {"id": "2.2.6", "name": "Time-outs", "description": "Waarschuw gebruikers voor inactiviteit-time-outs die leiden tot gegevensverlies."},
                    {"id": "2.3.2", "name": "Drie flitsen", "description": "Geen enkele content flitst meer dan 3 keer per seconde, zelfs niet op hogere niveaus."},
                    {"id": "2.3.3", "name": "Animatie door interactie (nieuw in 2.2)", "description": "Zorg dat gebruikers animaties die door interacties worden geactiveerd kunnen uitschakelen."},
                    {"id": "2.4.8", "name": "Locatie", "description": "Geef informatie over de locatie van de gebruiker binnen een website, zoals kruimelpaden."},
                    {"id": "2.4.9", "name": "Linkdoel (alleen link)", "description": "Het doel van elke link moet identificeerbaar zijn uit de linktekst alleen."},
                    {"id": "2.4.10", "name": "Sectiekoppen", "description": "Gebruik koppen om alle content te organiseren."},
                    {"id": "2.4.11", "name": "Focusweergave (nieuw in 2.2)", "description": "De focusindicator moet zeer zichtbaar zijn en voldoen aan contrastvereisten."},
                    {"id": "2.5.7", "name": "Slepen (nieuw in 2.2)", "description": "Zorg voor alternatieven voor acties die slepen vereisen."},
                    {"id": "2.5.8", "name": "Doelgrootte (minimaal) (nieuw in 2.2)", "description": "Doelen moeten ten minste 24x24 CSS-pixels zijn met beperkte uitzonderingen."},
                    {"id": "3.1.3", "name": "Ongebruikelijke woorden", "description": "Zorg voor definities of uitleg voor ongebruikelijke of technische termen."},
                    {"id": "3.1.4", "name": "Afkortingen", "description": "Zorg voor de uitgeschreven versie of betekenis van afkortingen."},
                    {"id": "3.1.5", "name": "Leesniveau", "description": "Content mag geen leesvaardigheid vereisen die geavanceerder is dan het niveau van de lagere school."},
                    {"id": "3.1.6", "name": "Uitspraak", "description": "Zorg voor uitspraakbegeleiding voor woorden waarvan de betekenis afhangt van de uitspraak."},
                    {"id": "3.2.5", "name": "Verandering op verzoek", "description": "Contextwijzigingen mogen alleen plaatsvinden wanneer de gebruiker hierom vraagt."},
                    {"id": "3.3.5", "name": "Hulp", "description": "Zorg voor hulpmiddelen, zoals FAQ's, instructies of contactmogelijkheden."},
                    {"id": "3.3.6", "name": "Foutpreventie (alle)", "description": "Voor alle formulieren, sta beoordeling, correctie en bevestiging toe voor verzending."}
                ]
            }
        }
    };

    
    const imageDescriptions = {
        "1.1.1": "Zorg dat je bij alle afbeeldingen een alt-tekst toevoegt en aria-labels gebruikt voor iconen. // Gebruik het HTML-attribuut alt voor &lt;img&gt; en aria-label voor &lt;svg&gt; of &lt;i&gt; iconen.",
        "1.2.1": "Als je audio of video gebruikt, zorg dan voor een transcript of tekstalternatief. // Voeg een transcript toe in HTML, bijvoorbeeld in een &lt;details&gt; of &lt;div&gt; onder de media.",
        "1.2.2": "Zorg dat je ondertiteling toevoegt aan alle video's met audio. // Gebruik &lt;track kind='captions'&gt; binnen &lt;video&gt; voor ondertiteling.",
        "1.2.3": "Zorg dat je audiodescriptie of een alternatief biedt voor video content zonder audio. // Voeg een extra audiotrack of tekstalternatief toe in HTML.",
        "1.3.1": "Gebruik semantische HTML voor koppen, lijsten en tabellen zodat relaties duidelijk zijn voor iedereen. // Gebruik &lt;h1&gt;-&lt;h6&gt;, &lt;ul&gt;, &lt;ol&gt;, &lt;table&gt; en &lt;th&gt; correct.",
        "1.3.2": "Presenteer content in een logische leesvolgorde, zodat schermlezers de juiste volgorde aanhouden. // Plaats HTML-elementen in logische volgorde in de DOM.",
        "1.3.3": "Geef instructies die niet alleen afhankelijk zijn van kleur, vorm of locatie. Bijvoorbeeld: 'Klik op de knop met het label Verzenden'. // Gebruik tekstlabels en beschrijvende instructies in HTML.",
        "1.3.4": "Sta toe dat de gebruiker de schermoriëntatie (portret/landschap) zelf bepaalt. // Gebruik geen CSS of JavaScript die oriëntatie forceert.",
        "1.3.5": "Gebruik autocomplete-attributen voor invoervelden zodat browsers het doel herkennen (zoals naam, e-mail). // Voeg autocomplete-attributen toe aan &lt;input&gt; elementen.",
        "1.4.1": "Gebruik niet alleen kleur om betekenis over te brengen. Voeg bijvoorbeeld een icoon of tekst toe bij foutmeldingen. // Voeg extra tekst of iconen toe naast kleur in HTML/CSS.",
        "1.4.2": "Zorg dat automatisch afspelende audio langer dan 3 seconden gepauzeerd of gestopt kan worden. // Voeg een pauze/stopknop toe met JavaScript aan &lt;audio&gt; of &lt;video&gt;.",
        "2.1.1": "Zorg dat alle functionaliteit volledig bedienbaar is met het toetsenbord. // Gebruik alleen toegankelijke HTML-elementen en zorg voor tabindex en event handlers voor keyboard.",
        "2.1.2": "Zorg dat gebruikers niet vast komen te zitten in een interactief element met het toetsenbord. // Gebruik JavaScript om focus traps te voorkomen en focus te kunnen verplaatsen.",
        "2.1.4": "Zorg dat gebruikers sneltoetsen met één toets kunnen uitschakelen of herdefiniëren. // Voeg een instelling toe in JavaScript om sneltoetsen uit te schakelen of aan te passen.",
        "2.2.1": "Als je tijdslimieten gebruikt, zorg dan dat gebruikers deze kunnen verlengen of uitschakelen. // Voeg een knop toe in HTML/JavaScript om tijdslimieten te verlengen of uit te zetten.",
        "2.2.2": "Zorg dat gebruikers bewegende, knipperende of scrollende content kunnen pauzeren, stoppen of verbergen. // Voeg pauze/stop/verberg-knoppen toe met JavaScript.",
        "2.3.1": "Zorg dat geen enkele content meer dan 3 keer per seconde flits (om epileptische aanvallen te voorkomen). // Gebruik CSS-animaties en JavaScript met een lagere frequentie dan 3Hz.",
        "2.4.1": "Zorg dat je een mechanisme biedt om herhaalde blokken content over te slaan (bijv. navigatiemenu's). // Voeg een 'Skip to content'-link toe bovenaan de pagina in HTML.",
        "2.4.2": "Zorg dat elke pagina een beschrijvende, unieke titel heeft. // Zet een unieke &lt;title&gt; in de &lt;head&gt; van elke HTML-pagina.",
        "2.4.3": "Zorg dat de focusvolgorde een logische, voorspelbare sequentie volgt. // Plaats interactieve elementen in logische volgorde in de DOM en gebruik tabindex.",
        "2.4.4": "Maak linkteksten beschrijvend, bijvoorbeeld 'Bekijk onze diensten' in plaats van 'Klik hier'. // Gebruik duidelijke, beschrijvende tekst in &lt;a&gt; elementen.",
        "2.5.1": "Vermijd complexe gebaren zoals swipen of knijpen, tenzij er een eenvoudig alternatief is. // Bied knoppen of eenvoudige acties aan als alternatief in HTML/JavaScript.",
        "2.5.2": "Acties mogen pas worden uitgevoerd bij het loslaten van een knop of aanraking, niet bij het indrukken. // Gebruik mouseup/touchend events in JavaScript in plaats van mousedown/touchstart.",
        "2.5.3": "Zorg dat het zichtbare label van een knop ook in de toegankelijke naam voorkomt. // Zorg dat aria-label of &lt;button&gt; tekst overeenkomt met het zichtbare label.",
        "2.5.4": "Bied alternatieven voor functies die door beweging (zoals schudden) worden geactiveerd. // Voeg knoppen toe als alternatief voor motion events in JavaScript.",
        "3.1.1": "Stel de hoofdtaal van de pagina in met het lang-attribuut op het &lt;html&gt;-element. // Voeg lang='nl' of lang='en' toe aan het &lt;html&gt; element.",
        "3.2.1": "Laat het veranderen van context (zoals navigeren) niet automatisch gebeuren bij focus. // Gebruik geen onchange of onfocus events die direct navigeren in JavaScript.",
        "3.2.2": "Laat het veranderen van context niet automatisch gebeuren bij het invullen van een veld. // Gebruik geen automatische redirects of submit bij input in JavaScript.",
        "3.3.1": "Geef duidelijke foutmeldingen bij invoerfouten, bijvoorbeeld 'Vul een geldig e-mailadres in'. // Toon foutmeldingen in tekst onder of naast het veld in HTML.",
        "3.3.2": "Voorzie alle formuliervelden van duidelijke labels of instructies. // Gebruik &lt;label&gt; gekoppeld aan &lt;input&gt; via for/id in HTML.",
        "4.1.1": "Gebruik geldige HTML en zorg dat elementen correct genest zijn. // Valideer HTML en gebruik correcte nesting van elementen.",
        "4.1.2": "Zorg dat interactieve elementen hun naam, rol en waarde communiceren aan ondersteunende technologie. // Gebruik aria-label, aria-role en aria-value attributes waar nodig.",
        "4.1.3": "Statusberichten (zoals 'opgeslagen!') moeten door schermlezers worden aangekondigd. // Gebruik aria-live='polite' of aria-live='assertive' op statusberichten in HTML.",
        "1.2.4": "Voorzie live video van ondertiteling, bijvoorbeeld bij livestreams. // Gebruik &lt;track kind='captions'&gt; in &lt;video&gt; voor live ondertiteling of integreer een live captioning service.",
        "1.2.5": "Voeg audiodescriptie toe aan vooraf opgenomen video's met gesproken tekst. // Voeg een extra audiotrack toe met beschrijvingen via &lt;track kind='descriptions'&gt; of een aparte audioversie.",
        "1.3.6": "Identificeer het doel van invoervelden en iconen programmatisch voor personalisatie. // Gebruik autocomplete-attributen en aria-labels op &lt;input&gt; en &lt;button&gt; elementen.",
        "1.4.3": "Zorg voor voldoende contrast tussen tekst en achtergrond (minimaal 4.5:1 voor gewone tekst). // Controleer kleurcontrast met CSS (color en background-color) en test met tools zoals de WCAG Contrast Checker.",
        "1.4.4": "Tekst moet tot 200% vergroot kunnen worden zonder verlies van content of functionaliteit. // Gebruik relatieve eenheden (em, rem, %) in CSS en voorkom vaste breedtes/hoogtes.",
        "1.4.5": "Gebruik echte tekst in plaats van afbeeldingen van tekst, tenzij strikt noodzakelijk. // Gebruik HTML-tekst in plaats van &lt;img&gt; voor tekstuele content.",
        "1.4.10": "Zorg dat content zich aanpast (reflow) bij vergroten tot 400% zonder horizontaal scrollen. // Gebruik flexbox of CSS grid en vermijd vaste breedtes; gebruik media queries.",
        "1.4.11": "Zorg voor voldoende contrast tussen niet-tekstuele elementen (zoals knoppen en iconen) en de achtergrond. // Pas CSS toe op knoppen/iconen zodat ze minimaal 3:1 contrast hebben met de achtergrond.",
        "1.4.12": "Content moet bruikbaar blijven als gebruikers tekstafstand (regel- en letterafstand) aanpassen. // Gebruik CSS properties als line-height, letter-spacing, word-spacing en test met aangepaste waarden.",
        "1.4.13": "Informatie die verschijnt bij hover of focus moet makkelijk te verbergen zijn en niet verdwijnen als je erover beweegt. // Gebruik CSS :hover/:focus en JavaScript zodat content zichtbaar blijft tot gebruiker het sluit.",
        "2.4.5": "Bied meerdere manieren om een pagina te vinden, zoals een zoekfunctie, sitemap of menu. // Voeg een zoekveld (&lt;input type='search'&gt;), sitemap en navigatiemenu toe in HTML.",
        "2.4.6": "Gebruik duidelijke koppen en labels zodat gebruikers snel begrijpen waar content over gaat. // Gebruik beschrijvende &lt;h1&gt;-&lt;h6&gt; en &lt;label&gt; elementen.",
        "2.4.7": "Zorg dat het toetsenbordfocus zichtbaar is, bijvoorbeeld door een duidelijke rand. // Gebruik CSS :focus { outline: 2px solid #...; } op interactieve elementen.",
        "2.5.5": "Interactieve doelen (zoals knoppen) moeten minimaal 24x24 CSS-pixels groot zijn. // Stel in CSS min-width en min-height van 24px in voor knoppen en links.",
        "2.5.6": "Sta meerdere invoermethoden toe, zoals toetsenbord, muis en touch. // Gebruik standaard HTML-elementen en zorg dat alle functies met keyboard en pointer werken.",
        "3.1.2": "Geef aan als delen van de pagina in een andere taal zijn, bijvoorbeeld met lang-attributen. // Gebruik &lt;span lang='en'&gt;...&lt;/span&gt; voor tekst in een andere taal.",
        "3.2.3": "Zorg dat navigatie op elke pagina consistent is opgebouwd. // Gebruik dezelfde HTML-structuur en CSS voor navigatie op alle pagina's.",
        "3.2.4": "Gebruik voor gelijksoortige knoppen en functies steeds dezelfde naam en vormgeving. // Gebruik consistente &lt;button&gt; teksten en CSS-klassen voor vergelijkbare functies.",
        "3.3.3": "Geef waar mogelijk suggesties om invoerfouten te corrigeren. // Toon foutmeldingen en suggesties in HTML onder het invoerveld bij ongeldige input.",
        "3.3.4": "Laat gebruikers belangrijke gegevens controleren, corrigeren en bevestigen voordat ze definitief worden verzonden. // Voeg een bevestigingsscherm toe in HTML/JavaScript voor verzending.",
        "3.3.7": "Vraag gebruikers niet om dezelfde informatie meerdere keren in te vullen. // Sla eerder ingevulde gegevens op met JavaScript/localStorage of gebruik autocomplete.",
        "3.3.8": "Authenticatie mag niet alleen afhankelijk zijn van cognitieve tests, bied alternatieven zoals wachtwoordmanagers. // Sta wachtwoordmanagers toe en gebruik geen puzzels/captchas als enige methode.",
        "1.2.6": "Voorzie vooraf opgenomen video van gebarentaalvertaling. // Voeg een extra video-in-frame toe met gebarentolk via &lt;video&gt; of &lt;iframe&gt;.",
        "1.2.7": "Bied uitgebreide audiodescriptie als pauzes in de video niet voldoende zijn. // Voeg een alternatieve versie toe met langere audiodescriptie of een apart audiokanaal.",
        "1.2.8": "Voorzie een volledig tekstalternatief voor vooraf opgenomen gesynchroniseerde media. // Voeg een volledig transcript toe in HTML, bijvoorbeeld in een &lt;details&gt; of &lt;div&gt;.",
        "1.2.9": "Voorzie live audio-only van een transcript of gelijkwaardig alternatief. // Publiceer een live transcript of samenvatting in HTML naast de audio.",
        "1.3.7": "Bied een optie om animaties of bewegingen te verminderen voor gevoelige gebruikers. // Gebruik prefers-reduced-motion in CSS en voeg een schakelaar toe in JavaScript.",
        "1.4.6": "Zorg voor extra hoog contrast (minimaal 7:1) voor tekst en afbeeldingen van tekst. // Pas CSS kleuren aan zodat het contrast minimaal 7:1 is.",
        "1.4.7": "Achtergrondgeluid mag niet storend zijn: maak het zacht, uitzetbaar of minstens 20 dB zachter dan spraak. // Voeg een volumeregeling toe aan &lt;audio&gt; of &lt;video&gt; en stel standaard laag volume in.",
        "1.4.8": "Laat gebruikers de visuele presentatie aanpassen, zoals kleuren, lettertype en afstand. // Bied instellingen aan in JavaScript/CSS voor kleur, font en spacing.",
        "1.4.9": "Gebruik helemaal geen afbeeldingen van tekst, ook niet als uitzondering. // Gebruik altijd HTML-tekst, nooit &lt;img&gt; voor tekst.",
        "2.1.3": "Alle functionaliteit moet zonder uitzondering met het toetsenbord te bedienen zijn. // Zorg dat alle interactieve elementen bereikbaar zijn met Tab en bedienbaar met Enter/Space.",
        "2.2.3": "Er mogen geen tijdslimieten zijn voor het voltooien van taken, tenzij essentieel. // Gebruik geen setTimeout of automatische afsluiting in JavaScript.",
        "2.2.4": "Laat gebruikers onderbrekingen (zoals pop-ups) uitstellen of onderdrukken. // Voeg een 'stel uit' of 'sluit' knop toe aan meldingen/pop-ups in HTML/JavaScript.",
        "2.2.5": "Laat gebruikers na herauthenticatie verdergaan zonder gegevensverlies. // Sla formulierdata tijdelijk op in JavaScript/localStorage en herstel deze na login.",
        "2.2.6": "Waarschuw gebruikers voor time-outs door inactiviteit die tot gegevensverlies leiden. // Toon een waarschuwing met JavaScript voordat een sessie verloopt.",
        "2.3.2": "Geen enkele content mag meer dan 3 keer per seconde flitsen, ook niet op hogere niveaus. // Gebruik geen CSS-animaties of JavaScript die sneller dan 3Hz flitsen.",
        "2.3.3": "Laat gebruikers animaties die door interacties ontstaan uitschakelen. // Voeg een schakelaar toe in JavaScript om animaties uit te zetten.",
        "2.4.8": "Geef aan waar de gebruiker zich bevindt op de website, bijvoorbeeld met kruimelpaden. // Voeg een breadcrumb-navigatie toe in HTML.",
        "2.4.9": "Het doel van elke link moet duidelijk zijn uit de linktekst alleen. // Gebruik beschrijvende tekst in &lt;a&gt; elementen, geen 'klik hier'.",
        "2.4.10": "Gebruik sectiekoppen om alle content logisch te structureren. // Gebruik &lt;h2&gt;, &lt;h3&gt;, ... om content te groeperen.",
        "2.4.11": "De focusindicator moet extra goed zichtbaar zijn en voldoen aan contrast-eisen. // Gebruik CSS :focus met een dikke, contrastrijke outline.",
        "2.5.7": "Bied alternatieven voor acties die slepen vereisen, zoals knoppen om te verplaatsen. // Voeg knoppen toe naast drag-and-drop functionaliteit.",
        "2.5.8": "Interactieve doelen moeten minimaal 24x24 CSS-pixels zijn, met beperkte uitzonderingen. // Controleer met CSS dat knoppen/links minimaal 24x24px zijn.",
        "3.1.3": "Leg ongebruikelijke of technische termen uit, bijvoorbeeld met een tooltip of woordenlijst. // Gebruik &lt;abbr title='...'&gt; of een tooltip via aria-describedby.",
        "3.1.4": "Schrijf afkortingen voluit of geef de betekenis bij eerste gebruik. // Gebruik &lt;abbr title='volledige term'&gt;afkorting&lt;/abbr&gt; in HTML.",
        "3.1.5": "Schrijf teksten op een eenvoudig leesniveau, maximaal onderbouw-niveau. // Gebruik korte zinnen en eenvoudige woorden in de tekst.",
        "3.1.6": "Geef uitspraak-informatie als de betekenis van een woord afhangt van de uitspraak. // Gebruik het HTML-attribuut aria-label of een fonetische uitleg in tekst.",
        "3.2.5": "Laat contextwijzigingen alleen plaatsvinden als de gebruiker hierom vraagt. // Gebruik geen automatische redirects of submit; laat gebruiker bevestigen.",
        "3.3.5": "Bied hulp aan, zoals uitleg, veelgestelde vragen of contactmogelijkheden. // Voeg een help-link, FAQ of contactformulier toe in HTML.",
        "3.3.6": "Laat gebruikers altijd hun invoer controleren, corrigeren en bevestigen voor verzending. // Toon een samenvatting van de invoer en een bevestigingsoptie voor verzending."
    };
    
    let currentLanguage = localStorage.getItem('wcagLanguage') || 'en';
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
    
    // New function to update the progress bars
const updateProgressBars = () => {
    const levels = ['a', 'aa', 'aaa'];
    levels.forEach(level => {
        const totalItems = content[currentLanguage].items[`level${level.toUpperCase()}`].length;
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

    const createChecklist = (level, items) => {
        const listContainer = document.querySelector(`#level-${level} .checklist`);
        listContainer.innerHTML = '';
        items.forEach(item => {
            const state = savedState[item.id] || { checked: false, expanded: false };
            const sanitizedId = item.id.replace(/\./g, '');
            const imagePath = `images/${sanitizedId}.webp`;
            
            const imageAltText = imageDescriptions[item.id] || `A visual example for WCAG success criterion ${item.id}.`;
            
            const li = document.createElement('li');
            li.setAttribute('data-item-id', item.id);
            if (state.expanded) {
                li.classList.add('expanded');
            }
            li.innerHTML = `
                <div>
                    <input type="checkbox" id="sc-${item.id}" ${state.checked ? 'checked' : ''}>
                    <div>
                        <h3>${item.id} <span class="item-name">${item.name}</span></h3>
                        <p class="item-description">${item.description}</p>
                    </div>
                </div>
                <button class="info-button">i</button>
                <div class="expanded-content">
                    <img src="${imagePath}" alt="${imageAltText}">
                    <p><i>${imageAltText}</i></p>
                </div>
            `;
            
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
        createChecklist('a', content[lang].items.levelA);
        createChecklist('aa', content[lang].items.levelAA);
        createChecklist('aaa', content[lang].items.levelAAA);
        updateProgressBars();
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
});