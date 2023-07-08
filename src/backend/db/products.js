import { v4 as uuid } from 'uuid'
/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: 'e4eacafb-7802-4c01-9eb7-c00ccc332ab0',
    isFeatured: false,
    title:
      'OKAZU - Sanshō Pepper Miso- Japanese miso chili oil condiment (230ml/8oz)',
    price: '16.99',
    categoryName: 'casual',
    inWishlist: true,
    inCart: true,
    imgSrc:
      'https://www.abokichi.com/cdn/shop/products/20221123_OKAZU_Sansho1_ac194879-d3da-4077-a3e5-cd0f79b42def.png',
    rating: 4,
    description: {
      about:
        'Try our latest OKAZU flavour! ENJOY TINGLY UMAMI! So whats the deal with Sanshō versus Szechuan pepper, you ask? Well, both of these peppers have a tingly heat to them, but there are some key distinctions. For starters, Sanshō orginates from Japan and Szechuan is from China. If you look at the colour, Sanshō pepper comes in green while Szechuan often has a deeper red hue when ground up. In terms of taste, Sanshō has a strong citrus flavour that reminds you of yuzu or grapefruit whilst Szechuan has more floral notes. And finally, when it comes to spice, Sanshō peppers tend to be milder than Szechuan ones and also have that tingly, numbing effect when you eat them.',
      ingredients: [
        'MILD_MEDIUM',
        'Non-GMO Sunflower and/or Non-GMO Canola Oil, Sesame Oil, Garlic, Miso Paste (Organic Soybeans, Rice, Salt), Tamari Soy Sauce (Non-GMO Soybeans, Salt, Sugar), Organic Cane Sugar, Chili Powder, White Sesame Seeds, Sansho Pepper, Chickpea Flour',
        'CONTAINS: SESAME, SOYBEANS. MAY CONTAIN: MUSTARD',
        'All NATURAL NO MSG',
      ],
      insructions: 'PRODUCT SEPARATION IS NORMAL. REFRIGERATE AFTER OPENING',
    },
  },
  {
    _id: 'dda13e81-d992-4381-907a-6762aa0fe6e1',
    isFeatured: true,
    title: 'OKAZU - CHILI MISO - Japanese miso chili oil condiment (230ml/8oz)',
    price: '14.99',
    categoryName: 'casual',
    inWishlist: false,
    inCart: false,
    rating: 5,
    imgSrc: 'https://www.abokichi.com/cdn/shop/products/Chili_miso_250ml_1.png',
    description: {
      about:
        'Try our latest OKAZU flavour! ENJOY TINGLY UMAMI! So whats the deal with Sanshō versus Szechuan pepper, you ask? Well, both of these peppers have a tingly heat to them, but there are some key distinctions. For starters, Sanshō orginates from Japan and Szechuan is from China. If you look at the colour, Sanshō pepper comes in green while Szechuan often has a deeper red hue when ground up. In terms of taste, Sanshō has a strong citrus flavour that reminds you of yuzu or grapefruit whilst Szechuan has more floral notes. And finally, when it comes to spice, Sanshō peppers tend to be milder than Szechuan ones and also have that tingly, numbing effect when you eat them.',
      ingredients: [
        'MILD_MEDIUM',
        'Non-GMO Sunflower and/or Non-GMO Canola Oil, Sesame Oil, Garlic, Miso Paste (Organic Soybeans, Rice, Salt), Tamari Soy Sauce (Non-GMO Soybeans, Salt, Sugar), Organic Cane Sugar, Chili Powder, White Sesame Seeds, Sansho Pepper, Chickpea Flour',
        'CONTAINS: SESAME, SOYBEANS. MAY CONTAIN: MUSTARD',
        'All NATURAL NO MSG',
      ],
      insructions: 'PRODUCT SEPARATION IS NORMAL. REFRIGERATE AFTER OPENING',
    },
  },
  {
    _id: '968b90c5-cb69-44ec-8da6-343f621b20f3',
    isFeatured: false,
    title: 'ABO Ramen (Gluten-free) - Classic Miso - 2 servings/unit',
    price: '14.99',
    categoryName: 'casual',
    inWishlist: false,
    inCart: false,
    rating: 4.0,
    imgSrc:
      'https://www.abokichi.com/cdn/shop/products/20230306_ABORamenClassic1.png',
    description: {
      about:
        'Try our latest OKAZU flavour! ENJOY TINGLY UMAMI! So whats the deal with Sanshō versus Szechuan pepper, you ask? Well, both of these peppers have a tingly heat to them, but there are some key distinctions. For starters, Sanshō orginates from Japan and Szechuan is from China. If you look at the colour, Sanshō pepper comes in green while Szechuan often has a deeper red hue when ground up. In terms of taste, Sanshō has a strong citrus flavour that reminds you of yuzu or grapefruit whilst Szechuan has more floral notes. And finally, when it comes to spice, Sanshō peppers tend to be milder than Szechuan ones and also have that tingly, numbing effect when you eat them.',
      ingredients: [
        'MILD_MEDIUM',
        'Non-GMO Sunflower and/or Non-GMO Canola Oil, Sesame Oil, Garlic, Miso Paste (Organic Soybeans, Rice, Salt), Tamari Soy Sauce (Non-GMO Soybeans, Salt, Sugar), Organic Cane Sugar, Chili Powder, White Sesame Seeds, Sansho Pepper, Chickpea Flour',
        'CONTAINS: SESAME, SOYBEANS. MAY CONTAIN: MUSTARD',
        'All NATURAL NO MSG',
      ],
      insructions: 'PRODUCT SEPARATION IS NORMAL. REFRIGERATE AFTER OPENING',
    },
  },
  {
    _id: 'bfc10cdf-353e-4a24-8e08-752f310f766b',
    isFeatured: true,
    title: 'ABO Ramen (Gluten-free) - Spicy Miso - 2 servings/unit',
    price: '14.99',
    categoryName: 'casual',
    inWishlist: false,
    inCart: false,
    rating: 4.0,
    imgSrc:
      'https://www.abokichi.com/cdn/shop/products/20230306_ABORamenSpicy1.png',
    description: {
      about:
        'Try our latest OKAZU flavour! ENJOY TINGLY UMAMI! So whats the deal with Sanshō versus Szechuan pepper, you ask? Well, both of these peppers have a tingly heat to them, but there are some key distinctions. For starters, Sanshō orginates from Japan and Szechuan is from China. If you look at the colour, Sanshō pepper comes in green while Szechuan often has a deeper red hue when ground up. In terms of taste, Sanshō has a strong citrus flavour that reminds you of yuzu or grapefruit whilst Szechuan has more floral notes. And finally, when it comes to spice, Sanshō peppers tend to be milder than Szechuan ones and also have that tingly, numbing effect when you eat them.',
      ingredients: [
        'MILD_MEDIUM',
        'Non-GMO Sunflower and/or Non-GMO Canola Oil, Sesame Oil, Garlic, Miso Paste (Organic Soybeans, Rice, Salt), Tamari Soy Sauce (Non-GMO Soybeans, Salt, Sugar), Organic Cane Sugar, Chili Powder, White Sesame Seeds, Sansho Pepper, Chickpea Flour',
        'CONTAINS: SESAME, SOYBEANS. MAY CONTAIN: MUSTARD',
        'All NATURAL NO MSG',
        'PRODUCT SEPARATION IS NORMAL. REFRIGERATE AFTER OPENING',
      ],
    },
  },
  {
    _id: '4ba739bd-a15c-43e1-a0c6-9b7c0b861cae',
    isFeatured: true,
    title: 'OKAZU, ABO Ramen (Gluten-free) and ABO Matcha Set',
    price: '75.00',
    categoryName: 'casual',
    inWishlist: false,
    inCart: false,
    rating: 4.0,
    imgSrc:
      'https://www.abokichi.com/cdn/shop/products/OKAZU_ABORamen_Gluten-free_andABOMatchaSet.png',
    description: {
      about:
        'Try our latest OKAZU flavour! ENJOY TINGLY UMAMI! So whats the deal with Sanshō versus Szechuan pepper, you ask? Well, both of these peppers have a tingly heat to them, but there are some key distinctions. For starters, Sanshō orginates from Japan and Szechuan is from China. If you look at the colour, Sanshō pepper comes in green while Szechuan often has a deeper red hue when ground up. In terms of taste, Sanshō has a strong citrus flavour that reminds you of yuzu or grapefruit whilst Szechuan has more floral notes. And finally, when it comes to spice, Sanshō peppers tend to be milder than Szechuan ones and also have that tingly, numbing effect when you eat them.',
      ingredients: [
        'MILD_MEDIUM',
        'Non-GMO Sunflower and/or Non-GMO Canola Oil, Sesame Oil, Garlic, Miso Paste (Organic Soybeans, Rice, Salt), Tamari Soy Sauce (Non-GMO Soybeans, Salt, Sugar), Organic Cane Sugar, Chili Powder, White Sesame Seeds, Sansho Pepper, Chickpea Flour',
        'CONTAINS: SESAME, SOYBEANS. MAY CONTAIN: MUSTARD',
        'All NATURAL NO MSG',
        'PRODUCT SEPARATION IS NORMAL. REFRIGERATE AFTER OPENING',
      ],
    },
  },
  {
    _id: '98879da1-d87e-4ed4-8d1f-fabf967fd102',
    isFeatured: true,
    title: 'ABO Matcha Tanuki: Organic, Ceremonial grade Uji matcha',
    price: '26.99',
    categoryName: 'casual',
    inWishlist: false,
    inCart: false,
    rating: 3.0,
    imgSrc:
      'https://www.abokichi.com/cdn/shop/products/IMG_8015_d7c3e1db-3b5a-47ed-9290-017d59c93a7a.png',
    description: {
      about:
        'Try our latest OKAZU flavour! ENJOY TINGLY UMAMI! So whats the deal with Sanshō versus Szechuan pepper, you ask? Well, both of these peppers have a tingly heat to them, but there are some key distinctions. For starters, Sanshō orginates from Japan and Szechuan is from China. If you look at the colour, Sanshō pepper comes in green while Szechuan often has a deeper red hue when ground up. In terms of taste, Sanshō has a strong citrus flavour that reminds you of yuzu or grapefruit whilst Szechuan has more floral notes. And finally, when it comes to spice, Sanshō peppers tend to be milder than Szechuan ones and also have that tingly, numbing effect when you eat them.',
      ingredients: [
        'MILD_MEDIUM',
        'Non-GMO Sunflower and/or Non-GMO Canola Oil, Sesame Oil, Garlic, Miso Paste (Organic Soybeans, Rice, Salt), Tamari Soy Sauce (Non-GMO Soybeans, Salt, Sugar), Organic Cane Sugar, Chili Powder, White Sesame Seeds, Sansho Pepper, Chickpea Flour',
        'CONTAINS: SESAME, SOYBEANS. MAY CONTAIN: MUSTARD',
        'All NATURAL NO MSG',
        'PRODUCT SEPARATION IS NORMAL. REFRIGERATE AFTER OPENING',
      ],
    },
  },
  {
    _id: 'c84191d9-c179-4042-b8ef-b3ac99c1e335',
    isFeatured: true,
    title: 'OKAZU Lovers Set 230ml/8oz (12 jars)',
    price: '103.56',
    categoryName: 'casual',
    inWishlist: false,
    inCart: false,
    rating: 5.0,
    imgSrc:
      'https://www.abokichi.com/cdn/shop/products/OKAZUChiliMiso230ml-12_764a3d60-8c4c-4cd9-bda6-ccd24ca47435.png',
    description: {
      about:
        'Try our latest OKAZU flavour! ENJOY TINGLY UMAMI! So whats the deal with Sanshō versus Szechuan pepper, you ask? Well, both of these peppers have a tingly heat to them, but there are some key distinctions. For starters, Sanshō orginates from Japan and Szechuan is from China. If you look at the colour, Sanshō pepper comes in green while Szechuan often has a deeper red hue when ground up. In terms of taste, Sanshō has a strong citrus flavour that reminds you of yuzu or grapefruit whilst Szechuan has more floral notes. And finally, when it comes to spice, Sanshō peppers tend to be milder than Szechuan ones and also have that tingly, numbing effect when you eat them.',
      ingredients: [
        'MILD_MEDIUM',
        'Non-GMO Sunflower and/or Non-GMO Canola Oil, Sesame Oil, Garlic, Miso Paste (Organic Soybeans, Rice, Salt), Tamari Soy Sauce (Non-GMO Soybeans, Salt, Sugar), Organic Cane Sugar, Chili Powder, White Sesame Seeds, Sansho Pepper, Chickpea Flour',
        'CONTAINS: SESAME, SOYBEANS. MAY CONTAIN: MUSTARD',
        'All NATURAL NO MSG',
        'PRODUCT SEPARATION IS NORMAL. REFRIGERATE AFTER OPENING',
      ],
    },
  },
  {
    _id: 'b0a93d83-cc52-4d8d-80ce-d64f1c9589a1',
    isFeatured: true,
    title: 'ABO Miso Soup Tasting Set',
    price: '22.99',
    categoryName: 'casual',
    inWishlist: false,
    inCart: false,
    rating: 5.0,
    imgSrc:
      'https://www.abokichi.com/cdn/shop/products/20220929_3FlavourMisoSoup2.png',
    description: {
      about:
        'Try our latest OKAZU flavour! ENJOY TINGLY UMAMI! So whats the deal with Sanshō versus Szechuan pepper, you ask? Well, both of these peppers have a tingly heat to them, but there are some key distinctions. For starters, Sanshō orginates from Japan and Szechuan is from China. If you look at the colour, Sanshō pepper comes in green while Szechuan often has a deeper red hue when ground up. In terms of taste, Sanshō has a strong citrus flavour that reminds you of yuzu or grapefruit whilst Szechuan has more floral notes. And finally, when it comes to spice, Sanshō peppers tend to be milder than Szechuan ones and also have that tingly, numbing effect when you eat them.',
      ingredients: [
        'MILD_MEDIUM',
        'Non-GMO Sunflower and/or Non-GMO Canola Oil, Sesame Oil, Garlic, Miso Paste (Organic Soybeans, Rice, Salt), Tamari Soy Sauce (Non-GMO Soybeans, Salt, Sugar), Organic Cane Sugar, Chili Powder, White Sesame Seeds, Sansho Pepper, Chickpea Flour',
        'CONTAINS: SESAME, SOYBEANS. MAY CONTAIN: MUSTARD',
        'All NATURAL NO MSG',
        'PRODUCT SEPARATION IS NORMAL. REFRIGERATE AFTER OPENING',
      ],
    },
  },
  {
    _id: '23218a91-ad72-405c-b727-e81cf40d4461',
    isFeatured: true,
    title: 'OKAZU Tasting Set (230ml/8oz)',
    price: '39.99',
    categoryName: 'casual',
    inWishlist: false,
    inCart: false,
    rating: 5.0,
    imgSrc: 'https://www.abokichi.com/cdn/shop/products/3Flavours250ml.png',
    description: {
      about:
        'Try our latest OKAZU flavour! ENJOY TINGLY UMAMI! So whats the deal with Sanshō versus Szechuan pepper, you ask? Well, both of these peppers have a tingly heat to them, but there are some key distinctions. For starters, Sanshō orginates from Japan and Szechuan is from China. If you look at the colour, Sanshō pepper comes in green while Szechuan often has a deeper red hue when ground up. In terms of taste, Sanshō has a strong citrus flavour that reminds you of yuzu or grapefruit whilst Szechuan has more floral notes. And finally, when it comes to spice, Sanshō peppers tend to be milder than Szechuan ones and also have that tingly, numbing effect when you eat them.',
      ingredients: [
        'MILD_MEDIUM',
        'Non-GMO Sunflower and/or Non-GMO Canola Oil, Sesame Oil, Garlic, Miso Paste (Organic Soybeans, Rice, Salt), Tamari Soy Sauce (Non-GMO Soybeans, Salt, Sugar), Organic Cane Sugar, Chili Powder, White Sesame Seeds, Sansho Pepper, Chickpea Flour',
        'CONTAINS: SESAME, SOYBEANS. MAY CONTAIN: MUSTARD',
        'All NATURAL NO MSG',
        'PRODUCT SEPARATION IS NORMAL. REFRIGERATE AFTER OPENING',
      ],
    },
  },
  {
    _id: '105d66b5-4bfb-488a-8b1e-ed70750158ef',
    isFeatured: true,
    title:
      'Tony Tylor OKAZU Chili miso - Japanese miso chili oil condiment (230ml/8oz)',
    price: '13.99',
    categoryName: 'casual',
    inWishlist: false,
    inCart: false,
    rating: 4.0,
    imgSrc:
      'https://www.abokichi.com/cdn/shop/products/ChilimisoOKAZU_1_c861c874-0e67-48c1-b07b-be47fe3d772c.png',
    description: {
      about:
        'Try our latest OKAZU flavour! ENJOY TINGLY UMAMI! So whats the deal with Sanshō versus Szechuan pepper, you ask? Well, both of these peppers have a tingly heat to them, but there are some key distinctions. For starters, Sanshō orginates from Japan and Szechuan is from China. If you look at the colour, Sanshō pepper comes in green while Szechuan often has a deeper red hue when ground up. In terms of taste, Sanshō has a strong citrus flavour that reminds you of yuzu or grapefruit whilst Szechuan has more floral notes. And finally, when it comes to spice, Sanshō peppers tend to be milder than Szechuan ones and also have that tingly, numbing effect when you eat them.',
      ingredients: [
        'MILD_MEDIUM',
        'Non-GMO Sunflower and/or Non-GMO Canola Oil, Sesame Oil, Garlic, Miso Paste (Organic Soybeans, Rice, Salt), Tamari Soy Sauce (Non-GMO Soybeans, Salt, Sugar), Organic Cane Sugar, Chili Powder, White Sesame Seeds, Sansho Pepper, Chickpea Flour',
        'CONTAINS: SESAME, SOYBEANS. MAY CONTAIN: MUSTARD',
        'All NATURAL NO MSG',
        'PRODUCT SEPARATION IS NORMAL. REFRIGERATE AFTER OPENING',
      ],
    },
  },
  {
    _id: '144a355a-f7ea-426b-8403-b1c5d3995e4e',
    isFeatured: true,
    title:
      'Tony Taylor OKAZU Curry miso - Japanese miso chili oil condiment (230ml/8oz)',
    price: '13.99',
    categoryName: 'casual',
    inWishlist: false,
    inCart: false,
    rating: 5.0,
    imgSrc: 'https://www.abokichi.com/cdn/shop/products/CurryOKAZU.png',
    description: {
      about:
        'Try our latest OKAZU flavour! ENJOY TINGLY UMAMI! So whats the deal with Sanshō versus Szechuan pepper, you ask? Well, both of these peppers have a tingly heat to them, but there are some key distinctions. For starters, Sanshō orginates from Japan and Szechuan is from China. If you look at the colour, Sanshō pepper comes in green while Szechuan often has a deeper red hue when ground up. In terms of taste, Sanshō has a strong citrus flavour that reminds you of yuzu or grapefruit whilst Szechuan has more floral notes. And finally, when it comes to spice, Sanshō peppers tend to be milder than Szechuan ones and also have that tingly, numbing effect when you eat them.',
      ingredients: [
        'MILD_MEDIUM',
        'Non-GMO Sunflower and/or Non-GMO Canola Oil, Sesame Oil, Garlic, Miso Paste (Organic Soybeans, Rice, Salt), Tamari Soy Sauce (Non-GMO Soybeans, Salt, Sugar), Organic Cane Sugar, Chili Powder, White Sesame Seeds, Sansho Pepper, Chickpea Flour',
        'CONTAINS: SESAME, SOYBEANS. MAY CONTAIN: MUSTARD',
        'All NATURAL NO MSG',
        'PRODUCT SEPARATION IS NORMAL. REFRIGERATE AFTER OPENING',
      ],
    },
  },
  {
    _id: 'd4572522-3147-4ef1-aa75-01913548f1ae',
    isFeatured: true,
    title:
      'Tony Taylor OKAZU Spicy Chili miso - Japanese miso chili oil condiment (230ml/8oz)',
    price: '13.99',
    categoryName: 'casual',
    inWishlist: false,
    inCart: false,
    rating: 4.0,
    imgSrc:
      'https://www.abokichi.com/cdn/shop/products/SpicymisoOKAZU_4c0405f1-62dd-4862-9bae-9d17744f0a5d.png',
    description: {
      about:
        'Try our latest OKAZU flavour! ENJOY TINGLY UMAMI! So whats the deal with Sanshō versus Szechuan pepper, you ask? Well, both of these peppers have a tingly heat to them, but there are some key distinctions. For starters, Sanshō orginates from Japan and Szechuan is from China. If you look at the colour, Sanshō pepper comes in green while Szechuan often has a deeper red hue when ground up. In terms of taste, Sanshō has a strong citrus flavour that reminds you of yuzu or grapefruit whilst Szechuan has more floral notes. And finally, when it comes to spice, Sanshō peppers tend to be milder than Szechuan ones and also have that tingly, numbing effect when you eat them.',
      ingredients: [
        'MILD_MEDIUM',
        'Non-GMO Sunflower and/or Non-GMO Canola Oil, Sesame Oil, Garlic, Miso Paste (Organic Soybeans, Rice, Salt), Tamari Soy Sauce (Non-GMO Soybeans, Salt, Sugar), Organic Cane Sugar, Chili Powder, White Sesame Seeds, Sansho Pepper, Chickpea Flour',
        'CONTAINS: SESAME, SOYBEANS. MAY CONTAIN: MUSTARD',
        'All NATURAL NO MSG',
        'PRODUCT SEPARATION IS NORMAL. REFRIGERATE AFTER OPENING',
      ],
    },
  },
]
