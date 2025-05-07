const cards = [
    {
        id: 1,
        name: "PSA Authentic Moduwa Water Energy",
        image: "https://i.ebayimg.com/images/g/Nh8AAOSwivloA~vO/s-l1600.webp",
        price: 1730.95,
        year: 2002,
        category: "Pokemon",
        rarity: "Holo rare",
        set: "Pokemon Ex 2005",
        condition: "PSA 10",
        description: "PSA AUTHENTIC MODUWA WATER ENERGY",
        features: [
        "Holographic artwork",
        "Card #4/103",
        "Professional grading: PSA AUTO 10",
        "Original Base Set",
        ],
        inStock: true,
    },
    
    {
        id: 2,
        name: "CGC 9 Treecko Gold Star",
        image: "https://zardocards.com/cdn/shop/files/img663_133f9c51-b9cf-479f-9169-88e8854134a0.jpg?v=1744742139&width=800",
        price: 2938.95,
        year: 2004,
        category: "Pokemon",
        rarity: "Holo",
        set: "EX Team Rocket Returns",
        condition: "CGC 9",
        description: "CGC 9 Treecko Gold Star",
        features: [
        "Holographic artwork",
        "Card #109/109",
        "Professional grading: CGC Mint 9",
        "Original Base Set",
        ],
        inStock: true,
    },

    {
        id: 3,
        name: "PSA 10 PIKACHU 5TH ANNIVERSARY PREMIUM CS",
        image: "htthttps://zardocards.com/cdn/shop/files/b3949aa0-c4c3-4f1c-bb47-d37b4f2a65fd.jpg?v=1744741319&width=800",
        price: 816.95,
        year: 2024,
        category: "Pokemon",
        rarity: "Ultra Rare",
        set: "5TH ANNIVERSARY PREMIUM CS",
        condition: "PSA 10",
        description: "PSA AUTHENTIC POKEMON TRADITIONAL CHINESE SV-P PROMO",
        features: [
        "Chinese artwork",
        "Card #4/153",
        "Professional grading: PSA GEM 10",
        "CHINESE SV-P PROMO",
        ],
        inStock: true,
    },

    {
        id: 4,
        name: "PSA 10 PONCHO-WEAR.PIKACHU RAYQUAZA P.W. PIKACHU BOX",
        image: "https://zardocards.com/cdn/shop/files/dce1eb81-57c2-4cf7-93d4-d6c84361a5b1.jpg?v=1744741222&width=800",
        price: 6230.95,
        year: 2016,
        category: "Pokemon",
        rarity: "Ultra rare",
        set: "POKEMON JAPANESE XY PROMOE",
        condition: "PSA 10",
        description: "PSA 10 PONCHO-WEAR.PIKACHU RAYQUAZA P.W. PIKACHU BOX",
        features: [
        "Holographic artwork",
        "Card #4/230 ",
        "Professional grading: PSA GEM MINT 10",
        "PSA 10 PONCHO-WEAR.PIKACHU RAYQUAZA P.W. PIKACHU BOX",
        ],
        inStock: false,
    },

    {
        id: 5,
        name: "CGC Pristine 10 Umbreon 1st Edition",
        image: "https://zardocards.com/cdn/shop/files/img665_af924fa3-94f3-445b-ade2-fa71a49401d0.jpg?v=1744742361&width=800",
        price: 653.95,
        year: 2010,
        category: "Pokemon",
        rarity: "Holo rare",
        set: "Reviving Legends",
        condition: "CGC 10",
        description: "CGC Pristine 10 Umbreon 1st Edition",
        features: [
        "Holographic artwork",
        "Card #037/080",
        "Professional grading: CGC Prestine 10",
        "Chinese 1st Edition set",
        ],
        inStock: true,
    },

    {
        id: 6,
        name: "CGC Pristine 10 Umbreon 1st Edition",
        image: "https://zardocards.com/cdn/shop/files/img664_b38e0681-d831-4552-a1d5-a1c16e593a42.jpg?v=1744742268&width=800",
        price: 1306.95,
        year: 2003,
        category: "Pokemon",
        rarity: "Holo rare",
        set: "Skyridge ",
        condition: "PSA 10",
        description: "CGC Pristine 10 Jolteon - Skyridge",
        features: [
        "Holographic artwork",
        "Card #h12/h32",
        "Professional grading: CGC Prestine 10",
        "Original Base Set",
        ],
        inStock: true,
    },

    {
        id: 7,
        name: "PSA 10 FA/LATIAS & LATIOS GX TEAM UP",
        image: "https://zardocards.com/cdn/shop/files/bd0a34c3-c81a-4cd2-abb0-6f2ee7e4be47.jpg?v=1744385587&width=800",
        price: 5430.95,
        year: 2019,
        category: "Pokemon",
        rarity: "Holo rare",
        set: "Team up",
        condition: "PSA 10",
        description: "POKEMON SUN & MOON TEAM UP",
        features: [
        "Holographic artwork",
        "Card #4/170",
        "Professional grading: PSA GEM MT 10",
        "Original Base Set",
        ],
        inStock: true,
    },

    {
        id: 8,
        name: "BGS 6 CHARIZARD HOLO 1ST EDITIONBGS 9 Charizard V SR Japanese",
        image: "https://zardocards.com/cdn/shop/files/img145_18180b69-8c70-4ae0-8582-e4644eba6631.jpg?v=1740616765&width=800",
        price: 6830.95,
        year: 1999,
        category: "Pokemon",
        rarity: "Holo rare",
        set: "Pokemon 1st Edition",
        condition: "BGS 6",
        description: "BGS 6 CHARIZARD HOLO 1ST EDITION",
        features: [
        "Holographic artwork",
        "THICK STAMP 1999 BASE 1ST EDITION",
        "Card #4/111",
        "Professional grading: BGS 6 EX MINT",
        "Original Base Set",
        ],
        inStock: true,
    },
]
    const categories = [
        
        {
            id: "Pokemon",
            name: "Pokémon",
            image: "https://moxiecardshop.com/cdn/shop/collections/PKMN-How-To-Get-Pokemon-Cards-Graded.webp?v=1688356551",
            count: 8,
          },
          {
            id: "magic",
            name: "Magic: The Gathering",
            image: "https://upload.wikimedia.org/wikipedia/en/a/aa/Magic_the_gathering-card_back.jpg",
            count: 0,
          },
          {
            id: "yugioh",
            name: "Yu-Gi-Oh!",
            image: "https://m.media-amazon.com/images/I/81X0qR7QzIL._AC_UF1000,1000_QL80_.jpg",
            count: 0,
          },
          {
            id: "sports",
            name: "Sports Cards",
            image: "https://m.media-amazon.com/images/I/71S7fEIqMoL.jpg",
            count: 0,
          },
    ]
    
    //get all cards 
    exports.getAllCards = () => {
        return cards
      }
    //get card by specific id
    exports.getCardById = (id) => {
        return cards.find((card) => card.id === Number.parseInt(id));
      };


// Get card by ID
const getCardById = (id) => {
    return cards.find(card => card.id === parseInt(id));
  };
  
  // Get similar cards by category
  const getSimilarCards = (id) => {
    const card = getCardById(id);  // Get the current card by ID
  
    if (!card)
         return [];  
    //cards with the same category excluding the current card)
    return cards.filter(similarCard => 
      similarCard.id !== id && similarCard.category === card.category
    ).slice(0, 3);  // Limit to 3 similar cards
  };
  
  module.exports = { getAllCards, getCardById, getSimilarCards };
    //feature cards
    exports.getFeaturedCards = () => {
        return cards.slice(0, 4)
      }

      // Get similar cards (cards in the same category)
exports.getSimilarCards = (cardId) => {
    const card = this.getCardById(cardId)
    if (!card) return []
  
    return cards.filter((c) => c.id !== Number.parseInt(cardId) && c.category === card.category).slice(0, 4)
  }
  
  // Get all categories
  exports.getAllCategories = () => {
    return categories
  }
  
  // Get cards by category
  exports.getCardsByCategory = (categoryId) => {
    return cards.filter((card) => {
      const normalizedCategory = card.category.toLowerCase().replace(/[^a-z0-9]/g, "")
      return normalizedCategory === categoryId
    })
  }
  
      
