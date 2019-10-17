# 山东司法厅

## 下载依赖
```
npm install
```

### 开发环境
```
npm run dev
```

### 生产打包
```
npm run build
```
## 项目布局
```
·
    |---pubilc  index.html入口 ico图标 里面也可以放static文件
    |---server  node中间层
    |---src
          |---api   api 以及一些全局配置
          |---asset 图片等静态文件
          |---components  公共组件
                       |---anchor，anchorLink  锚点
                       |---charts  echart配置
                       |---count-to  数字动画
                       |---lightingTit  亮化标题
                       |---navChart  切换
                       |---pageHeader  页面头部主组件
                       |---publicHeader  页面头部 基于pageHeader
                       |---timelineCollapse  时间线轴
                       |---titleName  标题
                       |---titleNameOth  带背景的标题
          |---iconFont  图标库 用的阿里的
          |---lib
                |---auth  登录权限相关
                |---axios
                |---tools
          |---router
          |---store
          |---view
                 |---login  登录页
                 |---error  错误页
                 |---mainScreen  主大屏页面
                 |---workBench  选择模块大平台页面
                 |---adminLegislation  行政立法
                 |---adminLawEnforcement  行政执法
                                    |---LawEnforcementSupervision 行政执法监督
                                                    |---LawEnforSupPage 行政执法监督主页面
                                    |---administrativeArbitration 仲裁
                                                    |---admtraArbitPage 仲裁主页面
                                    |---reconsiderationLitigation 执法&复议
                                                    |---recLitPage 执法&复议主页面
                                    |---mandatoryPunishment 处罚&强制
                                                    |---mandatoryPunishmentPage 处罚&强制主页面
                 |---criminalExecution  刑事执行
                                    |---provincePrison 监狱
                                                    |---criminalPrison 监狱主页面
                                                    |---criminalPrisonDetails 监狱详情
                                                    |---criminalInfo 罪犯信息
                                                    |---criminalFiles 罪犯档案
                 |---adminLegislation  行政立法
                 |---publicLegalServices  公共法律服务
                                    |---peopleSupervisors 人员监督员
                                                    |---peopleSupervisorsPage 人员监督员主页面
                                    |---legalAid 法律援助
                                                    |---legalAidPage 法律援助主页面
                                    |---peopleMediation 人民调解
                                                    |---peopleMediationPage 人民调解主页面
                                    |---judicialExpertise 司法鉴定
                                                    |---judicialExpertisePage 司法鉴定主页面
                                    |---basLevLegServices 基层法律服务
                                                    |---basLevLegServicesPage 基层法律服务主页面
    |---.browserslistrc  浏览器兼容配置
    |---.gitignore  忽略
    |---postcss.config  css兼容配置
    |---vue.config  webpack配置
·
```
