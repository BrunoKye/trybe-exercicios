"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const index_1 = __importDefault(require("./index"));
const AuthorModel_1 = __importDefault(require("./AuthorModel"));
class Book extends sequelize_1.Model {
}
Book.init({
    id: {
        type: sequelize_1.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: (0, sequelize_1.STRING)(30),
        allowNull: false,
    },
    authorId: {
        type: sequelize_1.INTEGER,
        allowNull: false,
        references: {
            model: 'authors',
            key: 'id',
        }
    },
    genreId: {
        type: sequelize_1.INTEGER,
        allowNull: false,
        references: {
            model: 'genres',
            key: 'id',
        }
    }
}, {
    sequelize: index_1.default,
    modelName: 'books',
    underscored: true,
    timestamps: false,
});
Book.belongsTo(AuthorModel_1.default, { foreignKey: 'id' });
AuthorModel_1.default.hasMany(Book, { foreignKey: 'authorId' });
exports.default = Book;
