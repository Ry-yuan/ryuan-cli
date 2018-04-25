#!/usr/bin/env node

const clone = require('git-clone')
const program = require('commander')
const shell = require('shelljs');
const log = require('tracer').colorConsole()

program
    .version('1.0.0')
    .description('前端模板工程的cli')
program
    .command('* <tel> <project>')
    .action(function(project) {
        log.info('目前ryuan-cli支持以下模板：')
        log.info('使用例子：ryuan-cli <tpl> <project>')
        if (tel && project) {
            let pwd = shell.pwd()
            log.info(`正在拉取模板代码，下载位置：${pwd}/${project}/ ...`)
            clone(`https://github.com/Ry-yuan/${tel}-workflow`, pwd + `/${project}`, null, function() {
                shell.rm('-rf', pwd + `/${project}/.git`)
                log.info('模板工程项目建立完成')
            })
        } else {
            log.error('正确命令例子：ryuan-cli tel  myproject')
        }
    })
program.parse(process.argv)
