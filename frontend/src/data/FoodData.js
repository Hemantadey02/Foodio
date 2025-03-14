const FoodData = [
    {
        id: 1,
        userImage: "https://img.freepik.com/free-photo/seafood-pizza_74190-5944.jpg?w=996&t=st=1693062328~exp=1693062928~hmac=53fd9ad496580db41c6ca8066510cd89c6b0a0389de8bb6b875a78a1eda09cb5",
        userName: "Onion Pizza",
        userPrice: 150,
        userDescription: "A delicious pizza topped with fresh onions for a delightful flavor combination. This pizza is perfect for onion lovers and offers a unique twist on the classic pizza experience. Enjoy the perfect blend of cheesy goodness and the sharp taste of onions in every bite. Whether you're sharing with friends or enjoying it all to yourself, this Onion Pizza is sure to satisfy your pizza cravings.",
        category: "Lunch",
        userRating: 4.5,
    },
    {
        id: 2,
        userImage: "https://w7.pngwing.com/pngs/339/55/png-transparent-pizza-margherita-italian-cuisine-hot-dog-pizza-cheese-pizza-thumbnail.png",
        userName: "Margherita Pizza",
        userPrice: 130,
        userDescription: "A classic Italian pizza topped with fresh tomatoes, mozzarella cheese, basil leaves, and a drizzle of olive oil. Simple yet bursting with flavors, this Margherita Pizza is a timeless favorite that captures the essence of Italian cuisine.",
        category: "Lunch",
        userRating: 4.2,
    },
    {
        id: 3,
        userImage: "https://w7.pngwing.com/pngs/21/55/png-transparent-pepperoni-pizza-margarita-pizza-margherita-italian-cuisine-tomato-pizza-food-cheese-recipe-thumbnail.png",
        userName: "Pepperoni Pizza",
        userPrice: 160,
        userDescription: "Indulge in the savory delight of this Pepperoni Pizza, loaded with slices of spicy pepperoni, melted cheese, and a tangy tomato sauce. A popular choice that's perfect for satisfying your pizza cravings.",
        category: "Lunch",
        userRating: 4.6,
    },
    {
        id: 4,
        userImage: "https://w7.pngwing.com/pngs/569/109/png-transparent-pizza-with-vegetables-and-mushroom-toppings-sicilian-pizza-california-style-pizza-pizza-margherita-vegetarian-cuisine-pizza-food-recipe-gourmet-thumbnail.png",
        userName: "Mushroom and Spinach Pizza",
        userPrice: 140,
        userDescription: "Experience the earthy flavors of mushrooms combined with the freshness of spinach on this delightful pizza. Topped with a blend of cheeses, this Mushroom and Spinach Pizza offers a balanced and satisfying taste.",
        category: "Lunch",
        userRating: 4.2,
    },
    {
        id: 5,
        userImage: "https://w7.pngwing.com/pngs/843/171/png-transparent-pizza-73-restaurant-catupiry-chicken-as-food-pizza-baked-goods-food-recipe-thumbnail.png",
        userName: "BBQ Chicken Pizza",
        userPrice: 170,
        userDescription: "Savor the smoky goodness of this BBQ Chicken Pizza, featuring tender pieces of chicken marinated in barbecue sauce, red onions, and a medley of cheeses. A fusion of flavors that's sure to delight your taste buds.",
        category: "Lunch",
        userRating: 4.8,
    },
    {
        id: 6,
        userImage: "https://w7.pngwing.com/pngs/133/54/png-transparent-pancakes-served-on-plate-banana-pancakes-scrambled-eggs-breakfast-ihop-pancake-food-recipe-eating-thumbnail.png",
        userName: "Classic Pancakes",
        userPrice: 80,
        userDescription: "Start your day with a stack of fluffy pancakes served with maple syrup and a dollop of butter. A timeless breakfast favorite that's sure to satisfy your morning cravings.",
        category: "Breakfast",
        userRating: 4.5,
    },
    {
        id: 7,
        userImage: "https://w7.pngwing.com/pngs/645/475/png-transparent-croissant-bread-croissant-muffin-brunch-bacon-egg-and-cheese-sandwich-bread-croissants-baked-goods-food-baking-thumbnail.png",
        userName: "Egg and Bacon Croissant",
        userPrice: 110,
        userDescription: "Indulge in a buttery croissant filled with scrambled eggs, crispy bacon, and melted cheese. A savory and satisfying breakfast option that's perfect for on-the-go mornings.",
        category: "Breakfast",
        userRating: 4.2,
    },
    {
        id: 8,
        userImage: "https://w7.pngwing.com/pngs/683/103/png-transparent-frozen-yogurt-parfait-breakfast-yoghurt-fruit-salad-yogurt-frutti-di-bosco-food-breakfast-thumbnail.png",
        userName: "Greek Yogurt Parfait",
        userPrice: 95,
        userDescription: "Enjoy a healthy and refreshing breakfast with layers of creamy Greek yogurt, fresh berries, honey, and granola. A balanced option that provides a burst of flavors and energy.",
        category: "Breakfast",
        userRating: 4.1,
    },
    {
        id: 9,
        userImage: "https://w7.pngwing.com/pngs/400/603/png-transparent-toast-tostytosty-la-tosteria-menu-food-dish-avocado-toast-food-toast-avocado-toast-thumbnail.png",
        userName: "Avocado Toast",
        userPrice: 120,
        userDescription: "Savor the creaminess of mashed avocado on toasted whole grain bread, topped with a sprinkle of sea salt and red pepper flakes. A trendy and nutritious breakfast choice.",
        category: "Breakfast",
        userRating: 4.6,
    },
    {
        id: 10,
        userImage: "https://w7.pngwing.com/pngs/20/725/png-transparent-grain-bowl-breakfast-cereal-muesli-corn-flakes-bowl-granola-food-breakfast-recipe-thumbnail.png",
        userName: "Fruit and Nut Oatmeal",
        userPrice: 85,
        userDescription: "Warm up with a bowl of hearty oatmeal packed with mixed fruits, nuts, and a drizzle of honey. A wholesome breakfast that provides a satisfying start to your day.",
        category: "Breakfast",
        userRating: 4.5,
    },
    {
        id: 11,
        userImage: "https://w7.pngwing.com/pngs/875/111/png-transparent-north-fish-seafood-dish-smoked-salmon-restaurant-grilled-fish-hd-soup-food-seafood-thumbnail.png",
        userName: "Grilled Salmon",
        userPrice: 190,
        userDescription: "Delight in a perfectly grilled salmon fillet seasoned with herbs and served with a side of roasted vegetables. A healthy and flavorful dinner option that's rich in omega-3 fatty acids.",
        category: "Dinner",
        userRating: 4.5,
    },
    {
        id: 12,
        userImage: "https://w7.pngwing.com/pngs/756/828/png-transparent-taglierini-carbonara-fettuccine-alfredo-chicken-pasta-chicken-fillet-thumbnail.png",
        userName: "Chicken Alfredo Pasta",
        userPrice: 160,
        userDescription: "Indulge in creamy fettuccine Alfredo pasta with tender pieces of grilled chicken. This comforting dinner dish is a blend of pasta, rich Alfredo sauce, and savory chicken.",
        category: "Dinner",
        userRating: 4.8,
    },
    {
        id: 13,
        userImage: "https://w7.pngwing.com/pngs/651/721/png-transparent-veggie-burger-vegetable-food-recipe-stir-frying-vegetables-frying-pan-frozen-vegetables-fruit-thumbnail.png",
        userName: "Vegetable Stir-Fry",
        userPrice: 130,
        userDescription: "Enjoy a medley of colorful vegetables stir-fried in a flavorful sauce, served over steamed rice. A light and nutritious dinner that's both satisfying and wholesome.",
        category: "Dinner",
        userRating: 4.2,
    },
    {
        id: 14,
        userImage: "https://w7.pngwing.com/pngs/575/331/png-transparent-burrito-taco-bell-mexican-cuisine-chipotle-mexican-grill-menu-thumbnail.png",
        userName: "Grilled Chicken Burrito Bowl",
        userPrice: 160,
        userDescription: "Savor the flavors of a delicious burrito bowl with tender grilled chicken, black beans, rice, sautéed peppers and onions, shredded cheese, and a drizzle of zesty cilantro-lime dressing. A hearty and satisfying chicken dinner option.",
        category: "Dinner",
        userRating: 4.6,
    },
    {
        id: 15,
        userImage: "https://w7.pngwing.com/pngs/47/171/png-transparent-chinese-noodles-hot-and-sour-soup-risotto-lomi-lamian-slippery-mushrooms-risotto-dusi-soup-food-recipe-thumbnail.png",
        userName: "Mushroom Risotto",
        userPrice: 175,
        userDescription: "Indulge in creamy and flavorful mushroom risotto, made with Arborio rice, sautéed mushrooms, and a touch of Parmesan cheese. A comforting and sophisticated dinner choice.",
        category: "Dinner",
        userRating: 4.5,
    },
    {
        id: 16,
        userImage: "https://w7.pngwing.com/pngs/47/171/png-transparent-chinese-noodles-hot-and-sour-soup-risotto-lomi-lamian-slippery-mushrooms-risotto-dusi-soup-food-recipe-thumbnail.png",
        userName: "Cheese and Crackers Platter",
        userPrice: 120,
        userDescription: "Enjoy a variety of artisan cheeses, paired with an assortment of crispy crackers and complemented by fresh fruits and nuts. A delightful snack option for sharing or indulging in on your own.",
        category: "Snacks",
        userRating: 4.3,
    },
    {
        id: 17,
        userImage: "https://w7.pngwing.com/pngs/204/32/png-transparent-crispy-fried-chicken-karaage-chicken-nugget-chicken-fingers-buffalo-wing-carrot-chilli-thumbnail.png",
        userName: "Crispy Chicken Wings",
        userPrice: 130,
        userDescription: "Savor the satisfying crunch of crispy chicken wings seasoned to perfection. Choose your favorite sauce, from tangy BBQ to spicy buffalo, for a flavorful snacking experience.",
        category: "Snacks",
        userRating: 4.4,
    },
    {
        id: 18,
        userImage: "https://w7.pngwing.com/pngs/816/163/png-transparent-grilled-skewered-meat-bakery-paneer-tikka-indian-cuisine-vegetarian-cuisine-cake-food-baking-cake-decorating-thumbnail.png",
        userName: "Paneer Tikka Skewers",
        userPrice: 130,
        userDescription: "Enjoy succulent pieces of marinated paneer (Indian cottage cheese) skewered and grilled to perfection. Served with mint chutney, these paneer tikka skewers offer a flavorful and aromatic Indian snack experience.",
        category: "Snacks",
        userRating: 4.9,
    },
    {
        id: 19,
        userImage: "https://w7.pngwing.com/pngs/356/675/png-transparent-falafel-lebanese-cuisine-take-out-mediterranean-cuisine-hummus-bed-miscellaneous-furniture-food-thumbnail.png",
        userName: "Hummus and Veggie Platter",
        userPrice: 90,
        userDescription: "Relish the smooth and flavorful hummus accompanied by a variety of fresh vegetable sticks and pita bread. A nutritious and satisfying option for a light and refreshing snack.",
        category: "Snacks",
        userRating: 4.4,
    },
    {
        id: 20,
        userImage: "https://w7.pngwing.com/pngs/435/847/png-transparent-pincho-canape-skewer-fruit-others-thumbnail.png",
        userName: "Fruit Skewers",
        userPrice: 70,
        userDescription: "Indulge in a colorful assortment of fruit skewers featuring juicy chunks of melon, berries, pineapple, and more. A sweet and refreshing snack that's both delicious and visually appealing.",
        category: "Snacks",
        userRating: 4.8,
    },
];
export default FoodData;