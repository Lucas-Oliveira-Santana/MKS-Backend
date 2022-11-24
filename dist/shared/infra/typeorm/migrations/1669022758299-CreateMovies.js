"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateMovies1669022758299 = void 0;
var _typeorm = require("typeorm");
class CreateMovies1669022758299 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: "movies",
      columns: [{
        name: "id",
        type: "uuid",
        isPrimary: true
      }, {
        name: "title",
        type: "varchar"
      }, {
        name: "released",
        type: "timestamp"
      }, {
        name: "description",
        type: "varchar"
      }]
    }));
  }
  async down(queryRunner) {}
}
exports.CreateMovies1669022758299 = CreateMovies1669022758299;