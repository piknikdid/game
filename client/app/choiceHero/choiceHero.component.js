"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var task_service_1 = require("../service/task.service");
var ChoiceHeroComponent = (function () {
    function ChoiceHeroComponent(taskService) {
        var _this = this;
        this.taskService = taskService;
        this.taskService.getHeroes()
            .subscribe(function (heroes) {
            _this.heroes = heroes;
        });
        this.taskService.getTasks()
            .subscribe(function (users) {
            _this.users = users;
        });
    }
    return ChoiceHeroComponent;
}());
ChoiceHeroComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'hero',
        templateUrl: 'choiceHero.component.html',
        styleUrls: ['choiceHero.component.css']
    }),
    __metadata("design:paramtypes", [task_service_1.TaskService])
], ChoiceHeroComponent);
exports.ChoiceHeroComponent = ChoiceHeroComponent;
//# sourceMappingURL=choiceHero.component.js.map