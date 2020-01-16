import { Category } from "../db"

const categories = [
  { title: "Best Picture", value: 10, winner: null },
  { title: "Director", value: 8, winner: null },
  { title: "Actor in a Leading Role", value: 8, winner: null },
  { title: "Actress in a Leading Role", value: 8, winner: null },
  { title: "Actor in a Supporting Role", value: 6, winner: null },
  { title: "Actress in a Supporting Role", value: 6, winner: null },
  { title: "Original Screenplay", value: 8, winner: null },
  { title: "Adapted Screenplay", value: 8, winner: null },
  { title: "International Feature", value: 4, winner: null },
  { title: "Animated Feature", value: 4, winner: null },
  { title: "Sound Editing", value: 2, winner: null },
  { title: "Visual Effects", value: 2, winner: null },
  { title: "Film Editing", value: 2, winner: null },
  { title: "Short Film, Animated", value: 2, winner: null },
  { title: "Short Film, Live Action", value: 2, winner: null },
  { title: "Documentary Short Subject", value: 2, winner: null },
  { title: "Original Score", value: 2, winner: null },
  { title: "Original Song", value: 2, winner: null },
  { title: "Production Design", value: 2, winner: null },
  { title: "Cinematography", value: 3, winner: null },
  { title: "Costume Design", value: 3, winner: null },
  { title: "Makeup", value: 3, winner: null },
  { title: "Documentary Feature", value: 3, winner: null },
  { title: "Sound Mixing", value: 2, winner: null }
]

export async function createCategories() {
  for (let i = 0; i < categories.length; i++) {
    const category = await new Category(categories[i])
    console.log(category)
    await category.save()
  }
}

//
