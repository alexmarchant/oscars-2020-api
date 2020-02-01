import { Category } from '../db'

const categories = [
  { title: 'Best Picture', value: 10, winner: 999 },
  { title: 'Director', value: 8, winner: 999 },
  { title: 'Actor in a Leading Role', value: 8, winner: 999 },
  { title: 'Actress in a Leading Role', value: 8, winner: 999 },
  { title: 'Actor in a Supporting Role', value: 6, winner: 999 },
  { title: 'Actress in a Supporting Role', value: 6, winner: 999 },
  { title: 'Original Screenplay', value: 8, winner: 999 },
  { title: 'Adapted Screenplay', value: 8, winner: 999 },
  { title: 'International Feature', value: 4, winner: 999 },
  { title: 'Animated Feature', value: 4, winner: 999 },
  { title: 'Sound Editing', value: 2, winner: 999 },
  { title: 'Visual Effects', value: 2, winner: 999 },
  { title: 'Film Editing', value: 2, winner: 999 },
  { title: 'Short Film, Animated', value: 2, winner: 999 },
  { title: 'Short Film, Live Action', value: 2, winner: 999 },
  { title: 'Documentary Short Subject', value: 2, winner: 999 },
  { title: 'Original Score', value: 2, winner: 999 },
  { title: 'Original Song', value: 2, winner: 999 },
  { title: 'Production Design', value: 2, winner: 999 },
  { title: 'Cinematography', value: 3, winner: 999 },
  { title: 'Costume Design', value: 3, winner: 999 },
  { title: 'Makeup', value: 3, winner: 999 },
  { title: 'Documentary Feature', value: 3, winner: 999 },
  { title: 'Sound Mixing', value: 2, winner: 999 },
]

export async function createCategories() {
  for (let i = 0; i < categories.length; i++) {
    const category = await new Category(categories[i])
    await category.save()
  }
}

//
