const greeting = 'ADRIAN';
const intro = 'Welcome, I am a Cybersecurity professional with extensive experience in penetration testing, \nrisk assessment, and network security. \n\nI am Passionate about safeguarding digital landscapes and staying ahead of emerging threats.\n\nCommitted to continuous learning and applying cutting-edge security measures to ensure data \nintegrity and confidentiality\n';

const user = 'guest';
const server = 'Adrian.Gisbert';
function prompt() {
    return `<green>┌──(</green> <red>${user}⚔️${server}</red>  <green>)-[</green><white>${cwd}</white><green>\\]</green>    \n<green>└─</green><red>#</red> `;
}

const keymap_setting = {
    'CTRL+L': function (e, original) {
        term.exec('clear');
    }
}

const directories = {
    'educations': [
        '',
        '<white>Educations</white>',
        '* <a target="_blank" href="http://iespolitecnic.com/">IES Politecnic</a> Industrial Automation and Robotics, Palma de Mallorca <yellow>"Higher Degree"</yellow> (2016)',
        '* <a target="_blank" href="https://elorienta.com/macabich/">IES Isidor Macabich</a> Telecommunications Installation, Ibiza <yellow>"Medium Degree"</yellow> (2014)',
    ],
    "experiences": [
        '',
        '<white>Experiences</white>',
        '* <yellow>Vice president</yellow> at <a target="_blank" href="https://www.facebook.com/fptinformationassurance">FPT Information Assurance Club</a> (2023 - now)',
        '* * <cyan>Co-Event Organizer of FIA CTF 2023.</cyan>',
        '* * <cyan>Hosting web security workshops for members.</cyan>',
    ],
    "projects": [
        '',
        '<white>Projects</white>',
        [
            [
                'eng4rum development',
                'https://github.com/nquangit/eng4rum',
                'A forum website for English learners built with Flask, PostgreSQL, and Bootstrap',
                '2022'
            ],
            [
                'FAP_MiTM',
                'https://github.com/nquangit/FAP_MiTM',
                'Detects HTTPS lack of use and MiTM attack threat on myFAP mobile app',
                '2023'
            ]
        ].map(([name, url, description, year = '']) => {
            return `* <a target="_blank" href="${url}">${name}</a> &mdash; <white>${description}</white> <yellow>(${year})</yellow>`;
        })
    ].flat(),
    "achievements": [
        '',
        '<white>Achievements</white>',
        '* <yellow>Top 8 - 3rd prize</yellow> (Jeopardy) in <cyan>CTF</cyan> competition at <a target="_blank" href="https://ascis.vnisa.org.vn/en/">ASCIS (ASEAN Student Contest on Information Security)</a> (2023)',
        '* <yellow>Top 12 Vietnam</yellow> in <cyan>CTF</cyan> competition at <a target="_blank" href="https://ctftime.org/team/211463">CTFtime</a> (2023)',
        '* <yellow>Top 13 place</yellow> in <cyan>CTF</cyan> competition at <a target="_blank" href="#">NAB Security Jam</a> (2023)',
    ],
    "certificates": [
        '',
        '<white>Certificates</white>',
        // eCPPT
        '* <a target="_blank" href="https://certs.ine.com/e484977e-ba59-43cc-95b2-d48ed065e1db">eCPPT: Certified Professional Penetration Tester</a> by INE Security (2024)',
        // eJPT
        '* <a target="_blank" href="https://certs.ine.com/37a3357f-9483-4706-b791-c4806e15448d#gs.5xq6ls">eJPT: Junior Penetration Tester</a> by INE Security (2024)',
        // NDG Linux Essent Certificate
        '* <a target="_blank" href="https://drive.google.com/file/d/1kb0FcNuQQ70-LicVbfqb6hfIYtDuKVZi/view?usp=sharing">NDG Linux Essent Certificate</a> by CISCO (2022)',
        // Internet of Things (IoT) Certificate
        '* <a target="_blank" href="https://drive.google.com/file/d/1VcEev_GxpbQXxAbTD2fuGS4QFeCdCL2-/view?usp=sharing">Internet of Things (IoT) Certificate</a> by CISCO (2022)',
        // Internet of Things (IoT) Certificate
        '* <a target="_blank" href="https://drive.google.com/file/d/1IUWD-I_nqJVdbV0Efy0uhG5S8_Pyz8hp/view?usp=sharing">Cyber Security for video systems certified, Expert</a> by BOSCH (2022)',
    ],
    skills: [
        '',
        '<white>languages</white>',
        [
            'JavaScript',
            'TypeScript',
            'Python',
            'SQL',
            'PHP',
            'Bash'
        ].map(lang => `* <yellow>${lang}</yellow>`),
        '',
        '<white>libraries</white>',
        [
            'React.js',
            'Redux',
            'Jest',
        ].map(lib => `* <green>${lib}</green>`),
        '',
        '<white>tools</white>',
        [
            'Docker',
            'git',
            'GNU/Linux'
        ].map(lib => `* <blue>${lib}</blue>`),
        ''
    ].flat()
};





