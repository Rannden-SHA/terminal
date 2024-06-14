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
        '* <a target="_blank" href="https://elorienta.com/macabich/">IES Isidor Macabich</a> Telecommunications, Ibiza <yellow>"Medium Degree"</yellow> (2014)',
    ],
    "passwords": [
        '',
        '<white>/etc/passwd</white>',
        '',
       'root:x:0:0:root:/root:/bin/bash',
        'bin:x:1:1:bin:/bin:/sbin/nologin',
        'daemon:x:2:2:daemon:/sbin:/sbin/nologin',
        'adm:x:3:4:adm:/var/adm:/sbin/nologin',
        'lp:x:4:7:lp:/var/spool/lpd:/sbin/nologin',
        'sync:x:5:0:sync:/sbin:/bin/sync',
        'shutdown:x:6:0:shutdown:/sbin:/sbin/shutdown',
        'halt:x:7:0:halt:/sbin:/sbin/halt',
        '<white>GOD</white>:x:8:12:<white>GOD</white>:/var/mail:/sbin/nologin',
        '<white>IS</white>:x:9:13:<white>IS</white>:/usr/lib/news:/sbin/nologin',
        '<white>WATCHING</white>:x:10:14:<white>WATCHING</white>:/var/spool/uucppublic:/sbin/nologin',
        '<white>YOU</white>:x:11:0:<white>YOU</white>:/root:/sbin/nologin',
        'man:x:13:15:man:/usr/man:/sbin/nologin',
        'postmaster:x:14:12:postmaster:/var/mail:/sbin/nologin',
        'cron:x:16:16:cron:/var/spool/cron:/sbin/nologin',
        'ftp:x:21:21::/var/lib/ftp:/sbin/nologin',
        'sshd:x:22:22:sshd:/dev/null:/sbin/nologin',
        'at:x:25:25:at:/var/spool/cron/atjobs:/sbin/nologin',
        'squid:x:31:31:Squid:/var/cache/squid:/sbin/nologin',
        'xfs:x:33:33:X Font Server:/etc/X11/fs:/sbin/nologin',
        'games:x:35:35:games:/usr/games:/sbin/nologin',
        'cyrus:x:85:12::/usr/cyrus:/sbin/nologin',
        'vpopmail:x:89:89::/var/vpopmail:/sbin/nologin',
        'ntp:x:123:123:NTP:/var/empty:/sbin/nologin',
        'smmsp:x:209:209:smmsp:/var/spool/mqueue:/sbin/nologin',
        'guest:x:405:100:guest:/dev/null:/sbin/nologin',
        'nobody:x:65534:65534:nobody:/:/sbin/nologin',
        'nginx:x:100:101:nginx:/var/lib/nginx:/sbin/nologin',
        'vnstat:x:101:102:vnstat:/var/lib/vnstat:/bin/false',
        'redis:x:102:103:redis:/var/lib/redis:/bin/false',
        
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
    "experience": [
        '',
        '<white>Experiences</white>',
        '* <yellow>IT Support Specialist</yellow> at <a target="_blank" href="https://www.all-solutions.es/">All Solutions - IMI Group</a> (March 2024 - now)',
        '* * <cyan>Network Administration</cyan>',
        '* * <cyan>Cybersecurity Audits</cyan>',
        '* * <cyan>Script Development</cyan>',
        '* * <cyan>Incident Management</cyan>',
        '* * <cyan>Technical support</cyan>',
        '* * <cyan>Security Implementation</cyan>',
        '* * <cyan>Normative compliance</cyan>',
        '',
        '* <yellow>Advanced Technician</yellow> at <a target="_blank" href="https://www.portsdebalears.com/es">Autoritat Portuaria de Balears (APB)</a> (January 2020 - January 2024)',
        '* * <cyan>CCTV - BOSCH</cyan>',
        '* * <cyan>Access Controls - Dorlet</cyan>',
        '* * <cyan>PLC Management - Desigo</cyan>',
        '* * <cyan>Incident Management</cyan>',
        '* * <cyan>Cybersecurity Audits</cyan>',
        '* * <cyan>Electronics</cyan>',
        '',
        '* <yellow>Maintenance Technician</yellow> at <a target="_blank" href="https://empresite.eleconomista.es/PROMOCIONES-SOL-IBIZA.html">Oper Ibiza</a> (September 2016 - October 2019)',
        '* * <cyan>Reparation</cyan>',
        '* * <cyan>Start Up</cyan>',
        '* * <cyan>Programming</cyan>',
        '* * <cyan>Incident Management</cyan>',
        '* * <cyan>Technical support</cyan>',
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
        // Cyber Security for video systems certified, Expert
        '* <a target="_blank" href="https://drive.google.com/file/d/1IUWD-I_nqJVdbV0Efy0uhG5S8_Pyz8hp/view?usp=sharing">Cyber Security for video systems certified, Expert</a> by BOSCH (2022)',
    ],
    skills: [
        '',
        '<white>Languages</white>',
        [
            'Bash',
            'Python',
            'SQL',
            'Powershell',
            'Arduino IDE'
        ].map(lang => `* <yellow>${lang}</yellow>`),
        '',
        '<white>Tools</white>',
        [
            'SentinelOne - EDR',
            'NinjaOne - RMM',
            'Microsoft 365 Administrator - Full Suite',
            'Unify - Controller',
        ].map(lib => `* <green>${lib}</green>`),
        '',
        '<white>Operating Systems</white>',
        [
            'GNU/Linux',
            'Windows',
        ].map(lib => `* <blue>${lib}</blue>`),
        ''
    ].flat()
};





