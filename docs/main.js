(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Web Portfolio Project\web-portfolio\src\main.ts */"zUnb");


/***/ }),

/***/ "1TqD":
/*!************************************!*\
  !*** ./src/app/chatbot.service.ts ***!
  \************************************/
/*! exports provided: ChatbotService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatbotService", function() { return ChatbotService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "vDqi");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);



class ChatbotService {
    constructor() { }
    sendMessage(message) {
        return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
            prompt: message,
            max_tokens: 60
        }, {
            headers: {
                'Authorization': `Bearer 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`,
                'Content-Type': 'application/json'
            }
        });
    }
}
ChatbotService.ɵfac = function ChatbotService_Factory(t) { return new (t || ChatbotService)(); };
ChatbotService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ChatbotService, factory: ChatbotService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatbotService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navbar/navbar.component */ "kWWo");
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../landing-page/landing-page.component */ "mSt+");
/* harmony import */ var _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../about-page/about-page.component */ "HioS");
/* harmony import */ var _experience_page_experience_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../experience-page/experience-page.component */ "9wIh");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../skills/skills.component */ "fGbd");
/* harmony import */ var _projects_page_projects_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../projects-page/projects-page.component */ "nDjA");
/* harmony import */ var _github_graph_github_graph_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../github-graph/github-graph.component */ "c8y/");
/* harmony import */ var _blogs_page_blogs_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../blogs-page/blogs-page.component */ "jJNC");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../footer/footer.component */ "fp1T");
/* harmony import */ var _chatbot_chatbot_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../chatbot/chatbot.component */ "npXH");












class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 17, vars: 0, consts: [["id", "landing-page"], ["id", "about-page"], ["id", "experience-page"], ["id", "skills-page"], ["id", "projects-page"], ["id", "blogs-page"], ["id", "footer"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-landing-page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-about-page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-experience-page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-projects-page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-github-graph");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "section", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-blogs-page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "section", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-chatbot");
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_2__["LandingPageComponent"], _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_3__["AboutPageComponent"], _experience_page_experience_page_component__WEBPACK_IMPORTED_MODULE_4__["ExperiencePageComponent"], _skills_skills_component__WEBPACK_IMPORTED_MODULE_5__["SkillsComponent"], _projects_page_projects_page_component__WEBPACK_IMPORTED_MODULE_6__["ProjectsPageComponent"], _github_graph_github_graph_component__WEBPACK_IMPORTED_MODULE_7__["GithubGraphComponent"], _blogs_page_blogs_page_component__WEBPACK_IMPORTED_MODULE_8__["BlogsPageComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"], _chatbot_chatbot_component__WEBPACK_IMPORTED_MODULE_10__["ChatbotComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "9wIh":
/*!**************************************************************!*\
  !*** ./src/app/experience-page/experience-page.component.ts ***!
  \**************************************************************/
/*! exports provided: ExperiencePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperiencePageComponent", function() { return ExperiencePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ExperiencePageComponent {
    constructor() { }
    ngOnInit() {
    }
}
ExperiencePageComponent.ɵfac = function ExperiencePageComponent_Factory(t) { return new (t || ExperiencePageComponent)(); };
ExperiencePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExperiencePageComponent, selectors: [["app-experience-page"]], decls: 62, vars: 0, consts: [["rel", "stylesheet", "href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"]("https://unpkg.com/github-calendar@latest/dist/github-calendar-responsive.css")], [1, "experience-page"], [1, "experience-content"], [1, "experience-image"], [1, "job"], [1, "job-info"], [1, "year"], ["href", "https://www.talinolabs.com/", 1, "job-link"], ["src", "./assets/talino.png", "alt", "talino", 1, "job-icon"], [1, "job-details"], [1, "role"], [1, "company"], [1, "description"], ["href", "https://medprojects.com/", 1, "job-link"], ["src", "./assets/medprojects.png", "alt", "medprojects", 1, "job-icon"], ["href", "https://www.sulzer.com/en/", 1, "job-link"], ["src", "./assets/sulzer.png", "alt", "medprojects", 1, "job-icon"], ["href", "https://www.globiq.nl/over-ons", 1, "job-link"], ["src", "./assets/globiq.png", "alt", "globiq", 1, "job-icon"]], template: function ExperiencePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Experience & Responsibilities");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "2023");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h1", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "FULL STACK ENGINEER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h2", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "TALINO VENTURE LABS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Works on Talino\u2019s product/projects from the initial planning stage until its final launch. Stay updated and knowledgeable about current industry trends and emerging technologies to meet user needs. Communicates and consults with team members and stakeholders to deliver high-quality products.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "2023");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h1", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "FULL STACK DEVELOPER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h2", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "MEDPROJECTS INC.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Responsible for designing, developing, and maintaining web applications for the healthcare industry. Utilize expertise in Angular, PHP, Laravel, and SQL to create scalable and high-performance solutions. Collaborate with a skilled team of developers, designers, and project managers to improve patient care and meet client needs.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h1", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "ETL CONSULTANT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h2", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "SULZER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Spearheaded an entire project from start to finish, taking charge of every aspect from gathering requirements to deploying the final product. Notably, I achieved completion ahead of schedule, demonstrating my efficient project management skills. One of my key responsibilities was developing and enhancing data solutions to ensure seamless data delivery. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h1", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "SOFTWARE DEVELOPER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h2", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "GLOBIQ BV PHILS.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Software Developer at GlobiQ BV Philippines Inc. Experienced in handling front-end and back-end tasks, data integration projects, and designing prototypes. Proficient in Oracle Application Express, Talend, SQL, Java, JavaScript, and Angular. Strong understanding of business logic and enterprise systems. Primary responsibilities include UI/UX design, data integration, and maintaining databases for website functionality.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap');\r\n\r\n.experience-page[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n  height: 115vh;\r\n  background-color: #f6f6f6;\r\n  padding: 5% 5% 0% 5%;\r\n}\r\n\r\n.experience-content[_ngcontent-%COMP%] {\r\n  width: 45%;\r\n  min-width: 300px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 5% 5%;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.experience-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  color: #000;\r\n  font-family: 'Open Sans', sans-serif;\r\n  font-weight: 600;\r\n  font-size: 3em;\r\n  margin-bottom: 1em;\r\n}\r\n\r\n.experience-image[_ngcontent-%COMP%] {\r\n  width: 55%;\r\n  min-width: 300px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  box-sizing: border-box;\r\n  margin-top: 5%;\r\n}\r\n\r\n.job[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n  margin-bottom: 5%;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.job-info[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.job-info[_ngcontent-%COMP%]   .year[_ngcontent-%COMP%] {\r\n    margin-right: 3.4em;\r\n    font-size: 1.2em;\r\n    font-weight: bold;\r\n    margin-bottom: 40px;\r\n}\r\n\r\n.job-info[_ngcontent-%COMP%]   .job-icon[_ngcontent-%COMP%] {\r\n  max-width: 36px;\r\n  height: auto;\r\n  margin-right: 0px;\r\n  margin-bottom: 25px;\r\n}\r\n\r\n.job-info[_ngcontent-%COMP%]   .job-details[_ngcontent-%COMP%]   h1.role[_ngcontent-%COMP%] {\r\n  font-size: 1.2em;\r\n  font-weight: 600;\r\n}\r\n\r\n.job-info[_ngcontent-%COMP%]   .job-details[_ngcontent-%COMP%]   h2.company[_ngcontent-%COMP%] {\r\n  font-size: 1.1em;\r\n  font-weight: 300;\r\n}\r\n\r\n.job[_ngcontent-%COMP%]   p.description[_ngcontent-%COMP%] {\r\n  font-size: 1em;\r\n  font-weight: 300;\r\n  text-align: justify;\r\n  line-height: 1.6;\r\n  padding: 0 10%;\r\n  margin-left: 60px;\r\n}\r\n\r\n.job-details[_ngcontent-%COMP%]{\r\n    margin-left: 10px;\r\n}\r\n\r\n.job-info[_ngcontent-%COMP%]   .job-link[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    color: inherit;\r\n  }\r\n\r\n.job-info[_ngcontent-%COMP%]   .job-link[_ngcontent-%COMP%]:hover {\r\n    text-decoration: none;\r\n    color: inherit;\r\n  }\r\n\r\n.job-info[_ngcontent-%COMP%]   .job-link[_ngcontent-%COMP%]:focus {\r\n    text-decoration: none;\r\n    color: inherit;\r\n    outline: none;\r\n  }\r\n\r\n.job-icon[_ngcontent-%COMP%] {\r\n    transition: transform 0.3s ease;\r\n  }\r\n\r\n.job-icon[_ngcontent-%COMP%]:hover {\r\n    transform: scale(1.1);\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGVyaWVuY2UtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLCtGQUErRjs7QUFFL0Y7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixjQUFjO0VBQ2Qsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLG9DQUFvQztFQUNwQyxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixjQUFjO0VBQ2hCOztBQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLGNBQWM7RUFDaEI7O0FBRUE7SUFDRSxxQkFBcUI7SUFDckIsY0FBYztJQUNkLGFBQWE7RUFDZjs7QUFFQTtJQUNFLCtCQUErQjtFQUNqQzs7QUFFQTtJQUNFLHFCQUFxQjtFQUN2QiIsImZpbGUiOiJleHBlcmllbmNlLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2Fuczp3Z2h0QDMwMDs0MDA7NjAwJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuLmV4cGVyaWVuY2UtcGFnZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBoZWlnaHQ6IDExNXZoO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XHJcbiAgcGFkZGluZzogNSUgNSUgMCUgNSU7XHJcbn1cclxuXHJcbi5leHBlcmllbmNlLWNvbnRlbnQge1xyXG4gIHdpZHRoOiA0NSU7XHJcbiAgbWluLXdpZHRoOiAzMDBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgcGFkZGluZzogNSUgNSU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLmV4cGVyaWVuY2UtY29udGVudCBoMSB7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAzZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG59XHJcblxyXG4uZXhwZXJpZW5jZS1pbWFnZSB7XHJcbiAgd2lkdGg6IDU1JTtcclxuICBtaW4td2lkdGg6IDMwMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIG1hcmdpbi10b3A6IDUlO1xyXG59XHJcblxyXG4uam9iIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLmpvYi1pbmZvIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5qb2ItaW5mbyAueWVhciB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMuNGVtO1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxufVxyXG5cclxuLmpvYi1pbmZvIC5qb2ItaWNvbiB7XHJcbiAgbWF4LXdpZHRoOiAzNnB4O1xyXG4gIGhlaWdodDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG59XHJcblxyXG4uam9iLWluZm8gLmpvYi1kZXRhaWxzIGgxLnJvbGUge1xyXG4gIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLmpvYi1pbmZvIC5qb2ItZGV0YWlscyBoMi5jb21wYW55IHtcclxuICBmb250LXNpemU6IDEuMWVtO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbn1cclxuXHJcbi5qb2IgcC5kZXNjcmlwdGlvbiB7XHJcbiAgZm9udC1zaXplOiAxZW07XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbiAgcGFkZGluZzogMCAxMCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDYwcHg7XHJcbn1cclxuXHJcbi5qb2ItZGV0YWlsc3tcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4uam9iLWluZm8gLmpvYi1saW5rIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gIH1cclxuICBcclxuICAuam9iLWluZm8gLmpvYi1saW5rOmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gIH1cclxuICBcclxuICAuam9iLWluZm8gLmpvYi1saW5rOmZvY3VzIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLmpvYi1pY29uIHtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XHJcbiAgfVxyXG4gIFxyXG4gIC5qb2ItaWNvbjpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExperiencePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-experience-page',
                templateUrl: './experience-page.component.html',
                styleUrls: ['./experience-page.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "HioS":
/*!****************************************************!*\
  !*** ./src/app/about-page/about-page.component.ts ***!
  \****************************************************/
/*! exports provided: AboutPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageComponent", function() { return AboutPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AboutPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutPageComponent.ɵfac = function AboutPageComponent_Factory(t) { return new (t || AboutPageComponent)(); };
AboutPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutPageComponent, selectors: [["app-about-page"]], decls: 8, vars: 0, consts: [[1, "about-page"], [1, "about-content"], [1, "about-image"], ["src", "assets/man.jpg", "alt", "Image description"]], template: function AboutPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "About Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " I am a passionate Full Stack Developer with two years of experience in the development industry. I help businesses create and maintain innovative software applications, that improve people's lives. I love applying my experience in the development industry to help tech companies scale their businesses and provide value where it is needed.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');\r\n\r\n.about-page[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    height: 100vh;\r\n    background-color: #343434;\r\n}\r\n\r\n.about-content[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    padding: 0 5%; \r\n    margin-left: 90px;\r\n}\r\n\r\n.about-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    font-family: DM Sans;\r\n    font-weight: bold;\r\n    font-size: 3.5em;\r\n    margin-bottom: 1em;\r\n}\r\n\r\n.about-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    font-family: 'Open Sans', sans-serif;\r\n    font-size: 1.5em;\r\n    line-height: 1.6;\r\n}\r\n\r\n.about-image[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding: 0 10%; \r\n}\r\n\r\n.about-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    max-width: 80%; \r\n    height: auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx1RkFBdUY7O0FBRXZGO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsYUFBYSxFQUFFLGlDQUFpQztJQUNoRCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLG9DQUFvQztJQUNwQyxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGNBQWMsRUFBRSxrQ0FBa0M7QUFDdEQ7O0FBRUE7SUFDSSxjQUFjLEVBQUUsdURBQXVEO0lBQ3ZFLFlBQVk7QUFDaEIiLCJmaWxlIjoiYWJvdXQtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zOndnaHRAMzAwJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuLmFib3V0LXBhZ2Uge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzNDM0O1xyXG59XHJcblxyXG4uYWJvdXQtY29udGVudCB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDAgNSU7IC8qIEFkZCBzb21lIHBhZGRpbmcgdG8gdGhlIHRleHQgKi9cclxuICAgIG1hcmdpbi1sZWZ0OiA5MHB4O1xyXG59XHJcblxyXG4uYWJvdXQtY29udGVudCBoMSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtZmFtaWx5OiBETSBTYW5zO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDMuNWVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG59XHJcblxyXG4uYWJvdXQtY29udGVudCBwIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbn1cclxuXHJcbi5hYm91dC1pbWFnZSB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDAgMTAlOyAvKiBBZGQgc29tZSBwYWRkaW5nIHRvIHRoZSBpbWFnZSAqL1xyXG59XHJcblxyXG4uYWJvdXQtaW1hZ2UgaW1nIHtcclxuICAgIG1heC13aWR0aDogODAlOyAvKiBBZGp1c3QgdGhpcyB2YWx1ZSB0byBjb250cm9sIHRoZSBzaXplIG9mIHRoZSBpbWFnZSAqL1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about-page',
                templateUrl: './about-page.component.html',
                styleUrls: ['./about-page.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "9vUh");



class AppComponent {
    constructor(renderer, elementRef) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.isContentLoaded = false;
        this.title = 'darrel-mendoza';
    }
    ngOnInit() {
        // setTimeout(() => {
        this.isContentLoaded = true;
        // }, 4500);
        // setTimeout(() => {
        this.renderer.setStyle(this.elementRef.nativeElement.querySelector('.loadingbar'), 'transition', 'left 3s');
        this.renderer.setStyle(this.elementRef.nativeElement.querySelector('.loadingbar'), 'left', '0');
        // }, 1500);
        // setTimeout(() => {
        this.renderer.setStyle(this.elementRef.nativeElement.querySelector('.loadingBox'), 'opacity', '1');
        // }, 500);
        // setTimeout(() => {
        this.renderer.setStyle(this.elementRef.nativeElement.querySelector('.splashScreen'), 'top', '-100%');
        // }, 4500);
        // setTimeout(() => {
        this.renderer.setStyle(this.elementRef.nativeElement.querySelector('.loadingCircle'), 'opacity', '0');
        // }, 4500);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 9, vars: 2, consts: [[1, "splashBody"], [1, "splashScreen"], [1, "loadingContainer"], [1, "loadingBox"], ["src", "assets/dmlogoblack.png", "alt", "Image description", 1, "splashLogo"], [1, "loadingBarContainer"], [1, "loadingbar"], [1, "content"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("visibleContent", ctx.isContentLoaded);
    } }, directives: [_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]], styles: [".splashScreen[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100vh;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    background: #fff;\r\n    border-bottom: 5px solid #333;\r\n    z-index: 999;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    opacity: 1;\r\n    transition: opacity 1s ease;\r\n  }\r\n\r\n  .content[_ngcontent-%COMP%] {\r\n    opacity: 0;\r\n    transition: opacity 1s ease;\r\n  }\r\n\r\n  .visibleContent[_ngcontent-%COMP%] {\r\n    opacity: 1;\r\n  }\r\n\r\n  .loadingContainer[_ngcontent-%COMP%] {\r\n\twidth: 400px;\r\n\tposition: absolute;\r\n\ttop: 50%;\r\n\tleft: 50%;\r\n\ttransform: translate(-50%, -50%);\r\n\ttext-align: center;\r\n\toverflow: hidden;\r\n}\r\n\r\n  .loadingBox[_ngcontent-%COMP%] {\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\topacity: 0;\r\n}\r\n\r\n  .splashLogo[_ngcontent-%COMP%] {\r\n\twidth: 50%;\r\n\tmargin: 0px;\r\n}\r\n\r\n  .loadingBarContainer[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    background: #eee;\r\n    height: 10px;\r\n    display: block;\r\n    margin: 0;\r\n    overflow: hidden;\r\n}\r\n\r\n  .loadingbar[_ngcontent-%COMP%] {\r\n\twidth: 100%;\r\n\theight:10px;\r\n\tbackground: #000;\r\n\tposition: absolute;\r\n\tleft: -100%;\r\n}\r\n\r\n  \r\n\r\n  @keyframes rotateLoader {\r\n    from {transform: rotate(0deg);}\r\n    to {transform: rotate(360deg);}\r\n}\r\n\r\n  @keyframes progressAnimation {\r\n    from {\r\n      left: -100%;\r\n    }\r\n    to {\r\n      left: 0;\r\n    }\r\n  }\r\n\r\n  @keyframes rotateLoader {\r\n    from {\r\n      transform: rotate(0deg);\r\n    }\r\n    to {\r\n      transform: rotate(360deg);\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixlQUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87SUFDUCxnQkFBZ0I7SUFDaEIsNkJBQTZCO0lBQzdCLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsMkJBQTJCO0VBQzdCOztFQUVBO0lBQ0UsVUFBVTtJQUNWLDJCQUEyQjtFQUM3Qjs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7RUFFRjtDQUNDLFlBQVk7Q0FDWixrQkFBa0I7Q0FDbEIsUUFBUTtDQUNSLFNBQVM7Q0FDVCxnQ0FBZ0M7Q0FDaEMsa0JBQWtCO0NBQ2xCLGdCQUFnQjtBQUNqQjs7RUFFQTtDQUNDLFdBQVc7Q0FDWCxZQUFZO0NBQ1osVUFBVTtBQUNYOztFQUVBO0NBQ0MsVUFBVTtDQUNWLFdBQVc7QUFDWjs7RUFFQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGNBQWM7SUFDZCxTQUFTO0lBQ1QsZ0JBQWdCO0FBQ3BCOztFQUVBO0NBQ0MsV0FBVztDQUNYLFdBQVc7Q0FDWCxnQkFBZ0I7Q0FDaEIsa0JBQWtCO0NBQ2xCLFdBQVc7QUFDWjs7RUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWtDRzs7RUFFSDtJQUNJLE1BQU0sdUJBQXVCLENBQUM7SUFDOUIsSUFBSSx5QkFBeUIsQ0FBQztBQUNsQzs7RUFFQTtJQUNJO01BQ0UsV0FBVztJQUNiO0lBQ0E7TUFDRSxPQUFPO0lBQ1Q7RUFDRjs7RUFFQTtJQUNFO01BQ0UsdUJBQXVCO0lBQ3pCO0lBQ0E7TUFDRSx5QkFBeUI7SUFDM0I7RUFDRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zcGxhc2hTY3JlZW4ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgIzMzMztcclxuICAgIHotaW5kZXg6IDk5OTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRlbnQge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZTtcclxuICB9XHJcblxyXG4gIC52aXNpYmxlQ29udGVudCB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuXHJcbi5sb2FkaW5nQ29udGFpbmVyIHtcclxuXHR3aWR0aDogNDAwcHg7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogNTAlO1xyXG5cdGxlZnQ6IDUwJTtcclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmxvYWRpbmdCb3gge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHRvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4uc3BsYXNoTG9nbyB7XHJcblx0d2lkdGg6IDUwJTtcclxuXHRtYXJnaW46IDBweDtcclxufVxyXG5cclxuLmxvYWRpbmdCYXJDb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWVlO1xyXG4gICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4ubG9hZGluZ2JhciB7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OjEwcHg7XHJcblx0YmFja2dyb3VuZDogIzAwMDtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0bGVmdDogLTEwMCU7XHJcbn1cclxuXHJcbi8qXHJcbi5sb2FkaW5nQ2lyY2xlIHtcclxuXHR3aWR0aDogNzVweDtcclxuXHRoZWlnaHQ6IDc1cHg7XHJcblx0bWFyZ2luOiAzMHB4IGF1dG8gMDtcclxuXHRiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmNpcmNsZU91dGVyIHtcclxuXHR3aWR0aDogNjBweDtcclxuXHRoZWlnaHQ6IDYwcHg7XHJcblx0YmFja2dyb3VuZDogI2ZmZjtcclxuXHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdGxlZnQ6IDUwJTtcclxuXHR0b3A6IDUwJTtcclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuXHR6LWluZGV4OiAyO1xyXG59XHJcblxyXG4uY2lyY2xlTG9hZGVyIHtcclxuXHR3aWR0aDogNzVweDtcclxuXHRoZWlnaHQ6IDc1cHg7XHJcblx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgwLDAsMCwxKSAwJSxyZ2JhKDEyNSwxODUsMjMyLDApIDEwMCUpO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRyaWdodDogNTAlO1xyXG5cdGJvdHRvbTogNTAlO1xyXG5cdHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSByaWdodDtcclxuXHR6LWluZGV4OiAxO1xyXG5cdGFuaW1hdGlvbjogcm90YXRlTG9hZGVyIDEuNXMgbGluZWFyIGluZmluaXRlO1xyXG59ICovXHJcblxyXG5Aa2V5ZnJhbWVzIHJvdGF0ZUxvYWRlciB7XHJcbiAgICBmcm9tIHt0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTt9XHJcbiAgICB0byB7dHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTt9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgcHJvZ3Jlc3NBbmltYXRpb24ge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgIGxlZnQ6IC0xMDAlO1xyXG4gICAgfVxyXG4gICAgdG8ge1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBAa2V5ZnJhbWVzIHJvdGF0ZUxvYWRlciB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICB9XHJcbiAgICB0byB7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICB9XHJcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navbar/navbar.component */ "kWWo");
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./landing-page/landing-page.component */ "mSt+");
/* harmony import */ var _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about-page/about-page.component */ "HioS");
/* harmony import */ var _github_graph_github_graph_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./github-graph/github-graph.component */ "c8y/");
/* harmony import */ var _loading_screen_loading_screen_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./loading-screen/loading-screen.component */ "fEtJ");
/* harmony import */ var _chatbot_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./chatbot.service */ "1TqD");
/* harmony import */ var _chatbot_chatbot_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./chatbot/chatbot.component */ "npXH");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _projects_page_projects_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./projects-page/projects-page.component */ "nDjA");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _experience_page_experience_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./experience-page/experience-page.component */ "9wIh");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./skills/skills.component */ "fGbd");
/* harmony import */ var _blogs_page_blogs_page_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./blogs-page/blogs-page.component */ "jJNC");











 // Make sure the path is correct








class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_chatbot_service__WEBPACK_IMPORTED_MODULE_10__["ChatbotService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
        _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_6__["LandingPageComponent"],
        _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_7__["AboutPageComponent"],
        _github_graph_github_graph_component__WEBPACK_IMPORTED_MODULE_8__["GithubGraphComponent"],
        _loading_screen_loading_screen_component__WEBPACK_IMPORTED_MODULE_9__["LoadingScreenComponent"],
        _chatbot_chatbot_component__WEBPACK_IMPORTED_MODULE_11__["ChatbotComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"],
        _projects_page_projects_page_component__WEBPACK_IMPORTED_MODULE_14__["ProjectsPageComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"],
        _experience_page_experience_page_component__WEBPACK_IMPORTED_MODULE_16__["ExperiencePageComponent"],
        _skills_skills_component__WEBPACK_IMPORTED_MODULE_17__["SkillsComponent"],
        _blogs_page_blogs_page_component__WEBPACK_IMPORTED_MODULE_18__["BlogsPageComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
                    _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_6__["LandingPageComponent"],
                    _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_7__["AboutPageComponent"],
                    _github_graph_github_graph_component__WEBPACK_IMPORTED_MODULE_8__["GithubGraphComponent"],
                    _loading_screen_loading_screen_component__WEBPACK_IMPORTED_MODULE_9__["LoadingScreenComponent"],
                    _chatbot_chatbot_component__WEBPACK_IMPORTED_MODULE_11__["ChatbotComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"],
                    _projects_page_projects_page_component__WEBPACK_IMPORTED_MODULE_14__["ProjectsPageComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"],
                    _experience_page_experience_page_component__WEBPACK_IMPORTED_MODULE_16__["ExperiencePageComponent"],
                    _skills_skills_component__WEBPACK_IMPORTED_MODULE_17__["SkillsComponent"],
                    _blogs_page_blogs_page_component__WEBPACK_IMPORTED_MODULE_18__["BlogsPageComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
                ],
                providers: [_chatbot_service__WEBPACK_IMPORTED_MODULE_10__["ChatbotService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "c8y/":
/*!********************************************************!*\
  !*** ./src/app/github-graph/github-graph.component.ts ***!
  \********************************************************/
/*! exports provided: GithubGraphComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GithubGraphComponent", function() { return GithubGraphComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var github_calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! github-calendar */ "Au0k");
/* harmony import */ var github_calendar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(github_calendar__WEBPACK_IMPORTED_MODULE_1__);



class GithubGraphComponent {
    constructor() { }
    ngAfterViewInit() {
        github_calendar__WEBPACK_IMPORTED_MODULE_1___default()("#calendar", "DarrelMendoza", {
            responsive: true,
            tooltips: true,
            global_stats: false,
            cache: 1,
            summary_text: "contributions in the last year",
            last_year: 365,
            colors: ['#ebedf0', '#c6e48b', '#7bc96f', '#239a3b', '#196127']
        });
    }
    ngOnInit() {
    }
}
GithubGraphComponent.ɵfac = function GithubGraphComponent_Factory(t) { return new (t || GithubGraphComponent)(); };
GithubGraphComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GithubGraphComponent, selectors: [["app-github-graph"]], decls: 18, vars: 0, consts: [["rel", "stylesheet", "href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"]("https://unpkg.com/github-calendar@latest/dist/github-calendar-responsive.css")], [1, "contribution-page"], [1, "h1container"], [2, "font-size", "48px"], [1, "calendar", "graph"], ["href", "https://github.com/DarrelMendoza", 2, "text-decoration", "none", "color", "#fff"], ["id", "calendar"], [1, "description"], [2, "font-weight", "bold", "font-family", "DM Sans"], [2, "color", "#343434", "font-weight", "bold", "font-style", "italic"], ["href", "https://github.com/DarrelMendoza", "target", "_blank"]], template: function GithubGraphComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Daily Contributions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "REALTIME GITHUB CONTRIBUTION CALENDAR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Created using Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "and GitHub API Call.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "View Github Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap');\r\n\r\n.contribution-page[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: space-around;\r\n    height: 85vh;\r\n    text-align: center;\r\n    padding: 0% 1%;\r\n    background-color: #343434;\r\n}\r\n\r\n.h1container[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    min-width: 300px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    box-sizing: border-box;\r\n    text-align: left;\r\n    padding-left: 12%;\r\n  }\r\n\r\n.contribution-page[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    font-family: DM Sans;\r\n    font-weight: bold;\r\n    font-size: 3.5em;\r\n}\r\n\r\n.graph[_ngcontent-%COMP%] {\r\n    margin-top: 0px;\r\n    width: 78%;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n.graph[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: auto;\r\n}\r\n\r\n.description[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n    align-self: flex-end;\r\n    text-align: left;\r\n    margin-bottom: 7%;\r\n}\r\n\r\n.description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    font-family: 'Open Sans', sans-serif;\r\n    font-size: 15px;\r\n    line-height: 10px;\r\n    margin-left: 10em;\r\n}\r\n\r\n.description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    text-decoration: none;\r\n    font-weight: bold;\r\n    font-style: italic;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdpdGh1Yi1ncmFwaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLCtGQUErRjs7QUFFL0Y7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsaUJBQWlCO0VBQ25COztBQUVGO0lBQ0ksV0FBVztJQUNYLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsb0NBQW9DO0lBQ3BDLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztJQUNYLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBOzs7Ozs7R0FNRyIsImZpbGUiOiJnaXRodWItZ3JhcGguY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2Fuczp3Z2h0QDMwMDs0MDA7NjAwJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuLmNvbnRyaWJ1dGlvbi1wYWdlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgaGVpZ2h0OiA4NXZoO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMCUgMSU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzNDM0O1xyXG59XHJcblxyXG4uaDFjb250YWluZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi13aWR0aDogMzAwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMiU7XHJcbiAgfVxyXG5cclxuLmNvbnRyaWJ1dGlvbi1wYWdlIGgxIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1mYW1pbHk6IERNIFNhbnM7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMy41ZW07XHJcbn1cclxuXHJcbi5ncmFwaCB7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICB3aWR0aDogNzglO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5ncmFwaCBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbiB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNyU7XHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbiBwIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBlbTtcclxufVxyXG5cclxuLmRlc2NyaXB0aW9uIHAgYSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcblxyXG4vKiAuY2FsZW5kYXIge1xyXG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgYXJpYWw7XHJcbiAgICBib3JkZXI6IDBweCBzb2xpZCAjZmZmZmZmO1xyXG4gICAgbWluLWhlaWdodDogMjQzcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufSAqLyJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GithubGraphComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-github-graph',
                templateUrl: './github-graph.component.html',
                styleUrls: ['./github-graph.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "fEtJ":
/*!************************************************************!*\
  !*** ./src/app/loading-screen/loading-screen.component.ts ***!
  \************************************************************/
/*! exports provided: LoadingScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingScreenComponent", function() { return LoadingScreenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class LoadingScreenComponent {
    constructor() {
        this.showSplash = true;
        this.loadingBarLeft = '-100%';
        this.loadingCircleOpacity = 1;
    }
    ngOnInit() {
        // setTimeout(() => {
        //   this.loadingBarLeft = '0';
        //   this.loadingCircleOpacity = 0;
        // }, 1500);
        // setTimeout(() => {
        //   this.showSplash = false;
        //   document.body.classList.add('visibleSplash');
        // }, 4500);
    }
}
LoadingScreenComponent.ɵfac = function LoadingScreenComponent_Factory(t) { return new (t || LoadingScreenComponent)(); };
LoadingScreenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoadingScreenComponent, selectors: [["app-loading-screen"]], decls: 10, vars: 0, consts: [[1, "splashBody"], [1, "splashScreen"], [1, "loadingContainer"], [1, "loadingBox"], ["src", "https://vignette.wikia.nocookie.net/borderlands/images/4/42/Vault_logo.png/revision/latest?cb=20100114181536", 1, "splashLogo"], [1, "loadingBarContainer"], [1, "loadingbar"], [1, "loadingCircle"], [1, "circleOuter"], [1, "circleLoader"]], template: function LoadingScreenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".splashScreen[_ngcontent-%COMP%] {\r\n\twidth: 100%;\r\n \theight: 100vh;\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tbackground: #fff;\r\n\tborder-bottom: 5px solid #333;\r\n\toverflow: hidden;\r\n}\r\n.loadingContainer[_ngcontent-%COMP%] {\r\n\twidth: 400px;\r\n\tposition: absolute;\r\n\ttop: 50%;\r\n\tleft: 50%;\r\n\ttransform: translate(-50%, -50%);\r\n\ttext-align: center;\r\n\toverflow: hidden;\r\n}\r\n.loadingBox[_ngcontent-%COMP%] {\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\topacity: 0;\r\n}\r\n.splashLogo[_ngcontent-%COMP%] {\r\n\twidth: 50%;\r\n\tmargin: 0 0 50px;\r\n}\r\n.loadingBarContainer[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    background: #eee;\r\n    height: 10px;\r\n    display: block;\r\n    margin: 50px 0 0;\r\n    overflow: hidden;\r\n}\r\n.loadingbar[_ngcontent-%COMP%] {\r\n\twidth: 100%;\r\n\theight:10px;\r\n\tbackground: #000;\r\n\tposition: absolute;\r\n\tleft: -100%;\r\n}\r\n.loadingCircle[_ngcontent-%COMP%] {\r\n\twidth: 75px;\r\n\theight: 75px;\r\n\tmargin: 30px auto 0;\r\n\tbackground: #fff;\r\n\tdisplay: block;\r\n\tborder-radius: 50%;\r\n\tposition: relative;\r\n\toverflow: hidden;\r\n}\r\n.circleOuter[_ngcontent-%COMP%] {\r\n\twidth: 60px;\r\n\theight: 60px;\r\n\tbackground: #fff;\r\n\tborder-radius: 50%;\r\n\tposition: absolute;\r\n\tleft: 50%;\r\n\ttop: 50%;\r\n\ttransform: translate(-50%, -50%);\r\n\tz-index: 2;\r\n}\r\n.circleLoader[_ngcontent-%COMP%] {\r\n\twidth: 75px;\r\n\theight: 75px;\r\n\tbackground: linear-gradient(to bottom, rgba(0,0,0,1) 0%,rgba(125,185,232,0) 100%);\r\n\tposition: absolute;\r\n\tright: 50%;\r\n\tbottom: 50%;\r\n\ttransform-origin: bottom right;\r\n\tz-index: 1;\r\n\tanimation: rotateLoader 1.5s linear infinite;\r\n}\r\n@keyframes rotateLoader {\r\n    from {transform: rotate(0deg);}\r\n    to {transform: rotate(360deg);}\r\n}\r\n.splashBehind[_ngcontent-%COMP%] {\r\n\tbackground: red;\r\n\twidth: 100%;\r\n\theight: 100vh;\r\n}\r\n.splashBehindTwo[_ngcontent-%COMP%] {\r\n\tbackground: #fff;\r\n\twidth: 100%;\r\n\theight: 100vh;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWRpbmctc2NyZWVuLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0NBQ0MsV0FBVztFQUNWLGFBQWE7Q0FDZCxrQkFBa0I7Q0FDbEIsTUFBTTtDQUNOLE9BQU87Q0FDUCxnQkFBZ0I7Q0FDaEIsNkJBQTZCO0NBQzdCLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsWUFBWTtDQUNaLGtCQUFrQjtDQUNsQixRQUFRO0NBQ1IsU0FBUztDQUNULGdDQUFnQztDQUNoQyxrQkFBa0I7Q0FDbEIsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxXQUFXO0NBQ1gsWUFBWTtDQUNaLFVBQVU7QUFDWDtBQUNBO0NBQ0MsVUFBVTtDQUNWLGdCQUFnQjtBQUNqQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osY0FBYztJQUNkLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7QUFDQTtDQUNDLFdBQVc7Q0FDWCxXQUFXO0NBQ1gsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtDQUNsQixXQUFXO0FBQ1o7QUFDQTtDQUNDLFdBQVc7Q0FDWCxZQUFZO0NBQ1osbUJBQW1CO0NBQ25CLGdCQUFnQjtDQUNoQixjQUFjO0NBQ2Qsa0JBQWtCO0NBQ2xCLGtCQUFrQjtDQUNsQixnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLFdBQVc7Q0FDWCxZQUFZO0NBQ1osZ0JBQWdCO0NBQ2hCLGtCQUFrQjtDQUNsQixrQkFBa0I7Q0FDbEIsU0FBUztDQUNULFFBQVE7Q0FDUixnQ0FBZ0M7Q0FDaEMsVUFBVTtBQUNYO0FBQ0E7Q0FDQyxXQUFXO0NBQ1gsWUFBWTtDQUNaLGlGQUFpRjtDQUNqRixrQkFBa0I7Q0FDbEIsVUFBVTtDQUNWLFdBQVc7Q0FDWCw4QkFBOEI7Q0FDOUIsVUFBVTtDQUNWLDRDQUE0QztBQUM3QztBQUNBO0lBQ0ksTUFBTSx1QkFBdUIsQ0FBQztJQUM5QixJQUFJLHlCQUF5QixDQUFDO0FBQ2xDO0FBRUE7Q0FDQyxlQUFlO0NBQ2YsV0FBVztDQUNYLGFBQWE7QUFDZDtBQUNBO0NBQ0MsZ0JBQWdCO0NBQ2hCLFdBQVc7Q0FDWCxhQUFhO0FBQ2QiLCJmaWxlIjoibG9hZGluZy1zY3JlZW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uc3BsYXNoU2NyZWVuIHtcclxuXHR3aWR0aDogMTAwJTtcclxuIFx0aGVpZ2h0OiAxMDB2aDtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiAwO1xyXG5cdGxlZnQ6IDA7XHJcblx0YmFja2dyb3VuZDogI2ZmZjtcclxuXHRib3JkZXItYm90dG9tOiA1cHggc29saWQgIzMzMztcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5sb2FkaW5nQ29udGFpbmVyIHtcclxuXHR3aWR0aDogNDAwcHg7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogNTAlO1xyXG5cdGxlZnQ6IDUwJTtcclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4ubG9hZGluZ0JveCB7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdG9wYWNpdHk6IDA7XHJcbn1cclxuLnNwbGFzaExvZ28ge1xyXG5cdHdpZHRoOiA1MCU7XHJcblx0bWFyZ2luOiAwIDAgNTBweDtcclxufVxyXG4ubG9hZGluZ0JhckNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICNlZWU7XHJcbiAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogNTBweCAwIDA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5sb2FkaW5nYmFyIHtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6MTBweDtcclxuXHRiYWNrZ3JvdW5kOiAjMDAwO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRsZWZ0OiAtMTAwJTtcclxufVxyXG4ubG9hZGluZ0NpcmNsZSB7XHJcblx0d2lkdGg6IDc1cHg7XHJcblx0aGVpZ2h0OiA3NXB4O1xyXG5cdG1hcmdpbjogMzBweCBhdXRvIDA7XHJcblx0YmFja2dyb3VuZDogI2ZmZjtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLmNpcmNsZU91dGVyIHtcclxuXHR3aWR0aDogNjBweDtcclxuXHRoZWlnaHQ6IDYwcHg7XHJcblx0YmFja2dyb3VuZDogI2ZmZjtcclxuXHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdGxlZnQ6IDUwJTtcclxuXHR0b3A6IDUwJTtcclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuXHR6LWluZGV4OiAyO1xyXG59XHJcbi5jaXJjbGVMb2FkZXIge1xyXG5cdHdpZHRoOiA3NXB4O1xyXG5cdGhlaWdodDogNzVweDtcclxuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDAsMCwwLDEpIDAlLHJnYmEoMTI1LDE4NSwyMzIsMCkgMTAwJSk7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHJpZ2h0OiA1MCU7XHJcblx0Ym90dG9tOiA1MCU7XHJcblx0dHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIHJpZ2h0O1xyXG5cdHotaW5kZXg6IDE7XHJcblx0YW5pbWF0aW9uOiByb3RhdGVMb2FkZXIgMS41cyBsaW5lYXIgaW5maW5pdGU7XHJcbn1cclxuQGtleWZyYW1lcyByb3RhdGVMb2FkZXIge1xyXG4gICAgZnJvbSB7dHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7fVxyXG4gICAgdG8ge3RyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7fVxyXG59XHJcblxyXG4uc3BsYXNoQmVoaW5kIHtcclxuXHRiYWNrZ3JvdW5kOiByZWQ7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiAxMDB2aDtcclxufVxyXG4uc3BsYXNoQmVoaW5kVHdvIHtcclxuXHRiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogMTAwdmg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadingScreenComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-loading-screen',
                templateUrl: './loading-screen.component.html',
                styleUrls: ['./loading-screen.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "fGbd":
/*!********************************************!*\
  !*** ./src/app/skills/skills.component.ts ***!
  \********************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SkillsComponent {
    constructor() { }
    ngOnInit() {
    }
}
SkillsComponent.ɵfac = function SkillsComponent_Factory(t) { return new (t || SkillsComponent)(); };
SkillsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SkillsComponent, selectors: [["app-skills"]], decls: 253, vars: 0, consts: [["rel", "stylesheet", "href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"]("https://unpkg.com/github-calendar@latest/dist/github-calendar-responsive.css")], [1, "skills-page"], [1, "skills-content"], [2, "font-size", "13px"], [1, "h1container"], [2, "font-size", "48px"], [1, "icon-set", 2, "padding-right", "10px"], [1, "logos"], [1, "logo-details"], [1, "role"], [1, "social-icons"], [1, "box"], [1, "image"], [1, "social-icon", "social-icon--html"], ["src", "assets/icons/html.png", "alt", "Icon", 1, "icon"], [1, "tooltip"], [1, "title"], [1, "social-icon", "social-icon--css"], ["src", "assets/icons/css.png", "alt", "Icon", 1, "icon"], [1, "social-icon", "social-icon--javascript"], ["src", "assets/icons/javascript.png", "alt", "Icon", 1, "icon"], [1, "social-icon", "social-icon--react"], ["src", "assets/icons/react.png", "alt", "Icon", 1, "icon"], [1, "social-icon", "social-icon--angular"], ["src", "assets/icons/angular.png", "alt", "Icon", 1, "icon"], [1, "social-icon", "social-icon--ionic"], ["src", "assets/icons/ionic.png", "alt", "Icon", 1, "icon"], [1, "social-icon", "social-icon--jasper"], ["src", "assets/icons/jasper.png", "alt", "Icon", 1, "icon"], [1, "social-icon", "social-icon--bootstrap"], ["src", "assets/icons/bootstrap.png", "alt", "Icon", 1, "icon"], [1, "social-icon", "social-icon--reactnative"], ["src", "assets/icons/reactnative.png", "alt", "Icon", 1, "icon"], [1, "social-icon", "social-icon--tailwind"], ["src", "assets/icons/tailwind.png", "alt", "Icon", 1, "icon"], [1, "social-icon", "social-icon--sass"], ["src", "assets/icons/sass.png", "alt", "Icon", 1, "icon"], [1, "social-icon", "social-icon--less"], ["src", "assets/icons/less.png", "alt", "Icon", 1, "icon"], [1, "social-icon", "social-icon--jquery"], ["src", "assets/icons/jquery.png", "alt", "Icon", 1, "icon"], [1, "social-icon", "social-icon--chartjs"], ["src", "assets/icons/chartjs.png", "alt", "Icon", 1, "icon"], [1, "skills-content2"], [1, "social-icon", "social-icon--typescript"], ["src", "assets/icons/typescript.png", "alt", "Icon", 1, "icon"], [1, "social-icon", "social-icon--php"], ["src", "assets/icons/php.png", "alt", "Icon", 1, "icon"], [1, "social-icon", "social-icon--laravel"], ["src", "assets/icons/laravel.png", "alt", "Icon", 1, "icon"], [1, "social-icon", "social-icon--java"], ["src", "assets/icons/java.png", "alt", "Icon", 1, "icon"], [1, "social-icon", "social-icon--aws"], ["src", "assets/icons/aws.png", "alt", "Icon", 1, "icon"], [1, "social-icon", "social-icon--mysql"], ["src", "assets/icons/mysql.png", "alt", "Icon", 1, "icon"], [1, "social-icon", "social-icon--postgresql"], ["src", "assets/icons/postgresql.png", "alt", "Icon", 1, "icon"], [1, "social-icon", "social-icon--nodejs"], ["src", "assets/icons/nodejs.png", "alt", "Icon", 1, "icon"], [1, "social-icon", "social-icon--plsql"], ["src", "assets/icons/plsql.png", "alt", "Icon", 1, "icon"], [1, "social-icon", "social-icon--talend"], ["src", "assets/icons/talend.png", "alt", "Icon", 1, "icon"], [1, "social-icon", "social-icon--oracleapex"], ["src", "assets/icons/oracleapex.png", "alt", "Icon", 1, "icon"], [1, "social-icon", "social-icon--vagrant"], ["src", "assets/icons/vagrant.png", "alt", "Icon", 1, "icon"], [1, "social-icon", "social-icon--phpmyadmin"], ["src", "assets/icons/phpmyadmin.png", "alt", "Icon", 1, "icon"], [1, "social-icon", "social-icon--sqlite"], ["src", "assets/icons/sqlite.png", "alt", "Icon", 1, "icon"]], template: function SkillsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "TECHNOLOGIES USED FOR DEVELOPMENT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Skills & Proficiencies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h1", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "FRONT END DEVELOPMENT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "HTML");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "HTML");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "CSS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "CSS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "JavaScript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "JAVASCRIPT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "REACT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "REACT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "ANGULAR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "ANGULAR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "IONIC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "IONIC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "JASPER REPORTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "JASPER REPORTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "BOOTSTRAP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "BOOTSTRAP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "REACT NATIVE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "REACT NATIVE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "TAILWIND");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "TAILWIND");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "SASS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "SASS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "LESS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "LESS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "JQUERY");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "JQUERY");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "CHARTJS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "CHARTJS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "h1", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "BACK END DEVELOPMENT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "img", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "TYPESCRIPT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "TYPESCRIPT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "img", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "PHP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "PHP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "img", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "LARAVEL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "LARAVEL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "a", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](164, "img", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "JAVA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "JAVA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "a", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "img", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "AWS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "AWS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](180, "img", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "MYSQL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "MYSQL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "a", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](188, "img", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "POSTGRESQL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "POSTGRESQL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](200, "img", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "NODE JS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "NODE JS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "a", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](208, "img", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, "PL/SQL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "PL/SQL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "a", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](216, "img", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, "TALEND");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "TALEND");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "a", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](224, "img", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, "ORACLE APEX");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, "ORACLE APEX");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "a", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](232, "img", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, "VAGRANT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, "VAGRANT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "a", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](240, "img", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, "PHPMYADMIN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, "PHPMYADMIN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "a", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](248, "img", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](250, "SQLITE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, "SQLITE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Nunito:wght@200;300;400;500;600;700;800;900;1000&display=swap\");\n.box[_ngcontent-%COMP%] {\n  flex: 1 1 15%;\n  text-align: center;\n  transition: all 0.3s ease-in;\n}\n.box[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  transition: all 0.3s ease-in-out 0.1s;\n}\n.box[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 75px;\n  object-fit: contain;\n}\n.box[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  text-align: center;\n  font-weight: 470;\n  color: black;\n  transition: all 0.3s ease-in-out;\n  font-size: 12px;\n}\n.box[_ngcontent-%COMP%]:hover {\n  transform: scale(0.8);\n}\n.box[_ngcontent-%COMP%]:hover   .image[_ngcontent-%COMP%] {\n  transform: scale(1.5) translateY(-20px);\n}\n.box[_ngcontent-%COMP%]:hover   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  animation: bouncing 0.5s 0.3s;\n}\n.box[_ngcontent-%COMP%]:hover   .title[_ngcontent-%COMP%] {\n  letter-spacing: 2px;\n  font-weight: 700;\n  color: white;\n  font-size: 1px;\n}\n@media (max-width: 1100px) {\n  .box[_ngcontent-%COMP%] {\n    flex: 1 0 25%;\n  }\n}\n@media (max-width: 630px) {\n  .box[_ngcontent-%COMP%] {\n    flex: 1 0 35%;\n    padding: 15px;\n  }\n  .box[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 50px;\n  }\n}\n@keyframes bouncing {\n  from, to {\n    transform: scale(1, 1);\n  }\n  25% {\n    transform: scale(0.9, 1.1);\n  }\n  50% {\n    transform: scale(1.1, 0.9);\n  }\n  75% {\n    transform: scale(0.95, 1.05);\n  }\n}\n.skills-page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  background-color: #f6f6f6;\n  padding: 5% 5%;\n  height: 100vh;\n}\n.skills-content[_ngcontent-%COMP%] {\n  width: 50%;\n  min-width: 300px;\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n  padding: 5% 5%;\n}\n.h1container[_ngcontent-%COMP%] {\n  width: 50%;\n  min-width: 300px;\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n  margin-bottom: 10%;\n}\n.skills-content2[_ngcontent-%COMP%] {\n  width: 50%;\n  min-width: 300px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  box-sizing: border-box;\n  margin-top: 18%;\n  padding-left: 5%;\n}\n.icon-set[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  margin-bottom: 3%;\n  box-sizing: border-box;\n}\n.logos[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.logos[_ngcontent-%COMP%]   .year[_ngcontent-%COMP%] {\n  margin-right: 3.4em;\n  font-size: 1.2em;\n  font-weight: bold;\n  margin-bottom: 40px;\n}\n.logos[_ngcontent-%COMP%]   .job-icon[_ngcontent-%COMP%] {\n  max-width: 36px;\n  height: auto;\n  margin-right: 0px;\n  margin-bottom: 25px;\n}\n.logos[_ngcontent-%COMP%]   .logo-details[_ngcontent-%COMP%]   h1.role[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n  font-weight: 620;\n  margin-bottom: 8%;\n  margin-left: 30%;\n  margin-right: 30%;\n}\n.logos[_ngcontent-%COMP%]   .logo-details[_ngcontent-%COMP%]   h2.company[_ngcontent-%COMP%] {\n  font-size: 1.1em;\n  font-weight: 300;\n}\n.icon-set[_ngcontent-%COMP%]   p.description[_ngcontent-%COMP%] {\n  font-size: 1em;\n  font-weight: 300;\n  text-align: justify;\n  line-height: 1.6;\n  padding: 0 10%;\n  margin-left: 60px;\n}\n.logo-details[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n.logos[_ngcontent-%COMP%]   .job-link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: inherit;\n}\n.logos[_ngcontent-%COMP%]   .job-link[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n  color: inherit;\n}\n.logos[_ngcontent-%COMP%]   .job-link[_ngcontent-%COMP%]:focus {\n  text-decoration: none;\n  color: inherit;\n  outline: none;\n}\n.job-icon[_ngcontent-%COMP%] {\n  transition: transform 0.3s ease;\n}\n.job-icon[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n\n\n.social-icons[_ngcontent-%COMP%] {\n  display: flex;\n}\n.social-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  width: 80px;\n  height: 80px;\n  margin: 0 0.5rem;\n  border-radius: 50%;\n  cursor: pointer;\n  font-family: \"Helvetica Neue\", \"Helvetica\", \"Arial\", sans-serif;\n  font-size: 2.5rem;\n  text-decoration: none;\n  transition: all 0.15s ease;\n  \n}\n.social-icon[_ngcontent-%COMP%]:hover {\n  color: #fff;\n}\n.social-icon[_ngcontent-%COMP%]:hover   .tooltip[_ngcontent-%COMP%] {\n  visibility: visible;\n  opacity: 1;\n  transform: translate(-50%, -150%);\n}\n.social-icon[_ngcontent-%COMP%]:active {\n  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.5) inset;\n}\n.social-icon--bootstrap[_ngcontent-%COMP%] {\n  background: #553d7c;\n  color: #fff;\n}\n.social-icon--bootstrap[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%] {\n  background: #553d7c;\n  color: currentColor;\n}\n.social-icon--bootstrap[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%]:after {\n  border-top-color: #553d7c;\n}\n.social-icon--javascript[_ngcontent-%COMP%] {\n  background: #e4d04b;\n  color: #fff;\n}\n.social-icon--javascript[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%] {\n  background: #e4d04b;\n  color: currentColor;\n}\n.social-icon--javascript[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%]:after {\n  border-top-color: #e4d04b;\n}\n.social-icon--html[_ngcontent-%COMP%] {\n  background: #f15931;\n  color: #fff;\n}\n.social-icon--html[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%] {\n  background: #f15931;\n  color: currentColor;\n}\n.social-icon--html[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%]:after {\n  border-top-color: #f15931;\n}\n.social-icon--css[_ngcontent-%COMP%] {\n  background: #254de3;\n  color: #fff;\n}\n.social-icon--css[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%] {\n  background: #254de3;\n  color: currentColor;\n}\n.social-icon--css[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%]:after {\n  border-top-color: #254de3;\n}\n.social-icon--react[_ngcontent-%COMP%] {\n  background: #43c3ec;\n  color: #fff;\n}\n.social-icon--react[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%] {\n  background: #43c3ec;\n  color: currentColor;\n}\n.social-icon--react[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%]:after {\n  border-top-color: #43c3ec;\n}\n.social-icon--reactnative[_ngcontent-%COMP%] {\n  background: #43c3ec;\n  color: #fff;\n}\n.social-icon--reactnative[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%] {\n  background: #43c3ec;\n  color: currentColor;\n}\n.social-icon--reactnative[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%]:after {\n  border-top-color: #43c3ec;\n}\n.social-icon--angular[_ngcontent-%COMP%] {\n  background: #e23237;\n  color: #fff;\n}\n.social-icon--angular[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%] {\n  background: #e23237;\n  color: currentColor;\n}\n.social-icon--angular[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%]:after {\n  border-top-color: #e23237;\n}\n.social-icon--ionic[_ngcontent-%COMP%] {\n  background: #3880ff;\n  color: #fff;\n}\n.social-icon--ionic[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%] {\n  background: #3880ff;\n  color: currentColor;\n}\n.social-icon--ionic[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%]:after {\n  border-top-color: #3880ff;\n}\n.social-icon--jasper[_ngcontent-%COMP%] {\n  background: #005f9e;\n  color: #fff;\n}\n.social-icon--jasper[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%] {\n  background: #005f9e;\n  color: currentColor;\n}\n.social-icon--jasper[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%]:after {\n  border-top-color: #005f9e;\n}\n.social-icon--tailwind[_ngcontent-%COMP%] {\n  background: #01b7d6;\n  color: #fff;\n}\n.social-icon--tailwind[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%] {\n  background: #01b7d6;\n  color: currentColor;\n}\n.social-icon--tailwind[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%]:after {\n  border-top-color: #01b7d6;\n}\n.social-icon--sass[_ngcontent-%COMP%] {\n  background: #cf649a;\n  color: #fff;\n}\n.social-icon--sass[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%] {\n  background: #cf649a;\n  color: currentColor;\n}\n.social-icon--sass[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%]:after {\n  border-top-color: #cf649a;\n}\n.social-icon--less[_ngcontent-%COMP%] {\n  background: #172b4a;\n  color: #fff;\n}\n.social-icon--less[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%] {\n  background: #172b4a;\n  color: currentColor;\n}\n.social-icon--less[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%]:after {\n  border-top-color: #172b4a;\n}\n.social-icon--jquery[_ngcontent-%COMP%] {\n  background: #0868ac;\n  color: #fff;\n}\n.social-icon--jquery[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%] {\n  background: #0868ac;\n  color: currentColor;\n}\n.social-icon--jquery[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%]:after {\n  border-top-color: #0868ac;\n}\n.social-icon--chartjs[_ngcontent-%COMP%] {\n  background: #f27175;\n  color: #fff;\n}\n.social-icon--chartjs[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%] {\n  background: #f27175;\n  color: currentColor;\n}\n.social-icon--chartjs[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%]:after {\n  border-top-color: #f27175;\n}\n.social-icon--typescript[_ngcontent-%COMP%] {\n  background: #2d79c7;\n  color: #fff;\n}\n.social-icon--typescript[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%] {\n  background: #2d79c7;\n  color: currentColor;\n}\n.social-icon--typescript[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%]:after {\n  border-top-color: #2d79c7;\n}\n.social-icon--php[_ngcontent-%COMP%] {\n  background: #4b568c;\n  color: #fff;\n}\n.social-icon--php[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%] {\n  background: #4b568c;\n  color: currentColor;\n}\n.social-icon--php[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%]:after {\n  border-top-color: #4b568c;\n}\n.social-icon--laravel[_ngcontent-%COMP%] {\n  background: #f22b1e;\n  color: #fff;\n}\n.social-icon--laravel[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%] {\n  background: #f22b1e;\n  color: currentColor;\n}\n.social-icon--laravel[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%]:after {\n  border-top-color: #f22b1e;\n}\n.social-icon--aws[_ngcontent-%COMP%] {\n  background: #f29100;\n  color: #fff;\n}\n.social-icon--aws[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%] {\n  background: #f29100;\n  color: currentColor;\n}\n.social-icon--aws[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%]:after {\n  border-top-color: #f29100;\n}\n.social-icon--mysql[_ngcontent-%COMP%] {\n  background: #005c85;\n  color: #fff;\n}\n.social-icon--mysql[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%] {\n  background: #005c85;\n  color: currentColor;\n}\n.social-icon--mysql[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%]:after {\n  border-top-color: #005c85;\n}\n.social-icon--phpmyadmin[_ngcontent-%COMP%] {\n  background: #e76c00;\n  color: #fff;\n}\n.social-icon--phpmyadmin[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%] {\n  background: #e76c00;\n  color: currentColor;\n}\n.social-icon--phpmyadmin[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%]:after {\n  border-top-color: #e76c00;\n}\n.social-icon--postgresql[_ngcontent-%COMP%] {\n  background: #30628a;\n  color: #fff;\n}\n.social-icon--postgresql[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%] {\n  background: #30628a;\n  color: currentColor;\n}\n.social-icon--postgresql[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%]:after {\n  border-top-color: #30628a;\n}\n.social-icon--java[_ngcontent-%COMP%] {\n  background: #3a75b0;\n  color: #fff;\n}\n.social-icon--java[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%] {\n  background: #3a75b0;\n  color: currentColor;\n}\n.social-icon--java[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%]:after {\n  border-top-color: #3a75b0;\n}\n.social-icon--sqlite[_ngcontent-%COMP%] {\n  background: #2f92ce;\n  color: #fff;\n}\n.social-icon--sqlite[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%] {\n  background: #2f92ce;\n  color: currentColor;\n}\n.social-icon--sqlite[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%]:after {\n  border-top-color: #2f92ce;\n}\n.social-icon--plsql[_ngcontent-%COMP%] {\n  background: #820b48;\n  color: #fff;\n}\n.social-icon--plsql[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%] {\n  background: #820b48;\n  color: currentColor;\n}\n.social-icon--plsql[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%]:after {\n  border-top-color: #820b48;\n}\n.social-icon--talend[_ngcontent-%COMP%] {\n  background: #183e66;\n  color: #fff;\n}\n.social-icon--talend[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%] {\n  background: #183e66;\n  color: currentColor;\n}\n.social-icon--talend[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%]:after {\n  border-top-color: #183e66;\n}\n.social-icon--oracleapex[_ngcontent-%COMP%] {\n  background: #bd4231;\n  color: #fff;\n}\n.social-icon--oracleapex[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%] {\n  background: #bd4231;\n  color: currentColor;\n}\n.social-icon--oracleapex[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%]:after {\n  border-top-color: #bd4231;\n}\n.social-icon--nodejs[_ngcontent-%COMP%] {\n  background: #92b54c;\n  color: #fff;\n}\n.social-icon--nodejs[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%] {\n  background: #92b54c;\n  color: currentColor;\n}\n.social-icon--nodejs[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%]:after {\n  border-top-color: #92b54c;\n}\n.social-icon--vagrant[_ngcontent-%COMP%] {\n  background: #1178f2;\n  color: #fff;\n}\n.social-icon--vagrant[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%] {\n  background: #1178f2;\n  color: currentColor;\n}\n.social-icon--vagrant[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%]:after {\n  border-top-color: #1178f2;\n}\n.social-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: relative;\n  top: 1px;\n}\n\n.tooltip[_ngcontent-%COMP%] {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 50%;\n  padding: 0.8rem 1rem;\n  border-radius: 40px;\n  font-size: 0.8rem;\n  font-weight: bold;\n  opacity: 0;\n  pointer-events: none;\n  text-transform: uppercase;\n  transform: translate(-50%, -100%);\n  transition: all 0.3s ease;\n  z-index: 1;\n}\n.tooltip[_ngcontent-%COMP%]:after {\n  display: block;\n  position: absolute;\n  bottom: 1px;\n  left: 50%;\n  width: 0;\n  height: 0;\n  content: \"\";\n  border: solid;\n  border-width: 10px 10px 0 10px;\n  border-color: transparent;\n  transform: translate(-50%, 100%);\n}\n.icon[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHNraWxscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSwrRkFBQTtBQUVBLGdMQUFBO0FBUVI7RUFDRSxhQUFBO0VBSUEsa0JBQUE7RUFFQSw0QkFBQTtBQVhGO0FBY0U7RUFDRSxxQ0FBQTtBQVpKO0FBYUk7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QUFYTjtBQWVFO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0FBYko7QUFnQkU7RUFFRSxxQkFBQTtBQWZKO0FBaUJJO0VBQ0UsdUNBQUE7QUFmTjtBQWdCTTtFQUNFLDZCQUFBO0FBZFI7QUFpQkk7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFmTjtBQW1CRTtFQTdDRjtJQThDSSxhQUFBO0VBaEJGO0FBQ0Y7QUFpQkU7RUFoREY7SUFpREksYUFBQTtJQUNBLGFBQUE7RUFkRjtFQWlCSTtJQUNFLGVBQUE7RUFmTjtBQUNGO0FBcUJBO0VBQ0E7SUFBVyxzQkFBQTtFQWpCVDtFQWtCRjtJQUFNLDBCQUFBO0VBZko7RUFnQkY7SUFBTSwwQkFBQTtFQWJKO0VBY0Y7SUFBTSw0QkFBQTtFQVhKO0FBQ0Y7QUFhQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FBWEY7QUFjQTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQVhGO0FBY0E7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBWEY7QUFjQTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQVhGO0FBY0E7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0FBWEY7QUFjQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQVhGO0FBY0E7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQVhKO0FBY0E7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFYRjtBQWNBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQVhGO0FBY0E7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FBWEY7QUFjQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFYRjtBQWNBO0VBQ0ksaUJBQUE7QUFYSjtBQWNBO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0FBWEo7QUFjRTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQVhKO0FBY0U7RUFDRSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FBWEo7QUFjRTtFQUNFLCtCQUFBO0FBWEo7QUFjRTtFQUNFLHFCQUFBO0FBWEo7QUFjQSxzQkFBQTtBQWVBLGlCQUFBO0FBQ0E7RUFDRSxhQUFBO0FBekJGO0FBNEJBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSwrREFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSwwQkFBQTtFQWdCRSxvQkFBQTtBQXhDSjtBQTBCRTtFQUNFLFdBQUE7QUF4Qko7QUEwQkk7RUFDRSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxpQ0FBQTtBQXhCTjtBQTRCRTtFQUNFLGdEQUFBO0FBMUJKO0FBNkRFO0VBL0VBLG1CQWdEa0I7RUEvQ2xCLFdBQUE7QUFxQkY7QUFuQkU7RUFDRSxtQkE0Q2dCO0VBM0NoQixtQkFBQTtBQXFCSjtBQW5CSTtFQUNFLHlCQXdDYztBQW5CcEI7QUFtREU7RUFoRkEsbUJBaURtQjtFQWhEbkIsV0FBQTtBQWdDRjtBQTlCRTtFQUNFLG1CQTZDaUI7RUE1Q2pCLG1CQUFBO0FBZ0NKO0FBOUJJO0VBQ0UseUJBeUNlO0FBVHJCO0FBeUNFO0VBakZBLG1CQWtEYTtFQWpEYixXQUFBO0FBMkNGO0FBekNFO0VBQ0UsbUJBOENXO0VBN0NYLG1CQUFBO0FBMkNKO0FBekNJO0VBQ0UseUJBMENTO0FBQ2Y7QUErQkU7RUFsRkEsbUJBbURZO0VBbERaLFdBQUE7QUFzREY7QUFwREU7RUFDRSxtQkErQ1U7RUE5Q1YsbUJBQUE7QUFzREo7QUFwREk7RUFDRSx5QkEyQ1E7QUFXZDtBQXFCRTtFQW5GQSxtQkFvRGM7RUFuRGQsV0FBQTtBQWlFRjtBQS9ERTtFQUNFLG1CQWdEWTtFQS9DWixtQkFBQTtBQWlFSjtBQS9ESTtFQUNFLHlCQTRDVTtBQXFCaEI7QUFXRTtFQXBGQSxtQkFxRG9CO0VBcERwQixXQUFBO0FBNEVGO0FBMUVFO0VBQ0UsbUJBaURrQjtFQWhEbEIsbUJBQUE7QUE0RUo7QUExRUk7RUFDRSx5QkE2Q2dCO0FBK0J0QjtBQUNFO0VBckZBLG1CQXNEZ0I7RUFyRGhCLFdBQUE7QUF1RkY7QUFyRkU7RUFDRSxtQkFrRGM7RUFqRGQsbUJBQUE7QUF1Rko7QUFyRkk7RUFDRSx5QkE4Q1k7QUF5Q2xCO0FBVEU7RUF0RkEsbUJBdURjO0VBdERkLFdBQUE7QUFrR0Y7QUFoR0U7RUFDRSxtQkFtRFk7RUFsRFosbUJBQUE7QUFrR0o7QUFoR0k7RUFDRSx5QkErQ1U7QUFtRGhCO0FBbkJFO0VBdkZBLG1CQXdEZTtFQXZEZixXQUFBO0FBNkdGO0FBM0dFO0VBQ0UsbUJBb0RhO0VBbkRiLG1CQUFBO0FBNkdKO0FBM0dJO0VBQ0UseUJBZ0RXO0FBNkRqQjtBQTdCRTtFQXhGQSxtQkF5RGlCO0VBeERqQixXQUFBO0FBd0hGO0FBdEhFO0VBQ0UsbUJBcURlO0VBcERmLG1CQUFBO0FBd0hKO0FBdEhJO0VBQ0UseUJBaURhO0FBdUVuQjtBQXZDRTtFQXpGQSxtQkEwRGE7RUF6RGIsV0FBQTtBQW1JRjtBQWpJRTtFQUNFLG1CQXNEVztFQXJEWCxtQkFBQTtBQW1JSjtBQWpJSTtFQUNFLHlCQWtEUztBQWlGZjtBQWpERTtFQTFGQSxtQkEyRGE7RUExRGIsV0FBQTtBQThJRjtBQTVJRTtFQUNFLG1CQXVEVztFQXREWCxtQkFBQTtBQThJSjtBQTVJSTtFQUNFLHlCQW1EUztBQTJGZjtBQTNERTtFQTNGQSxtQkE0RGU7RUEzRGYsV0FBQTtBQXlKRjtBQXZKRTtFQUNFLG1CQXdEYTtFQXZEYixtQkFBQTtBQXlKSjtBQXZKSTtFQUNFLHlCQW9EVztBQXFHakI7QUFyRUU7RUE1RkEsbUJBNkRnQjtFQTVEaEIsV0FBQTtBQW9LRjtBQWxLRTtFQUNFLG1CQXlEYztFQXhEZCxtQkFBQTtBQW9LSjtBQWxLSTtFQUNFLHlCQXFEWTtBQStHbEI7QUEvRUU7RUE3RkEsbUJBOERtQjtFQTdEbkIsV0FBQTtBQStLRjtBQTdLRTtFQUNFLG1CQTBEaUI7RUF6RGpCLG1CQUFBO0FBK0tKO0FBN0tJO0VBQ0UseUJBc0RlO0FBeUhyQjtBQXpGRTtFQTlGQSxtQkErRFk7RUE5RFosV0FBQTtBQTBMRjtBQXhMRTtFQUNFLG1CQTJEVTtFQTFEVixtQkFBQTtBQTBMSjtBQXhMSTtFQUNFLHlCQXVEUTtBQW1JZDtBQW5HRTtFQS9GQSxtQkFnRWdCO0VBL0RoQixXQUFBO0FBcU1GO0FBbk1FO0VBQ0UsbUJBNERjO0VBM0RkLG1CQUFBO0FBcU1KO0FBbk1JO0VBQ0UseUJBd0RZO0FBNklsQjtBQTdHRTtFQWhHQSxtQkFpRVk7RUFoRVosV0FBQTtBQWdORjtBQTlNRTtFQUNFLG1CQTZEVTtFQTVEVixtQkFBQTtBQWdOSjtBQTlNSTtFQUNFLHlCQXlEUTtBQXVKZDtBQXZIRTtFQWpHQSxtQkFrRWM7RUFqRWQsV0FBQTtBQTJORjtBQXpORTtFQUNFLG1CQThEWTtFQTdEWixtQkFBQTtBQTJOSjtBQXpOSTtFQUNFLHlCQTBEVTtBQWlLaEI7QUFqSUU7RUFsR0EsbUJBbUVtQjtFQWxFbkIsV0FBQTtBQXNPRjtBQXBPRTtFQUNFLG1CQStEaUI7RUE5RGpCLG1CQUFBO0FBc09KO0FBcE9JO0VBQ0UseUJBMkRlO0FBMktyQjtBQTNJRTtFQW5HQSxtQkFvRW1CO0VBbkVuQixXQUFBO0FBaVBGO0FBL09FO0VBQ0UsbUJBZ0VpQjtFQS9EakIsbUJBQUE7QUFpUEo7QUEvT0k7RUFDRSx5QkE0RGU7QUFxTHJCO0FBckpFO0VBcEdBLG1CQXFFYTtFQXBFYixXQUFBO0FBNFBGO0FBMVBFO0VBQ0UsbUJBaUVXO0VBaEVYLG1CQUFBO0FBNFBKO0FBMVBJO0VBQ0UseUJBNkRTO0FBK0xmO0FBL0pFO0VBckdBLG1CQXNFZTtFQXJFZixXQUFBO0FBdVFGO0FBclFFO0VBQ0UsbUJBa0VhO0VBakViLG1CQUFBO0FBdVFKO0FBclFJO0VBQ0UseUJBOERXO0FBeU1qQjtBQXpLRTtFQXRHQSxtQkF1RWM7RUF0RWQsV0FBQTtBQWtSRjtBQWhSRTtFQUNFLG1CQW1FWTtFQWxFWixtQkFBQTtBQWtSSjtBQWhSSTtFQUNFLHlCQStEVTtBQW1OaEI7QUFuTEU7RUF2R0EsbUJBd0VlO0VBdkVmLFdBQUE7QUE2UkY7QUEzUkU7RUFDRSxtQkFvRWE7RUFuRWIsbUJBQUE7QUE2Uko7QUEzUkk7RUFDRSx5QkFnRVc7QUE2TmpCO0FBN0xFO0VBeEdBLG1CQXlFbUI7RUF4RW5CLFdBQUE7QUF3U0Y7QUF0U0U7RUFDRSxtQkFxRWlCO0VBcEVqQixtQkFBQTtBQXdTSjtBQXRTSTtFQUNFLHlCQWlFZTtBQXVPckI7QUF2TUU7RUF6R0EsbUJBMEVlO0VBekVmLFdBQUE7QUFtVEY7QUFqVEU7RUFDRSxtQkFzRWE7RUFyRWIsbUJBQUE7QUFtVEo7QUFqVEk7RUFDRSx5QkFrRVc7QUFpUGpCO0FBak5FO0VBMUdBLG1CQTJFZ0I7RUExRWhCLFdBQUE7QUE4VEY7QUE1VEU7RUFDRSxtQkF1RWM7RUF0RWQsbUJBQUE7QUE4VEo7QUE1VEk7RUFDRSx5QkFtRVk7QUEyUGxCO0FBck5FO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0FBdU5KO0FBbk5BLGFBQUE7QUFDQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlDQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0FBc05GO0FBcE5FO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSx5QkFBQTtFQUNBLGdDQUFBO0FBc05KO0FBbE5BO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFxTkYiLCJmaWxlIjoic2tpbGxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zOndnaHRAMzAwOzQwMDs2MDAmZGlzcGxheT1zd2FwJyk7XHJcblxyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0OndnaHRAMTAwOzIwMDszMDA7NDAwOzUwMDs2MDA7NzAwOzgwMDs5MDAmZmFtaWx5PU51bml0bzp3Z2h0QDIwMDszMDA7NDAwOzUwMDs2MDA7NzAwOzgwMDs5MDA7MTAwMCZkaXNwbGF5PXN3YXAnKTtcclxuXHJcbiRtYWluLWNvbG9yOiAjMDAyNzMzO1xyXG4kZGFyay1jb2xvcjogIzAwMTkyNTtcclxuJGxpZ2h0LWNvbG9yOiAjODdBNEI2O1xyXG4kbWVkaXVtLWxpZ2h0LWNvbG9yOiAjMDEzNzQ3O1xyXG5cclxuXHJcbi5ib3gge1xyXG4gIGZsZXg6IDEgMSAxNSU7XHJcbiAgLy8gYmFja2dyb3VuZDokZGFyay1jb2xvcjtcclxuICAvLyBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNSkgMHB4IDBweCAyNHB4O1xyXG4gIC8vIHBhZGRpbmc6IDI1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIC8vIGJvcmRlcjogMTBweCBzb2xpZCAkbWVkaXVtLWxpZ2h0LWNvbG9yO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW47ICAgICAgXHJcbiAgLy8gYm9yZGVyLXJhZGl1czogNjAlIDMzJSAyNiUgNjclIC8gNTElIDYyJSAyOCUgNDElOyAgICAgXHJcblxyXG4gIC5pbWFnZXtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0IDAuMXM7XHJcbiAgICBpbWd7XHJcbiAgICAgIG1heC13aWR0aDogNzVweDtcclxuICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC50aXRsZXtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiA0NzA7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgLy8gYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjUpIDIwcHggMjBweCAzMHB4O1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xyXG5cclxuICAgIC5pbWFnZXtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpIHRyYW5zbGF0ZVkoLTIwcHgpO1xyXG4gICAgICBpbWd7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBib3VuY2luZyAwLjVzIC4zczsgXHJcbiAgICAgIH0gICAgICAgICAgXHJcbiAgICB9XHJcbiAgICAudGl0bGV7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgZm9udC1zaXplOiAxcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEobWF4LXdpZHRoOjExMDBweCkge1xyXG4gICAgZmxleDogMSAwIDI1JTtcclxuICB9XHJcbiAgQG1lZGlhKG1heC13aWR0aDo2MzBweCkge1xyXG4gICAgZmxleDogMSAwIDM1JTtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAuaW1hZ2Uge1xyXG5cclxuICAgICAgaW1ne1xyXG4gICAgICAgIG1heC13aWR0aDogNTBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcbkBrZXlmcmFtZXMgYm91bmNpbmcge1xyXG5mcm9tLCB0byB7IHRyYW5zZm9ybTogc2NhbGUoMSwgMSk7IH1cclxuMjUlIHsgdHJhbnNmb3JtOiBzY2FsZSgwLjksIDEuMSk7IH1cclxuNTAlIHsgdHJhbnNmb3JtOiBzY2FsZSgxLjEsIDAuOSk7IH1cclxuNzUlIHsgdHJhbnNmb3JtOiBzY2FsZSgwLjk1LCAxLjA1KTsgfVxyXG59XHJcblxyXG4uc2tpbGxzLXBhZ2Uge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcclxuICBwYWRkaW5nOiA1JSA1JTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4uc2tpbGxzLWNvbnRlbnQge1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgbWluLXdpZHRoOiAzMDBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBwYWRkaW5nOiA1JSA1JTtcclxufVxyXG5cclxuLmgxY29udGFpbmVye1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgbWluLXdpZHRoOiAzMDBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBtYXJnaW4tYm90dG9tOiAxMCU7XHJcbn1cclxuXHJcbi5za2lsbHMtY29udGVudDIge1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgbWluLXdpZHRoOiAzMDBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBtYXJnaW4tdG9wOiAxOCU7XHJcbiAgcGFkZGluZy1sZWZ0OiA1JTtcclxufVxyXG5cclxuLmljb24tc2V0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMyU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLmxvZ29zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5sb2dvcyAueWVhciB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMuNGVtO1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxufVxyXG5cclxuLmxvZ29zIC5qb2ItaWNvbiB7XHJcbiAgbWF4LXdpZHRoOiAzNnB4O1xyXG4gIGhlaWdodDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG59XHJcblxyXG4ubG9nb3MgLmxvZ28tZGV0YWlscyBoMS5yb2xlIHtcclxuICBmb250LXNpemU6IDEuMmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MjA7XHJcbiAgbWFyZ2luLWJvdHRvbTogOCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDMwJTtcclxuICBtYXJnaW4tcmlnaHQ6IDMwJTtcclxufVxyXG5cclxuLmxvZ29zIC5sb2dvLWRldGFpbHMgaDIuY29tcGFueSB7XHJcbiAgZm9udC1zaXplOiAxLjFlbTtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG59XHJcblxyXG4uaWNvbi1zZXQgcC5kZXNjcmlwdGlvbiB7XHJcbiAgZm9udC1zaXplOiAxZW07XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbiAgcGFkZGluZzogMCAxMCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDYwcHg7XHJcbn1cclxuXHJcbi5sb2dvLWRldGFpbHN7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxuLmxvZ29zIC5qb2ItbGluayB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogaW5oZXJpdDtcclxuICB9XHJcbiAgXHJcbiAgLmxvZ29zIC5qb2ItbGluazpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogaW5oZXJpdDtcclxuICB9XHJcbiAgXHJcbiAgLmxvZ29zIC5qb2ItbGluazpmb2N1cyB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5qb2ItaWNvbiB7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xyXG4gIH1cclxuICBcclxuICAuam9iLWljb246aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gIH1cclxuXHJcbi8qIFNvY2lhbCBJY29uIE1peGluICovXHJcbkBtaXhpbiBzb2NpYWwtaWNvbigkY29sb3IpIHtcclxuICBiYWNrZ3JvdW5kOiAkY29sb3I7XHJcbiAgY29sb3I6ICNmZmY7XHJcblxyXG4gIC50b29sdGlwIHtcclxuICAgIGJhY2tncm91bmQ6ICRjb2xvcjtcclxuICAgIGNvbG9yOiBjdXJyZW50Q29sb3I7XHJcblxyXG4gICAgJjphZnRlciB7XHJcbiAgICAgIGJvcmRlci10b3AtY29sb3I6ICRjb2xvcjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8qIFNvY2lhbCBJY29ucyAqL1xyXG4uc29jaWFsLWljb25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uc29jaWFsLWljb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDgwcHg7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG4gIG1hcmdpbjogMCAwLjVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2EgTmV1ZVwiLCBcIkhlbHZldGljYVwiLCBcIkFyaWFsXCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG5cclxuICAgIC50b29sdGlwIHtcclxuICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTE1MCUpO1xyXG4gICAgfVxyXG4gIH1cclxuICAgIFxyXG4gICY6YWN0aXZlIHtcclxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC41KSBpbnNldDtcclxuICB9XHJcblxyXG4gICAgLyogQ29sb3IgVmFyaWFibGVzICovXHJcbiAgJGNvbG9yLWJvb3RzdHJhcDogIzU1M2Q3YztcclxuICAkY29sb3ItamF2YXNjcmlwdDogI2U0ZDA0YjtcclxuICAkY29sb3ItaHRtbDogI2YxNTkzMTtcclxuICAkY29sb3ItY3NzOiAjMjU0ZGUzO1xyXG4gICRjb2xvci1yZWFjdDogIzQzYzNlYztcclxuICAkY29sb3ItcmVhY3RuYXRpdmU6ICM0M2MzZWM7XHJcbiAgJGNvbG9yLWFuZ3VsYXI6ICNlMjMyMzc7XHJcbiAgJGNvbG9yLWlvbmljOiAjMzg4MGZmO1xyXG4gICRjb2xvci1qYXNwZXI6ICMwMDVmOWU7XHJcbiAgJGNvbG9yLXRhaWx3aW5kOiAjMDFiN2Q2O1xyXG4gICRjb2xvci1zYXNzOiAjY2Y2NDlhO1xyXG4gICRjb2xvci1sZXNzOiAjMTcyYjRhO1xyXG4gICRjb2xvci1qcXVlcnk6ICMwODY4YWM7XHJcbiAgJGNvbG9yLWNoYXJ0anM6ICNmMjcxNzU7XHJcbiAgJGNvbG9yLXR5cGVzY3JpcHQ6ICMyZDc5Yzc7XHJcbiAgJGNvbG9yLXBocDogIzRiNTY4YztcclxuICAkY29sb3ItbGFyYXZlbDogI2YyMmIxZTtcclxuICAkY29sb3ItYXdzOiAjZjI5MTAwO1xyXG4gICRjb2xvci1teXNxbDogIzAwNWM4NTtcclxuICAkY29sb3ItcGhwbXlhZG1pbjogI2U3NmMwMDtcclxuICAkY29sb3ItcG9zdGdyZXNxbDogIzMwNjI4YTtcclxuICAkY29sb3ItamF2YTogIzNhNzViMDtcclxuICAkY29sb3Itc3FsaXRlOiAjMmY5MmNlO1xyXG4gICRjb2xvci1wbHNxbDogIzgyMGI0ODtcclxuICAkY29sb3ItdGFsZW5kOiAjMTgzZTY2O1xyXG4gICRjb2xvci1vcmFjbGVhcGV4OiAjYmQ0MjMxO1xyXG4gICRjb2xvci1ub2RlanM6ICM5MmI1NGM7XHJcbiAgJGNvbG9yLXZhZ3JhbnQ6ICMxMTc4ZjI7XHJcblxyXG5cclxuICBcclxuICAmLS1ib290c3RyYXAgeyBAaW5jbHVkZSBzb2NpYWwtaWNvbigkY29sb3ItYm9vdHN0cmFwKTsgfVxyXG4gICYtLWphdmFzY3JpcHQgeyBAaW5jbHVkZSBzb2NpYWwtaWNvbigkY29sb3ItamF2YXNjcmlwdCk7IH1cclxuICAmLS1odG1sIHsgQGluY2x1ZGUgc29jaWFsLWljb24oJGNvbG9yLWh0bWwpOyB9XHJcbiAgJi0tY3NzIHsgQGluY2x1ZGUgc29jaWFsLWljb24oJGNvbG9yLWNzcyk7IH1cclxuICAmLS1yZWFjdCB7IEBpbmNsdWRlIHNvY2lhbC1pY29uKCRjb2xvci1yZWFjdCk7IH1cclxuICAmLS1yZWFjdG5hdGl2ZSB7IEBpbmNsdWRlIHNvY2lhbC1pY29uKCRjb2xvci1yZWFjdG5hdGl2ZSk7IH1cclxuICAmLS1hbmd1bGFyIHsgQGluY2x1ZGUgc29jaWFsLWljb24oJGNvbG9yLWFuZ3VsYXIpOyB9XHJcbiAgJi0taW9uaWMgeyBAaW5jbHVkZSBzb2NpYWwtaWNvbigkY29sb3ItaW9uaWMpOyB9XHJcbiAgJi0tamFzcGVyIHsgQGluY2x1ZGUgc29jaWFsLWljb24oJGNvbG9yLWphc3Blcik7IH1cclxuICAmLS10YWlsd2luZCB7IEBpbmNsdWRlIHNvY2lhbC1pY29uKCRjb2xvci10YWlsd2luZCk7IH1cclxuICAmLS1zYXNzIHsgQGluY2x1ZGUgc29jaWFsLWljb24oJGNvbG9yLXNhc3MpOyB9XHJcbiAgJi0tbGVzcyB7IEBpbmNsdWRlIHNvY2lhbC1pY29uKCRjb2xvci1sZXNzKTsgfVxyXG4gICYtLWpxdWVyeSB7IEBpbmNsdWRlIHNvY2lhbC1pY29uKCRjb2xvci1qcXVlcnkpOyB9XHJcbiAgJi0tY2hhcnRqcyB7IEBpbmNsdWRlIHNvY2lhbC1pY29uKCRjb2xvci1jaGFydGpzKTsgfVxyXG4gICYtLXR5cGVzY3JpcHQgeyBAaW5jbHVkZSBzb2NpYWwtaWNvbigkY29sb3ItdHlwZXNjcmlwdCk7IH1cclxuICAmLS1waHAgeyBAaW5jbHVkZSBzb2NpYWwtaWNvbigkY29sb3ItcGhwKTsgfVxyXG4gICYtLWxhcmF2ZWwgeyBAaW5jbHVkZSBzb2NpYWwtaWNvbigkY29sb3ItbGFyYXZlbCk7IH1cclxuICAmLS1hd3MgeyBAaW5jbHVkZSBzb2NpYWwtaWNvbigkY29sb3ItYXdzKTsgfVxyXG4gICYtLW15c3FsIHsgQGluY2x1ZGUgc29jaWFsLWljb24oJGNvbG9yLW15c3FsKTsgfVxyXG4gICYtLXBocG15YWRtaW4geyBAaW5jbHVkZSBzb2NpYWwtaWNvbigkY29sb3ItcGhwbXlhZG1pbik7IH1cclxuICAmLS1wb3N0Z3Jlc3FsIHsgQGluY2x1ZGUgc29jaWFsLWljb24oJGNvbG9yLXBvc3RncmVzcWwpOyB9XHJcbiAgJi0tamF2YSB7IEBpbmNsdWRlIHNvY2lhbC1pY29uKCRjb2xvci1qYXZhKTsgfVxyXG4gICYtLXNxbGl0ZSB7IEBpbmNsdWRlIHNvY2lhbC1pY29uKCRjb2xvci1zcWxpdGUpOyB9XHJcbiAgJi0tcGxzcWwgeyBAaW5jbHVkZSBzb2NpYWwtaWNvbigkY29sb3ItcGxzcWwpOyB9XHJcbiAgJi0tdGFsZW5kIHsgQGluY2x1ZGUgc29jaWFsLWljb24oJGNvbG9yLXRhbGVuZCk7IH1cclxuICAmLS1vcmFjbGVhcGV4IHsgQGluY2x1ZGUgc29jaWFsLWljb24oJGNvbG9yLW9yYWNsZWFwZXgpOyB9XHJcbiAgJi0tbm9kZWpzIHsgQGluY2x1ZGUgc29jaWFsLWljb24oJGNvbG9yLW5vZGVqcyk7IH1cclxuICAmLS12YWdyYW50IHsgQGluY2x1ZGUgc29jaWFsLWljb24oJGNvbG9yLXZhZ3JhbnQpOyB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuICBcclxuICBpIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMXB4O1xyXG4gIH1cclxufVxyXG5cclxuLyogVG9vbHRpcHMgKi9cclxuLnRvb2x0aXAge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHBhZGRpbmc6IDAuOHJlbSAxcmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgb3BhY2l0eTogMDtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC0xMDAlKTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgXHJcbiAgJjphZnRlciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMXB4O1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgYm9yZGVyOiBzb2xpZDtcclxuICAgIGJvcmRlci13aWR0aDogMTBweCAxMHB4IDAgMTBweDtcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAxMDAlKTtcclxuICB9XHJcbn1cclxuXHJcbi5pY29uIHtcclxuICB3aWR0aDogNTBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SkillsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-skills',
                templateUrl: './skills.component.html',
                styleUrls: ['./skills.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "fp1T":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 21, vars: 0, consts: [[1, "about-page"], [1, "about-image"], ["src", "assets/man.jpg", "alt", "Image description"], [1, "about-content"], [2, "margin-bottom", "130px"], [2, "font-size", "34px", "margin-bottom", "10px"], [2, "font-weight", "bold"], [2, "font-weight", "bold", "font-size", "20px", "margin-top", "120px"], [2, "margin-top", "0px"], ["href", "https://github.com/DarrelMendoza", "target", "_blank"], ["src", "assets/github.png", "alt", "GitHub", 2, "width", "40px", "height", "40px", "margin-right", "10px"], ["href", "https://www.linkedin.com/in/darrelmendoza/", "target", "_blank"], ["src", "assets/linkedin.png", "alt", "LinkedIn", 2, "width", "43px", "height", "43px", "margin-right", "10px"], ["href", "https://www.facebook.com/darrel.mendoza.12/", "target", "_blank"], ["src", "assets/facebook.png", "alt", "Facebook", 2, "width", "55px", "height", "55px", "margin-right", "10px"], ["href", "https://www.instagram.com/darpaaax/", "target", "_blank"], ["src", "assets/instagram.png", "alt", "Instagram", 2, "width", "39px", "height", "39px", "margin-right", "10px"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Reach out");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Darrel Mendoza");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "darrelmendoza85@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "CONNECT WITH ME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');\r\n\r\n.about-page[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    height: 100vh;\r\n    background-color: #000;\r\n}\r\n\r\n.about-content[_ngcontent-%COMP%] {\r\n    width: 90%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    padding: 0 0%; \r\n}\r\n\r\n.about-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    font-family: DM Sans;\r\n    font-weight: bold;\r\n    font-size: 3.5em;\r\n    margin-bottom: 1em;\r\n}\r\n\r\n.about-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    font-family: 'Open Sans', sans-serif;\r\n    font-size: 1.5em;\r\n    line-height: 1.6;\r\n}\r\n\r\n.about-image[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding: 0 5%; \r\n}\r\n\r\n.about-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    max-width: 85%; \r\n    height: auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHVGQUF1Rjs7QUFFdkY7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixhQUFhLEVBQUUsaUNBQWlDO0FBQ3BEOztBQUVBO0lBQ0ksV0FBVztJQUNYLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxvQ0FBb0M7SUFDcEMsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixhQUFhLEVBQUUsa0NBQWtDO0FBQ3JEOztBQUVBO0lBQ0ksY0FBYyxFQUFFLHVEQUF1RDtJQUN2RSxZQUFZO0FBQ2hCIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zOndnaHRAMzAwJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuLmFib3V0LXBhZ2Uge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG59XHJcblxyXG4uYWJvdXQtY29udGVudCB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDAgMCU7IC8qIEFkZCBzb21lIHBhZGRpbmcgdG8gdGhlIHRleHQgKi9cclxufVxyXG5cclxuLmFib3V0LWNvbnRlbnQgaDEge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LWZhbWlseTogRE0gU2FucztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAzLjVlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcclxufVxyXG5cclxuLmFib3V0LWNvbnRlbnQgcCB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS42O1xyXG59XHJcblxyXG4uYWJvdXQtaW1hZ2Uge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwIDUlOyAvKiBBZGQgc29tZSBwYWRkaW5nIHRvIHRoZSBpbWFnZSAqL1xyXG59XHJcblxyXG4uYWJvdXQtaW1hZ2UgaW1nIHtcclxuICAgIG1heC13aWR0aDogODUlOyAvKiBBZGp1c3QgdGhpcyB2YWx1ZSB0byBjb250cm9sIHRoZSBzaXplIG9mIHRoZSBpbWFnZSAqL1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "jJNC":
/*!****************************************************!*\
  !*** ./src/app/blogs-page/blogs-page.component.ts ***!
  \****************************************************/
/*! exports provided: BlogsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogsPageComponent", function() { return BlogsPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class BlogsPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
BlogsPageComponent.ɵfac = function BlogsPageComponent_Factory(t) { return new (t || BlogsPageComponent)(); };
BlogsPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlogsPageComponent, selectors: [["app-blogs-page"]], decls: 46, vars: 0, consts: [[1, "contribution-page"], [2, "font-size", "3.5em", "text-align", "center", "padding", "100px", "color", "#343434"], [1, "row"], [1, "col-4"], [1, "component-card"], [1, "component-card_image"], [1, "component-card_image-inside"], ["src", "assets/pexels-olia-danilevich-4974915.jpg", "alt", "", "title", ""], [1, "blog-detail"], ["href", "#", 1, "btn", "btn-read-more"], ["src", "assets/pexels-shvets-production-7176305.jpg", "alt", "", "title", ""], ["src", "assets/pexels-andrea-piacquadio-3761504.jpg", "alt", "", "title", ""]], template: function BlogsPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "My Blog Posts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "My Experience as a Self-Taught Developer: Unlocking the Path to Success");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "December 4, 2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "In the rapidly evolving technology landscape, I found my calling as a self-taught developer. Facing initial skepticism due to my lack of formal education, I utilized online resources to master programming languages like Python, JavaScript, and HTML/CSS. This journey involved embracing challenges as opportunities, cultivating a problem-solving mindset, and fostering resilience. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Embracing Authenticity: Overcoming the Burden of Others' Opinions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "December 4, 2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "In a society where judgments and expectations can often dictate our actions, this article explores how adopting a mindset of indifference to others' opinions can lead to a more fulfilling and authentic life. Growing up, we're conditioned to seek validation, allowing the views of family, friends, and strangers to dictate our self-worth. This dependence on external approval, however, can trap us in a cycle of comparison and self-doubt.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "The Road to Success: Embracing Sacrifice for a Brighter Future");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "December 4, 2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "In this article, the road to success is dissected, particularly focusing on the inherent role of sacrifice. I learned that success doesn't simply fall into our laps; it's the product of commitment, effort, and often, difficult choices. Remarkable achievements aren't reached without surrendering some comforts along the way.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".contribution-page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  height: 105vh;\n  text-align: center;\n  padding: 6% 10%;\n  background-color: #f6f6f6;\n}\n\n.component-card[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%], .component-card[_ngcontent-%COMP%]:focus   img[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n}\n\n.component-card_image[_ngcontent-%COMP%] {\n  background: #fff;\n  height: 0;\n  overflow: hidden;\n  padding-bottom: 56.2%;\n  position: relative;\n}\n\n.component-card_image-inside[_ngcontent-%COMP%] {\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n\n.component-card_image-inside[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  background-size: cover;\n  height: auto !important;\n  transform: scale(1);\n  transition: all 0.25s ease-in-out;\n  width: 100%;\n}\n\n.component-card[_ngcontent-%COMP%]   .blog-detail[_ngcontent-%COMP%] {\n  background: #fff;\n  margin: 0 20px;\n  padding: 20px;\n  position: relative;\n  top: -80px;\n}\n\n.component-card[_ngcontent-%COMP%]   .blog-detail[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 22px;\n  margin: 0;\n  text-transform: uppercase;\n}\n\n.component-card[_ngcontent-%COMP%]   .blog-detail[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #737373;\n  font-size: 14px;\n}\n\n.component-card[_ngcontent-%COMP%]   .blog-detail[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  margin-top: 0;\n}\n\n.component-card[_ngcontent-%COMP%]   .blog-detail[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  color: #fff;\n  border-radius: 0.25rem;\n  display: inline-block;\n  font-weight: 400;\n  line-height: 1.5;\n  padding: 0.375rem 0.75rem;\n  text-align: center;\n  -webkit-user-select: none;\n          user-select: none;\n  vertical-align: middle;\n  text-decoration: none;\n}\n\n.component-card[_ngcontent-%COMP%]   .blog-detail[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n  transform: scale(1.05);\n  \n}\n\n.component-card[_ngcontent-%COMP%]   .blog-detail[_ngcontent-%COMP%]   .btn-read-more[_ngcontent-%COMP%] {\n  background: #343434;\n  border-radius: 0;\n  border: 2px solid #343434;\n  outline: none;\n  text-transform: uppercase;\n  color: #fff;\n  transition: background-color 0.5s ease, transform 0.5s ease;\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGJsb2dzLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBS007RUFBTSxxQkFBQTtBQURaOztBQUlJO0VBQ0UsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBRk47O0FBSU07RUFDRSxZQUFBO0VBQ0EsT0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7QUFGUjs7QUFJUTtFQUNFLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlDQUFBO0VBQ0EsV0FBQTtBQUZWOztBQU9JO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQUxOOztBQU9NO0VBQ0UsZUFBQTtFQUNBLFNBQUE7RUFDQSx5QkFBQTtBQUxSOztBQVFNO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUFOUjs7QUFTTTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtBQVBSOztBQVVNO0VBQ0UsV0FBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0FBUlI7O0FBV1E7RUFHRSxxQkFBQTtFQUdBLHNCQUFBO0VBQXdCLHNDQUFBO0FBWmxDOztBQWdCTTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSwyREFBQTtFQUE2RCxVQUFBO0FBYnJFIiwiZmlsZSI6ImJsb2dzLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udHJpYnV0aW9uLXBhZ2Uge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGhlaWdodDogMTA1dmg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDYlIDEwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xyXG59XHJcblxyXG4uY29tcG9uZW50LWNhcmQge1xyXG4gICAgJjpob3ZlcixcclxuICAgICY6Zm9jdXMge1xyXG4gICAgICBpbWcgeyB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7IH1cclxuICAgIH1cclxuICBcclxuICAgICZfaW1hZ2Uge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICBoZWlnaHQ6IDA7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiA1Ni4yJTtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIFxyXG4gICAgICAmLWluc2lkZSB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICBcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuMjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9ICBcclxuICAgIFxyXG4gICAgLmJsb2ctZGV0YWlsIHtcclxuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgbWFyZ2luOiAwIDIwcHg7XHJcbiAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgdG9wOiAtODBweDtcclxuICAgIFxyXG4gICAgICBoMyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIGxhYmVsIHtcclxuICAgICAgICBjb2xvcjogIzczNzM3MztcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgcCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIC5idG4ge1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICAgIHBhZGRpbmc6IC4zNzVyZW0gLjc1cmVtO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHJcbiAgXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgLy8gY29sb3I6ICMzNDM0MzQ7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAvLyBib3JkZXI6IDJweCBzb2xpZCAjMzQzNDM0O1xyXG4gICAgICAgICAgLy8gdHJhbnNmb3JtOiAyO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTsgLyogQnV0dG9uIHNsaWdodGx5IGVubGFyZ2VzIG9uIGhvdmVyICovXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIC5idG4tcmVhZC1tb3JlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMzQzNDM0O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzM0MzQzNDtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjVzIGVhc2UsIHRyYW5zZm9ybSAwLjVzIGVhc2U7IC8qIEFkZGVkICovXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogsPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-blogs-page',
                templateUrl: './blogs-page.component.html',
                styleUrls: ['./blogs-page.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "kWWo":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




const _c0 = function (a0) { return { "active": a0 }; };
class NavbarComponent {
    constructor(router) {
        this.router = router;
        this.activeLink = '/landing-page';
        this.previousActiveLink = '/landing-page';
    }
    ngOnInit() {
        this.onScroll();
    }
    isLinkActive(link) {
        return this.activeLink === link;
    }
    toLandingPage() {
        document.getElementById("landing-page").scrollIntoView({ behavior: "smooth" });
    }
    toAboutPage() {
        document.getElementById("about-page").scrollIntoView({ behavior: "smooth" });
    }
    toExperiencePage() {
        document.getElementById("experience-page").scrollIntoView({ behavior: "smooth" });
    }
    toSkillsPage() {
        document.getElementById("skills-page").scrollIntoView({ behavior: "smooth" });
    }
    toProjectsPage() {
        document.getElementById("projects-page").scrollIntoView({ behavior: "smooth" });
    }
    toBlogsPage() {
        document.getElementById("blogs-page").scrollIntoView({ behavior: "smooth" });
    }
    toContactsPage() {
        document.getElementById("footer").scrollIntoView({ behavior: "smooth" });
    }
    onScroll() {
        const sections = [
            { id: 'landing-page', link: '/landing-page' },
            { id: 'about-page', link: '/about-page' },
            { id: 'experience-page', link: '/experience-page' },
            { id: 'skills-page', link: '/skills-page' },
            { id: 'projects-page', link: '/projects-page' },
            { id: 'blogs-page', link: '/blogs-page' },
            { id: 'footer', link: '/contacts-page' }
        ];
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        for (const section of sections) {
            const element = document.getElementById(section.id);
            if (element && scrollPosition >= element.offsetTop - 100) {
                this.previousActiveLink = this.activeLink;
                this.activeLink = section.link;
            }
        }
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], hostBindings: function NavbarComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function NavbarComponent_scroll_HostBindingHandler($event) { return ctx.onScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 25, vars: 21, consts: [[1, "menubar"], [1, "logo"], ["src", "assets/all-white-logo-dm.png", "width", "60", "alt", "logo"], [1, "navigation"], [3, "ngClass", "click"], ["routerLink", "/landing-page"], ["routerLink", "/about-page"], ["routerLink", "/experience-page"], ["routerLink", "/skills-page"], ["routerLink", "/projects-page"], ["routerLink", "/blogs-page"], ["routerLink", "/contacts-page"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_li_click_4_listener() { return ctx.toLandingPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_li_click_7_listener() { return ctx.toAboutPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_li_click_10_listener() { return ctx.toExperiencePage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_li_click_13_listener() { return ctx.toSkillsPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_li_click_16_listener() { return ctx.toProjectsPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_li_click_19_listener() { return ctx.toBlogsPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Blogs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_li_click_22_listener() { return ctx.toContactsPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.isLinkActive("/landing-page")));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx.isLinkActive("/about-page")));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, ctx.isLinkActive("/experience-page")));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c0, ctx.isLinkActive("/skills-page")));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c0, ctx.isLinkActive("/projects-page")));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c0, ctx.isLinkActive("/blogs-page")));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c0, ctx.isLinkActive("/contacts-page")));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".menubar[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  background-color: #343434;\r\n  color: #fff;\r\n  padding: 10px;\r\n  z-index: 1000; \r\n}\r\n\r\ndl[_ngcontent-%COMP%], ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%] {\r\n  margin-top: 1rem;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.logo[_ngcontent-%COMP%] {\r\n  font-size: 1.5rem;\r\n  font-weight: bold;\r\n  margin-left: 110px;\r\n}\r\n\r\n.navigation[_ngcontent-%COMP%] {\r\n  list-style-type: none;\r\n  display: flex;\r\n  font-family: DM Sans;\r\n  cursor: pointer;\r\n  margin-right: 80px;\r\n}\r\n\r\n.navigation[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  margin-right: 50px;\r\n}\r\n\r\n.navigation[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  border-bottom: 1px solid rgb(255, 255, 255);\r\n  width: 100%;\r\n  position: relative;\r\n}\r\n\r\n.navigation[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  bottom: -1px;\r\n  left: 50%;\r\n  transform: translateX(-50%);\r\n  width: 120%;\r\n  height: 1px;\r\n  background-color: #fff;\r\n}\r\n\r\n.navigation[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  color: #fff;\r\n  text-decoration: none;\r\n  transition: transform 0.1s ease-in-out;\r\n  display: inline-block;\r\n}\r\n\r\n.navigation[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  bottom: -1px;\r\n  left: 50%;\r\n  transform: translateX(-50%) translateY(5px) scaleX(0);\r\n  transform-origin: center center;\r\n  width: 100%;\r\n  height: 1px;\r\n  background-color: #fff;\r\n  opacity: 0;\r\n  transition: all 0.2s ease-in-out;\r\n}\r\n\r\n.navigation[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  transform: translateY(-0.8px);\r\n}\r\n\r\n.navigation[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  bottom: -1px;\r\n  left: 50%;\r\n  transform: translateX(-50%) translateY(5px) scaleX(0);\r\n  transform-origin: center center;\r\n  width: 100%;\r\n  height: 1px;\r\n  background-color: #fff;\r\n  opacity: 0;\r\n  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out; \r\n}\r\n\r\n.navigation[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active.active-transition[_ngcontent-%COMP%]:after {\r\n  opacity: 1;\r\n  transform: translateX(-50%) translateY(0) scaleX(1);\r\n  transition-delay: 0.1s;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsYUFBYTtFQUNiLGFBQWEsRUFBRSxpREFBaUQ7QUFDbEU7O0FBRUE7OztFQUdFLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSwyQ0FBMkM7RUFDM0MsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFNBQVM7RUFDVCwyQkFBMkI7RUFDM0IsV0FBVztFQUNYLFdBQVc7RUFDWCxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixzQ0FBc0M7RUFDdEMscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osU0FBUztFQUNULHFEQUFxRDtFQUNyRCwrQkFBK0I7RUFDL0IsV0FBVztFQUNYLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFNBQVM7RUFDVCxxREFBcUQ7RUFDckQsK0JBQStCO0VBQy9CLFdBQVc7RUFDWCxXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixnRUFBZ0UsRUFBRSxpQ0FBaUM7QUFDckc7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsbURBQW1EO0VBQ25ELHNCQUFzQjtBQUN4QiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW51YmFyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzNDM0O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgei1pbmRleDogMTAwMDsgLyogRW5zdXJlIG5hdmJhciBzdGF5cyBvbiB0b3Agb2Ygb3RoZXIgZWxlbWVudHMgKi9cclxufVxyXG5cclxuZGwsXHJcbm9sLFxyXG51bCB7XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG4ubG9nbyB7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWFyZ2luLWxlZnQ6IDExMHB4O1xyXG59XHJcblxyXG4ubmF2aWdhdGlvbiB7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZm9udC1mYW1pbHk6IERNIFNhbnM7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG1hcmdpbi1yaWdodDogODBweDtcclxufVxyXG5cclxuLm5hdmlnYXRpb24gbGkge1xyXG4gIG1hcmdpbi1yaWdodDogNTBweDtcclxufVxyXG5cclxuLm5hdmlnYXRpb24gbGkuYWN0aXZlIGEge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ubmF2aWdhdGlvbiBsaSBhLmFjdGl2ZTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogLTFweDtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gIHdpZHRoOiAxMjAlO1xyXG4gIGhlaWdodDogMXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5uYXZpZ2F0aW9uIGxpIGEge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBjb2xvcjogI2ZmZjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMXMgZWFzZS1pbi1vdXQ7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4ubmF2aWdhdGlvbiBsaSBhOmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IC0xcHg7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKDVweCkgc2NhbGVYKDApO1xyXG4gIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4ubmF2aWdhdGlvbiBsaSBhOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuOHB4KTtcclxufVxyXG5cclxuLm5hdmlnYXRpb24gbGkgYS5hY3RpdmU6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogLTFweDtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoNXB4KSBzY2FsZVgoMCk7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDFweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQsIG9wYWNpdHkgMC4zcyBlYXNlLWluLW91dDsgLyogVXBkYXRlIHRyYW5zaXRpb24gcHJvcGVydGllcyAqL1xyXG59XHJcblxyXG4ubmF2aWdhdGlvbiBsaSBhLmFjdGl2ZS5hY3RpdmUtdHJhbnNpdGlvbjphZnRlciB7XHJcbiAgb3BhY2l0eTogMTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgwKSBzY2FsZVgoMSk7XHJcbiAgdHJhbnNpdGlvbi1kZWxheTogMC4xcztcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, { onScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:scroll', ['$event']]
        }] }); })();


/***/ }),

/***/ "mSt+":
/*!********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.ts ***!
  \********************************************************/
/*! exports provided: LandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function() { return LandingPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class LandingPageComponent {
    constructor() { }
    handleClick() {
        window.open('https://drive.google.com/file/d/1n_RRiIEMFShczzlEV4g6tAZ1lcUaDK9d/view', '_blank');
        this.downloadFile('https://drive.google.com/uc?export=download&id=1n_RRiIEMFShczzlEV4g6tAZ1lcUaDK9d');
    }
    downloadFile(url) {
        const a = document.createElement('a');
        a.href = url;
        a.download = 'file.pdf';
        a.style.display = 'none';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
    ngOnInit() {
    }
}
LandingPageComponent.ɵfac = function LandingPageComponent_Factory(t) { return new (t || LandingPageComponent)(); };
LandingPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingPageComponent, selectors: [["app-landing-page"]], decls: 10, vars: 0, consts: [[1, "landing-page"], [1, "landing-image"], ["src", "assets/pexels-andrea-piacquadio-3844533.jpg", "alt", "Image description"], [1, "landing-content"], ["type", "button", 3, "click"]], template: function LandingPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Darrel Mendoza");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Software Engineer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingPageComponent_Template_button_click_8_listener() { return ctx.handleClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Download Resume");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');\r\n\r\n.landing-page[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    height: 100vh;\r\n    background-color: #f6f6f6;\r\n}\r\n\r\n.landing-image[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n    background-color: #d6cdcb;\r\n}\r\n\r\n.landing-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n    object-fit: cover;\r\n}\r\n\r\n.landing-content[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    text-align: center;\r\n}\r\n\r\n.landing-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    color: #343434;\r\n    font-family: DM Sans;\r\n    font-weight: Bold;\r\n    font-size: 3.5em;\r\n    margin-bottom: 0px;\r\n}\r\n\r\n.landing-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    margin-top: 0px;\r\n    color: #343434;\r\n    font-family: 'Open Sans', sans-serif;\r\n    font-size: 2.5em;\r\n    margin-bottom: 1em;\r\n}\r\n\r\n.landing-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n    font-family: DM Sans;\r\n    font-size: 1em;\r\n    padding: 1em 5em;\r\n    border: none;\r\n    background-color: #343434;\r\n    color: #fff;\r\n    cursor: pointer;\r\n    transition: background-color 0.5s ease, transform 0.5s ease; \r\n}\r\n\r\n.landing-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n    \r\n    transform: scale(1.05); \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhbmRpbmctcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHVGQUF1Rjs7QUFFdkY7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksY0FBYztJQUNkLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2Qsb0NBQW9DO0lBQ3BDLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsZUFBZTtJQUNmLDJEQUEyRCxFQUFFLFVBQVU7QUFDM0U7O0FBRUE7SUFDSSw2REFBNkQ7SUFDN0Qsc0JBQXNCLEVBQUUsc0NBQXNDO0FBQ2xFIiwiZmlsZSI6ImxhbmRpbmctcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zOndnaHRAMzAwJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuLmxhbmRpbmctcGFnZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XHJcbn1cclxuXHJcbi5sYW5kaW5nLWltYWdlIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDZjZGNiO1xyXG59XHJcblxyXG4ubGFuZGluZy1pbWFnZSBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG5cclxuLmxhbmRpbmctY29udGVudCB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5sYW5kaW5nLWNvbnRlbnQgaDEge1xyXG4gICAgY29sb3I6ICMzNDM0MzQ7XHJcbiAgICBmb250LWZhbWlseTogRE0gU2FucztcclxuICAgIGZvbnQtd2VpZ2h0OiBCb2xkO1xyXG4gICAgZm9udC1zaXplOiAzLjVlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG5cclxuLmxhbmRpbmctY29udGVudCBoMiB7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICBjb2xvcjogIzM0MzQzNDtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMi41ZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbn1cclxuXHJcbi5sYW5kaW5nLWNvbnRlbnQgYnV0dG9uIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1mYW1pbHk6IERNIFNhbnM7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICAgIHBhZGRpbmc6IDFlbSA1ZW07XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzNDM0O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNXMgZWFzZSwgdHJhbnNmb3JtIDAuNXMgZWFzZTsgLyogQWRkZWQgKi9cclxufVxyXG5cclxuLmxhbmRpbmctY29udGVudCBidXR0b246aG92ZXIge1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogIzVmNWY1ZjsgRGFya2VyIHNoYWRlIG9mIGdyZXkgb24gaG92ZXIgKi9cclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7IC8qIEJ1dHRvbiBzbGlnaHRseSBlbmxhcmdlcyBvbiBob3ZlciAqL1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-landing-page',
                templateUrl: './landing-page.component.html',
                styleUrls: ['./landing-page.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "nDjA":
/*!**********************************************************!*\
  !*** ./src/app/projects-page/projects-page.component.ts ***!
  \**********************************************************/
/*! exports provided: ProjectsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsPageComponent", function() { return ProjectsPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



const _c0 = function (a0) { return { "active": a0 }; };
function ProjectsPageComponent_li_57_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsPageComponent_li_57_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const i_r2 = ctx.index; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.changeImage(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const img_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", img_r1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, i_r2 === ctx_r0.selectedImageIndex));
} }
class ProjectsPageComponent {
    constructor(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.currentProjectIndex = -1;
        this.currentImage = '';
        this.modalOpen = false;
        this.selectedImageIndex = 0;
        this.projectImages = [
            ['./assets/projects/medtechpro-image1.png', './assets/projects/medtechpro-image2.png', './assets/projects/medtechpro-image3.png'],
            ['./assets/projects/badbeat-image1.png', './assets/projects/badbeat-image2.png', './assets/projects/badbeat-image3.png'],
            ['./assets/projects/storefront-image1.png', './assets/projects/storefront-image2.png', './assets/projects/storefront-image3.png']
        ];
        this.projectNames = [
            'MedTech Pro',
            'BadBeat E-Commerce Website',
            'Storefront 2-Way Marketplace'
        ];
        this.projectIndustries = [
            'Healthcare',
            'Fashion',
            'Online Marketplace'
        ];
        this.projectDescriptions = [
            "Introducing MedTech Pro, the revolutionary hospital management app designed to streamline and enhance the efficiency of healthcare institutions. MedTech Pro is a comprehensive and intuitive solution that combines cutting-edge technology with advanced features to empower hospitals in providing top-notch patient care while optimizing operational workflows.<br><br>With MedTech Pro, hospitals can seamlessly manage various aspects of their operations, from patient admissions and appointments to billing and inventory management. The app's user-friendly interface ensures that healthcare professionals can navigate through its features effortlessly, saving time and reducing administrative burden.<br><br>MedTech Pro revolutionizes hospital management, enabling healthcare institutions to deliver exceptional patient care while optimizing operations. By leveraging the power of technology, hospitals can enhance efficiency, reduce costs, and ultimately improve patient outcomes. Experience the future of healthcare management with MedTech Pro.",
            "BadBeat is an all-in-one digital marketplace featuring a diverse range of products from the latest electronics to fashionable clothing, from unique homeware to your favorite books, and much more. We understand that in the busy rhythm of life, convenience and speed matter the most, which is why we offer an easy-to-navigate interface, detailed product information, and a fast, reliable delivery service.<br><br>At BadBeat, we believe in the power of community. Our interactive features allow customers and sellers to connect, share experiences, and build relationships, all while making or facilitating secure, seamless transactions.<br><br>We prioritize your security, ensuring all transactions are protected with top-of-the-line encryption technologies. We are committed to providing you with a safe and secure platform to do business, because at BadBeat, the beat of trust never stops.",
            "Discover a unique and dynamic platform with the Storefront 2-Way Marketplace! Our digital hub bridges the gap between buyers and sellers, providing a vibrant space for commerce in the modern world.<br><br>As a seller, you have the power to showcase your products to a wide, interested audience. Use our advanced tools and features to set up your virtual storefront, track inventory, and manage orders with ease. Whether you're selling handmade crafts, vintage clothes, digital assets, or other unique items, our platform gives you the space and support to grow your business.<br><br>As a buyer, explore a diverse marketplace where you can find exactly what you're looking for. From unique collectibles to everyday essentials, our storefronts offer a wide range of products to suit your needs. Use the intelligent search and filter system to narrow down your options, read detailed product descriptions, and browse through customer reviews for informed purchasing decisions."
        ];
    }
    ngOnInit() {
        this.renderer.listen('window', 'click', (event) => {
            this.onClickOutsideModal(event);
        });
        // Reset selected image index when the modal is closed
        const modal = document.getElementById('myModal');
        modal.addEventListener('transitionend', () => {
            if (!this.modalOpen) {
                this.selectedImageIndex = 0;
            }
        });
    }
    openModal(index) {
        this.currentProjectIndex = index;
        this.currentImage = this.projectImages[index][0];
        const modal = document.getElementById('myModal');
        modal.style.display = 'block';
        this.modalOpen = true;
    }
    closeModal() {
        const modal = document.getElementById('myModal');
        modal.style.display = 'none';
        this.modalOpen = false;
    }
    changeImage(index) {
        this.selectedImageIndex = index;
        this.currentImage = this.projectImages[this.currentProjectIndex][index];
    }
    onClickOutsideModal(event) {
        // Check if the modal is open
        if (this.modalOpen) {
            // Get the modal element
            const modal = document.getElementById('myModal');
            // Check if the click was outside the modal
            if (event.target == modal) {
                // Close the modal
                this.closeModal();
            }
        }
    }
}
ProjectsPageComponent.ɵfac = function ProjectsPageComponent_Factory(t) { return new (t || ProjectsPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
ProjectsPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectsPageComponent, selectors: [["app-projects-page"]], decls: 67, vars: 5, consts: [["rel", "stylesheet", "href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"]("https://unpkg.com/github-calendar@latest/dist/github-calendar-responsive.css")], [1, "sample-projects-container"], [1, "header"], [1, "container"], [1, "card", 3, "click"], [1, "face", "face1", 2, "background-color", "#3ebaad !important"], [1, "content"], ["src", "./assets/medtechpro-white.png", "alt", "Image 1"], [1, "face", "face2"], [1, "btn", 2, "background-color", "#3ebaad", "color", "#fff", 3, "click"], [1, "face", "face1", 2, "background-color", "#0687ff !important"], ["src", "./assets/badbeat-white.png", "alt", "Image 1"], [1, "btn", 2, "background-color", "#0687ff", "color", "#fff", 3, "click"], [1, "face", "face1", 2, "background-color", "#5a5a5a !important"], ["src", "./assets/storefront-white.png", "alt", "Image 1"], [1, "btn", 2, "background-color", "#5a5a5a", "color", "#fff", 3, "click"], ["id", "myModal", "tabindex", "-1", 1, "modal"], [1, "modal-content"], [1, "close", 3, "click"], [1, "grid", "product"], [1, "column-xs-12", "column-md-7"], [1, "product-gallery"], [1, "product-image"], [1, "active", 3, "src"], [1, "image-list"], ["class", "image-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "column-xs-12", "column-md-5"], [2, "font-size", "20px"], [1, "description"], [3, "innerHTML"], [1, "add-to-cart"], [1, "image-item", 3, "click"], [3, "src", "ngClass"]], template: function ProjectsPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Recent Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsPageComponent_Template_div_click_5_listener() { return ctx.openModal(0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "MEDTECHPRO ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Hospital Management System");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "The Ultimate Hospital Management App designed to revolutionize healthcare administration. Made using Angular, PHP, Laravel, SQL ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsPageComponent_Template_div_click_17_listener() { return ctx.openModal(0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "LEARN MORE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsPageComponent_Template_div_click_19_listener() { return ctx.openModal(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "BADBEAT ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " E-Commerce Website");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "The number one destination for all things trendy and fashionable! Made using PHP, HTML, CSS, Javascript, SQL ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsPageComponent_Template_div_click_31_listener() { return ctx.openModal(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "LEARN MORE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsPageComponent_Template_div_click_33_listener() { return ctx.openModal(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "STOREFRONT ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "2-Way Marketplace");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Online platform that revolutionizes the way buyers and sellers interact in the digital marketplace. Created using Angular, PHP, Laravel, SQL ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsPageComponent_Template_div_click_45_listener() { return ctx.openModal(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "LEARN MORE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsPageComponent_Template_div_click_49_listener() { return ctx.closeModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "ul", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, ProjectsPageComponent_li_57_Template, 2, 4, "li", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h2", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "View Repository");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.currentImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projectImages[ctx.currentProjectIndex]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.projectNames[ctx.currentProjectIndex]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Revolutionizing ", ctx.projectIndustries[ctx.currentProjectIndex], ", One System at a Time.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.projectDescriptions[ctx.currentProjectIndex], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: [".sample-projects-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  height: 70vh;\n  text-align: center;\n  background-color: #343434;\n  padding-top: 26%;\n  padding-bottom: 22%;\n}\n.header[_ngcontent-%COMP%] {\n  color: #fff;\n  font-family: \"DM Sans\", sans-serif;\n  font-weight: bold;\n  font-size: 3.5em;\n  margin-bottom: 10px;\n}\n.card[_ngcontent-%COMP%] {\n  --bs-card-bg: #343434;\n  border: none;\n}\n.container[_ngcontent-%COMP%] {\n  width: 1000px;\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  margin-top: 80px;\n}\n.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n}\n.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .face[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 200px;\n  transition: 0.5s;\n}\n.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .face.face1[_ngcontent-%COMP%] {\n  position: relative;\n  background: #343434;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1;\n  transform: translateY(100px);\n  height: 280px;\n}\n.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover   .face.face1[_ngcontent-%COMP%] {\n  background: #343434;\n  transform: translateY(0);\n}\n.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .face.face1[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  transition: 0.5s;\n}\n.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover   .face.face1[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .face.face1[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100px;\n}\n.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .face.face1[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 10px 0 0;\n  padding: 0;\n  color: #fff;\n  text-align: center;\n  font-size: 1.4em;\n}\n.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .face.face2[_ngcontent-%COMP%] {\n  position: relative;\n  background: #fff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 20px;\n  box-sizing: border-box;\n  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);\n  transform: translateY(-100px);\n}\n.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover   .face.face2[_ngcontent-%COMP%] {\n  transform: translateY(0);\n}\n.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .face.face2[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\n.btn[_ngcontent-%COMP%] {\n  \n  width: 200px;\n  border: 1px solid #e2dfdf;\n  color: #000;\n  font-size: 15px;\n  font-family: \"Roboto\", sans-serif;\n  text-transform: capitalize;\n  text-align: center;\n  \n  cursor: pointer;\n  position: relative;\n  overflow: hidden;\n  transition: all 1s;\n  padding: 10px;\n  margin-top: 15px;\n}\n.btn[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  height: 30%;\n  width: 100%;\n  background-color: #fff;\n  top: 0;\n  left: 0;\n  transform: translateX(-100%) rotate(45deg);\n  transition: all 0.9s;\n}\n.btn[_ngcontent-%COMP%]:hover:before {\n  transform: translateX(100%) rotate(45deg);\n}\n.btn[_ngcontent-%COMP%]:hover {\n  background-color: #dbd5d5;\n  transform: scale(1.1);\n}\n.modal[_ngcontent-%COMP%] {\n  display: none;\n  position: fixed;\n  z-index: 9999;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n.modal-content[_ngcontent-%COMP%] {\n  background-color: #fefefe;\n  margin-top: 2%;\n  margin-bottom: 2%;\n  padding: 20px;\n  border: 1px solid #888;\n  width: 80%;\n  margin-left: auto;\n  margin-right: auto;\n}\n.close[_ngcontent-%COMP%] {\n  color: #aaa;\n  text-align: right;\n  font-size: 28px;\n  font-weight: bold;\n  margin-right: 15px;\n}\n.close[_ngcontent-%COMP%]:hover, .close[_ngcontent-%COMP%]:focus {\n  color: black;\n  text-decoration: none;\n  cursor: pointer;\n}\n.grid.product[_ngcontent-%COMP%] {\n  padding: 0 0 1.5rem 0;\n  border-bottom: 0.0625rem solid #e3dddd;\n}\n.grid.product[_ngcontent-%COMP%]   [class*=column-][_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.column-xs-12[_ngcontent-%COMP%], .column-md-7[_ngcontent-%COMP%], .column-md-5[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n.product-gallery[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.product-image[_ngcontent-%COMP%] {\n  display: block;\n}\n.product-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: auto;\n  object-fit: cover;\n  margin: 0px;\n  padding: 10px;\n}\n.image-list[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 0;\n  margin: 0;\n  list-style: none;\n}\n.image-list[_ngcontent-%COMP%]   .image-item[_ngcontent-%COMP%] {\n  margin: 10px;\n  flex-basis: 100%;\n  cursor: pointer;\n}\n.image-list[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: auto;\n  object-fit: cover;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%] {\n  color: #333;\n  font-weight: normal;\n  margin: 1.75rem 0 1rem 0;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 2.125rem;\n  margin: 0;\n}\n.description[_ngcontent-%COMP%] {\n  border-top: 0.0625rem solid #e3dddd;\n  margin: 2rem 0;\n  padding: 1rem 0 0 0;\n}\n.add-to-cart[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  background: #3e3e3f;\n  color: #fff;\n  border: none;\n  border-radius: 0;\n  padding: 1.25rem 2rem;\n  font-size: 1rem;\n  text-transform: uppercase;\n  cursor: pointer;\n  transition: background-color 0.2s ease-in-out;\n}\n.add-to-cart[_ngcontent-%COMP%]:hover {\n  background-color: #4a4a4b;\n}\n\n@media screen and (min-width: 48em) {\n  .column-xs-12[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .column-md-7[_ngcontent-%COMP%] {\n    width: 58.33333%;\n  }\n\n  .column-md-5[_ngcontent-%COMP%] {\n    width: 41.66667%;\n  }\n\n  .grid.product[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n  }\n\n  .product-gallery[_ngcontent-%COMP%] {\n    order: -1;\n  }\n}\n.image-list[_ngcontent-%COMP%]   img.active[_ngcontent-%COMP%] {\n  border: 2px solid #4a4a4b;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHByb2plY3RzLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUJBQUE7QUFDQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFDSjtBQUVFO0VBQ0UsV0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFFRTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtBQUNKO0FBRUU7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtBQUNKO0FBRUE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7QUFDSjtBQUVBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQUNKO0FBRUE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsNEJBQUE7RUFDQSxhQUFBO0FBQ0o7QUFFQTtFQUNJLG1CQUFBO0VBQ0Esd0JBQUE7QUFDSjtBQUVBO0VBQ0ksZ0JBQUE7QUFDSjtBQUVBO0VBQ0ksVUFBQTtBQUNKO0FBRUE7RUFDSSxnQkFBQTtBQUNKO0FBRUE7RUFDSSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUNKO0FBRUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQ0FBQTtFQUNBLDZCQUFBO0FBQ0o7QUFFQTtFQUNJLHdCQUFBO0FBQ0o7QUFFQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0FBQ0o7QUFFQTs7Ozs7Ozs7Ozs7OztHQUFBO0FBZ0JBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQURGO0FBSUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSwwQ0FBQTtFQUNBLG9CQUFBO0FBREY7QUFJQTtFQUNFLHlDQUFBO0FBREY7QUFJQTtFQUNFLHlCQUFBO0VBQ0EscUJBQUE7QUFERjtBQU1BO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxvQ0FBQTtBQUhGO0FBTUE7RUFDRSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBSEY7QUFNQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBSEY7QUFNQTs7RUFFRSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBSEY7QUFRQTtFQUlFLHFCQUFBO0VBQ0Esc0NBQUE7QUFSRjtBQUlHO0VBQ0MsYUFBQTtBQUZKO0FBUUE7RUFDRSxzQkFBQTtBQUxGO0FBUUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUFMRjtBQVFBO0VBQ0UsY0FBQTtBQUxGO0FBUUE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUFMRjtBQVFBO0VBQ0UsYUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUFMRjtBQVFBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUxGO0FBUUE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBTEY7QUFRQTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0FBTEY7QUFRQTtFQUNFLGlCQUFBO0FBTEY7QUFRQTtFQUNFLG1CQUFBO0VBQ0EsU0FBQTtBQUxGO0FBUUE7RUFDRSxtQ0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQUxGO0FBUUE7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsNkNBQUE7QUFMRjtBQVFBO0VBQ0UseUJBQUE7QUFMRjtBQVFBLHNCQUFBO0FBQ0E7RUFDRTtJQUNFLFdBQUE7RUFMRjs7RUFRQTtJQUNFLGdCQUFBO0VBTEY7O0VBUUE7SUFDRSxnQkFBQTtFQUxGOztFQVFBO0lBQ0UsYUFBQTtJQUNBLGVBQUE7RUFMRjs7RUFRQTtJQUNFLFNBQUE7RUFMRjtBQUNGO0FBUUE7RUFDRSx5QkFBQTtBQU5GIiwiZmlsZSI6InByb2plY3RzLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBDb21wb25lbnQgc3R5bGVzICovXHJcbi5zYW1wbGUtcHJvamVjdHMtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgaGVpZ2h0OiA3MHZoO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM0MzQzNDtcclxuICAgIHBhZGRpbmctdG9wOiAyNiU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjIlO1xyXG4gIH1cclxuICBcclxuICAuaGVhZGVyIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiRE0gU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDMuNWVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLmNhcmR7XHJcbiAgICAtLWJzLWNhcmQtYmc6ICMzNDM0MzQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDEwMDBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBtYXJnaW4tdG9wOiA4MHB4O1xyXG59XHJcblxyXG4uY29udGFpbmVyIC5jYXJke1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY29udGFpbmVyIC5jYXJkIC5mYWNle1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbn1cclxuXHJcbi5jb250YWluZXIgLmNhcmQgLmZhY2UuZmFjZTF7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzQzNDM0O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwcHgpO1xyXG4gICAgaGVpZ2h0OiAyODBweDtcclxufVxyXG5cclxuLmNvbnRhaW5lciAuY2FyZDpob3ZlciAuZmFjZS5mYWNlMXtcclxuICAgIGJhY2tncm91bmQ6ICMzNDM0MzQ7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbn1cclxuXHJcbi5jb250YWluZXIgLmNhcmQgLmZhY2UuZmFjZTEgLmNvbnRlbnR7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG59XHJcblxyXG4uY29udGFpbmVyIC5jYXJkOmhvdmVyIC5mYWNlLmZhY2UxIC5jb250ZW50e1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLmNvbnRhaW5lciAuY2FyZCAuZmFjZS5mYWNlMSAuY29udGVudCBpbWd7XHJcbiAgICBtYXgtd2lkdGg6IDEwMHB4O1xyXG59XHJcblxyXG4uY29udGFpbmVyIC5jYXJkIC5mYWNlLmZhY2UxIC5jb250ZW50IGgze1xyXG4gICAgbWFyZ2luOiAxMHB4IDAgMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMS40ZW07XHJcbn1cclxuXHJcbi5jb250YWluZXIgLmNhcmQgLmZhY2UuZmFjZTJ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm94LXNoYWRvdzogMCAyMHB4IDUwcHggcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDBweCk7XHJcbn1cclxuXHJcbi5jb250YWluZXIgLmNhcmQ6aG92ZXIgLmZhY2UuZmFjZTJ7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbn1cclxuXHJcbi5jb250YWluZXIgLmNhcmQgLmZhY2UuZmFjZTIgLmNvbnRlbnQgcHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi8qIC5jb250YWluZXIgLmNhcmQgLmZhY2UuZmFjZTIgLmNvbnRlbnQgYXtcclxuICAgIG1hcmdpbjogMTVweCAwIDA7XHJcbiAgICBkaXNwbGF5OiAgaW5saW5lLWJsb2NrO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XHJcbn1cclxuXHJcbi5jb250YWluZXIgLmNhcmQgLmZhY2UuZmFjZTIgLmNvbnRlbnQgYTpob3ZlcntcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBjb2xvcjogIzAwMDtcclxufSAqL1xyXG5cclxuXHJcbi5idG4ge1xyXG4gIC8qIGhlaWdodDogNTBweDsgKi9cclxuICB3aWR0aDogMjAwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2UyZGZkZjtcclxuICBjb2xvcjogIzAwMDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIC8qIGxpbmUtaGVpZ2h0OiA3NXB4OyAqL1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMXM7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcblxyXG4uYnRuOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaGVpZ2h0OiAzMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpIHJvdGF0ZSg0NWRlZyk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuOXM7XHJcbn1cclxuXHJcbi5idG46aG92ZXI6YmVmb3JlIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSkgcm90YXRlKDQ1ZGVnKTtcclxufVxyXG5cclxuLmJ0bjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RiZDVkNTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbn1cclxuXHJcblxyXG5cclxuLm1vZGFsIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiA5OTk5O1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbn1cclxuXHJcbi5tb2RhbC1jb250ZW50IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xyXG4gIG1hcmdpbi10b3A6IDIlO1xyXG4gIG1hcmdpbi1ib3R0b206IDIlO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcclxuICB3aWR0aDogODAlO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuLmNsb3NlIHtcclxuICBjb2xvcjogI2FhYTtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBmb250LXNpemU6IDI4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG4uY2xvc2U6aG92ZXIsXHJcbi5jbG9zZTpmb2N1cyB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcblxyXG5cclxuLmdyaWQucHJvZHVjdCB7XHJcbiAgIFtjbGFzcyo9XCJjb2x1bW4tXCJdIHtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgfVxyXG4gIHBhZGRpbmc6IDAgMCAxLjVyZW0gMDtcclxuICBib3JkZXItYm90dG9tOiAwLjA2MjVyZW0gc29saWQgI2UzZGRkZDtcclxufVxyXG5cclxuLmNvbHVtbi14cy0xMiwgLmNvbHVtbi1tZC03LCAuY29sdW1uLW1kLTUge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5wcm9kdWN0LWdhbGxlcnkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLnByb2R1Y3QtaW1hZ2Uge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4ucHJvZHVjdC1pbWFnZSBpbWcge1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLmltYWdlLWxpc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuLmltYWdlLWxpc3QgLmltYWdlLWl0ZW0ge1xyXG4gIG1hcmdpbjogMTBweDtcclxuICBmbGV4LWJhc2lzOiAxMDAlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmltYWdlLWxpc3QgaW1nIHtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcblxyXG5oMSwgaDIge1xyXG4gIGNvbG9yOiAjMzMzO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgbWFyZ2luOiAxLjc1cmVtIDAgMXJlbSAwO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgZm9udC1zaXplOiAyLjVyZW07XHJcbn1cclxuXHJcbmgyIHtcclxuICBmb250LXNpemU6IDIuMTI1cmVtO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmRlc2NyaXB0aW9uIHtcclxuICBib3JkZXItdG9wOiAwLjA2MjVyZW0gc29saWQgI2UzZGRkZDtcclxuICBtYXJnaW46IDJyZW0gMDtcclxuICBwYWRkaW5nOiAxcmVtIDAgMCAwO1xyXG59XHJcblxyXG4uYWRkLXRvLWNhcnQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYmFja2dyb3VuZDogIzNlM2UzZjtcclxuICBjb2xvcjogI2ZmZjtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICBwYWRkaW5nOiAxLjI1cmVtIDJyZW07XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLmFkZC10by1jYXJ0OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGE0YTRiO1xyXG59XHJcblxyXG4vKiBSZXNwb25zaXZlIERlc2lnbiAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0OGVtKSB7XHJcbiAgLmNvbHVtbi14cy0xMiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5jb2x1bW4tbWQtNyB7XHJcbiAgICB3aWR0aDogNTguMzMzMzMlO1xyXG4gIH1cclxuXHJcbiAgLmNvbHVtbi1tZC01IHtcclxuICAgIHdpZHRoOiA0MS42NjY2NyU7XHJcbiAgfVxyXG5cclxuICAuZ3JpZC5wcm9kdWN0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgfVxyXG5cclxuICAucHJvZHVjdC1nYWxsZXJ5IHtcclxuICAgIG9yZGVyOiAtMTtcclxuICB9XHJcbn1cclxuXHJcbi5pbWFnZS1saXN0IGltZy5hY3RpdmUge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICM0YTRhNGI7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-projects-page',
                templateUrl: './projects-page.component.html',
                styleUrls: ['./projects-page.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, null); })();


/***/ }),

/***/ "npXH":
/*!**********************************************!*\
  !*** ./src/app/chatbot/chatbot.component.ts ***!
  \**********************************************/
/*! exports provided: ChatbotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatbotComponent", function() { return ChatbotComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



const _c0 = ["chatList"];
function ChatbotComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "mode_comment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChatbotComponent_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ChatbotComponent {
    constructor() {
        this.showChatBox = false;
        this.messages = [];
        this.botTyping = false;
    }
    // Your existing Angular code goes here
    ngOnInit() {
        this.addMessage("Hi there. How can I help you today?", "bot");
        // Show the chat bubble 10 seconds after the page loads
        setTimeout(() => {
            document.getElementById('chatBubble').style.opacity = '1';
            // Make the button bounce while the chat bubble is displayed
            document.getElementById('chatbotButton').style.animation = 'bounce 1s infinite';
            // Hide the chat bubble and stop the button from bouncing after the bubble's been displayed for 10 seconds
            setTimeout(() => {
                document.getElementById('chatBubble').style.opacity = '0';
                document.getElementById('chatbotButton').style.animation = 'none';
            }, 10000); // 10000 milliseconds = 10 seconds
        }, 1000); // 1000 milliseconds = 1 second
    }
    ngAfterViewChecked() {
        this.scrollToBottom();
    }
    scrollToBottom() {
        try {
            const lastMessageElement = this.chatList.nativeElement.lastElementChild;
            if (lastMessageElement) {
                lastMessageElement.scrollIntoView({ behavior: "smooth" });
            }
        }
        catch (err) { }
    }
    toggleChatBox() {
        this.showChatBox = !this.showChatBox;
        document.getElementById('chatBubble').style.opacity = '0';
        document.getElementById('chatbotButton').style.animation = 'none';
    }
    addMessage(text, sender) {
        this.messages.push({ text, sender });
    }
    sendUserMessage(textarea) {
        const text = textarea.value.trim();
        if (text !== '') {
            this.addMessage(text, 'user');
            textarea.value = '';
            // Make the bot seem like it's typing.
            this.botTyping = true;
            setTimeout(() => {
                // After a delay, stop the typing animation and send the bot's message.
                this.botTyping = false;
                this.addMessage(this.generateResponse(text), 'bot');
            }, 1000); // 2000 milliseconds = 2 seconds
        }
    }
    generateResponse(userInput) {
        // This is a very simple implementation of a response.
        // You might want to replace it with a call to a more sophisticated method (e.g., OpenAI's GPT-3 model).
        return `You said: "${userInput}"`;
    }
}
ChatbotComponent.ɵfac = function ChatbotComponent_Factory(t) { return new (t || ChatbotComponent)(); };
ChatbotComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatbotComponent, selectors: [["app-chatbot"]], viewQuery: function ChatbotComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.chatList = _t.first);
    } }, decls: 18, vars: 4, consts: [["rel", "stylesheet", "href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"]("https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0")], ["rel", "stylesheet", "href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"]("https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,400,1,0")], ["id", "chatBubble", 1, "chatBubble"], ["id", "chatbotButton", 1, "chatbot__button", 3, "click"], ["class", "material-symbols-outlined", 4, "ngIf"], [1, "chatbot", 2, "z-index", "9999"], [1, "chatbot__header"], [1, "chatbox__title"], [1, "material-symbols-outlined"], [1, "chatbot__input-box"], ["id", "send-btn", 1, "material-symbols-outlined"], ["src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"]("https://www.chatbase.co/chatbot-iframe/TfCuvnDn9sdDYgaX0tbe5"), "width", "100%", "frameborder", "1", 2, "height", "100%", "min-height", "650px"]], template: function ChatbotComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "link", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Got a question? Ask me!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatbotComponent_Template_button_click_5_listener() { return ctx.toggleChatBox(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ChatbotComponent_span_6_Template, 2, 0, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ChatbotComponent_span_7_Template, 2, 0, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Chat Assistant");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "send");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "iframe", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showChatBox);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showChatBox);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("chatbot-active", ctx.showChatBox);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');\r\n\r\nbody[_ngcontent-%COMP%] {\r\n  font-family: 'Poppins', sans-serif;\r\n}\r\n\r\n.chatbot__button[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  bottom: 35px;\r\n  right: 40px;\r\n  width: 65px;\r\n  height: 65px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background: #181717;\r\n  color: #f3f7f8;\r\n  border: none;\r\n  border-radius: 50%;\r\n  outline: none;\r\n  cursor: pointer;\r\n  z-index: 9999;\r\n}\r\n\r\n\r\n\r\n.chatBubble[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  bottom: 80px;\r\n  right: 135px;\r\n  padding: 20px 45px 20px 45px;\r\n  background-color: #f3f7f8;\r\n  border-radius: 10px;\r\n  z-index: 9999;\r\n  transition: opacity 0.2s ease-in-out;\r\n  opacity: 0;\r\n  border: 1px solid #000000;\r\n  \r\n  \r\n  \r\n}\r\n\r\n.chatBubble[_ngcontent-%COMP%]::before {\r\n  content: \"\";\r\n  position: absolute;\r\n  bottom: 12px;\r\n  right: -9px;\r\n  width: 16px;\r\n  height: 16px;\r\n  background-color: #f3f7f8;\r\n  border-radius: 0px;\r\n  transform: rotate(-45deg);\r\n  border-bottom: 1px solid #000000;\r\n  border-right: 1px solid #000000;\r\n}\r\n\r\n.chatBubble[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  color: #181717;\r\n  font-size: 15px;\r\n  margin-top: auto;\r\n  margin-bottom: auto;\r\n  font-weight: 650;\r\n}\r\n\r\n\r\n\r\n@keyframes bounce {\r\n  0%, 20%, 50%, 80%, 100% {\r\n    transform: translateY(0);\r\n  }\r\n  40% {\r\n    transform: translateY(-20px);\r\n  }\r\n  60% {\r\n    transform: translateY(-10px);\r\n  }\r\n}\r\n\r\n.chatbot__button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n}\r\n\r\n\r\n\r\n.chatbot[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  bottom: 120px;\r\n  right: 40px;\r\n  width: 450px;\r\n  background-color: #f3f7f8;\r\n  border-radius: 15px;\r\n  box-shadow: 0 0 128px 0 rgba(0, 0, 0, 0.1) 0 32px 64px -48px rgba(0, 0, 0, 0.5);\r\n  transition: transform 0.3s ease;\r\n  overflow: hidden;\r\n  opacity: 0;\r\n  pointer-events: none;\r\n  transition: opacity 0.3s ease;\r\n  border: 1px solid #292828;\r\n}\r\n\r\n.show-chatbot[_ngcontent-%COMP%]   .chatbot[_ngcontent-%COMP%] {\r\n  opacity: 1;\r\n  pointer-events: auto;\r\n  transform: scale(1);\r\n}\r\n\r\n.chatbot__header[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  background-color: #181717;\r\n  text-align: center;\r\n  padding: 16px 0;\r\n}\r\n\r\n.chatbot__header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  display: none;\r\n  position: absolute;\r\n  top: 50%;\r\n  right: 20px;\r\n  color: #202020;\r\n  transform: translateY(-50%);\r\n  cursor: pointer;\r\n}\r\n\r\n.chatbox__title[_ngcontent-%COMP%] {\r\n  font-size: 1.4rem;\r\n  color: #f3f7f8;\r\n}\r\n\r\n.chatbot__box[_ngcontent-%COMP%] {\r\n  height: 510px;\r\n  overflow-y: auto;\r\n  padding: 30px 20px 100px;\r\n  scroll-behavior: smooth;\r\n}\r\n\r\n.chatbot__chat[_ngcontent-%COMP%] {\r\n  display: flex;\r\n}\r\n\r\n.chatbot__chat[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  max-width: 75%;\r\n  font-size: 0.95rem;\r\n  white-space: pre-wrap;\r\n  color: #fff;\r\n  background-color: #181717;\r\n  border-radius: 10px 10px 0 10px;\r\n  padding: 9px 16px;\r\n  word-wrap: break-word;\r\n}\r\n\r\n.chatbot__chat[_ngcontent-%COMP%]   p.error[_ngcontent-%COMP%] {\r\n  color: #721c24;\r\n  background: #f8d7da;\r\n}\r\n\r\n.chatbot-active[_ngcontent-%COMP%] {\r\n  opacity: 1;\r\n  pointer-events: auto;\r\n}\r\n\r\n.incoming[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  color: #202020;\r\n  background: #bdc3c7;\r\n  border-radius: 10px 10px 10px 0;\r\n}\r\n\r\n.incoming[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  width: 32px;\r\n  height: 32px;\r\n  line-height: 32px;\r\n  color: #f3f7f8;\r\n  background-color: #5f5d5d;\r\n  border-radius: 4px;\r\n  text-align: center;\r\n  align-self: flex-end;\r\n  margin: 0 10px 7px 0;\r\n}\r\n\r\n.outgoing[_ngcontent-%COMP%] {\r\n  justify-content: flex-end;\r\n  margin: 20px 0;\r\n}\r\n\r\n.incoming[_ngcontent-%COMP%] {\r\n  margin: 20px 0;\r\n}\r\n\r\n.chatbot__input-box[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  bottom: 0;\r\n  width: 100%;\r\n  display: flex;\r\n  gap: 5px;\r\n  align-items: center;\r\n  background: #fff;\r\n  padding: 5px 20px;\r\n}\r\n\r\n.chatbot__textarea[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  min-height: 55px;\r\n  max-height: 180px;\r\n  font-size: 0.95rem;\r\n  padding: 16px 15px 16px 0;\r\n  color: #202020;\r\n  border: none;\r\n  outline: none;\r\n  resize: none;\r\n  background: transparent;\r\n}\r\n\r\n.chatbot__textarea[_ngcontent-%COMP%]::placeholder {\r\n  font-family: 'Poppins', sans-serif;\r\n}\r\n\r\n.chatbot__input-box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  font-size: 1.75rem;\r\n  color: #202020;\r\n  cursor: pointer;\r\n  visibility: hidden;\r\n}\r\n\r\n.chatbot__textarea[_ngcontent-%COMP%]:valid    ~ span[_ngcontent-%COMP%] {\r\n  visibility: visible;\r\n}\r\n\r\n@media (max-width: 490px) {\r\n  .chatbot[_ngcontent-%COMP%] {\r\n    right: 0;\r\n    bottom: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    border-radius: 0;\r\n  }\r\n  .chatbot__box[_ngcontent-%COMP%] {\r\n    height: 90%;\r\n  }\r\n  .chatbot__header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    display: inline;\r\n  }\r\n}\r\n\r\n.typing-indicator[_ngcontent-%COMP%] {\r\n  margin-left: 5px;\r\n  width: 30px;\r\n  float: left;\r\n  position: relative;\r\n}\r\n\r\n.typing-indicator[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  height: 6px;\r\n  width: 6px;\r\n  float: left;\r\n  margin: 0 1px;\r\n  background: #181717;\r\n  display: block;\r\n  border-radius: 50%;\r\n  opacity: 0.4;\r\n  position: absolute;\r\n}\r\n\r\n.typing-indicator[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1) {\r\n  left: 0;\r\n  animation: typing-indicator-dot 1.4s infinite;\r\n}\r\n\r\n.typing-indicator[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\r\n  left: 10px;\r\n  animation: typing-indicator-dot 1.4s infinite;\r\n  animation-delay: .2s;\r\n}\r\n\r\n.typing-indicator[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\r\n  left: 20px;\r\n  animation: typing-indicator-dot 1.4s infinite;\r\n  animation-delay: .4s;\r\n}\r\n\r\n@keyframes typing-indicator-dot {\r\n  0% { transform: scale(1); opacity: .4; }\r\n  20% { transform: scale(1); }\r\n  30% { transform: scale(1); opacity: .4; }\r\n  50% { transform: scale(1.5); opacity: 1; }\r\n  100% { transform: scale(1); opacity: .4; }\r\n}\r\n\r\n.message-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.typing-indicator[_ngcontent-%COMP%], img[_ngcontent-%COMP%] {\r\n  align-self: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXRib3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2RkFBNkY7O0FBRTdGO0VBQ0Usa0NBQWtDO0FBQ3BDOztBQUNBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixXQUFXO0VBQ1gsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGVBQWU7RUFDZixhQUFhO0FBQ2Y7O0FBRUEsOEJBQThCOztBQUM5QjtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osWUFBWTtFQUNaLDRCQUE0QjtFQUM1Qix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixvQ0FBb0M7RUFDcEMsVUFBVTtFQUNWLHlCQUF5QjtFQUN6QiwyQ0FBMkM7RUFDM0MsMkRBQTJEO0VBQzNELGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGdDQUFnQztFQUNoQywrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBLDJCQUEyQjs7QUFDM0I7RUFDRTtJQUNFLHdCQUF3QjtFQUMxQjtFQUNBO0lBQ0UsNEJBQTRCO0VBQzlCO0VBQ0E7SUFDRSw0QkFBNEI7RUFDOUI7QUFDRjs7QUFHQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFDQTs7Ozs7O0dBTUc7O0FBQ0g7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLFdBQVc7RUFDWCxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQiwrRUFBK0U7RUFDL0UsK0JBQStCO0VBQy9CLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1Ysb0JBQW9CO0VBQ3BCLDZCQUE2QjtFQUM3Qix5QkFBeUI7QUFDM0I7O0FBQ0E7RUFDRSxVQUFVO0VBQ1Ysb0JBQW9CO0VBQ3BCLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixXQUFXO0VBQ1gsY0FBYztFQUNkLDJCQUEyQjtFQUMzQixlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7O0FBQ0E7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtFQUN4Qix1QkFBdUI7QUFDekI7O0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7O0FBQ0E7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLCtCQUErQjtFQUMvQixpQkFBaUI7RUFDakIscUJBQXFCO0FBQ3ZCOztBQUNBO0VBQ0UsY0FBYztFQUNkLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLFVBQVU7RUFDVixvQkFBb0I7QUFDdEI7O0FBQ0E7RUFDRSxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLCtCQUErQjtBQUNqQzs7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsb0JBQW9CO0FBQ3RCOztBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGNBQWM7QUFDaEI7O0FBQ0E7RUFDRSxjQUFjO0FBQ2hCOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsYUFBYTtFQUNiLFFBQVE7RUFDUixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsY0FBYztFQUNkLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtFQUNaLHVCQUF1QjtBQUN6Qjs7QUFDQTtFQUNFLGtDQUFrQztBQUNwQzs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFO0lBQ0UsUUFBUTtJQUNSLFNBQVM7SUFDVCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsV0FBVztFQUNiO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLFdBQVc7RUFDWCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLE9BQU87RUFDUCw2Q0FBNkM7QUFDL0M7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsNkNBQTZDO0VBQzdDLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFVBQVU7RUFDViw2Q0FBNkM7RUFDN0Msb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsS0FBSyxtQkFBbUIsRUFBRSxXQUFXLEVBQUU7RUFDdkMsTUFBTSxtQkFBbUIsRUFBRTtFQUMzQixNQUFNLG1CQUFtQixFQUFFLFdBQVcsRUFBRTtFQUN4QyxNQUFNLHFCQUFxQixFQUFFLFVBQVUsRUFBRTtFQUN6QyxPQUFPLG1CQUFtQixFQUFFLFdBQVcsRUFBRTtBQUMzQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCIiwiZmlsZSI6ImNoYXRib3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEA0MDA7NTAwOzYwMCZkaXNwbGF5PXN3YXAnKTtcclxuXHJcbmJvZHkge1xyXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbn1cclxuLmNoYXRib3RfX2J1dHRvbiB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogMzVweDtcclxuICByaWdodDogNDBweDtcclxuICB3aWR0aDogNjVweDtcclxuICBoZWlnaHQ6IDY1cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6ICMxODE3MTc7XHJcbiAgY29sb3I6ICNmM2Y3Zjg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB6LWluZGV4OiA5OTk5O1xyXG59XHJcblxyXG4vKiBDU1Mgc3R5bGUgZm9yIGNoYXQgYnViYmxlICovXHJcbi5jaGF0QnViYmxlIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiA4MHB4O1xyXG4gIHJpZ2h0OiAxMzVweDtcclxuICBwYWRkaW5nOiAyMHB4IDQ1cHggMjBweCA0NXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2Y3Zjg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB6LWluZGV4OiA5OTk5O1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBlYXNlLWluLW91dDtcclxuICBvcGFjaXR5OiAwO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA7XHJcbiAgLyogYWRkIGEgdGFpbCBwb2ludGluZyB0byB0aGUgY2hhdCBidWJibGUgKi9cclxuICAvKiB0aGUgXCJiZWZvcmVcIiBwc2V1ZG8tZWxlbWVudCBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgdGFpbCAqL1xyXG4gIC8qIHRoZSB0YWlsIGlzIGEgcm90YXRlZCBzcXVhcmUgKi9cclxufVxyXG5cclxuLmNoYXRCdWJibGU6OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAxMnB4O1xyXG4gIHJpZ2h0OiAtOXB4O1xyXG4gIHdpZHRoOiAxNnB4O1xyXG4gIGhlaWdodDogMTZweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmN2Y4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwMDAwO1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMwMDAwMDA7XHJcbn1cclxuXHJcbi5jaGF0QnViYmxlIHAge1xyXG4gIGNvbG9yOiAjMTgxNzE3O1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbiAgZm9udC13ZWlnaHQ6IDY1MDtcclxufVxyXG5cclxuLyogQWRkIGEgYm91bmNlIGFuaW1hdGlvbiAqL1xyXG5Aa2V5ZnJhbWVzIGJvdW5jZSB7XHJcbiAgMCUsIDIwJSwgNTAlLCA4MCUsIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gIH1cclxuICA0MCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcclxuICB9XHJcbiAgNjAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLmNoYXRib3RfX2J1dHRvbiBzcGFuIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuLyogLnNob3ctY2hhdGJvdCAuY2hhdGJvdF9fYnV0dG9uIHNwYW46Zmlyc3QtY2hpbGQsXHJcbi5jaGF0Ym90X19idXR0b24gc3BhbjpsYXN0LWNoaWxkIHtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcbi5zaG93LWNoYXRib3QgLmNoYXRib3RfX2J1dHRvbiBzcGFuOmxhc3QtY2hpbGQge1xyXG4gIG9wYWNpdHk6IDE7XHJcbn0gKi9cclxuLmNoYXRib3Qge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IDEyMHB4O1xyXG4gIHJpZ2h0OiA0MHB4O1xyXG4gIHdpZHRoOiA0NTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmN2Y4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgYm94LXNoYWRvdzogMCAwIDEyOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpIDAgMzJweCA2NHB4IC00OHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgb3BhY2l0eTogMDtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMjkyODI4O1xyXG59XHJcbi5zaG93LWNoYXRib3QgLmNoYXRib3Qge1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxufVxyXG4uY2hhdGJvdF9faGVhZGVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4MTcxNztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTZweCAwO1xyXG59XHJcbi5jaGF0Ym90X19oZWFkZXIgc3BhbiB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgcmlnaHQ6IDIwcHg7XHJcbiAgY29sb3I6ICMyMDIwMjA7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uY2hhdGJveF9fdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gIGNvbG9yOiAjZjNmN2Y4O1xyXG59XHJcbi5jaGF0Ym90X19ib3gge1xyXG4gIGhlaWdodDogNTEwcHg7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBwYWRkaW5nOiAzMHB4IDIwcHggMTAwcHg7XHJcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XHJcbn1cclxuLmNoYXRib3RfX2NoYXQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLmNoYXRib3RfX2NoYXQgcCB7XHJcbiAgbWF4LXdpZHRoOiA3NSU7XHJcbiAgZm9udC1zaXplOiAwLjk1cmVtO1xyXG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxNzE3O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwIDEwcHg7XHJcbiAgcGFkZGluZzogOXB4IDE2cHg7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG59XHJcbi5jaGF0Ym90X19jaGF0IHAuZXJyb3Ige1xyXG4gIGNvbG9yOiAjNzIxYzI0O1xyXG4gIGJhY2tncm91bmQ6ICNmOGQ3ZGE7XHJcbn1cclxuLmNoYXRib3QtYWN0aXZlIHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xyXG59XHJcbi5pbmNvbWluZyBwIHtcclxuICBjb2xvcjogIzIwMjAyMDtcclxuICBiYWNrZ3JvdW5kOiAjYmRjM2M3O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAxMHB4IDA7XHJcbn1cclxuLmluY29taW5nIHNwYW4ge1xyXG4gIHdpZHRoOiAzMnB4O1xyXG4gIGhlaWdodDogMzJweDtcclxuICBsaW5lLWhlaWdodDogMzJweDtcclxuICBjb2xvcjogI2YzZjdmODtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWY1ZDVkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbiAgbWFyZ2luOiAwIDEwcHggN3B4IDA7XHJcbn1cclxuLm91dGdvaW5nIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIG1hcmdpbjogMjBweCAwO1xyXG59XHJcbi5pbmNvbWluZyB7XHJcbiAgbWFyZ2luOiAyMHB4IDA7XHJcbn1cclxuLmNoYXRib3RfX2lucHV0LWJveCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogNXB4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBwYWRkaW5nOiA1cHggMjBweDtcclxufVxyXG4uY2hhdGJvdF9fdGV4dGFyZWEge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IDU1cHg7XHJcbiAgbWF4LWhlaWdodDogMTgwcHg7XHJcbiAgZm9udC1zaXplOiAwLjk1cmVtO1xyXG4gIHBhZGRpbmc6IDE2cHggMTVweCAxNnB4IDA7XHJcbiAgY29sb3I6ICMyMDIwMjA7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgcmVzaXplOiBub25lO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcbi5jaGF0Ym90X190ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xyXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbn1cclxuLmNoYXRib3RfX2lucHV0LWJveCBzcGFuIHtcclxuICBmb250LXNpemU6IDEuNzVyZW07XHJcbiAgY29sb3I6ICMyMDIwMjA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG4uY2hhdGJvdF9fdGV4dGFyZWE6dmFsaWQgfiBzcGFuIHtcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDkwcHgpIHtcclxuICAuY2hhdGJvdCB7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICB9XHJcbiAgLmNoYXRib3RfX2JveCB7XHJcbiAgICBoZWlnaHQ6IDkwJTtcclxuICB9XHJcbiAgLmNoYXRib3RfX2hlYWRlciBzcGFuIHtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxuICB9XHJcbn1cclxuXHJcbi50eXBpbmctaW5kaWNhdG9yIHtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnR5cGluZy1pbmRpY2F0b3Igc3BhbiB7XHJcbiAgaGVpZ2h0OiA2cHg7XHJcbiAgd2lkdGg6IDZweDtcclxuICBmbG9hdDogbGVmdDtcclxuICBtYXJnaW46IDAgMXB4O1xyXG4gIGJhY2tncm91bmQ6ICMxODE3MTc7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIG9wYWNpdHk6IDAuNDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbi50eXBpbmctaW5kaWNhdG9yIHNwYW46bnRoLWNoaWxkKDEpIHtcclxuICBsZWZ0OiAwO1xyXG4gIGFuaW1hdGlvbjogdHlwaW5nLWluZGljYXRvci1kb3QgMS40cyBpbmZpbml0ZTtcclxufVxyXG5cclxuLnR5cGluZy1pbmRpY2F0b3Igc3BhbjpudGgtY2hpbGQoMikge1xyXG4gIGxlZnQ6IDEwcHg7XHJcbiAgYW5pbWF0aW9uOiB0eXBpbmctaW5kaWNhdG9yLWRvdCAxLjRzIGluZmluaXRlO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogLjJzO1xyXG59XHJcblxyXG4udHlwaW5nLWluZGljYXRvciBzcGFuOm50aC1jaGlsZCgzKSB7XHJcbiAgbGVmdDogMjBweDtcclxuICBhbmltYXRpb246IHR5cGluZy1pbmRpY2F0b3ItZG90IDEuNHMgaW5maW5pdGU7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAuNHM7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgdHlwaW5nLWluZGljYXRvci1kb3Qge1xyXG4gIDAlIHsgdHJhbnNmb3JtOiBzY2FsZSgxKTsgb3BhY2l0eTogLjQ7IH1cclxuICAyMCUgeyB0cmFuc2Zvcm06IHNjYWxlKDEpOyB9XHJcbiAgMzAlIHsgdHJhbnNmb3JtOiBzY2FsZSgxKTsgb3BhY2l0eTogLjQ7IH1cclxuICA1MCUgeyB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7IG9wYWNpdHk6IDE7IH1cclxuICAxMDAlIHsgdHJhbnNmb3JtOiBzY2FsZSgxKTsgb3BhY2l0eTogLjQ7IH1cclxufVxyXG5cclxuLm1lc3NhZ2UtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi50eXBpbmctaW5kaWNhdG9yLCBpbWcge1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatbotComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-chatbot',
                templateUrl: './chatbot.component.html',
                styleUrls: ['./chatbot.component.css']
            }]
    }], function () { return []; }, { chatList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['chatList', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], static: true }]
        }] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./landing-page/landing-page.component */ "mSt+");
/* harmony import */ var _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about-page/about-page.component */ "HioS");
/* harmony import */ var _github_graph_github_graph_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./github-graph/github-graph.component */ "c8y/");
/* harmony import */ var _projects_page_projects_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projects-page/projects-page.component */ "nDjA");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");


// Import your page components here







const routes = [
    { path: 'landing-page', component: _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_2__["LandingPageComponent"] },
    { path: 'about-page', component: _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_3__["AboutPageComponent"] },
    { path: 'experience-page', component: _github_graph_github_graph_component__WEBPACK_IMPORTED_MODULE_4__["GithubGraphComponent"] },
    { path: 'projects-page', component: _projects_page_projects_page_component__WEBPACK_IMPORTED_MODULE_5__["ProjectsPageComponent"] },
    { path: 'contacts-page', component: _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"] },
    { path: '', redirectTo: '/landing-page', pathMatch: 'full' },
    { path: '**', redirectTo: '/landing-page' } // Redirect to the landing page for any unknown paths
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map