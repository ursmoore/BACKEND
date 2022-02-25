"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "stories",
      [
        {
          name: "crayzie story!",
          content: "basjkdbiuwrbkjnacoknjlw  jlknaflnjjak awlkdlahnf",
          imageUrl: "https://image.posterlounge.nl/images/big/1870230.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          spaceId: 1,
        },
        {
          name: "Poopie de woopie!",
          content: "kakkakalucci gheskfnief ",
          imageUrl:
            "https://vintagedancer.com/wp-content/uploads/1960s-dress-motown-ladies-noir.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          spaceId: 1,
        },
        {
          name: "Pishfjwjnjcnje!",
          content: "kakkakalusfm;lmf;ofsm;lmwe;omfwcci gheskfnief ",
          imageUrl:
            "https://i.pinimg.com/736x/51/91/59/519159a2e0469e2a79f32ef089312039--motown-party-tamla-motown.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          spaceId: 2,
        },
        {
          name: "Pflupsipupsiiis",
          content:
            "kasklfnlksenflkwniwoj kkakalusfm;lmf;ofsm;lmwe;omfwcci gheskfnief ",
          imageUrl:
            "https://d2fzf9bbqh0om5.cloudfront.net/blog/posts/original/8126.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          spaceId: 2,
        },
        {
          name: "fikki fakki",
          content:
            "skdnfliseflnriow3n oiwhjiofois kasklfnlksenflkwniwoj kkakalusfm;lmf;ofsm;lmwe;omfwcci gheskfnief ",
          imageUrl:
            "https://i.ebayimg.com/images/g/vZAAAOSwOfBZ1CsO/s-l300.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          spaceId: 2,
        },
        {
          name: "crayzie story!",
          content: "basjkdbiuwrbkjnacoknjlw  jlknaflnjjak awlkdlahnf",
          imageUrl: "https://image.posterlounge.nl/images/big/1870230.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          spaceId: 1,
        },
        {
          name: "Poopie de woopie!",
          content: "kakkakalucci gheskfnief ",
          imageUrl:
            "https://vintagedancer.com/wp-content/uploads/1960s-dress-motown-ladies-noir.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          spaceId: 3,
        },
        {
          name: "Pishfjwjnjcnje!",
          content: "kakkakalusfm;lmf;ofsm;lmwe;omfwcci gheskfnief ",
          imageUrl:
            "https://i.pinimg.com/736x/51/91/59/519159a2e0469e2a79f32ef089312039--motown-party-tamla-motown.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          spaceId: 3,
        },
        {
          name: "Pflupsipupsiiis",
          content:
            "kasklfnlksenflkwniwoj kkakalusfm;lmf;ofsm;lmwe;omfwcci gheskfnief ",
          imageUrl:
            "https://d2fzf9bbqh0om5.cloudfront.net/blog/posts/original/8126.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          spaceId: 2,
        },
        {
          name: "fikki fakki",
          content:
            "skdnfliseflnriow3n oiwhjiofois kasklfnlksenflkwniwoj kkakalusfm;lmf;ofsm;lmwe;omfwcci gheskfnief ",
          imageUrl:
            "https://i.ebayimg.com/images/g/vZAAAOSwOfBZ1CsO/s-l300.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          spaceId: 4,
        },
        {
          name: "crayzie story!",
          content: "basjkdbiuwrbkjnacoknjlw  jlknaflnjjak awlkdlahnf",
          imageUrl: "https://image.posterlounge.nl/images/big/1870230.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          spaceId: 4,
        },
        {
          name: "Poopie de woopie!",
          content: "kakkakalucci gheskfnief ",
          imageUrl:
            "https://vintagedancer.com/wp-content/uploads/1960s-dress-motown-ladies-noir.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          spaceId: 3,
        },
        {
          name: "Pishfjwjnjcnje!",
          content: "kakkakalusfm;lmf;ofsm;lmwe;omfwcci gheskfnief ",
          imageUrl:
            "https://i.pinimg.com/736x/51/91/59/519159a2e0469e2a79f32ef089312039--motown-party-tamla-motown.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          spaceId: 4,
        },
        {
          name: "Pflupsipupsiiis",
          content:
            "kasklfnlksenflkwniwoj kkakalusfm;lmf;ofsm;lmwe;omfwcci gheskfnief ",
          imageUrl:
            "https://d2fzf9bbqh0om5.cloudfront.net/blog/posts/original/8126.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          spaceId: 2,
        },
        {
          name: "fikki fakki",
          content:
            "skdnfliseflnriow3n oiwhjiofois kasklfnlksenflkwniwoj kkakalusfm;lmf;ofsm;lmwe;omfwcci gheskfnief ",
          imageUrl:
            "https://i.ebayimg.com/images/g/vZAAAOSwOfBZ1CsO/s-l300.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          spaceId: 3,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("stories", null, {});
  },
};
