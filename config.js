const greeting = 'nquangit';
const intro = 'Welcome, I am a first-year student majoring in Information Assurance at FPT University.\nI am passionate about security and eager to learn every nook and cranny of security.\nForte: Web pentester\n';

const user = 'guest';
const server = 'nquangit.me';
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
        '* <a target="_blank" href="https://en.wikipedia.org/wiki/FPT_University">FPT University</a> Campus Ho Chi Minh City, Vietnam <yellow>"Information Assurance"</yellow> (2022-2026)',
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
        // CCNA: Introduction to Networks
        '* <a target="_blank" href="https://www.credly.com/badges/52d41e25-391e-4555-a040-1fb377f198ad">CCNA: Introduction to Networks</a> by Cisco Networking Academy (2023)',
        // Cyberops Associate
        '* <a target="_blank" href="https://www.credly.com/badges/2d0df3e7-77bb-4e85-96e6-b922b3a87a98">Cyberops Associate</a> by Cisco Networking Academy (2023)',
        // Certified AppSec Practitioner (CAP)
        '* <a target="_blank" href="https://candidate.speedexam.net/certificate.aspx?SSTATE=am4131EniU8ntjp4bO5mXZpG5WWgEDGgO89XyyrRnRuuXMQZMgiGlEJ3eWAbcrVZ3O+S39/ZwAhR0YNQUfjSzlzfRzemHT9SMzWHHG6PFBM=">Certified AppSec Practitioner (CAP)</a> by The SecOps Group (2023)',
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





