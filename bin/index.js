#!/usr/bin/env node

const clone = require('git-clone')
const program = require('commander')
const shell = require('shelljs');
const log = require('tracer').colorConsole()

program
    .version('1.0.0')
    .description('ryuan前端模板工程的cli')
program
    .command('* <project>')
    .action(function(project) {
        // log.info('目前ryuan-cli支持以下模板：')
        log.info('使用例子：ryuan-cli <project>')
        if (project) {
            let pwd = shell.pwd()
            log.info(`正在拉取模板代码，下载位置：${pwd}/${project}/ ...`)
            clone(`https://github.com/Ry-yuan/activity-project.git`, pwd + `/${project}`, null, function() {
                shell.rm('-rf', pwd + `/${project}/.git`)
                log.info('模板工程项目建立完成')
            })
        } else {
            log.error('正确命令例子：ryuan-cli myproject')
        }
    })
program.parse(process.argv)