let history_commands = [];
let previousWidth = window.innerWidth;
let previousHeight = window.innerHeight;


function load_history_commands() {
    let hash = window.location.hash;
    if (hash) {
        let commandsValue = atob(hash.substring(1));
        let list_command = commandsValue.split('commands')[1].split('|');
        term.exec('home');
        // Empty the history_commands array
        history_commands = [];
        list_command.forEach(function (command) {
            term.exec(command);
        });
    }
}

window.addEventListener('popstate', load_history_commands);
window.addEventListener('load', load_history_commands)

let ascii = null;

window.addEventListener('resize', function () {
    // Get current size
    let currentWidth = window.innerWidth;
    let currentHeight = window.innerHeight;

    let reload = false;
    // Check if the window width is less than 800px
    if (currentWidth < 800 && previousWidth >= 800) {
        reload = true;
        ascii = rainbow(render(greeting, 'Graffiti'));

    }
    if (currentWidth >= 800 && previousWidth < 800) {
        reload = true;
        ascii = rainbow(render(greeting));
    }

    if (reload) {
        let list_command = "commands" + history_commands.join('|');
        let base64_encode = btoa(list_command);
        location.href = `#${base64_encode}`;
    }

    previousWidth = currentWidth;
    previousHeight = currentHeight;
});

function banner() {
    if (ascii === null) {
        if (window.innerWidth < 800) {
            ascii = rainbow(render(greeting, 'Graffiti'));
        } else {
            ascii = rainbow(render(greeting));
        }
    }
    term.echo(() => {
        const info = 'Type <white>help</white> to see the list of available commands.';
        return `${ascii}\n\n${intro}\n${info}`;
    });
}

// figlet library 
// To initialize the library in JavaScript, we need to load the fonts:
const font = ['Def Leppard', 'Graffiti'];
figlet.defaults({ fontPath: 'https://unpkg.com/figlet/fonts/' });
figlet.preloadFonts(font, ready);

// render
function render(text, font = 'Def Leppard') {
    const cols = term.cols();
    return trim(figlet.textSync(text, {
        font: font,
        width: cols,
        whitespaceBreak: true
    }));
}

function trim(str) {
    return str.replace(/[\n\s]+$/, '');
}

const dirs = Object.keys(directories);

const root = '~';
let cwd = root;


// Joke
// we use programming jokes so it fit better
const url = 'https://v2.jokeapi.dev/joke/Programming';


$.terminal.xml_formatter.tags.green = (attrs) => {
    return `[[;#44D544;]`;
};

$.terminal.xml_formatter.tags.blue = (attrs) => {
    return `[[;#55F;;${attrs.class}]`;
};

function print_dirs() {
    term.echo(dirs.map(dir => {
        return `<blue class="directory">${dir}</blue>`;
    }).join(' '));
}

// color
function rainbow(string) {
    return lolcat.rainbow(function (char, color) {
        char = $.terminal.escape_brackets(char);
        return `[[;${hex(color)};]${char}]`;
    }, string).join('\n');
}

function hex(color) {
    return '#' + [color.red, color.green, color.blue].map(n => {
        return n.toString(16).padStart(2, '0');
    }).join('');
}


const formatter = new Intl.ListFormat('en', {
    style: 'long',
    type: 'conjunction',
});

// command
const commands = {
    help() {
        term.echo(`List of available commands: ${help}\n`);
        history_commands.push('help');
    },
    home() {
        term.exec('cd ~');
        term.exec('clear');
        banner();
        history_commands.push('home');
    },
    whoami() {
        this.echo('<red>Welcome, I am nquangit - A first-year student majoring in Information Assurance at FPT University.</red>\n');
        history_commands.push('whoami');
    }
    ,
    echo(...args) {
        if (args.length > 0) {
            let output = args.join(' ');
            output += '\n';
            this.echo(output);
            history_commands.push('echo ' + args.join(' '));
        }
        history_commands.push('echo');
    },
    cd(dir = null) {
        if (dir === null || (dir === '..' && cwd !== root) || dir === '~') {
            cwd = root;
        } else if (dir.startsWith('~/') && dirs.includes(dir.substring(2))) {
            cwd = dir;
        } else if (dirs.includes(dir)) {
            cwd = root + '/' + dir;
        } else {
            this.error('Wrong directory');
        }
        this.echo('');
        if (dir === null) {
            history_commands.push('cd');
        } else {
            history_commands.push('cd ' + dir);
        }
    },
    ls(dir = null) {
        if (dir) {
            if (dir.startsWith('~/')) {
                const path = dir.substring(2);
                const dirs = path.split('/');
                if (dirs.length > 1) {
                    this.error('Invalid directory');
                } else {
                    const dir = dirs[0];
                    this.echo(directories[dir].join('\n'));
                }
            } else if (cwd === root) {
                if (dir in directories) {
                    this.echo(directories[dir].join('\n'));
                } else {
                    this.error('Invalid directory');
                }
            } else if (dir === '..') {
                print_dirs();
            } else {
                this.error('Invalid directory');
            }
        } else if (cwd === root) {
            print_dirs();
        } else {
            const dir = cwd.substring(2);
            this.echo(directories[dir].join('\n'));
        }
        this.echo('');
        if (dir === null) {
            history_commands.push('ls');
        }
        else {
            history_commands.push('ls ' + dir);
        }
    },
    async joke() {
        const res = await fetch(url);
        const data = await res.json();
        (async () => {
            if (data.type == 'twopart') {
                // we set clear the prompt to don't have any
                // flashing between animations
                const prompt = this.get_prompt();
                this.set_prompt('');
                // as said before in every function, passed directly
                // to terminal, you can use `this` object
                // to reference terminal instance
                await this.echo(`Q: ${data.setup}`, {
                    delay: 30,
                    typing: true
                });
                await this.echo(`A: ${data.delivery}`, {
                    delay: 30,
                    typing: true
                });
                // we restore the prompt
                this.set_prompt(prompt);
            } else if (data.type === 'single') {
                await this.echo(data.joke, {
                    delay: 50,
                    typing: true
                });
            }
        })();
        this.echo('');
        history_commands.push('joke');
    },
    reset() {
        term.clear();
        this.exec('home');
        history_commands = [];
        window.location.hash = '';
    },
    credits() {
        history_commands.push('credits');
        return [
            '',
            '<white>Used libraries:</white>',
            '* <a href="https://terminal.jcubic.pl">jQuery Terminal</a>',
            '* <a href="https://github.com/patorjk/figlet.js/">Figlet.js</a>',
            '* <a href="https://github.com/jcubic/isomorphic-lolcat">Isomorphic Lolcat</a>',
            '* <a href="https://jokeapi.dev/">Joke API</a>',
            ''
        ].join('\n');
    }
};

const command_list = ['clear'].concat(Object.keys(commands));
const formatted_list = command_list.map(cmd => {
    return `<white class="command">${cmd}</white>`;
});
const help = formatter.format(formatted_list);

const re = new RegExp(`^\s*(${command_list.join('|')}) (.*)`);

$.terminal.new_formatter(function (string) {
    return string.replace(re, function (_, command, args) {
        return `<white>${command}</white> <aqua>${args}</aqua>`;
    });
});


const term = $('#terminal').terminal(commands, {
    greetings: false,
    checkArity: false,
    exit: false,
    completion(string) {
        // in every function we can use `this` to reference term object
        const cmd = this.get_command();
        // we process the command to extract the command name
        // at the rest of the command (the arguments as one string)
        const { name, rest } = $.terminal.parse_command(cmd);
        if (['cd', 'ls'].includes(name)) {
            if (rest.startsWith('~/')) {
                return dirs.map(dir => `~/${dir}`);
            }
            if (cwd === root) {
                return dirs;
            }
        }
        return Object.keys(commands);
    },
    keymap: {
        'CTRL+L': function (e, original) {
            term.exec('clear');
        }
    },
    prompt
});

term.pause();

term.on('click', '.command', function () {
    const command = $(this).text();
    term.exec(command);
});

term.on('click', '.directory', function () {
    const dir = $(this).text();
    term.exec(`cd ~/${dir}`);
});

function ready() {
    banner();
    term.resume();
}

