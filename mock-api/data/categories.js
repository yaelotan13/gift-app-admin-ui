const mainCategories = [
    {
        main_category_id: 33,
        main_category_name: "Student",
        main_category_image: "https://gift-app-images.s3.us-west-2.amazonaws.com/1588080767201-student.jpg"
    },
    {
        main_category_id: 22,
        main_category_name: "Geeky",
        main_category_image: "https://gift-app-images.s3-us-west-2.amazonaws.com/1587895992960-geeky.png"
    },
    {
        main_category_id: 35,
        main_category_name: "Healthy Living",
        main_category_image: "https://gift-app-images.s3.us-west-2.amazonaws.com/1588081870712-healthy%20living.png"
    },
    {
        main_category_id: 39,
        main_category_name: "Foodie",
        main_category_image: "https://gift-app-images.s3.amazonaws.com/1588147539089-foodie.png"
    }
];

const subCategories = [
    {
        sub_category_id: 27,
        main_category_id: 33,
        sub_category_name: 'Psychology'
    },
    {
        sub_category_id: 28,
        main_category_id: 33,
        sub_category_name: "Engineering"
    },
    {
        sub_category_id: 29,
        main_category_id: 33,
        sub_category_name: "Art"
    },
    {
        sub_category_id: 87,
        main_category_id: 22,
        sub_category_name: "Comics"
    },
    {
        sub_category_id: 88,
        main_category_id: 22,
        sub_category_name: "Space"
    },
]

module.exports = {
    mainCategories,
    subCategories
}