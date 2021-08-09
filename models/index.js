// import models
const Products = require('./Product');
const Category = require('./Category');
const Tags = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Products.belongsTo(Category, {
    foreignKey: 'category_id',
});
// Categories have many Products
Category.hasMany(Products, {
    foreignKey: 'category_id',
    onDelete: 'SET NULL'
})

// Products belongToMany Tags (through ProductTag)
Products.belongsToMany(Tags, {
    through: ProductTag,
    foreignKey: 'product_id'
})

// Tags belongToMany Products (through ProductTag)
Tags.belongsToMany(Products, {
    through: ProductTag,
    foreignKey: 'tag_id'
})

module.exports = {
    Products,
    Category,
    Tags,
    ProductTag,
};