# ZxyUI Changesets 使用指南

## 简介

ZxyUI 项目使用[Changesets](https://github.com/changesets/changesets)来管理版本和发布流程。Changesets帮助我们自动化版本管理、生成变更日志和协调包之间的依赖关系。

## 基本概念

- **Changeset**：描述代码变更的元数据文件，存储在`.changeset`目录中
- **版本类型**：遵循语义化版本（Semantic Versioning）
  - `major`: 不兼容的API变更（破坏性更新）
  - `minor`: 向后兼容的功能新增
  - `patch`: 向后兼容的问题修复

## 开发流程

### 1. 实现功能或修复

在你的分支上进行开发工作。

### 2. 创建变更集

完成更改后，运行以下命令创建一个变更集：

```bash
pnpm changeset
```

系统会询问：

1. 要发布哪些包
2. 版本更新类型（major/minor/patch）
3. 变更说明（会显示在CHANGELOG中）

### 3. 提交代码和变更集

```bash
git add .
git commit -m "feat: 添加新功能"
git push
```

### 4. 开启Pull Request

在GitHub上创建Pull Request，将你的分支合并到main分支。

### 5. 自动处理发布

当PR合并到main分支后：

- GitHub Actions会自动创建一个"Version Packages"的PR
- 该PR包含版本更新和CHANGELOG更新
- 合并此PR后，将自动发布包到npm

## 常用命令

### 创建变更集

```bash
pnpm changeset
```

### 手动更新版本

```bash
pnpm version
```

这会根据`.changeset`目录中的变更集更新包版本和CHANGELOG。

### 手动发布

```bash
pnpm release
```

这会构建所有包并发布更新的包到npm。

## 注意事项

1. 每次变更都应该创建变更集，即使是小改动
2. 在PR中包含变更集文件
3. 不要手动修改package.json中的版本号
4. 合理选择版本增加类型：
   - 不兼容的API变更：`major`
   - 新增功能：`minor`
   - 修复问题：`patch`

## 常见问题

### Q: 如何处理多个包的关联变更？

使用`pnpm changeset`时，可以选择多个受影响的包，Changesets会自动处理它们之间的依赖关系。

### Q: 变更集文件如何命名？

Changesets自动生成唯一的变更集文件名，无需手动命名。

### Q: 如何跳过某些包的发布？

在`.changeset/config.json`中的`ignore`数组中添加包名。
