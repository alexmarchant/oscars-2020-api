import { Nominee, Category } from "../db"
import images from './images'

interface NomData {
  name: string
  image: string | null
  review: string | null
  film: string
  winner: boolean
}

interface CatData {
  title: string
  nominees: NomData[]
}

const nominees: CatData[] = [
  {
    title: "Best Picture",
    nominees: [
      {
        name: "1917",
        image: "100000006890884",
        review: "https://www.nytimes.com/2019/12/24/movies/1917-review.html",
        film: "1917",
        winner: !1
      },
      {
        name: "Ford v Ferrari",
        image: "100000006825720",
        review:
          "https://www.nytimes.com/2019/11/14/movies/ford-v-ferrari-review.html",
        film: "Ford v Ferrari",
        winner: !1
      },
      {
        name: "The Irishman",
        image: "100000006739258",
        review:
          "https://www.nytimes.com/2019/09/27/movies/the-irishman-review.html",
        film: "The Irishman",
        winner: !1
      },
      {
        name: "Jojo Rabbit",
        image: "100000006774340",
        review:
          "https://www.nytimes.com/2019/10/17/movies/jojo-rabbit-review.html",
        film: "Jojo Rabbit",
        winner: !1
      },
      {
        name: "Joker",
        image: "100000006748416",
        review: "https://www.nytimes.com/2019/10/03/movies/joker-review.html",
        film: "Joker",
        winner: !1
      },
      {
        name: "Little Women",
        image: "100000006890528",
        review:
          "https://www.nytimes.com/2019/12/23/movies/little-women-review.html",
        film: "Little Women",
        winner: !1
      },
      {
        name: "Marriage Story",
        image: "100000006808310",
        review:
          "https://www.nytimes.com/2019/11/05/movies/marriage-story-review.html",
        film: "Marriage Story",
        winner: !1
      },
      {
        name: "Once Upon a Time … in Hollywood",
        image: "100000006913809",
        review:
          "https://www.nytimes.com/2019/07/24/movies/once-upon-a-time-in-hollywood-review.html",
        film: "Once Upon a Time … in Hollywood",
        winner: !1
      },
      {
        name: "Parasite",
        image: "100000006760636",
        review:
          "https://www.nytimes.com/2019/10/10/movies/parasite-review.html",
        film: "Parasite",
        winner: !1
      }
    ]
  },
  {
    title: "Director",
    nominees: [
      {
        name: "Bong Joon Ho",
        image: "100000006793186",
        review:
          "https://www.nytimes.com/2019/10/10/movies/parasite-review.html",
        film: "Parasite",
        winner: !1
      },
      {
        name: "Sam Mendes",
        image: "100000006890257",
        review: "https://www.nytimes.com/2019/12/24/movies/1917-review.html",
        film: "1917",
        winner: !1
      },
      {
        name: "Todd Phillips",
        image: "100000006913905",
        review: "https://www.nytimes.com/2019/10/03/movies/joker-review.html",
        film: "Joker",
        winner: !1
      },
      {
        name: "Martin Scorsese",
        image: "100000006896855",
        review:
          "https://www.nytimes.com/2019/09/27/movies/the-irishman-review.html",
        film: "The Irishman",
        winner: !1
      },
      {
        name: "Quentin Tarantino",
        image: "100000006913932",
        review:
          "https://www.nytimes.com/2019/07/24/movies/once-upon-a-time-in-hollywood-review.html",
        film: "Once Upon a Time … in Hollywood",
        winner: !1
      }
    ]
  },
  {
    title: "Actor in a Leading Role",
    nominees: [
      {
        name: "Antonio Banderas",
        image: "100000006748916",
        review:
          "https://www.nytimes.com/2019/10/03/movies/pain-and-glory-review.html",
        film: "Pain and Glory",
        winner: !1
      },
      {
        name: "Leonardo DiCaprio",
        image: "100000006627855",
        review:
          "https://www.nytimes.com/2019/07/24/movies/once-upon-a-time-in-hollywood-review.html",
        film: "Once Upon a Time … in Hollywood",
        winner: !1
      },
      {
        name: "Adam Driver",
        image: "100000006913971",
        review:
          "https://www.nytimes.com/2019/11/05/movies/marriage-story-review.html",
        film: "Marriage Story",
        winner: !1
      },
      {
        name: "Joaquin Phoenix",
        image: "100000006752559",
        review: "https://www.nytimes.com/2019/10/03/movies/joker-review.html",
        film: "Joker",
        winner: !1
      },
      {
        name: "Jonathan Pryce",
        image: "100000006914355",
        review:
          "https://www.nytimes.com/2019/11/26/movies/the-two-popes-review.html",
        film: "The Two Popes",
        winner: !1
      }
    ]
  },
  {
    title: "Actress in a Leading Role",
    nominees: [
      {
        name: "Cynthia Erivo",
        image: "100000006800365",
        review: "https://www.nytimes.com/2019/10/31/movies/harriet-review.html",
        film: "Harriet",
        winner: !1
      },
      {
        name: "Scarlett Johansson",
        image: "100000006913965",
        review:
          "https://www.nytimes.com/2019/11/05/movies/marriage-story-review.html",
        film: "Marriage Story",
        winner: !1
      },
      {
        name: "Saoirse Ronan",
        image: "100000006899758",
        review:
          "https://www.nytimes.com/2019/12/23/movies/little-women-review.html",
        film: "Little Women",
        winner: !1
      },
      {
        name: "Charlize Theron",
        image: "100000006913840",
        review:
          "https://www.nytimes.com/2019/12/12/movies/bombshell-review.html",
        film: "Bombshell",
        winner: !1
      },
      {
        name: "Renée Zellweger",
        image: "100000006903189",
        review: "https://www.nytimes.com/2019/09/25/movies/judy-review.html",
        film: "Judy",
        winner: !1
      }
    ]
  },
  {
    title: "Actor in a Supporting Role",
    nominees: [
      {
        name: "Tom Hanks",
        image: "100000006914601",
        review:
          "https://www.nytimes.com/2019/11/21/movies/a-beautiful-day-in-the-neighborhood-review.html",
        film: "A Beautiful Day in the Neighborhood",
        winner: !1
      },
      {
        name: "Anthony Hopkins",
        image: "100000006913953",
        review:
          "https://www.nytimes.com/2019/11/26/movies/the-two-popes-review.html",
        film: "The Two Popes",
        winner: !1
      },
      {
        name: "Al Pacino",
        image: "100000006913966",
        review:
          "https://www.nytimes.com/2019/09/27/movies/the-irishman-review.html",
        film: "The Irishman",
        winner: !1
      },
      {
        name: "Joe Pesci",
        image: "100000006913961",
        review:
          "https://www.nytimes.com/2019/09/27/movies/the-irishman-review.html",
        film: "The Irishman",
        winner: !1
      },
      {
        name: "Brad Pitt",
        image: "100000006914067",
        review:
          "https://www.nytimes.com/2019/07/24/movies/once-upon-a-time-in-hollywood-review.html",
        film: "Once upon a Time … in Hollywood",
        winner: !1
      }
    ]
  },
  {
    title: "Actress in a Supporting Role",
    nominees: [
      {
        name: "Kathy Bates",
        image: "100000006914400",
        review:
          "https://www.nytimes.com/2019/12/12/movies/richard-jewell-review.html",
        film: "Richard Jewell",
        winner: !1
      },
      {
        name: "Laura Dern",
        image: "100000006914651",
        review:
          "https://www.nytimes.com/2019/11/05/movies/marriage-story-review.html",
        film: "Marriage Story",
        winner: !1
      },
      {
        name: "Scarlett Johansson",
        image: "100000006914384",
        review:
          "https://www.nytimes.com/2019/10/17/movies/jojo-rabbit-review.html",
        film: "Jojo Rabbit",
        winner: !1
      },
      {
        name: "Florence Pugh",
        image: "100000006897266",
        review:
          "https://www.nytimes.com/2019/12/23/movies/little-women-review.html",
        film: "Little Women",
        winner: !1
      },
      {
        name: "Margot Robbie",
        image: "100000006913842",
        review:
          "https://www.nytimes.com/2019/12/12/movies/bombshell-review.html",
        film: "Bombshell",
        winner: !1
      }
    ]
  },
  {
    title: "Original Screenplay",
    nominees: [
      {
        name: "1917",
        image: "100000006890884",
        review: "https://www.nytimes.com/2019/12/24/movies/1917-review.html",
        film: "1917",
        winner: !1
      },
      {
        name: "Knives Out",
        image: "100000006847013",
        review:
          "https://www.nytimes.com/2019/11/26/movies/knives-out-review.html",
        film: "Knives Out",
        winner: !1
      },
      {
        name: "Marriage Story",
        image: "100000006808310",
        review:
          "https://www.nytimes.com/2019/11/05/movies/marriage-story-review.html",
        film: "Marriage Story",
        winner: !1
      },
      {
        name: "Once Upon a Time … in Hollywood",
        image: "100000006913809",
        review:
          "https://www.nytimes.com/2019/07/24/movies/once-upon-a-time-in-hollywood-review.html",
        film: "Once Upon a Time … in Hollywood",
        winner: !1
      },
      {
        name: "Parasite",
        image: "100000006760636",
        review:
          "https://www.nytimes.com/2019/10/10/movies/parasite-review.html",
        film: "Parasite",
        winner: !1
      }
    ]
  },
  {
    title: "Adapted Screenplay",
    nominees: [
      {
        name: "The Irishman",
        image: "100000006739258",
        review:
          "https://www.nytimes.com/2019/09/27/movies/the-irishman-review.html",
        film: "The Irishman",
        winner: !1
      },
      {
        name: "Jojo Rabbit",
        image: "100000006774340",
        review:
          "https://www.nytimes.com/2019/10/17/movies/jojo-rabbit-review.html",
        film: "Jojo Rabbit",
        winner: !1
      },
      {
        name: "Joker",
        image: "100000006748416",
        review: "https://www.nytimes.com/2019/10/03/movies/joker-review.html",
        film: "Joker",
        winner: !1
      },
      {
        name: "Little Women",
        image: "100000006890528",
        review:
          "https://www.nytimes.com/2019/12/23/movies/little-women-review.html",
        film: "Little Women",
        winner: !1
      },
      {
        name: "The Two Popes",
        image: "100000006846279",
        review:
          "https://www.nytimes.com/2019/11/26/movies/the-two-popes-review.html",
        film: "The Two Popes",
        winner: !1
      }
    ]
  },
  {
    title: "International Feature",
    nominees: [
      {
        name: "Corpus Christi",
        image: null,
        review: null,
        film: "Poland",
        winner: !1
      },
      {
        name: "Honeyland",
        image: null,
        review:
          "https://www.nytimes.com/2019/07/25/movies/honeyland-review.html",
        film: "North Macedonia",
        winner: !1
      },
      {
        name: "Les Misérables",
        image: null,
        review:
          "https://www.nytimes.com/2019/11/28/movies/les-miserables-review.html",
        film: "France",
        winner: !1
      },
      {
        name: "Pain and Glory",
        image: null,
        review:
          "https://www.nytimes.com/2019/10/03/movies/pain-and-glory-review.html",
        film: "Spain",
        winner: !1
      },
      {
        name: "Parasite",
        image: "100000006760636",
        review:
          "https://www.nytimes.com/2019/10/10/movies/parasite-review.html",
        film: "South Korea",
        winner: !1
      }
    ]
  },
  {
    title: "Animated Feature",
    nominees: [
      {
        name: "How to Train Your Dragon: The Hidden World",
        image: null,
        review:
          "https://www.nytimes.com/2019/02/20/movies/how-to-train-your-dragon-hidden-world-review.html",
        film: "How to Train Your Dragon: The Hidden World",
        winner: !1
      },
      {
        name: "I Lost My Body",
        image: "",
        review:
          "https://www.nytimes.com/2019/11/14/movies/i-lost-my-body-review.html",
        film: "I Lost My Body",
        winner: !1
      },
      {
        name: "Klaus",
        image: null,
        review: "https://www.nytimes.com/2019/11/07/movies/klaus-review.html",
        film: "Klaus",
        winner: !1
      },
      {
        name: "Missing Link",
        image: "",
        review:
          "https://www.nytimes.com/2019/04/11/movies/missing-link-review.html",
        film: "Missing Link",
        winner: !1
      },
      {
        name: "Toy Story 4",
        image: null,
        review:
          "https://www.nytimes.com/2019/06/20/movies/toy-story-4-review.html",
        film: "Toy Story 4",
        winner: !1
      }
    ]
  },
  {
    title: "Sound Editing",
    nominees: [
      {
        name: "1917",
        image: "100000006890884",
        review: "https://www.nytimes.com/2019/12/24/movies/1917-review.html",
        film: "1917",
        winner: !1
      },
      {
        name: "Ford v Ferrari",
        image: "100000006825720",
        review:
          "https://www.nytimes.com/2019/11/14/movies/ford-v-ferrari-review.html",
        film: "Ford v Ferrari",
        winner: !1
      },
      {
        name: "Joker",
        image: "100000006748416",
        review: "https://www.nytimes.com/2019/10/03/movies/joker-review.html",
        film: "Joker",
        winner: !1
      },
      {
        name: "Once Upon a Time … in Hollywood",
        image: "100000006913809",
        review:
          "https://www.nytimes.com/2019/07/24/movies/once-upon-a-time-in-hollywood-review.html",
        film: "Once Upon a Time … in Hollywood",
        winner: !1
      },
      {
        name: "Star Wars: The Rise of Skywalker",
        image: null,
        review:
          "https://www.nytimes.com/2019/12/18/movies/star-wars-the-rise-of-skywalker-review.html",
        film: "Star Wars: The Rise of Skywalker",
        winner: !1
      }
    ]
  },
  {
    title: "Visual Effects",
    nominees: [
      {
        name: "1917",
        image: "100000006890884",
        review: "https://www.nytimes.com/2019/12/24/movies/1917-review.html",
        film: "1917",
        winner: !1
      },
      {
        name: "Avengers: Endgame",
        image: null,
        review:
          "https://www.nytimes.com/2019/04/23/movies/avengers-endgame-review.html",
        film: "Avengers: Endgame",
        winner: !1
      },
      {
        name: "The Irishman",
        image: "100000006739258",
        review:
          "https://www.nytimes.com/2019/09/27/movies/the-irishman-review.html",
        film: "The Irishman",
        winner: !1
      },
      {
        name: "The Lion King",
        image: null,
        review:
          "https://www.nytimes.com/2019/07/11/movies/the-lion-king-review.html",
        film: "The Lion King",
        winner: !1
      },
      {
        name: "Star Wars: The Rise of Skywalker",
        image: null,
        review:
          "https://www.nytimes.com/2019/12/18/movies/star-wars-the-rise-of-skywalker-review.html",
        film: "Star Wars: The Rise of Skywalker",
        winner: !1
      }
    ]
  },
  {
    title: "Film Editing",
    nominees: [
      {
        name: "Ford v Ferrari",
        image: "100000006825720",
        review:
          "https://www.nytimes.com/2019/11/14/movies/ford-v-ferrari-review.html",
        film: "Ford v Ferrari",
        winner: !1
      },
      {
        name: "The Irishman",
        image: "100000006739258",
        review:
          "https://www.nytimes.com/2019/09/27/movies/the-irishman-review.html",
        film: "The Irishman",
        winner: !1
      },
      {
        name: "Jojo Rabbit",
        image: "100000006774340",
        review:
          "https://www.nytimes.com/2019/10/17/movies/jojo-rabbit-review.html",
        film: "Jojo Rabbit",
        winner: !1
      },
      {
        name: "Joker",
        image: "100000006748416",
        review: "https://www.nytimes.com/2019/10/03/movies/joker-review.html",
        film: "Joker",
        winner: !1
      },
      {
        name: "Parasite",
        image: "100000006760636",
        review:
          "https://www.nytimes.com/2019/10/10/movies/parasite-review.html",
        film: "Parasite",
        winner: !1
      }
    ]
  },
  {
    title: "Short Film, Animated",
    nominees: [
      {
        name: "Dcera (Daughter)",
        image: null,
        review: null,
        film: "Dcera (Daughter)",
        winner: !1
      },
      {
        name: "Hair Love",
        image: null,
        review: null,
        film: "Hair Love",
        winner: !1
      },
      {
        name: "Kitbull",
        image: null,
        review: null,
        film: "Kitbull",
        winner: !1
      },
      {
        name: "Memorable",
        image: null,
        review: null,
        film: "Memorable",
        winner: !1
      },
      {
        name: "Sister",
        image: null,
        review: null,
        film: "Sister",
        winner: !1
      }
    ]
  },
  {
    title: "Short Film, Live Action",
    nominees: [
      {
        name: "A Sister",
        image: null,
        review: null,
        film: "A Sister",
        winner: !1
      },
      {
        name: "Brotherhood",
        image: null,
        review: null,
        film: "Brotherhood",
        winner: !1
      },
      {
        name: "Nefta Football Club",
        image: null,
        review: null,
        film: "Nefta Football Club",
        winner: !1
      },
      {
        name: "The Neighbors’ Window",
        image: null,
        review: null,
        film: "The Neighbors’ Window",
        winner: !1
      },
      {
        name: "Saria",
        image: null,
        review: null,
        film: "Saria",
        winner: !1
      }
    ]
  },
  {
    title: "Documentary Short Subject",
    nominees: [
      {
        name: "In the Absence",
        image: null,
        review: null,
        film: "In the Absence",
        winner: !1
      },
      {
        name: "Learning to Skateboard in a Warzone (If You’re a Girl)",
        image: null,
        review: null,
        film: "Learning to Skateboard in a Warzone (If You’re a Girl)",
        winner: !1
      },
      {
        name: "Life Overtakes Me",
        image: null,
        review: null,
        film: "Life Overtakes Me",
        winner: !1
      },
      {
        name: "St. Louis Superman",
        image: null,
        review: null,
        film: "St. Louis Superman",
        winner: !1
      },
      {
        name: "Walk Run Cha-Cha",
        image: null,
        review: null,
        film: "Walk Run Cha-Cha",
        winner: !1
      }
    ]
  },
  {
    title: "Original Score",
    nominees: [
      {
        name: "1917",
        image: "100000006890884",
        review: "https://www.nytimes.com/2019/12/24/movies/1917-review.html",
        film: "1917",
        winner: !1
      },
      {
        name: "Joker",
        image: "100000006748416",
        review: "https://www.nytimes.com/2019/10/03/movies/joker-review.html",
        film: "Joker",
        winner: !1
      },
      {
        name: "Little Women",
        image: "100000006890528",
        review:
          "https://www.nytimes.com/2019/12/23/movies/little-women-review.html",
        film: "Little Women",
        winner: !1
      },
      {
        name: "Marriage Story",
        image: "100000006808310",
        review:
          "https://www.nytimes.com/2019/11/05/movies/marriage-story-review.html",
        film: "Marriage Story",
        winner: !1
      },
      {
        name: "Star Wars: The Rise of Skywalker",
        image: null,
        review:
          "https://www.nytimes.com/2019/12/18/movies/star-wars-the-rise-of-skywalker-review.html",
        film: "Star Wars: The Rise of Skywalker",
        winner: !1
      }
    ]
  },
  {
    title: "Original Song",
    nominees: [
      {
        name: "(I’m Gonna) Love Me Again",
        image: "",
        review:
          "https://www.nytimes.com/2019/05/28/movies/rocketman-review.html",
        film: "Rocketman",
        winner: !1
      },
      {
        name: "I Can’t Let You Throw Yourself Away",
        image: null,
        review:
          "https://www.nytimes.com/2019/06/20/movies/toy-story-4-review.html",
        film: "Toy Story 4",
        winner: !1
      },
      {
        name: "Into the Unknown",
        image: "",
        review:
          "https://www.nytimes.com/2019/11/21/movies/frozen-2-review.html",
        film: "Frozen 2",
        winner: !1
      },
      {
        name: "I’m Standing With You",
        image: "",
        review:
          "https://www.nytimes.com/2019/04/15/movies/breakthrough-review.html",
        film: "Breakthrough",
        winner: !1
      },
      {
        name: "Stand Up",
        image: "",
        review: "https://www.nytimes.com/2019/10/31/movies/harriet-review.html",
        film: "Harriet",
        winner: !1
      }
    ]
  },
  {
    title: "Production Design",
    nominees: [
      {
        name: "1917",
        image: "100000006890884",
        review: "https://www.nytimes.com/2019/12/24/movies/1917-review.html",
        film: "1917",
        winner: !1
      },
      {
        name: "The Irishman",
        image: "100000006739258",
        review:
          "https://www.nytimes.com/2019/09/27/movies/the-irishman-review.html",
        film: "The Irishman",
        winner: !1
      },
      {
        name: "Jojo Rabbit",
        image: "100000006774340",
        review:
          "https://www.nytimes.com/2019/10/17/movies/jojo-rabbit-review.html",
        film: "Jojo Rabbit",
        winner: !1
      },
      {
        name: "Once Upon a Time … in Hollywood",
        image: "100000006913809",
        review:
          "https://www.nytimes.com/2019/07/24/movies/once-upon-a-time-in-hollywood-review.html",
        film: "Once Upon a Time … in Hollywood",
        winner: !1
      },
      {
        name: "Parasite",
        image: "100000006760636",
        review:
          "https://www.nytimes.com/2019/10/10/movies/parasite-review.html",
        film: "Parasite",
        winner: !1
      }
    ]
  },
  {
    title: "Cinematography",
    nominees: [
      {
        name: "1917",
        image: "100000006890884",
        review: "https://www.nytimes.com/2019/12/24/movies/1917-review.html",
        film: "1917",
        winner: !1
      },
      {
        name: "The Irishman",
        image: "100000006739258",
        review:
          "https://www.nytimes.com/2019/09/27/movies/the-irishman-review.html",
        film: "The Irishman",
        winner: !1
      },
      {
        name: "Joker",
        image: "100000006748416",
        review: "https://www.nytimes.com/2019/10/03/movies/joker-review.html",
        film: "Joker",
        winner: !1
      },
      {
        name: "The Lighthouse",
        image: null,
        review:
          "https://www.nytimes.com/2019/10/16/movies/the-lighthouse-review.html",
        film: "The Lighthouse",
        winner: !1
      },
      {
        name: "Once Upon a Time … in Hollywood",
        image: "100000006913809",
        review:
          "https://www.nytimes.com/2019/07/24/movies/once-upon-a-time-in-hollywood-review.html",
        film: "Once Upon a Time … in Hollywood",
        winner: !1
      }
    ]
  },
  {
    title: "Costume Design",
    nominees: [
      {
        name: "The Irishman",
        image: "100000006739258",
        review:
          "https://www.nytimes.com/2019/09/27/movies/the-irishman-review.html",
        film: "The Irishman",
        winner: !1
      },
      {
        name: "Jojo Rabbit",
        image: "100000006774340",
        review:
          "https://www.nytimes.com/2019/10/17/movies/jojo-rabbit-review.html",
        film: "Jojo Rabbit",
        winner: !1
      },
      {
        name: "Joker",
        image: "100000006748416",
        review: "https://www.nytimes.com/2019/10/03/movies/joker-review.html",
        film: "Joker",
        winner: !1
      },
      {
        name: "Little Women",
        image: "100000006890528",
        review:
          "https://www.nytimes.com/2019/12/23/movies/little-women-review.html",
        film: "Little Women",
        winner: !1
      },
      {
        name: "Once Upon a Time … in Hollywood",
        image: "100000006913809",
        review:
          "https://www.nytimes.com/2019/07/24/movies/once-upon-a-time-in-hollywood-review.html",
        film: "Once Upon a Time … in Hollywood",
        winner: !1
      }
    ]
  },
  {
    title: "Makeup",
    nominees: [
      {
        name: "1917",
        image: "100000006890884",
        review: null,
        film: "1917",
        winner: !1
      },
      {
        name: "Bombshell",
        image: "100000006870606",
        review:
          "https://www.nytimes.com/2019/12/12/movies/bombshell-review.html",
        film: "Bombshell",
        winner: !1
      },
      {
        name: "Joker",
        image: "100000006748416",
        review: "https://www.nytimes.com/2019/10/03/movies/joker-review.html",
        film: "Joker",
        winner: !1
      },
      {
        name: "Judy",
        image: null,
        review: "https://www.nytimes.com/2019/09/25/movies/judy-review.html",
        film: "Judy",
        winner: !1
      },
      {
        name: "Maleficent: Mistress of Evil",
        image: null,
        review: null,
        film: "Maleficent: Mistress of Evil",
        winner: !1
      }
    ]
  },
  {
    title: "Documentary Feature",
    nominees: [
      {
        name: "American Factory",
        image: null,
        review:
          "https://www.nytimes.com/2019/08/20/movies/american-factory-review.html",
        film: "American Factory",
        winner: !1
      },
      {
        name: "The Cave",
        image: null,
        review:
          "https://www.nytimes.com/2019/10/17/movies/the-cave-review.html",
        film: "The Cave",
        winner: !1
      },
      {
        name: "The Edge of Democracy",
        image: null,
        review:
          "https://www.nytimes.com/2019/06/18/movies/edge-of-democracy-review.html",
        film: "The Edge of Democracy",
        winner: !1
      },
      {
        name: "For Sama",
        image: null,
        review:
          "https://www.nytimes.com/2019/07/25/movies/for-sama-review.html",
        film: "For Sama",
        winner: !1
      },
      {
        name: "Honeyland",
        image: null,
        review:
          "https://www.nytimes.com/2019/07/25/movies/honeyland-review.html",
        film: "Honeyland",
        winner: !1
      }
    ]
  },
  {
    title: "Sound Mixing",
    nominees: [
      {
        name: "1917",
        image: "100000006890884",
        review: "https://www.nytimes.com/2019/12/24/movies/1917-review.html",
        film: "1917",
        winner: !1
      },
      {
        name: "Ad Astra",
        image: "",
        review: "",
        film: "Ad Astra",
        winner: !1
      },
      {
        name: "Ford v Ferrari",
        image: "100000006825720",
        review:
          "https://www.nytimes.com/2019/11/14/movies/ford-v-ferrari-review.html",
        film: "Ford v Ferrari",
        winner: !1
      },
      {
        name: "Joker",
        image: "100000006748416",
        review: "https://www.nytimes.com/2019/10/03/movies/joker-review.html",
        film: "Joker",
        winner: !1
      },
      {
        name: "Once Upon a Time … in Hollywood",
        image: "100000006913809",
        review:
          "https://www.nytimes.com/2019/07/24/movies/once-upon-a-time-in-hollywood-review.html",
        film: "Once Upon a Time … in Hollywood",
        winner: !1
      }
    ]
  }
]

export async function createNoms() {
  for (let c = 0; c < nominees.length; c++) {
    const category = nominees[c].title
    const noms = nominees[c].nominees
    for (let n = 0; n < noms.length; n++) {
      const nom = noms[n]
      const dbNominee = new Nominee({ name: nom.name, film: nom.film })

      try {
        const cat = await Category.findOne({
          where: { title: category }
        })

        if (!cat) {
          throw new Error("There is no matching category!")
        }

        if (nom.image) {
          const imageId = parseInt(nom.image, 10)
          const imageData = images[imageId]
          const crop = imageData.crops.find(crop => crop.type === 'verticalTwoByThree735')
          if (!crop) {
            throw new Error('Missing crop for nom')
          }
          const url = imageData.host + crop.content
          dbNominee.imageURL = url
        }
        dbNominee.categoryId = cat.id
        await dbNominee.save()
      } catch (err) {
        console.log(err)
      }
    }
  }
}
