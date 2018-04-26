#!/usr/bin/env node

const clone = require('git-clone')
const program = require('commander')
const shell = require('shelljs');
const log = require('tracer').colorConsole()

program
    .version('1.0.2','-v, --version')
    .description('This is a front - end template that can quickly generate front-end projects.')

program
    .command('ryuan-cli <tpl> <project>','tpl:gulp or wevpack')
    .action(function(tpl , project) {
        log.info('example：ryuan-cli <tpl> <project-name>')
        if (tpl && project) {
            // console.log(tpl);
            let pwd = shell.pwd()
            log.info(`The template code is being pulled.Download location:${pwd}/${project}/ ...`)
            clone(`https://github.com/Ry-yuan/${tpl}-workflow`, pwd + `/${project}`, null, function() {
                shell.rm('-rf', pwd + `/${project}/.git`)
                log.info('The formwork project is completed.Start your work!')
            })
        } else {
            log.info('The correct command example：ryuan-cli gulp projectName')
        }
    })
program.parse(process.argv)