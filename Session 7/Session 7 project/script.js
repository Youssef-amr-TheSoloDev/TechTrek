const products = [
    { name: "Premium Smartphone", category: "Electronics", price: 799.99, rating: 4.7 },
    { name: "Classic T-Shirt", category: "Clothing", price: 24.99, rating: 4.2 },
    { name: "Mystery Novel", category: "Books", price: 14.99, rating: 4.5 },
    { name: "Deluxe Blender", category: "Home & Kitchen", price: 89.99, rating: 4.3 },
    { name: "Pro Football", category: "Sports", price: 29.99, rating: 4.6 },
    { name: "Action Figure", category: "Toys", price: 19.99, rating: 4.1 },
    { name: "Lipstick Set", category: "Beauty", price: 34.99, rating: 4.4 },
    { name: "Car Battery", category: "Automotive", price: 129.99, rating: 4.0 },
    { name: "Garden Shovel", category: "Garden", price: 15.99, rating: 3.9 },
    { name: "Notebook Pack", category: "Office Supplies", price: 9.99, rating: 4.5 },
    { name: "Dog Food Bag", category: "Pet Supplies", price: 39.99, rating: 4.6 },
    { name: "Gold Necklace", category: "Jewelry", price: 249.99, rating: 4.8 },
    { name: "Ultra Laptop", category: "Electronics", price: 1299.99, rating: 4.9 },
    { name: "Slim Jeans", category: "Clothing", price: 49.99, rating: 4.0 },
    { name: "Cookbook", category: "Books", price: 22.50, rating: 4.7 },
    { name: "Microwave Oven", category: "Home & Kitchen", price: 199.99, rating: 4.2 },
    { name: "Basketball", category: "Sports", price: 19.99, rating: 4.3 },
    { name: "Board Game", category: "Toys", price: 34.99, rating: 4.8 },
    { name: "Foundation Cream", category: "Beauty", price: 29.99, rating: 4.1 },
    { name: "Floor Mats", category: "Automotive", price: 44.99, rating: 4.2 },
    { name: "Pruning Shears", category: "Garden", price: 12.99, rating: 4.0 },
    { name: "Stapler", category: "Office Supplies", price: 7.99, rating: 4.3 },
    { name: "Cat Food", category: "Pet Supplies", price: 34.99, rating: 4.5 },
    { name: "Silver Bracelet", category: "Jewelry", price: 89.99, rating: 4.4 },
    { name: "Basic Headphones", category: "Electronics", price: 59.99, rating: 4.1 },
    { name: "Winter Jacket", category: "Clothing", price: 89.99, rating: 4.6 },
    { name: "Biography Book", category: "Books", price: 18.99, rating: 4.4 },
    { name: "Knife Set", category: "Home & Kitchen", price: 74.99, rating: 4.5 },
    { name: "Tennis Racket", category: "Sports", price: 79.99, rating: 4.4 },
    { name: "Puzzle 1000pcs", category: "Toys", price: 15.99, rating: 4.2 },
    { name: "Mascara", category: "Beauty", price: 12.99, rating: 4.0 },
    { name: "Seat Covers", category: "Automotive", price: 59.99, rating: 4.1 },
    { name: "Hose 50ft", category: "Garden", price: 24.99, rating: 4.3 },
    { name: "Desk Lamp", category: "Office Supplies", price: 29.99, rating: 4.4 },
    { name: "Pet Bed", category: "Pet Supplies", price: 49.99, rating: 4.7 },
    { name: "Earrings", category: "Jewelry", price: 59.99, rating: 4.3 },
    { name: "Deluxe Tablet", category: "Electronics", price: 499.99, rating: 4.6 },
    { name: "Sweater", category: "Clothing", price: 39.99, rating: 4.2 },
    { name: "Science Book", category: "Books", price: 34.99, rating: 4.3 },
    { name: "Cutting Board", category: "Home & Kitchen", price: 14.99, rating: 3.8 },
    { name: "Baseball Glove", category: "Sports", price: 44.99, rating: 4.5 },
    { name: "Doll", category: "Toys", price: 24.99, rating: 4.0 },
    { name: "Nail Polish Set", category: "Beauty", price: 19.99, rating: 4.1 },
    { name: "Jump Starter", category: "Automotive", price: 89.99, rating: 4.3 },
    { name: "Plant Pot", category: "Garden", price: 9.99, rating: 3.7 },
    { name: "Monitor Stand", category: "Office Supplies", price: 39.99, rating: 4.5 },
    { name: "Leash", category: "Pet Supplies", price: 14.99, rating: 4.2 },
    { name: "Ring", category: "Jewelry", price: 199.99, rating: 4.7 },
    { name: "Pro Smartwatch", category: "Electronics", price: 349.99, rating: 4.4 },
    { name: "Hoodie", category: "Clothing", price: 54.99, rating: 4.3 },
    { name: "History Book", category: "Books", price: 28.99, rating: 4.6 },
    { name: "Cookware Set", category: "Home & Kitchen", price: 149.99, rating: 4.4 },
    { name: "Yoga Mat", category: "Sports", price: 22.99, rating: 4.2 },
    { name: "Lego Set", category: "Toys", price: 49.99, rating: 4.9 },
    { name: "Perfume", category: "Beauty", price: 64.99, rating: 4.5 },
    { name: "Tire Gauge", category: "Automotive", price: 12.99, rating: 3.9 },
    { name: "Seeds Pack", category: "Garden", price: 4.99, rating: 4.0 },
    { name: "Paper Shredder", category: "Office Supplies", price: 54.99, rating: 4.1 },
    { name: "Toy Ball", category: "Pet Supplies", price: 7.99, rating: 4.3 },
    { name: "Watch", category: "Jewelry", price: 299.99, rating: 4.6 },
    { name: "Classic Camera", category: "Electronics", price: 899.99, rating: 4.8 },
    { name: "Dress", category: "Clothing", price: 69.99, rating: 4.5 },
    { name: "Poetry Book", category: "Books", price: 13.99, rating: 4.1 },
    { name: "Bakeware Set", category: "Home & Kitchen", price: 44.99, rating: 4.2 },
    { name: "Dumbbell Set", category: "Sports", price: 59.99, rating: 4.4 },
    { name: "Stuffed Bear", category: "Toys", price: 16.99, rating: 4.7 },
    { name: "Lotion", category: "Beauty", price: 15.99, rating: 4.0 },
    { name: "Air Freshener", category: "Automotive", price: 6.99, rating: 3.8 },
    { name: "Fertilizer", category: "Garden", price: 19.99, rating: 4.1 },
    { name: "File Cabinet", category: "Office Supplies", price: 119.99, rating: 4.3 },
    { name: "Cat Litter", category: "Pet Supplies", price: 18.99, rating: 4.2 },
    { name: "Charm", category: "Jewelry", price: 29.99, rating: 4.0 },
    { name: "Ultra Speaker", category: "Electronics", price: 159.99, rating: 4.7 },
    { name: "Shorts", category: "Clothing", price: 29.99, rating: 3.9 },
    { name: "Children's Book", category: "Books", price: 11.99, rating: 4.5 },
    { name: "Coffee Maker", category: "Home & Kitchen", price: 79.99, rating: 4.3 },
    { name: "Jump Rope", category: "Sports", price: 9.99, rating: 4.0 },
    { name: "Remote Car", category: "Toys", price: 39.99, rating: 4.1 },
    { name: "Facial Cream", category: "Beauty", price: 44.99, rating: 4.6 },
    { name: "Wiper Blades", category: "Automotive", price: 19.99, rating: 4.0 },
    { name: "Gardening Gloves", category: "Garden", price: 8.99, rating: 3.9 },
    { name: "Desk Organizer", category: "Office Supplies", price: 24.99, rating: 4.2 },
    { name: "Pet Carrier", category: "Pet Supplies", price: 59.99, rating: 4.4 },
    { name: "Brooch", category: "Jewelry", price: 39.99, rating: 4.1 },
    { name: "Elite Monitor", category: "Electronics", price: 399.99, rating: 4.5 },
    { name: "Socks Pack", category: "Clothing", price: 12.99, rating: 4.1 },
    { name: "Romance Novel", category: "Books", price: 13.50, rating: 4.3 },
    { name: "Toaster", category: "Home & Kitchen", price: 34.99, rating: 4.0 },
    { name: "Soccer Ball", category: "Sports", price: 24.99, rating: 4.4 },
    { name: "Water Gun", category: "Toys", price: 8.99, rating: 3.8 },
    { name: "Shampoo", category: "Beauty", price: 9.99, rating: 4.2 },
    { name: "Car Charger", category: "Automotive", price: 16.99, rating: 4.1 },
    { name: "Watering Can", category: "Garden", price: 12.99, rating: 4.0 },
    { name: "Scissors Set", category: "Office Supplies", price: 6.99, rating: 4.3 },
    { name: "Brush", category: "Pet Supplies", price: 9.99, rating: 4.2 },
    { name: "Anklet", category: "Jewelry", price: 19.99, rating: 3.9 },
    { name: "Gaming Keyboard", category: "Electronics", price: 129.99, rating: 4.6 },
    { name: "Scarf", category: "Clothing", price: 19.99, rating: 4.2 },
    { name: "Mystery Book", category: "Books", price: 16.99, rating: 4.4 },
    { name: "Vacuum Cleaner", category: "Home & Kitchen", price: 249.99, rating: 4.1 },
    { name: "Bicycle", category: "Sports", price: 399.99, rating: 4.5 },
    { name: "Play-Doh Set", category: "Toys", price: 11.99, rating: 4.0 },
    { name: "Soap Pack", category: "Beauty", price: 7.99, rating: 4.3 },
    { name: "Oil Filter", category: "Automotive", price: 11.99, rating: 3.9 },
    { name: "Lawn Mower", category: "Garden", price: 299.99, rating: 4.2 },
    { name: "Tape Dispenser", category: "Office Supplies", price: 4.99, rating: 4.1 },
    { name: "Nail Clipper", category: "Pet Supplies", price: 6.99, rating: 3.8 },
    { name: "Pendant", category: "Jewelry", price: 79.99, rating: 4.5 },
    { name: "Wireless Mouse", category: "Electronics", price: 69.99, rating: 4.3 },
    { name: "Hat", category: "Clothing", price: 14.99, rating: 4.0 },
    { name: "Textbook", category: "Books", price: 89.99, rating: 4.2 },
    { name: "Lamp", category: "Home & Kitchen", price: 49.99, rating: 4.1 },
    { name: "Skateboard", category: "Sports", price: 69.99, rating: 4.3 },
    { name: "Kite", category: "Toys", price: 13.99, rating: 4.1 },
    { name: "Deodorant", category: "Beauty", price: 5.99, rating: 4.0 },
    { name: "Brake Pads", category: "Automotive", price: 39.99, rating: 4.4 },
    { name: "Rake", category: "Garden", price: 17.99, rating: 3.7 },
    { name: "Pen Set", category: "Office Supplies", price: 8.99, rating: 4.5 },
    { name: "Pet Bowl", category: "Pet Supplies", price: 4.99, rating: 4.0 },
    { name: "Bangle", category: "Jewelry", price: 34.99, rating: 4.2 },
    { name: "Premium Headset", category: "Electronics", price: 199.99, rating: 4.7 },
    { name: "Denim Jacket", category: "Clothing", price: 79.99, rating: 4.4 },
    { name: "Fiction Book", category: "Books", price: 17.99, rating: 4.3 },
    { name: "Slow Cooker", category: "Home & Kitchen", price: 59.99, rating: 4.5 },
    { name: "Golf Club Set", category: "Sports", price: 499.99, rating: 4.6 },
    { name: "Train Set", category: "Toys", price: 44.99, rating: 4.3 },
    { name: "Eye Shadow", category: "Beauty", price: 14.99, rating: 4.1 },
    { name: "Floor Jack", category: "Automotive", price: 149.99, rating: 4.2 },
    { name: "Hedge Trimmer", category: "Garden", price: 69.99, rating: 4.0 },
    { name: "Desk Chair", category: "Office Supplies", price: 199.99, rating: 4.6 },
    { name: "Fish Tank", category: "Pet Supplies", price: 79.99, rating: 4.1 },
    { name: "Diamond Ring", category: "Jewelry", price: 599.99, rating: 4.9 },
    { name: "Gaming Monitor", category: "Electronics", price: 649.99, rating: 4.8 },
    { name: "Cargo Shorts", category: "Clothing", price: 34.99, rating: 4.0 },
    { name: "Cookbook", category: "Books", price: 26.99, rating: 4.5 },
    { name: "Air Fryer", category: "Home & Kitchen", price: 119.99, rating: 4.4 },
    { name: "Treadmill", category: "Sports", price: 799.99, rating: 4.3 },
    { name: "Building Blocks", category: "Toys", price: 29.99, rating: 4.6 },
    { name: "Concealer", category: "Beauty", price: 11.99, rating: 3.9 },
    { name: "Windshield Wipers", category: "Automotive", price: 22.99, rating: 4.0 },
    { name: "Weed Trimmer", category: "Garden", price: 89.99, rating: 4.1 },
    { name: "Printer Paper", category: "Office Supplies", price: 14.99, rating: 4.2 },
    { name: "Hamster Cage", category: "Pet Supplies", price: 59.99, rating: 4.0 },
    { name: "Gold Earrings", category: "Jewelry", price: 349.99, rating: 4.7 },
    { name: "Soundbar", category: "Electronics", price: 279.99, rating: 4.5 },
    { name: "Tank Top", category: "Clothing", price: 17.99, rating: 3.8 },
    { name: "Thriller Book", category: "Books", price: 15.99, rating: 4.6 },
    { name: "Ice Cream Maker", category: "Home & Kitchen", price: 69.99, rating: 4.0 },
    { name: "Volleyball", category: "Sports", price: 21.99, rating: 4.2 },
    { name: "RC Helicopter", category: "Toys", price: 54.99, rating: 4.1 },
    { name: "Face Mask", category: "Beauty", price: 8.99, rating: 4.3 },
    { name: "Car Cover", category: "Automotive", price: 54.99, rating: 4.2 },
    { name: "Bird Feeder", category: "Garden", price: 19.99, rating: 4.0 },
    { name: "Whiteboard", category: "Office Supplies", price: 44.99, rating: 4.3 },
    { name: "Bird Perch", category: "Pet Supplies", price: 12.99, rating: 3.9 },
    { name: "Pearl Necklace", category: "Jewelry", price: 449.99, rating: 4.8 },
    { name: "Projector", category: "Electronics", price: 599.99, rating: 4.4 },
    { name: "Fleece Blanket", category: "Clothing", price: 29.99, rating: 4.3 },
    { name: "Horror Book", category: "Books", price: 14.99, rating: 4.2 },
    { name: "Pressure Cooker", category: "Home & Kitchen", price: 109.99, rating: 4.6 },
    { name: "Table Tennis Set", category: "Sports", price: 39.99, rating: 4.1 },
    { name: "Dinosaur Toy", category: "Toys", price: 18.99, rating: 4.4 },
    { name: "Lip Liner", category: "Beauty", price: 6.99, rating: 3.8 },
    { name: "Snow Chains", category: "Automotive", price: 89.99, rating: 4.1 },
    { name: "Composter", category: "Garden", price: 79.99, rating: 3.9 },
    { name: "Bulletin Board", category: "Office Supplies", price: 34.99, rating: 4.0 },
    { name: "Dog Crate", category: "Pet Supplies", price: 89.99, rating: 4.4 },
    { name: "Silver Ring", category: "Jewelry", price: 149.99, rating: 4.5 },
    { name: "Webcam", category: "Electronics", price: 89.99, rating: 4.2 },
    { name: "Cargo Pants", category: "Clothing", price: 49.99, rating: 4.1 },
    { name: "Adventure Book", category: "Books", price: 19.99, rating: 4.4 },
    { name: "Waffle Maker", category: "Home & Kitchen", price: 39.99, rating: 4.2 },
    { name: "Boxing Gloves", category: "Sports", price: 34.99, rating: 4.3 },
    { name: "Toy Tool Set", category: "Toys", price: 22.99, rating: 4.0 },
    { name: "Blush", category: "Beauty", price: 13.99, rating: 4.1 },
    { name: "Car Vacuum", category: "Automotive", price: 34.99, rating: 3.9 },
    { name: "Flower Seeds", category: "Garden", price: 3.99, rating: 4.0 },
    { name: "Marker Set", category: "Office Supplies", price: 11.99, rating: 4.2 },
    { name: "Cat Tree", category: "Pet Supplies", price: 69.99, rating: 4.5 },
    { name: "Beaded Bracelet", category: "Jewelry", price: 24.99, rating: 4.1 },
    { name: "External Hard Drive", category: "Electronics", price: 119.99, rating: 4.5 },
    { name: "Cardigan", category: "Clothing", price: 59.99, rating: 4.2 },
    { name: "Comedy Book", category: "Books", price: 12.99, rating: 4.0 },
    { name: "Rice Cooker", category: "Home & Kitchen", price: 44.99, rating: 4.3 },
    { name: "Badminton Set", category: "Sports", price: 29.99, rating: 4.0 },
    { name: "Magic Set", category: "Toys", price: 26.99, rating: 4.2 },
    { name: "Highlighter", category: "Beauty", price: 9.99, rating: 3.9 },
    { name: "Cargo Carrier", category: "Automotive", price: 179.99, rating: 4.2 },
    { name: "Garden Bench", category: "Garden", price: 129.99, rating: 4.1 },
    { name: "Label Maker", category: "Office Supplies", price: 29.99, rating: 4.3 },
    { name: "Rabbit Hutch", category: "Pet Supplies", price: 99.99, rating: 4.0 },
    { name: "Charm Bracelet", category: "Jewelry", price: 69.99, rating: 4.3 },
    { name: "USB Hub", category: "Electronics", price: 34.99, rating: 4.1 },
    { name: "Polo Shirt", category: "Clothing", price: 44.99, rating: 4.2 },
    { name: "Drama Book", category: "Books", price: 16.99, rating: 4.1 },
    { name: "Fondue Set", category: "Home & Kitchen", price: 54.99, rating: 3.8 },
    { name: "Bowling Ball", category: "Sports", price: 89.99, rating: 4.4 },
    { name: "Model Kit", category: "Toys", price: 31.99, rating: 4.5 },
    { name: "Primer", category: "Beauty", price: 10.99, rating: 4.0 },
    { name: "Tool Set", category: "Automotive", price: 99.99, rating: 4.3 },
    { name: "Garden Lights", category: "Garden", price: 24.99, rating: 4.0 },
    { name: "Calculator", category: "Office Supplies", price: 14.99, rating: 4.2 },
    { name: "Fish Food", category: "Pet Supplies", price: 5.99, rating: 4.0 },
    { name: "Cufflinks", category: "Jewelry", price: 44.99, rating: 4.1 },
    { name: "Smart Plug", category: "Electronics", price: 19.99, rating: 4.3 },
    { name: "Tracksuit", category: "Clothing", price: 64.99, rating: 4.1 },
    { name: "Graphic Novel", category: "Books", price: 21.99, rating: 4.6 },
    { name: "Food Processor", category: "Home & Kitchen", price: 169.99, rating: 4.3 },
    { name: "Hockey Stick", category: "Sports", price: 49.99, rating: 4.2 },
    { name: "Robot Toy", category: "Toys", price: 59.99, rating: 4.4 },
    { name: "Bronzer", category: "Beauty", price: 11.99, rating: 3.8 },
    { name: "Emergency Kit", category: "Automotive", price: 44.99, rating: 4.5 },
    { name: "Garden Net", category: "Garden", price: 14.99, rating: 3.7 },
    { name: "Easel Board", category: "Office Supplies", price: 74.99, rating: 4.1 },
    { name: "Bird Cage", category: "Pet Supplies", price: 79.99, rating: 4.2 },
    { name: "Tie Pin", category: "Jewelry", price: 19.99, rating: 3.9 },
    { name: "Router", category: "Electronics", price: 149.99, rating: 4.4 },
    { name: "Vest", category: "Clothing", price: 39.99, rating: 4.0 },
    { name: "Journal Book", category: "Books", price: 10.99, rating: 4.2 },
    { name: "Grill Pan", category: "Home & Kitchen", price: 32.99, rating: 4.1 },
    { name: "Cricket Bat", category: "Sports", price: 69.99, rating: 4.3 },
    { name: "Art Kit", category: "Toys", price: 27.99, rating: 4.4 },
    { name: "Setting Spray", category: "Beauty", price: 15.99, rating: 4.2 },
    { name: "Steering Cover", category: "Automotive", price: 18.99, rating: 3.9 },
    { name: "Hose Reel", category: "Garden", price: 44.99, rating: 4.0 },
    { name: "File Folders", category: "Office Supplies", price: 7.99, rating: 4.1 },
    { name: "Cat Toy Set", category: "Pet Supplies", price: 11.99, rating: 4.3 },
    { name: "Cubic Zirconia Ring", category: "Jewelry", price: 39.99, rating: 4.0 },
    { name: "Bluetooth Earbuds", category: "Electronics", price: 79.99, rating: 4.6 },
    { name: "Raincoat", category: "Clothing", price: 49.99, rating: 4.1 },
    { name: "Self-Help Book", category: "Books", price: 18.99, rating: 4.5 },
    { name: "Egg Cooker", category: "Home & Kitchen", price: 19.99, rating: 4.0 },
    { name: "Ski Goggles", category: "Sports", price: 39.99, rating: 4.2 },
    { name: "Slinky", category: "Toys", price: 6.99, rating: 3.8 },
    { name: "Makeup Sponge", category: "Beauty", price: 4.99, rating: 4.1 },
    { name: "Car Mats", category: "Automotive", price: 49.99, rating: 4.2 },
    { name: "Tree Pruner", category: "Garden", price: 34.99, rating: 3.9 },
    { name: "Letter Tray", category: "Office Supplies", price: 12.99, rating: 4.0 },
    { name: "Dog Harness", category: "Pet Supplies", price: 24.99, rating: 4.4 },
    { name: "Rose Gold Earrings", category: "Jewelry", price: 79.99, rating: 4.6 },
    { name: "Surge Protector", category: "Electronics", price: 29.99, rating: 4.3 },
    { name: "Belt", category: "Clothing", price: 22.99, rating: 4.0 },
    { name: "Travel Book", category: "Books", price: 24.99, rating: 4.3 },
    { name: "Popcorn Maker", category: "Home & Kitchen", price: 34.99, rating: 4.1 },
    { name: "Fitness Tracker", category: "Sports", price: 99.99, rating: 4.5 },
    { name: "Craft Set", category: "Toys", price: 19.99, rating: 4.2 },
    { name: "Eyebrow Pencil", category: "Beauty", price: 7.99, rating: 3.9 },
    { name: "Jack Stands", category: "Automotive", price: 59.99, rating: 4.3 },
    { name: "Fence Panel", category: "Garden", price: 89.99, rating: 4.0 },
    { name: "Binder Clips", category: "Office Supplies", price: 3.99, rating: 4.2 },
    { name: "Guinea Pig Pen", category: "Pet Supplies", price: 49.99, rating: 4.1 },
    { name: "Silver Pendant", category: "Jewelry", price: 54.99, rating: 4.2 },
    { name: "Graphics Card", category: "Electronics", price: 499.99, rating: 4.7 },
    { name: "Cap", category: "Clothing", price: 15.99, rating: 3.9 },
    { name: "Spiritual Book", category: "Books", price: 16.99, rating: 4.0 },
    { name: "Juicer", category: "Home & Kitchen", price: 89.99, rating: 4.2 },
    { name: "Snowboard", category: "Sports", price: 299.99, rating: 4.4 },
    { name: "Dance Mat", category: "Toys", price: 34.99, rating: 4.1 },
    { name: "Eyeliner", category: "Beauty", price: 8.99, rating: 4.0 },
    { name: "Dash Camera", category: "Automotive", price: 69.99, rating: 4.4 },
    { name: "Sprinkler", category: "Garden", price: 22.99, rating: 3.8 },
    { name: "Post-it Notes", category: "Office Supplies", price: 5.99, rating: 4.3 },
    { name: "Aquarium Pump", category: "Pet Supplies", price: 29.99, rating: 4.0 },
    { name: "Gold Bracelet", category: "Jewelry", price: 399.99, rating: 4.8 },
    { name: "SSD Drive", category: "Electronics", price: 89.99, rating: 4.5 },
    { name: "Knit Sweater", category: "Clothing", price: 69.99, rating: 4.4 },
    { name: "Health Book", category: "Books", price: 20.99, rating: 4.2 },
    { name: "Coffee Grinder", category: "Home & Kitchen", price: 49.99, rating: 4.3 },
    { name: "Ping Pong Paddles", category: "Sports", price: 19.99, rating: 4.0 },
    { name: "Bubbles Set", category: "Toys", price: 4.99, rating: 3.7 },
    { name: "Toner", category: "Beauty", price: 12.99, rating: 4.2 },
    { name: "Towing Mirror", category: "Automotive", price: 74.99, rating: 4.1 },
    { name: "Pots Set", category: "Garden", price: 34.99, rating: 4.0 },
    { name: "Shredder Bags", category: "Office Supplies", price: 8.99, rating: 3.9 },
    { name: "Dog Toys Pack", category: "Pet Supplies", price: 15.99, rating: 4.3 },
    { name: "Titanium Ring", category: "Jewelry", price: 199.99, rating: 4.4 },
    { name: "Gaming Headset", category: "Electronics", price: 109.99, rating: 4.6 },
    { name: "Overalls", category: "Clothing", price: 54.99, rating: 4.0 },
    { name: "Parenting Book", category: "Books", price: 19.99, rating: 4.3 },
    { name: "Mixing Bowl Set", category: "Home & Kitchen", price: 27.99, rating: 4.2 },
    { name: "Weight Bench", category: "Sports", price: 149.99, rating: 4.4 },
    { name: "Toy Piano", category: "Toys", price: 29.99, rating: 4.1 },
    { name: "Serum", category: "Beauty", price: 34.99, rating: 4.5 },
    { name: "Bumper Protector", category: "Automotive", price: 39.99, rating: 3.9 },
    { name: "Garden Cart", category: "Garden", price: 119.99, rating: 4.1 },
    { name: "Clipboard", category: "Office Supplies", price: 6.99, rating: 4.0 },
    { name: "Pet Clippers", category: "Pet Supplies", price: 39.99, rating: 4.2 },
    { name: "Ruby Necklace", category: "Jewelry", price: 499.99, rating: 4.7 },
    { name: "Tablet Stand", category: "Electronics", price: 24.99, rating: 4.1 },
    { name: "Windbreaker", category: "Clothing", price: 44.99, rating: 4.2 },
    { name: "Technology Book", category: "Books", price: 32.99, rating: 4.4 },
    { name: "Mandoline Slicer", category: "Home & Kitchen", price: 22.99, rating: 4.0 },
    { name: "Hula Hoop", category: "Sports", price: 14.99, rating: 3.8 },
    { name: "Yo-Yo", category: "Toys", price: 7.99, rating: 4.0 },
    { name: "Moisturizer", category: "Beauty", price: 18.99, rating: 4.3 },
    { name: "Roller Cover", category: "Automotive", price: 29.99, rating: 4.0 },
    { name: "Garden Fork", category: "Garden", price: 16.99, rating: 3.9 },
    { name: "Desk Mat", category: "Office Supplies", price: 19.99, rating: 4.1 },
    { name: "Pet Ramp", category: "Pet Supplies", price: 69.99, rating: 4.3 },
    { name: "Jade Pendant", category: "Jewelry", price: 149.99, rating: 4.5 },
    { name: "Touch Pen", category: "Electronics", price: 14.99, rating: 4.0 },
    { name: "Suspenders", category: "Clothing", price: 19.99, rating: 3.8 },
    { name: "Motivational Book", category: "Books", price: 15.99, rating: 4.2 },
    { name: "Oil Dispenser", category: "Home & Kitchen", price: 12.99, rating: 4.1 },
    { name: "Ab Wheel", category: "Sports", price: 17.99, rating: 4.0 },
    { name: "Marbles Set", category: "Toys", price: 8.99, rating: 3.9 },
    { name: "Cleanser", category: "Beauty", price: 13.99, rating: 4.2 },
    { name: "Roof Rack", category: "Automotive", price: 159.99, rating: 4.3 },
    { name: "Garden Trowel", category: "Garden", price: 7.99, rating: 4.0 },
    { name: "Notepad Set", category: "Office Supplies", price: 9.99, rating: 4.2 },
    { name: "Parakeet Cage", category: "Pet Supplies", price: 89.99, rating: 4.0 },
    { name: "Birthstone Ring", category: "Jewelry", price: 249.99, rating: 4.6 },
    { name: "Phone Charger", category: "Electronics", price: 19.99, rating: 4.2 },
    { name: "Tie", category: "Clothing", price: 29.99, rating: 4.1 },
    { name: "Astronomy Book", category: "Books", price: 29.99, rating: 4.4 },
    { name: "Spiralizer", category: "Home & Kitchen", price: 21.99, rating: 3.9 },
    { name: "Push-up Stands", category: "Sports", price: 24.99, rating: 4.1 },
    { name: "Sandbox Set", category: "Toys", price: 39.99, rating: 4.2 },
    { name: "Brow Gel", category: "Beauty", price: 9.99, rating: 4.0 },
    { name: "Gas Cap", category: "Automotive", price: 11.99, rating: 3.8 },
    { name: "Garden Stool", category: "Garden", price: 27.99, rating: 4.0 },
    { name: "Rubber Bands", category: "Office Supplies", price: 2.99, rating: 4.1 },
    { name: "Reptile Lamp", category: "Pet Supplies", price: 19.99, rating: 3.9 },
    { name: "Amber Necklace", category: "Jewelry", price: 89.99, rating: 4.2 },
    { name: "Laptop Bag", category: "Electronics", price: 39.99, rating: 4.3 },
    { name: "Shawl", category: "Clothing", price: 34.99, rating: 4.0 },
    { name: "Philosophy Book", category: "Books", price: 22.99, rating: 4.2 },
    { name: "Tea Kettle", category: "Home & Kitchen", price: 29.99, rating: 4.3 },
    { name: "Resistance Bands", category: "Sports", price: 16.99, rating: 4.1 },
    { name: "Frisbee", category: "Toys", price: 7.99, rating: 4.0 },
    { name: "Exfoliator", category: "Beauty", price: 14.99, rating: 4.2 },
    { name: "Hitch Lock", category: "Automotive", price: 19.99, rating: 3.9 },
    { name: "Garden Stakes", category: "Garden", price: 6.99, rating: 3.8 },
    { name: "Envelopes", category: "Office Supplies", price: 4.99, rating: 4.0 },
    { name: "Ferret Cage", category: "Pet Supplies", price: 119.99, rating: 4.1 },
    { name: "Pearl Bracelet", category: "Jewelry", price: 69.99, rating: 4.3 },
    { name: "RAM Memory", category: "Electronics", price: 79.99, rating: 4.4 },
    { name: "Kimono", category: "Clothing", price: 59.99, rating: 4.2 },
    { name: "Business Book", category: "Books", price: 27.99, rating: 4.5 },
    { name: "Pizza Stone", category: "Home & Kitchen", price: 34.99, rating: 4.1 },
    { name: "Gym Bag", category: "Sports", price: 29.99, rating: 4.0 },
    { name: "Jigsaw Puzzle", category: "Toys", price: 13.99, rating: 4.3 },
    { name: "Face Scrub", category: "Beauty", price: 11.99, rating: 4.1 },
    { name: "Sunshade", category: "Automotive", price: 24.99, rating: 4.0 },
    { name: "Garden Shed", category: "Garden", price: 499.99, rating: 4.2 },
    { name: "Sticky Notes", category: "Office Supplies", price: 3.99, rating: 4.1 },
    { name: "Lizard Tank", category: "Pet Supplies", price: 69.99, rating: 3.8 },
    { name: "Brooch Pin", category: "Jewelry", price: 34.99, rating: 4.0 },
    { name: "Power Bank", category: "Electronics", price: 49.99, rating: 4.3 },
    { name: "Poncho", category: "Clothing", price: 44.99, rating: 3.9 },
    { name: "Fantasy Book", category: "Books", price: 20.99, rating: 4.4 },
    { name: "Skillet", category: "Home & Kitchen", price: 39.99, rating: 4.2 },
    { name: "Hiking Poles", category: "Sports", price: 44.99, rating: 4.2 },
    { name: "Slinky Dog", category: "Toys", price: 9.99, rating: 4.1 },
    { name: "Makeup Remover", category: "Beauty", price: 7.99, rating: 4.0 },
    { name: "Bug Deflector", category: "Automotive", price: 54.99, rating: 3.9 },
    { name: "Garden Fence", category: "Garden", price: 39.99, rating: 4.0 },
    { name: "Drawer Organizer", category: "Office Supplies", price: 14.99, rating: 4.2 },
    { name: "Snake Tank", category: "Pet Supplies", price: 89.99, rating: 4.0 },
    { name: "Titanium Necklace", category: "Jewelry", price: 119.99, rating: 4.3 },
    { name: "Microphone", category: "Electronics", price: 69.99, rating: 4.2 },
    { name: "Leggings", category: "Clothing", price: 34.99, rating: 4.1 },
    { name: "Art Book", category: "Books", price: 39.99, rating: 4.3 },
    { name: "Steamer", category: "Home & Kitchen", price: 79.99, rating: 4.0 }
  ];

  const categories = products.map(p => p.category);
  const uniqueCategories = [...new Set(categories)];

  document.addEventListener("DOMContentLoaded", ()=>{
    const categorySelector = document.querySelector("#category-filter-options");
        uniqueCategories.forEach((el)=>{
            categorySelector.innerHTML += `<option>${el}</option>`;
        })
  });


function SearchUsingProductName(q){
    if(q === '') return products;

    return products.filter((el) => {
        return el.name.trim().toLowerCase().includes(q);
    })
}


function SearchUsingProductCategory(q){
    if(q === '') return products;

    return products.filter((el) => {
        return el.category === q;
    })
}

function filterBuyCategory(){
    const SelectedCategory = document.querySelector("#category-filter-options").value;
    results = SearchUsingProductCategory(SelectedCategory);
    UpdateProductDisplay(results);
}

function SearchForProduct(){
    const SearchQuery = document.querySelector("#Search-input").value.trim().toLowerCase();
    results = SearchUsingProductName(SearchQuery);

    if(results.length == 0){
        UpdateProductDisplay([]);
        return;
    }

    UpdateProductDisplay(results);
}

function removeFilter(){
    UpdateProductDisplay(products);
}

function UpdateProductDisplay(r){
    const productCountDisplay = document.querySelector("#product-count");
    const productCardContainer = document.querySelector("#product-display");

    productCountDisplay.textContent = `Products: ${r.length.toString().padStart(4, "0")}`;
    productCardContainer.innerHTML = '';

    if(r.length === 0){
        productCardContainer.innerHTML = "<h2>no products found</h2>"
        return;
    }

    r.forEach(
        (el) => {
            let {name, category, price, rating} = el;
            productCardContainer.innerHTML += `
            <div class="card">
                <h2>${name}</h2>
                <h4>${price}$</h4>
                <div class="more-info">
                    <p>${category}</p>
                    <span class="rate">
                        <p>${rating}</p>
                        <img src="./assets/star.png">
                    </span>
                </div>
                <div>
                    <input type="button" value="Buy now">
                    <input type="button" value="add to cart">
                </div>
            </div>
            `;
        }
    );
}

UpdateProductDisplay(products);