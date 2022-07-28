## 创建版本库
` git init`

## 添加缓存区
`git add .`

## 提交版本库
` git commit -m '说明'`

## 查看状态
`git status`

## 查看不同
`git diff`

## 查看提交日志
`git log`
`git log --pretty=oneline`

## 版本回退
`git reset --hard '版本号' `

## 查看工作区和版本库里面最新版本的区别
`git diff hard -- 'fileName'`

## 丢弃工作区的修改
` git checkout -- 'fileName'`


## 丢弃缓存区修改
`git reset hard 'fileName'`

## 删除文件
`git rm 'fileName'`


## 远程仓库克隆
`git clone 'url'`

## 添加远程仓库
<!-- origin 是默认的名字，可以使用其他名字 -->
`git remote add origin 'url'`

## 查看远程仓库
`git remote --v`

## 删除远程库
`git remote rm 'originName'`

## 创建分支
`git branch 'branchName'`

## 查看分支
`git branch`

## 查看本地和远程分支
`git branch -a`

## 查看分支最后一次提交
`git branch -v`

## 切换分支
`git checkout 'branchName'`

## 删除分支
`git branch -d 'branchName'`

## 创建分支并切换
`git checkout -b dev`

## 分支合并
`git merge 'branchName'`

## 本地分支和远程分支建立联系
`git branch --set-upstream-to=origin/远程分支名 本地分支名`
<!-- 提交的时候建立 -->
`git push -u origin 本地分支名字`
<!-- 创建分支时候建立 -->
`git checkout -b 本地分支名字 origin/远程分支名`

## 本地分支和远程分支push代码
<!-- 远程已经有remote_branch,但是没有关联到local_branch,本地已经切换到local_branch -->
`git push -u origin/ç`
<!-- 远程没有remote_branch ，本地已经切换到local_branch-->
`git push origin local_branch：local_branch `
<!-- 本地切换，远程存在且已经关联 -->
`git push`

## 本地分支从远程分支pull代码
<!-- 远程分支拉取到本地分支，但不进行分支切换 -->
`git pull origin 远程分支名:本地分支名`
<!-- 将制定远程分支代码拉取到当前本地分支 -->
`git pull origin 远程分支名`
<!--远程分支拉取到本地分支（本地和远程建立联系）  -->
`git pull`

## 查看本地分支和远程分支的联系
`git branch -vv`

## 带模板提交

## 带模板提交
