
export type TCategory = 'action' | 'terror' | 'drama' | 'fantasy'

export interface IMovie {
    title:          string,
    description:    string,
    price:          number,
    category:       TCategory,
    release:        string,
    image:          string,
    premium:        boolean,
    duration:       string,
    seasons:        number,
}