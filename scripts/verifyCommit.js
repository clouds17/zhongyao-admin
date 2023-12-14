const msg = require('fs')
    .readFileSync('.git/COMMIT_EDIMSG', 'utf-8')
    .trim()


  // feat: 新功能
  // fix: 修改 bug
  // docs: 仅仅修改了文档，比如README, CHANGELOG, CONTRIBUTE等等;
  // perf: 优化相关，比如提升性能、体验
  // refactor: 代码重构，没有加新功能或者修复bug
  // test: 测试用例，包括单元测试、集成测试等
  // style: 仅仅修改了空格、格式缩进、逗号等等，不改变代码逻辑;
  // workflow: 工作流
  // build: 项目打包构建相关的配置修改
  // ci: 持续集成相关
  // revert: 恢复上一次提交（回滚）
  // wip: work in progress 工作中 还没完成
  // chore: 其他修改（不在上述类型中的修改）
  // release: 发版
  // deps: 依赖相关的修改

  const commitRE = /^(revert: )?(feat|fix|docs|dx|style|refactor|perf|test|workflow|build|ci|chore|types|wip|release)(\(.+\))?: .{1,50}/
  const mergeRe = /^(Merge pull request|Merge branch)/
  console.log('msg', msg)
  if (!commitRE.test(msg)) {
    if(!mergeRe.test(msg)){
      console.log('git commit信息校验不通过')
  
      console.error(`git commit的信息格式不对, 需要使用 title(scope): desc的格式
        比如 fix: xxbug
        feat(test): add new 
        具体校验逻辑看 scripts/verifyCommit.js
      `)
      // eslint-disable-next-line no-undef
      process.exit(1)
    }
  
  }else{
    console.log('git commit信息校验通过')
  }
  