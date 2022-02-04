export interface IChampion {
  _id: string,
  key: string,
  name: string
  title: string
  image: any, // image obj
  tags: string[],
  partype: string,
  stats: any, // stats obj
  spells: any[], // spell obj arr
  passive: any // passive obj / spell obj
}
